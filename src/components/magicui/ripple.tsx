import React, { CSSProperties } from "react";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}

const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
}: RippleProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center ">
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
                const borderOpacity = 1 + i * 0.05; // Increase opacity for a more noticeable effect

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-white/[${opacity}] shadow-xl border ${borderStyle}`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                borderWidth: "5px",
                                borderColor: `rgba(200, 055,200, ${borderOpacity})`, // White with varying opacity
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)",
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";

export default Ripple;
