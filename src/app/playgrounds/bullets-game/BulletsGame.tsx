import type { FunctionComponent } from "react";
import type {
  BulletsGameConfigurationType,
  BulletsGameType,
} from "./configuration";

import { BulletsOverview } from "@/components/BulletsOverview";
import { useEffect, useMemo, useState } from "react";
import {
  INITIAL_NB_BULLETS,
  NB_BULLETS_BY_LEVEL,
  generateRandomBullets,
} from "./configuration";

type BulletsGameProps = {
  level: BulletsGameType["level"];
  handleEndGame: ({
    score,
    configuration,
  }: {
    score: number;
    configuration: BulletsGameConfigurationType;
  }) => void;
};

const getMemorizationTimeFromLevel = (
  level: BulletsGameType["level"]
): number => {
  return {
    easy: 8,
    medium: 6,
    hard: 4,
  }[level];
};

const getGameConfigurationFromLevel = (nbBulletsByLevel: number) => {
  const activeBullets = generateRandomBullets(
    INITIAL_NB_BULLETS,
    nbBulletsByLevel
  );

  return {
    nbBullets: INITIAL_NB_BULLETS,
    activeBullets,
    disabledBullets: generateRandomBullets(
      INITIAL_NB_BULLETS,
      nbBulletsByLevel * 3,
      activeBullets
    ),
  };
};

export const BulletsGame: FunctionComponent<BulletsGameProps> = ({
  level,
  handleEndGame,
}) => {
  const gameConfiguration = useMemo(
    () => getGameConfigurationFromLevel(NB_BULLETS_BY_LEVEL[level]),
    [level]
  );
  const memorizationTimeFromLevel = getMemorizationTimeFromLevel(level);
  const [game, setGame] =
    useState<BulletsGameConfigurationType>(gameConfiguration);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState<number | null>(
    memorizationTimeFromLevel
  );
  const isGameStarted = counter === null;

  useEffect(() => {
    if (counter === null) return;

    const intervalCounter = setInterval(() => {
      if (counter <= 0) {
        setCounter(null);
        setGame({
          ...game,
          activeBullets: [],
          disabledBullets: [],
        });
      } else setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(intervalCounter);
  }, [counter, game]);

  const handleBulletClick = (key: number) => {
    if (
      gameConfiguration.activeBullets.includes(key) &&
      !game.activeBullets.includes(key)
    ) {
      const nextActiveBullets = [...game.activeBullets, key];
      setGame({
        ...game,
        activeBullets: nextActiveBullets,
      });
      const nextScore = score + 5;
      setScore(nextScore);

      if (gameConfiguration.activeBullets.length === nextActiveBullets.length) {
        handleEndGame({
          score: nextScore,
          configuration: gameConfiguration,
        });
      }
    } else if (
      gameConfiguration.disabledBullets.includes(key) &&
      !game.disabledBullets.includes(key)
    ) {
      const nextDisabledBullets = [...game.disabledBullets, key];
      setGame({
        ...game,
        disabledBullets: nextDisabledBullets,
      });
      const nextScore = score - 10;
      setScore(nextScore);
    } else setScore(score - 1);
  };

  return (
    <BulletsOverview
      nbBullets={game.nbBullets}
      activeBullets={game.activeBullets}
      disabledBullets={game.disabledBullets}
      isActionable={isGameStarted}
      handleBulletClick={handleBulletClick}
      className="w-72 md:w-96 mx-auto"
    >
      {!isGameStarted && (
        <div className="flex justify-between mt-4">
          <p>Time to memorize : {counter} seconds</p>
        </div>
      )}

      {isGameStarted && (
        <>
          {/* <pre>{JSON.stringify(gameConfiguration, null, 2)}</pre> */}
          <div className="flex justify-between mt-4">
            <p className="text-md font-semibold">Level: {level}</p>
            <p className="text-md font-semibold">Score: {score}</p>
          </div>
        </>
      )}
    </BulletsOverview>
  );
};
