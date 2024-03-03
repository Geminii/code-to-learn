"use client";

import type { FunctionComponent } from "react";

import { CodeBlock } from "@/components/CodeBlock";
import { DotBackground } from "@/components/DotBackground";
import { GradientText } from "@/components/GradientText";
import { Button } from "@/components/ui/Button";
import { codeToHtml } from "@/lib/shiki";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ArrowRight, Plus } from "react-feather";

type GradientGeneratorProps = {};

type Palette = {
  name: string;
  colors: string[];
};

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

export const GradientGenerator: FunctionComponent<
  GradientGeneratorProps
> = ({}) => {
  const [currentGradient, setCurrentGradient] = useState(COLORS_PALETTE[1]);
  const [angle, setAngle] = useState(45);
  const [generatedGradient, setGeneratedGradient] = useState("");
  const [generatedBackground, setGeneratedBackground] = useState({});

  const code = `
background-image: linear-gradient(
  ${angle}deg,
  ${currentGradient.colors.join(",\n  ")}
);`.trim();

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setGeneratedBackground({
          backgroundImage: `linear-gradient(45deg, ${currentGradient.colors.join(
            ", "
          )})`,
        }),
      50
    );

    return () => clearTimeout(timeout);
  }, [currentGradient, angle]);

  useEffect(() => {
    const generateCodeGradient = async () => {
      const generatedHtml = await codeToHtml({ code, language: "css" });
      setGeneratedGradient(generatedHtml);
    };
    const timeout = setTimeout(generateCodeGradient, 50);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <DotBackground className="ring-4 ring-white rounded-sm p-8 mt-4">
      <div className="grid gap-4 grid-cols-3">
        <div className="row-start-1 row-end-3 flex flex-col gap-4 items-center">
          <p className="text-xl mb-4">Pick a custom color 👇</p>
          <div className="grid gap-4 grid-cols-2">
            {currentGradient.colors.map((color, index) => (
              <input
                key={index}
                type="color"
                value={color}
                onChange={(e) => {
                  setCurrentGradient((prev) => {
                    const newColors = [...prev.colors];
                    newColors[index] = e.target.value;
                    return { ...prev, colors: newColors };
                  });
                }}
                className="w-24 h-24 mx-auto focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-slate-50 p-1"
              />
            ))}
          </div>
          <p className="text-base text-secondary">
            - or predefined combination -
          </p>
          <div className="grid gap-6 grid-cols-2">
            {COLORS_PALETTE.map(({ name, colors }) => (
              <Button
                key={name}
                onClick={() => {
                  setCurrentGradient(
                    COLORS_PALETTE.find((palette) => palette.name === name) ||
                      currentGradient
                  );
                }}
                variant={
                  currentGradient.name === name ? "default" : "secondary"
                }
              >
                {name}
              </Button>
            ))}
          </div>
          <button
            onClick={() => {
              const randomPalette = Math.floor(
                Math.random() * COLORS_PALETTE.length
              );
              setCurrentGradient(COLORS_PALETTE[randomPalette]);
            }}
          >
            Random
          </button>
        </div>

        <div className="row-start-1 row-end-2 col-start-2 col-end-3 flex flex-col gap-4 items-center">
          <p className="text-xl mb-4">Choose an orientation 👇</p>
          <div className="flex justify-between w-full mb-4 px-6">
            <span>Angle:</span>
            <span className="text-primary font-bold">{angle}deg</span>
          </div>
          <div className="grid gap-1 grid-cols-5 grid-rows-5">
            <div className="flex items-center justify-center row-start-3 row-end-4 col-start-3 col-end-4">
              <Plus className="w-8 h-8 text-gray-400/40" />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="col-start-3 col-end-4"
              onClick={() => setAngle(270)}
            >
              <ArrowRight
                className={cn("w-8 h-8 -rotate-90", {
                  "text-primary": angle === 270,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-2 row-end-3 col-start-4 col-end-5"
              onClick={() => setAngle(315)}
            >
              <ArrowRight
                className={cn("w-8 h-8 -rotate-45", {
                  "text-primary": angle === 315,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-3 row-end-4 col-start-5 col-end-6"
              onClick={() => setAngle(0)}
            >
              <ArrowRight
                className={cn("w-8 h-8", {
                  "text-primary": angle === 0,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-4 row-end-5 col-start-4 col-end-5"
              onClick={() => setAngle(45)}
            >
              <ArrowRight
                className={cn("w-8 h-8 rotate-45", {
                  "text-primary": angle === 45,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-5 row-end-6 col-start-3 col-end-4"
              onClick={() => setAngle(90)}
            >
              <ArrowRight
                className={cn("w-8 h-8 rotate-90", {
                  "text-primary": angle === 90,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-4 row-end-5 col-start-2 col-end-3"
              onClick={() => setAngle(135)}
            >
              <ArrowRight
                className={cn("w-8 h-8 rotate-[135deg]", {
                  "text-primary": angle === 135,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-3 row-end-4 col-start-1 col-end-2"
              onClick={() => setAngle(180)}
            >
              <ArrowRight
                className={cn("w-8 h-8 rotate-180", {
                  "text-primary": angle === 180,
                })}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="row-start-2 row-end-3 col-start-2 col-end-3"
              onClick={() => setAngle(225)}
            >
              <ArrowRight
                className={cn("w-8 h-8 -rotate-[135deg]", {
                  "text-primary": angle === 225,
                })}
              />
            </Button>
          </div>
        </div>

        <div className="row-start-1 row-end-2 col-start-3 col-end-4 flex flex-col gap-4 items-center">
          <p className="text-xl mb-4">Enjoy the preview ✨</p>
          <div className="w-full h-60 rounded-md" style={generatedBackground} />
        </div>

        <div className="relative row-start-2 row-end-3 col-start-2 col-end-4">
          <div className="absolute top-6 right-7 flex items-center gap-2">
            <GradientText className="text-xl font-bold">
              Copy your shiny result
            </GradientText>
            <span>👇</span>
          </div>

          <CodeBlock language="css" copyCode={code} html={generatedGradient} />
        </div>
      </div>
    </DotBackground>
  );
};
