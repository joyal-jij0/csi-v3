"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import eventData from "@/data/eventData";

export default function HeroParallaxDemo() {

  return <HeroParallax products={eventData} />;
}

