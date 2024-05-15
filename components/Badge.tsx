import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

export function Badge({ priority }: { priority: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(`inline-block w-4 h-4 rounded-full`, {
              "bg-blue-500": priority === "low",
              "bg-yellow-500": priority === "medium",
              "bg-red-500": priority === "high",
            })}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
