const opennode = require('opennode');
opennode.setCredentials('411cae1e-76bb-41f6-8a48-9baf532619bc'); // OpenNode API Key

export const createCharge = async (total, cartItems, currentUser) => {
  const charge = {
    description:
      `${currentUser.displayName}` +
      ' - ' +
      `${currentUser.address}` +
      ' - ' +
      `${cartItems.map((item) => '(' + item.quantity + 'x) ' + item.name)}`,
    amount: total,
    // currency: 'USD', //  UNCOMMENT TO GET TOTAL IN USD NOT SATS
    customer_name: `${currentUser.displayName}`,
    customer_email: `${currentUser.email}`,
    notif_email: `${currentUser.email}`,
    success_url: 'https://cwrn-clothing-2022.herokuapp.com/checkout',
    order_id: `${currentUser.address}`,
  };

  try {
    const response = await opennode.createCharge(charge);
    console.log(response);
    window.open(`https://checkout.opennode.com/${response.id}?ln=1`, '_self').focus();
  } catch (error) {
    console.log('error creating charge', error.message);
  }
};
