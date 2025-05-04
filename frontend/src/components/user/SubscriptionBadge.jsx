import React, { useContext, useEffect, useState } from 'react';
import axios from '../../utils/api'; // Axios instance to communicate with the backend
import { AuthContext } from '../../context/AuthContext'; // Authentication context to manage user data

const SubscriptionBadge = () => {
  const { user } = useContext(AuthContext);  // Accessing authenticated user data from context
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        if (user) {
          // Fetch the subscription data from the API (ensure the user is logged in)
          const response = await axios.get('/api/user/subscription', { withCredentials: true });
          setSubscription(response.data);  // Assuming the API response contains subscription data
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };

    fetchSubscription();
  }, [user]);  // Dependency array ensures this effect runs whenever user context changes

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
