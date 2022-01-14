const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51KDi8EDiNRbVvHhBV5uunCpjX0sffE2RA8WCpBO2CkcPicwheNyovoIMOluTPiys7yWwss3H3NOCx9wRTIy5VaCh00JC1j62lD'
);
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

exports.api = functions.https.onRequest(app);
 
// http://localhost:5001/fir-46c76/us-central1/api