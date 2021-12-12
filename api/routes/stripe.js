const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")('sk_test_51JyfdCSEgompBMfoV9dJuQ548Ek7BTyIMeXRsUoo7tN3uqHqKM6S5T5Q1iwKoQi4x434vg6IRbXpxKpLEym74l2f003Tmrin6G');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;