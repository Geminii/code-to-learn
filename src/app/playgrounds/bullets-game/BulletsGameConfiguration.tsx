"use client";
import type { FunctionComponent, PropsWithChildren } from "react";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/label";
import { firstLetterToUpperCase } from "@/utils/format";
import { INITIAL_LEVELS, Level } from "./configuration";

export type HandleConfigurationType = {
  level: Level;
};

type PresentationBulletsGameProps = PropsWithChildren<{
  handleConfigurationGame: ({ level }: HandleConfigurationType) => void;
}>;

export const BulletsGameConfiguration: FunctionComponent<
  PresentationBulletsGameProps
> = ({ handleConfigurationGame }) => {
  const [level, setLevel] = useState<Level>("easy");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleConfigurationGame({
      level,
    });
  };

  return (
    <div className="w-3/4 flex justify-between mt-6 mx-auto">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Configuration</p>
        <form
          onSubmit={onSubmit}
          className="flex justify-center items-center gap-x-12"
        >
          <div>
            <Label>Level:</Label>

            <div className="flex flex-col gap-4 mt-2">
              {INITIAL_LEVELS.map((initialLevel) => (
                <div key={initialLevel} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={initialLevel}
                    name="level"
                    value={initialLevel}
                    checked={level === initialLevel}
                    onChange={() => setLevel(initialLevel)}
                  />
                  <Label htmlFor={initialLevel}>
                    {firstLetterToUpperCase(initialLevel)}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button>Start</Button>
          </div>
        </form>
      </div>

      {/* TODO: Display history of a game */}
      {/* <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Latest games:</p>
          <Button variant="outline">04/03/2024 10h23 - 45</Button>
          <Button variant="outline">02/03/2024 09h23 - 56</Button>
          <Button variant="outline">01/03/2024 08h23 - 22</Button>
        </div> */}
    </div>
  );
};
