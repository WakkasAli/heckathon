import { loadStripe } from "@stripe/stripe-js";

let stripePromise: any;

const getStripe = () => {
  if(!stripePromise) {
      stripePromise = loadStripe("pk_test_51JMcJ3L0iWxuD9W8j5twsUg19q6Pr9P9XfKQI83TjmEtxLlZVKlbRsB5s6u4tz848sEGMTrEDqLlLdVzs5S9EhBH00gXRK0UfD");
  }
console.log(stripePromise)
  return stripePromise;
}

export default getStripe