import React from 'react';

const PaymentsGateway = ({ amount = 100, orderId = '', user = {} }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_YourKeyHere', // Replace with your Razorpay test key
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Janata Bazaar',
      description: 'Secure Payment',
      image: '/logo.svg', // Your logo here
      order_id: orderId, // Optional: Generate from your backend
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // You can redirect or save details here
      },
      prefill: {
        name: user.name || 'Janata User',
        email: user.email || 'user@example.com',
        contact: user.phone || '9999999999',
      },
      notes: {
        source: 'Janata Bazaar Payment',
      },
      theme: {
        color: '#f97316', // Orange
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mx-4 md:mx-16 my-10 shadow">
      <h2 className="text-xl font-semibold text-orange-700 mb-2">Complete Your Payment</h2>
      <p className="text-gray-700 mb-4">Click below to securely pay ₹{amount} using Razorpay.</p>
      <button
        onClick={handlePayment}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition"
      >
        Pay ₹{amount} Now
      </button>
    </div>
  );
};

export default PaymentsGateway;

