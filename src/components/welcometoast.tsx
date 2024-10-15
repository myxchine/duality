"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/index";
export function WelcomeToast() {
  useEffect(() => {
    toast.custom(
      () => (
        <div className="bg-foreground text-background p-4 rounded-lg flex flex-col gap-2">
          <p>Welcome to MYXIC</p>
          <p>You probably can't afford our sh*t but have fun looking at it. </p>
          <div className="flex flex-row gap-2 w-full">
            <button
              className="mt-2 bg-foreground text-background border border-background hover:bg-background hover:text-foreground p-2 px-4  font-geistMono uppercase  w-full"
              onClick={() => {
                toast.dismiss("welcome-toast");
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      ),
      {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
      }
    );
  }, []);

  return null;
}
