import React, { useEffect, useRef } from "react";

interface Coordinates {
    x: number;
    y: number;
}

interface CircleElement extends HTMLDivElement {
    x: number;
    y: number;
}

class CursorTrailCore {
    private coords: Coordinates = { x: 0, y: 0 };
    private circles: CircleElement[] = [];
    private colors: string[] = [
        "#e0c3fc",
        "#d4a0f7",
        "#c77dff",
        "#b85cff",
        "#a855f7",
        "#9333ea",
        "#8b1aff",
        "#7c3aed",
        "#6d28d9",
        "#5b21b6",
        "#4c1d95",
        "#3730a3",
        "#312e81",
        "#2d1b69",
        "#1e1b4b",
        "#1a1a2e",
        "#16213e",
        "#0f0f23",
        "#0d0d21",
        "#0a0a1e",
        "#07071a",
        "#000000",
    ];
    private animationId: number | null = null;

    constructor(numberOfCircles: number = 20, customColors?: string[]) {
        if (customColors) {
            this.colors = customColors;
        }
        this.createCircles(numberOfCircles);
        this.initializeCircles();
        this.bindEvents();
        this.startAnimation();
    }

    private createCircles(count: number): void {
        for (let i = 0; i < count; i++) {
            const circle = document.createElement("div") as CircleElement;
            circle.classList.add("cursor-trail-circle");
            circle.x = 0;
            circle.y = 0;

            Object.assign(circle.style, {
                height: "24px",
                width: "24px",
                borderRadius: "24px",
                backgroundColor: this.colors[i % this.colors.length],
                position: "fixed",
                top: "0px",
                left: "0px",
                pointerEvents: "none",
                zIndex: "99999999",
                transition: "opacity 0.3s ease",
            });

            document.body.appendChild(circle);
            this.circles.push(circle);
        }
    }

    private initializeCircles(): void {
        this.circles.forEach((circle: CircleElement, index: number) => {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor =
                this.colors[index % this.colors.length];
        });
    }

    private bindEvents(): void {
        const handleMouseMove = (e: MouseEvent) => {
            this.coords.x = e.clientX;
            this.coords.y = e.clientY;
        };

        const handleMouseLeave = () => {
            this.circles.forEach((circle) => {
                circle.style.opacity = "0";
            });
        };

        const handleMouseEnter = () => {
            this.circles.forEach((circle) => {
                circle.style.opacity = "1";
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        this.cleanup = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }

    private cleanup: (() => void) | null = null;

    private animateCircles(): void {
        let x: number = this.coords.x;
        let y: number = this.coords.y;

        this.circles.forEach((circle: CircleElement, index: number) => {
            circle.style.left = `${x - 12}px`;
            circle.style.top = `${y - 12}px`;

            const scale: number =
                (this.circles.length - index) / this.circles.length;
            circle.style.transform = `scale(${scale})`;

            circle.x = x;
            circle.y = y;

            const nextCircle: CircleElement =
                this.circles[index + 1] || this.circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        this.animationId = requestAnimationFrame(() => this.animateCircles());
    }

    private startAnimation(): void {
        this.animateCircles();
    }

    public destroy(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        this.circles.forEach((circle) => {
            if (document.body.contains(circle)) {
                document.body.removeChild(circle);
            }
        });
        this.circles = [];

        if (this.cleanup) {
            this.cleanup();
        }
    }
}

interface CursorTrailProps {
    numberOfCircles?: number;
    colors?: string[];
    disabled?: boolean;
}

const CursorTrail: React.FC<CursorTrailProps> = ({
    numberOfCircles = 20,
    colors,
    disabled = false,
}) => {
    const trailRef = useRef<CursorTrailCore | null>(null);

    useEffect(() => {
        if (disabled) return;

        document.body.style.cursor = "none";
        document.documentElement.style.cursor = "none";

        const style = document.createElement("style");
        style.innerHTML = `
      *, *:before, *:after {
        cursor: none !important;
      }
      a, button, input, textarea, select {
        cursor: none !important;
      }
      [role="button"], [onclick] {
        cursor: none !important;
      }
    `;
        document.head.appendChild(style);

        trailRef.current = new CursorTrailCore(numberOfCircles, colors);

        return () => {
            if (trailRef.current) {
                trailRef.current.destroy();
                trailRef.current = null;
            }

            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";

            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, [numberOfCircles, colors, disabled]);

    useEffect(() => {
        if (disabled && trailRef.current) {
            trailRef.current.destroy();
            trailRef.current = null;

            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";
        } else if (!disabled && !trailRef.current) {
            document.body.style.cursor = "none";
            document.documentElement.style.cursor = "none";

            trailRef.current = new CursorTrailCore(numberOfCircles, colors);
        }
    }, [disabled, numberOfCircles, colors]);

    return null;
};

export default CursorTrail;
