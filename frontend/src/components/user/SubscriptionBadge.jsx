import React, { useContext, useEffect, useState } from 'react';
import { getSubscriptionStatus } from '../../api/subscriptionapi'; // Import the correct API function
import { UserContext } from '../../context/UserContext'; // Import the correct UserContext

const SubscriptionBadge = () => {
  const { user } = useContext(UserContext); // Accessing authenticated user data from context
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        if (user) {
          // Fetch subscription status
          const data = await getSubscriptionStatus();
          setSubscription(data); // Set subscription data in state
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
        setSubscription(null); // Reset subscription state on error
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchSubscription();
  }, [user]); // Dependency array ensures this effect runs when user context changes

  // Display a loading state while fetching subscription data
  if (loading) return <div>Loading subscription status...</div>;

  // Render nothing if user is not authenticated or no subscription data is found
  if (!subscription) return null;

  return (
    <div className="subscription-badge">
      {subscription.active ? (
        <span className="badge active">
          {subscription.type} Subscription Active
        </span>
      ) : (
        <span className="badge expired">Subscription Expired</span>
      )}
    </div>
  );
};

export default SubscriptionBadge;
