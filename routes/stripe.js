const apiRouter = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

apiRouter.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 2000,
          product_data: {
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://example.com/t-shirt.png'],
          },
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:5173/?success=true`,
    cancel_url: `http://localhost:5173/?canceled=true`,
  });

  res.send(session.url);
});

module.exports = apiRouter;
