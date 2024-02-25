"use client";

import type { FunctionComponent } from "react";

import { useState } from "react";

type GradientGeneratorProps = {};

type Palette = {
  name: string;
  colors: string[];
};

export const GradientTest: FunctionComponent<GradientGeneratorProps> = ({}) => {
  const COLORS_PALETTE: Palette[] = [
    {
      name: "Splash",
      colors: ["#05445E", "#189AB4", "#75E6DA", "#D4F1F4"],
    },
    {
      name: "Sunny",
      colors: ["#F8EA8C", "#A4E8E0", "#4CD7D0", "#E1C340"],
    },
    {
      name: "Royal",
      colors: ["#E4D4C8", "#D0B49F", "#A47551", "#523A28"],
    },
    {
      name: "Dreamy",
      colors: ["#FBE7C6", "#B4F8C8", "#A0E7E5", "#FFAEBC"],
    },
  ];

  const getRandomPalette = () => {
    return Math.floor(Math.random() * COLORS_PALETTE.length);
  };
  const [currentGradient, setCurrentGradient] = useState(() => {
    const randomPalette = getRandomPalette();
    return COLORS_PALETTE[randomPalette];
  });

  return <p>Hello world !</p>;
};

export default GradientTest;
