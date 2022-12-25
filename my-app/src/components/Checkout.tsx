import { Elements, useStripe, PaymentElement, useElements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51MIKYTLlbExMMygnQNzjQmhGDZ7esjSxfZimoJ6i8iwWzRI4cX3HIuATrVdhTx4uEHwo7kFz5VuoMCxQGQUsSAVY00TO7msJdM");

const Checkout = ({cart, token, clientSecret}: any) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="m-8">
          <PaymentElement />
        </div>
        <button className="bg-blue-600 py-2 px-4 m-8 rounded text-white" disabled={!stripe}>Submit</button>
      </form>
  )

}

export default Checkout;
