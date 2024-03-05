import type { FunctionComponent, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { FloatingText } from "./FloatingText";

export type BulletsConfiguration = {
  nbBullets?: number;
  activeBullets?: number[];
  disabledBullets?: number[];
  isActionable?: boolean;
  handleBulletClick?: (key: number) => void;
};

type BulletsOverviewProps = PropsWithChildren<
  {
    className?: string;
  } & BulletsConfiguration
>;

export const BulletsOverview: FunctionComponent<BulletsOverviewProps> = ({
  className,
  nbBullets = 100,
  activeBullets = [],
  disabledBullets = [],
  isActionable = false,
  handleBulletClick = () => {},
  children,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.getAttribute("data-key");
    if (key) {
      handleBulletClick(Number(key));
    }
  };

  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap justify-around gap-4">
        {Array.from({ length: nbBullets }).map((_, i) =>
          (() => {
            const isButton =
              isActionable &&
              !activeBullets.includes(i) &&
              !disabledBullets.includes(i);

            {
              return isButton ? (
                <button
                  key={i}
                  data-key={i}
                  type="button"
                  onClick={handleClick}
                  className={cn("w-4 h-4 rounded-full bg-slate-600", {
                    "bg-green-500": activeBullets.includes(i),
                    "bg-red-500": disabledBullets.includes(i),
                  })}
                />
              ) : (
                <div
                  key={i}
                  data-key={i}
                  className={cn("relative w-4 h-4 rounded-full bg-slate-600", {
                    "bg-green-500": activeBullets.includes(i),
                    "bg-red-500": disabledBullets.includes(i),
                  })}
                >
                  {isActionable && activeBullets.includes(i) && (
                    <FloatingText className="absolute -top-1 -right-2 text-xs font-semibold">
                      +5
                    </FloatingText>
                  )}
                  {isActionable && disabledBullets.includes(i) && (
                    <FloatingText className="absolute -top-1 -right-2 text-xs font-semibold">
                      -10
                    </FloatingText>
                  )}
                </div>
              );
            }
          })()
        )}
      </div>
      {children}
    </div>
  );
};
