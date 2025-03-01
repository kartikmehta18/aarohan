import React from 'react';
import { Link } from 'react-router-dom';

// TypeScript Props for CategoryLink
type CategoryLinkProps = {
  text: string;
  url: string;
  separator?: boolean;
};

// CategoryLink Component
const CategoryLink: React.FC<CategoryLinkProps> = ({ text, url, separator = true }) => (
  <span className="flex items-center space-x-1">
    <Link to={url} className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
      {text}
    </Link>
    {separator && <span className="text-gray-400">|</span>}
  </span>
);

// CategorySection Component
const CategorySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* Popular Categories */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            'Accommodation',
            'Astrology',
            'Automobiles & Two Wheelers',
            'Beauty, Fitness & Sports',
            'Business & Legal',
            'Education',
            'Events & Weddings',
            'Food & Restaurants',
          ].map((category, index) => (
            <div key={index} className="bg-gray-50 px-4 py-2 rounded border border-gray-200">
              <span className="text-gray-800">{category}</span>
            </div>
          ))}
        </div>

        {/* Category Links */}
        <div className="text-sm leading-7 flex flex-wrap gap-2">
          {[
            { text: 'AC Lodging Services', url: '/ac-lodging-services' },
            { text: 'Beach Resorts', url: '/beach-resorts' },
            { text: 'Bungalows On Hire', url: '/bungalows-on-hire' },
            { text: 'Cottages On Hire', url: '/cottages-on-hire' },
            { text: 'Dharamshalas', url: '/dharamshalas' },
            { text: 'Farm House', url: '/farm-house' },
            { text: 'Farm House On Hire', url: '/farm-house-on-hire' },
            { text: 'Hotels', url: '/hotels' },
            { text: '3 Star Hotels', url: '/3-star-hotels' },
            { text: '5 Star Hotels', url: '/5-star-hotels' },
            { text: 'Villas', url: '/villas' },
            { text: 'Water Park Resorts', url: '/water-park-resorts' },
            { text: 'Couple Friendly Hotels', url: '/couple-friendly-hotels' },
          ].map((item, index, array) => (
            <CategoryLink
              key={index}
              text={item.text}
              url={item.url}
              separator={index !== array.length - 1} // No separator for last item
            />
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Trending Searches</h2>
        <div className="text-sm leading-7 flex flex-wrap gap-2">
          {[
            { text: 'Railway Ticketing Agents', url: '/railway-ticketing-agents' },
            { text: 'Fast Food', url: '/fast-food' },
            { text: 'Battery Operated Scooter Dealers', url: '/battery-operated-scooter-dealers' },
            { text: 'Car Repair & Services-Hyundai', url: '/car-repair-services-hyundai' },
            { text: 'Visa Assistance For UK', url: '/visa-assistance-for-uk' },
            { text: 'Dance Classes For Bollywood', url: '/dance-classes-for-bollywood' },
          ].map((item, index, array) => (
            <CategoryLink
              key={index}
              text={item.text}
              url={item.url}
              separator={index !== array.length - 1} // No separator for last item
            />
          ))}
        </div>
      </div>

      {/* Explore JD Collections */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Explore JD Collections</h2>
        <div className="text-sm leading-7 flex flex-wrap gap-2">
          {[
            { text: 'Travel & Tourism', url: '/travel-tourism' },
            { text: 'Beauty & Fashion', url: '/beauty-fashion' },
            { text: 'Health & Fitness', url: '/health-fitness' },
            { text: 'Food & Beverage', url: '/food-beverage' },
            { text: 'Finance', url: '/finance' },
            { text: 'On-demand Services', url: '/on-demand-services' },
          ].map((item, index, array) => (
            <CategoryLink
              key={index}
              text={item.text}
              url={item.url}
              separator={index !== array.length - 1} // No separator for last item
            />
          ))}
        </div>
      </div>

      {/* Popular Cities */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Cities</h2>
        <div className="text-sm leading-7 flex flex-wrap gap-2">
          {[
            { text: 'Delhi', url: '/delhi' },
            { text: 'Mumbai', url: '/mumbai' },
            { text: 'Bangalore', url: '/bangalore' },
            { text: 'Hyderabad', url: '/hyderabad' },
            { text: 'Chennai', url: '/chennai' },
            { text: 'Pune', url: '/pune' },
            { text: 'Ahmedabad', url: '/ahmedabad' },
            { text: 'Kolkata', url: '/kolkata' },
          ].map((item, index, array) => (
            <CategoryLink
              key={index}
              text={item.text}
              url={item.url}
              separator={index !== array.length - 1} // No separator for last item
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
