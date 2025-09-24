"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const NOTIFICATION_DISMISSED_KEY = "analytics-notification-dismissed";

export function AnalyticsNotification() {
  const { toast } = useToast();

  useEffect(() => {
    const isDismissed = localStorage.getItem(NOTIFICATION_DISMISSED_KEY);

    if (!isDismissed) {
      const { dismiss } = toast({
        title: "Website Analytics",
        description: "This site collects anonymous analytics to improve the user experience. Your privacy is respected.",
        duration: Infinity,
        action: (
          <Button
            onClick={() => {
              localStorage.setItem(NOTIFICATION_DISMISSED_KEY, "true");
              dismiss();
            }}
          >
            OK
          </Button>
        ),
        onOpenChange: (open) => {
          if (!open) {
            localStorage.setItem(NOTIFICATION_DISMISSED_KEY, "true");
          }
        },
      });
    }
  }, [toast]);

  return null;
}
