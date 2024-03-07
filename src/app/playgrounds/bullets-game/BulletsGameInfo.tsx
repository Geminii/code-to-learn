"use client";
import type { FunctionComponent } from "react";
import type { BulletsGameType } from "./configuration";

import { Button } from "@/components/ui/Button";

type BulletsArenaProps = {
  level: BulletsGameType["level"];
  score: BulletsGameType["score"];
  handleEndGame: (score: number) => void;
};

export const BulletsGameInfo: FunctionComponent<BulletsArenaProps> = ({
  level,
  score,
  handleEndGame,
}) => {
  return (
    <>
      <div className="flex justify-between mt-4">
        <p className="text-md font-semibold">Level: {level}</p>
        <p className="text-md font-semibold">Score: {score}</p>
      </div>

      <Button className="flex mx-auto" onClick={() => handleEndGame(score)}>
        End game
      </Button>
    </>
  );
};
