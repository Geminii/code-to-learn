import { BulletsOverview } from "@/components/BulletsOverview";
import { Button } from "@/components/ui/Button";
import type { FunctionComponent } from "react";
import type {
  BulletsGameConfigurationType,
  BulletsGameType,
} from "./configuration";

type BulletsGameEndedProps = {
  level: BulletsGameType["level"];
  score: BulletsGameType["score"];
  configuration?: BulletsGameConfigurationType;
  handleRetry: () => void;
};

export const BulletsGameResult: FunctionComponent<BulletsGameEndedProps> = ({
  level,
  score,
  configuration,
  handleRetry,
}) => {
  return (
    <BulletsOverview
      {...configuration}
      isActionable={false}
      className="w-72 md:w-96 mx-auto"
    >
      <div className="flex justify-between mt-4">
        <p className="text-md font-semibold">Level: {level}</p>
        <p className="text-md font-semibold">Score: {score}</p>
      </div>

      <div className="text-center text-xl mt-6">
        {score < 10 && <p>You can do better 😉</p>}
        {score >= 10 && <p>Congratulation 🎉</p>}
        <Button className="mt-2" onClick={handleRetry}>
          Retry
        </Button>
      </div>
    </BulletsOverview>
  );
};
