import stripePackage from  'stripe'
const stripe = stripePackage('sk_test_51OxQe8SCUzgxBymGJKcN3sPlQzbHjnxl66O0Zv9ULlkMQwWA1KbjHR86tGGTN2FwuxIJB09gtNclSdBjdtot28bh001Ujmv9tV')

// export const paymentController = async(req, res) => {
//     const {rate} = req.body;
//     console.log(rate);

//     // const lineItem = rate?.map((plan) => ({
//     //     price_data:{
//     //         currency:"inr",
//     //         product_data:{
//     //             name: plan.name,
//     //         },
//     //         unit_amount:  plan.price * 100, 
//     //     },
//     //     quantity:plan.qnty
//     // }))
//     const quantity = 25

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types:["card"],
//         line_items: [
//             {
//               price: "price_1OxZGbSCUzgxBymGJEhPsaCh",
//               quantity: quantity,
//             },
//           ],
//         // mode:"payment", 
//         mode:"subscription", 
//         success_url:"http://localhost:5000/success",
//         cancel_url:"http://localhost:5000/cancel"
//     });
//     console.log("session", session.id, session.url, session);

//     const sessionId = session.id;
//     console.log("sessionId ", sessionId);

//     res.json({url: session.url});
  
// }


export const paymentController = async(req, res) => {
  const { priceId, customerName, customerAddress } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // customer: {
      //   name: customerName,
      //   address: {
      //     line1: customerAddress, // Include additional address fields as needed
      //     // Add additional address fields if required by Stripe
      //   },
      // },
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'An error occurred while creating checkout session' });
  }
}