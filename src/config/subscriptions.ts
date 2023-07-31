export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  price: number;
}

export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "mobile",
    name: "Mobile",
    description:
      "Good video quality in SD (480p). Watch ad-free on any phone or tablet. Computer and TV not included. Download on 1 device.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_MOBILE_PRICE_ID ?? "",
    price: 149,
  },
  {
    id: "basic",
    name: "Basic",
    description:
      "Good video quality in HD (720). Watch ad-free on any phone, tablet, computer or TV. Download on 1 device.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID ?? "",
    price: 199,
  },
  {
    id: "standard",
    name: "Standard",
    description:
      "Great video quality in Full HD (1080p). Watch ad-free on any phone, tablet, computer or TV. Download on 2 devices.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_STANDARD_PRICE_ID ?? "",
    price: 499,
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "Great video quality in Ultra HD (4K) and HDR. Spatial audio available. Watch ad-free on any phone, tablet, computer or TV. Download on 6 devices.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID ?? "",
    price: 649,
  },
];
