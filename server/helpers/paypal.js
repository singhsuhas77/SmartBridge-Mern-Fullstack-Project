const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // or 'live' for production
  client_id: 'AfFQQ7wg_AfFFGs9mqmSGvdoLh5LME9j5GQ9W5wMnM0_j1dtS6KjTYb63d7UnDUK4w4KVDzvy_kuThBZ',
  client_secret: 'EGWEHgYluWNUPFB50S99g2NsmQyRujK9DrFlIFjxLmUEpPjlcBEMr6xIDVvh1Zb9bDF2EwbGWGlsi-kM'
});

module.exports = paypal;