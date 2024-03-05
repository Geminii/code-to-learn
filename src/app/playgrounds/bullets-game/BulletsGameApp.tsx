"use client";
import type { FunctionComponent } from "react";
import {
  BulletsGameConfigurationType,
  BulletsGameType,
  GameStatus,
  generateRandomBullets,
  INITIAL_NB_BULLETS,
} from "./configuration";

import { useState } from "react";

import { BulletsOverview } from "@/components/BulletsOverview";
import { GameTimer } from "@/components/GameTimer";
import { BulletsGame } from "./BulletsGame";
import { BulletsGameConfiguration } from "./BulletsGameConfiguration";
import { BulletsGameResult } from "./BulletsGameResult";

type BulletsGameProps = {};

export const BulletsGameApp: FunctionComponent<BulletsGameProps> = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("initial");
  const [game, setGame] = useState<BulletsGameType>({
    level: "easy",
    score: 0,
  });
  const configuration: BulletsGameConfigurationType = {
    nbBullets: INITIAL_NB_BULLETS,
    activeBullets: generateRandomBullets(
      INITIAL_NB_BULLETS,
      Math.round(INITIAL_NB_BULLETS / 2)
    ),
    disabledBullets: generateRandomBullets(
      INITIAL_NB_BULLETS,
      Math.round(INITIAL_NB_BULLETS / 3)
    ),
  };

  const handleEndGame = ({
    score,
    configuration,
  }: {
    score: number;
    configuration: BulletsGameConfigurationType;
  }) => {
    setGame({ ...game, score, configuration });
    setGameStatus("ended");
  };

  const handleRetry = () => {
    setGameStatus("initial");
    setGame({ ...game, score: 0 });
  };

  return (
    <div className="my-6">
      {gameStatus === "initial" && (
        <BulletsOverview
          {...configuration}
          isActionable={false}
          className="w-72 md:w-96 mx-auto"
        />
      )}

      {gameStatus === "started" && (
        <GameTimer
          countdown={3}
          onCountdownEnd={() => setGameStatus("playing")}
        />
      )}

      {gameStatus !== "started" && (
        <>
          {gameStatus === "initial" && (
            <BulletsGameConfiguration
              handleConfigurationGame={() => setGameStatus("started")}
            />
          )}

          {gameStatus === "playing" && (
            <BulletsGame level={game.level} handleEndGame={handleEndGame} />
          )}

          {gameStatus === "ended" && (
            <BulletsGameResult {...game} handleRetry={handleRetry} />
          )}
        </>
      )}
    </div>
  );
};

export default BulletsGameApp;
