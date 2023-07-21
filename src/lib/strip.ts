import { loadStripe } from "@stripe/stripe-js";

let stripePromise: any;

export const getStripe = () => {
  // check if there is any stripe instance
  
    stripePromise = loadStripe(process.env.NEXt_PUBLIC_STRIPE_PUBLIC_KEY!);
  
  return stripePromise;
};