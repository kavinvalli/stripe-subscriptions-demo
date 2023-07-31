"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { manageStripeSubscriptionAction } from "@/app/_actions/stripe";
import { Loader2 } from "lucide-react";

interface ManageUserSubscriptionButtonProps {
  userId: string;
  email: string;
  isCurrentPlan: boolean;
  isSubscribed: boolean;
  stripeCustomerId?: string | null;
  stripePriceId: string;
}

export function ManageUserSubscriptionButton({
  userId,
  email,
  isCurrentPlan,
  isSubscribed,
  stripeCustomerId,
  stripePriceId,
}: ManageUserSubscriptionButtonProps) {
  const [isPending, startTransition] = React.useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const session = await manageStripeSubscriptionAction({
          email,
          userId,
          isSubscribed,
          isCurrentPlan,
          stripeCustomerId,
          stripePriceId,
        });
        if (session) {
          window.location.href = session.url ?? "/dashboard/billing";
        }
      } catch (err) {
        console.error((err as Error).message);
        toast({ description: "Something went wrong, please try again later." });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isCurrentPlan ? "Manage Subscription" : "Subscribe"}
      </Button>
    </form>
  );
}
