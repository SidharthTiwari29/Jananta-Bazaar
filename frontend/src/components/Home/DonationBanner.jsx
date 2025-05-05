import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const DonationBanner = () => {
  return (
    <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mx-4 md:mx-12 mt-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <HeartHandshake className="text-yellow-600 w-10 h-10" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-800">
              Support the Needy & Elderly
            </h3>
            <p className="text-sm text-yellow-700">
              Your small act of kindness can make a big impact.
            </p>
          </div>
        </div>
        <Button variant="primary" size="md">
          Donate Now
        </Button>
      </div>
    </section>
  );
};

export default DonationBanner;
