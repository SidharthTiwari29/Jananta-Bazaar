import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Janata Bazaar. By using our platform, you agree to abide by the terms set forth below,
          governed by applicable laws of the Government of India. This includes but is not limited to laws
          under the Consumer Protection Act, the Information Technology Act, and relevant digital commerce policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Bidding Mechanism</h2>
        <p>
          Our bidding system is designed for consumer participation in price discovery and is not intended to
          function as a gambling or speculative activity. All bids are bound by fair-market logic and restricted
          to verified user accounts. Bid abuse, fraud, or algorithmic manipulation may result in account suspension.
        </p>
        <p className="mt-2">
          Janata Bazaar adheres to the principles of fair trade, ensuring bids remain within lawful and ethical bounds.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Lottery Participation</h2>
        <p>
          Our hourly lottery system is classified as a promotional consumer benefit and not a gambling scheme.
          Entry into lotteries is tied to purchase behavior and platform engagement. Winners are randomly chosen
          through a transparent and auditable process.
        </p>
        <p className="mt-2">
          We follow guidelines set forth in the Public Gambling Act, 1867, and its state-specific amendments,
          ensuring compliance and legality in all operational regions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Subscription Policy</h2>
        <p>
          Our ₹99/month subscription provides benefits including early lottery access, forecast-based shopping preferences,
          and reward boosters. The subscription does not constitute ownership, dividends, or shares in lottery or bidding outcomes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Refund & Cancellation</h2>
        <p>
          Subscription payments are non-refundable once processed. Any technical errors must be reported within 24 hours
          to qualify for a resolution. Product refunds follow our return policy displayed on respective product pages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data & Privacy</h2>
        <p>
          Janata Bazaar adheres to the Information Technology Act, 2000 and India’s Digital Personal Data Protection (DPDP) Act, 2023.
          We never sell personal data and utilize it strictly to improve our services. Data is stored securely and processed ethically.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
        <p>
          All disputes shall be governed by the laws of India. In the event of any dispute, jurisdiction will lie
          with the courts located in Bengaluru, Karnataka.
        </p>
      </section>

      <section>
        <p className="text-sm text-gray-600 mt-6">
          Last updated: May 4, 2025
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
