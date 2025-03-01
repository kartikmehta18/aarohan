import React, { useState } from 'react';
import { Search, MapPin, Mic, ChevronRight, ChevronLeft, Facebook, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold">
              <span className="text-blue-600">Just</span>
              <span className="text-orange-500">dial</span>
            </a>
            <div className="ml-4 hidden md:flex items-center">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">BUSINESS</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 text-sm">
              <span className="flex items-center text-blue-600">
                <span className="mr-1">EN</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <a href="#" className="hover:text-blue-600">We are Hiring</a>
              <a href="#" className="hover:text-blue-600">Investor Relations</a>
              <a href="#" className="hover:text-blue-600">Leads</a>
              <a href="#" className="hover:text-blue-600">Advertise</a>
              <a href="#" className="text-blue-600 hover:underline">Free Listing</a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Login / Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">
            Search across <span className="text-gray-700">' 5.9 Crore+'</span> <span className="text-blue-600">Products & Services</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-2 mb-6">
            <div className="border rounded-md flex items-center px-3 py-2 flex-1 max-w-xs">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <input 
                type="text" 
                placeholder="Mansarovar, Jaipur" 
                className="outline-none w-full"
              />
            </div>
            <div className="border rounded-md flex items-center px-3 py-2 flex-1">
              <input 
                type="text" 
                placeholder="Search for Spa & Salons" 
                className="outline-none w-full"
              />
              <Mic className="text-blue-600 mx-2" size={20} />
              <button className="bg-orange-500 text-white p-1 rounded">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-200">
              Download App
              <span className="ml-2 text-2xl font-bold">
                <span className="text-blue-600">J</span>
                <span className="text-orange-500">d</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="mb-8 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Travel Banner" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 to-transparent flex flex-col justify-center pl-12">
              <h2 className="text-2xl font-bold text-white mb-2">Time to fly at</h2>
              <h3 className="text-3xl font-bold text-white mb-4">Lowest Airfares</h3>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-md w-max hover:bg-blue-900">
                Book Now
              </button>
              <div className="mt-4 text-white text-sm">Powered by EaseMyTrip.com</div>
            </div>
          </div>
        </div>

        {/* Service Categories Slider */}
        <div className="container mx-auto px-4 -mt-6 relative z-10">
          <div className="flex overflow-x-auto gap-4 pb-4">
            <ServiceCard 
              title="B2B" 
              subtitle="Quick Quotes"
              bgColor="bg-blue-600"
              imgUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <ServiceCard 
              title="REPAIRS & SERVICES" 
              subtitle="Get Nearest Vendor"
              bgColor="bg-blue-800"
              imgUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <ServiceCard 
              title="REAL ESTATE" 
              subtitle="Finest Agents"
              bgColor="bg-indigo-600"
              imgUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <ServiceCard 
              title="DOCTORS" 
              subtitle="Book Now"
              bgColor="bg-emerald-600"
              imgUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            <CategoryIcon title="Restaurants" icon="🍽️" />
            <CategoryIcon title="Hotels" icon="🏨" />
            <CategoryIcon title="Beauty Spa" icon="💆‍♀️" />
            <CategoryIcon title="Home Decor" icon="🛋️" />
            <CategoryIcon title="Wedding Planning" icon="💍" />
            <CategoryIcon title="Education" icon="🎓" />
            <CategoryIcon title="Rent & Hire" icon="🔑" />
            <CategoryIcon title="Hospitals" icon="🏥" />
            <CategoryIcon title="Contractors" icon="👷‍♂️" />
            <CategoryIcon title="Pet Shops" icon="🐾" />
          </div>
          
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mt-4">
            <CategoryIcon title="PG/Hostels" icon="🏠" />
            <CategoryIcon title="Estate Agent" icon="👥" />
            <CategoryIcon title="Dentists" icon="🦷" />
            <CategoryIcon title="Gym" icon="🏋️‍♂️" />
            <CategoryIcon title="Loans" icon="💰" />
            <CategoryIcon title="Event Organisers" icon="🎉" />
            <CategoryIcon title="Driving Schools" icon="🚗" />
            <CategoryIcon title="Packers & Movers" icon="📦" />
            <CategoryIcon title="Courier Service" icon="📮" />
            <CategoryIcon title="Popular Categories" icon="📋" />
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceSection 
              title="Wedding Requisites" 
              services={[
                {
                  name: "Banquet Halls",
                  image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Bridal Requisite",
                  image: "https://images.unsplash.com/photo-1594472436416-4b5a5f2e0795?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Caterers",
                  image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              ]}
            />
            
            <ServiceSection 
              title="Beauty & Spa" 
              services={[
                {
                  name: "Beauty Parlours",
                  image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Spa & Massages",
                  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Salons",
                  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              ]}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ServiceSection 
              title="Repairs & Services" 
              services={[
                {
                  name: "AC Service",
                  image: "https://images.unsplash.com/photo-1581275288578-bfb98e9d2d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Car Service",
                  image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Bike Service",
                  image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              ]}
            />
            
            <ServiceSection 
              title="Daily Needs" 
              services={[
                {
                  name: "Movies",
                  image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Grocery",
                  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Electricians",
                  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Bills & Recharge Section */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-bold">Bills & Recharge</h2>
                  <img 
                    src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" 
                    alt="Bharat Connect" 
                    className="h-6 ml-2"
                  />
                </div>
                <p className="text-sm text-gray-600">Pay your bills & recharge instantly with Justdial</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Explore More</a>
              </div>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <BillCategory name="Mobile" icon="📱" />
              <BillCategory name="Electricity" icon="💡" />
              <BillCategory name="DTH" icon="📺" />
              <BillCategory name="Water" icon="💧" />
              <BillCategory name="Gas" icon="🔥" />
              <BillCategory name="Insurance" icon="🛡️" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActivityCard 
              businessName="Shree Vinita Computer"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Vikram",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review: "I recently purchased a laptop from VINITA COMPUTER and opted for the extended warranty. The process was smooth, and the staff was very helpful in explaining the benefits. I feel..."
              }}
            />
            
            <ActivityCard 
              businessName="Shivgay Mobiles & More"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Healthy Lifestyle",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review: "Shivgay Mobiles & More is a great place to buy electronic products. The staff is polite and helpful, and the management is prompt in addressing any concerns. I also..."
              }}
            />
            
            <ActivityCard 
              businessName="RECT SERVICES"
              location="Gopalpura Bypass - Jaipur"
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Rahul",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review: "The service was excellent. I got my laptop repaired without delay. The behaviour of it was very professional and polite."
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <ActivityCard 
              businessName="Jain Compu Care"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              hideReviewer={true}
            />
            
            <ActivityCard 
              businessName="LG Service Center Jaipur"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              hideReviewer={true}
            />
            
            <ActivityCard 
              businessName="Server Plus"
              location="Gopalpura Bypass - Jaipur"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              hideReviewer={true}
            />
          </div>
        </div>
      </section>

      {/* Explore Top Cities */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">Explore Top Cities</h2>
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <CityCard 
                name="MUMBAI" 
                image="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CityCard 
                name="BANGALORE" 
                image="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CityCard 
                name="DELHI" 
                image="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <CityCard 
                name="KOLKATA" 
                image="https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto gap-4 pb-4">
              <PopularSearchCard 
                title="Women Kurti Manufacturers"
                image="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <PopularSearchCard 
                title="Interior Designers"
                image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <PopularSearchCard 
                title="Real Estate Agents"
                image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <PopularSearchCard 
                title="Paying Guest Accommodations"
                image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <PopularSearchCard 
                title="Banquet Halls"
                image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-2">Follow us on</span>
              <div className="flex space-x-2">
                <a href="#" className="bg-blue-800 text-white p-1 rounded-full">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-red-600 text-white p-1 rounded-full">
                  <Youtube size={16} />
                </a>
                <a href="#" className="bg-pink-600 text-white p-1 rounded-full">
                  <Instagram size={16} />
                </a>
                <a href="#" className="bg-blue-500 text-white p-1 rounded-full">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="bg-black text-white p-1 rounded-full">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-10"
              />
              <img 
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-10"
              />
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-4">One-Stop for All Local Businesses, Services, & Stores Nearby Across India</h2>
          
          <p className="text-sm text-gray-600 mb-4">
            Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.
          </p>
          
          <p className="text-sm text-gray-600 mb-4">
            Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.
          </p>
          
          <p className="text-sm text-gray-600 mb-6">
            Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
          </p>
          
          <h3 className="text-lg font-bold mb-4">Some of our services that will prove useful to you on a day-to-day basis are :</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">💼</span>
                <h4 className="font-bold">B2B</h4>
              </div>
              <p className="text-sm text-gray-600">
                Experience the ultimate B2B portal by Justdial. You can explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. You'll find everything you need for B2B requirements on this exclusive platform. Our interactive interface allows you to apply relevant filters, ascertain the best rates, and get instant assistance via chat.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🚀</span>
                <h4 className="font-bold">All India</h4>
              </div>
              <p className="text-sm text-gray-600">
                Elevate your search for B2B requisites. From lead generation to promoting and selling products/services, Justdial enables enterprises to reach vast audiences all across India. Embracing digital strategies, Justdial India encompasses manufacturers, dealers, suppliers, vendors, wholesalers, and more, offering convenience in the B2B market space and empowering businesses nationwide.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">📦</span>
                <h4 className="font-bold">Packers and Movers</h4>
              </div>
              <p className="text-sm text-gray-600">
                If you're relocating to another place, or even if you just want to send some belongings elsewhere, find the best deals on the most reliable packers and movers for your location. Get quotes from multiple agencies, read reviews from previous customers, and check ratings before making a selection for a hassle-free experience.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🍽️</span>
                <h4 className="font-bold">Order Food Online</h4>
              </div>
              <p className="text-sm text-gray-600">
                You are just three clicks away from placing an order and exploring a wide range of exotic cuisines. Order food online with Justdial and get your favourite food delivered at your doorstep. Search for restaurants, view reviews and ratings, avail discounts and order your food.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for service cards in the slider
function ServiceCard({ title, subtitle, bgColor, imgUrl }) {
  return (
    <div className={`${bgColor} text-white rounded-lg overflow-hidden min-w-[250px] flex`}>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
      <div className="w-1/2">
        <img src={imgUrl} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

// Component for category icons
function CategoryIcon({ title, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="border rounded-full w-16 h-16 flex items-center justify-center mb-2 hover:border-blue-500 cursor-pointer">
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="text-xs text-center">{title}</span>
    </div>
  );
}

// Component for service sections
function ServiceSection({ title, services }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden mb-2 w-full h-32">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm text-center">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component for bill categories
function BillCategory({ name, icon }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center hover:border-blue-500 cursor-pointer">
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-sm">{name}</span>
    </div>
  );
}

// Component for activity cards
function ActivityCard({ businessName, location, image, reviewer, hideReviewer = false }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-start">
        <div>
          <h3 className="font-bold">{businessName}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
          WhatsApp
        </button>
      </div>
      
      <div className="h-48">
        <img src={image} alt={businessName} className="w-full h-full object-cover" />
      </div>
      
      {!hideReviewer && reviewer && (
        <div className="p-4 border-t">
          <div className="flex items-center mb-2">
            <img src={reviewer.image} alt={reviewer.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h4 className="font-bold">{reviewer.name}</h4>
              <p className="text-xs text-gray-600">Wrote a review</p>
            </div>
          </div>
          
          <div className="flex text-orange-500 mb-2">
            {'★'.repeat(reviewer.rating)}
          </div>
          
          <p className="text-sm text-gray-700">{reviewer.review}</p>
        </div>
      )}
    </div>
  );
}

// Component for city cards
function CityCard({ name, image }) {
  return (
    <div className="flex border rounded-lg overflow-hidden hover:border-blue-500 cursor-pointer">
      <div className="w-1/3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="font-bold mb-1">{name}</h3>
        <a href="#" className="text-blue-600 text-sm flex items-center">
          Explore <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

// Component for popular search cards
function PopularSearchCard({ title, image }) {
  return (
    <div className="min-w-[250px] rounded-lg overflow-hidden relative group">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-3">
        <h3 className="font-bold mb-2">{title}</h3>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-gray-100">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default App;