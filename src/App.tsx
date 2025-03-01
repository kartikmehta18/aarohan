import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Mic,
  ChevronRight,
  ChevronLeft,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  BellRing,
  Volume2,
  NotebookTabs,
  Languages,
} from "lucide-react";

import { Mail } from "lucide-react";
function App() {

  
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentSearchTermIndex, setCurrentSearchTermIndex] = useState(0);

  const banners = [
    {
      title: "CCTV & Security",
      subtitle: "Solutions",
      buttonText: "GET BEST DEALS",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Time to fly at",
      subtitle: "Lowest Airfares",
      buttonText: "Book Now",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Home Appliances",
      subtitle: "Best Deals",
      buttonText: "SHOP NOW",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Health Services",
      subtitle: "Expert Care",
      buttonText: "BOOK APPOINTMENT",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const searchTerms = [
    { text: "4.7 Crore+", highlight: "Businesses" },
    { text: "5.9 Crore+", highlight: "Products & Services" },
    { text: "3.2 Crore+", highlight: "Reviews & Ratings" },
    { text: "2.8 Crore+", highlight: "Photos & Videos" },
  ];

  // Auto-change banner every 1 second
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 1000);

    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  // Auto-change search term every 1 second
  useEffect(() => {
    const searchTermInterval = setInterval(() => {
      setCurrentSearchTermIndex(
        (prevIndex) => (prevIndex + 1) % searchTerms.length
      );
    }, 1000);

    return () => clearInterval(searchTermInterval);
  }, [searchTerms.length]);

  const goToNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevBanner = () => {
    setCurrentBannerIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

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
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center text-blue-600">
                <Languages className="w-5 h-5 mr-1" />
                <span className="mr-1">EN</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <a href="#" className="hover:text-blue-600">
                We are Hiring
              </a>
              <a href="#" className="hover:text-blue-600">
                Investor Relations
              </a>
              <a href="#" className="hover:text-blue-600 flex items-center">
                <Mail className="w-5 h-5 mr-1" />
                Leads
              </a>
              <a href="#" className="hover:text-blue-600 flex items-center">
                <Volume2 className="w-5 h-5 mr-1" />
                Advertise
              </a>
              <a
                href="#"
                className="text-blue-600 hover:underline flex items-center"
              >
                <NotebookTabs className="w-5 h-5 mr-1" />
                Free Listing
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="mr-2">
                <BellRing className="w-5 h-5 mr-1" />
              </a>
              <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">
            Search across{" "}
            <span className="text-gray-700">
              '{searchTerms[currentSearchTermIndex].text}'
            </span>{" "}
            <span className="text-blue-600">
              {searchTerms[currentSearchTermIndex].highlight}
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-2 mb-6">
            <div className="border rounded-md flex items-center px-3 py-2 w-48">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Mumbai"
                className="outline-none w-full"
                contentEditable
              />
            </div>
            <div className="border rounded-md flex items-center px-3 py-2 w-96">
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
            <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-200 ml-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main Banner (takes half the space) */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <div className="relative h-full">
                {banners.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentBannerIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 to-transparent flex flex-col justify-center pl-12">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {banner.title}
                      </h2>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {banner.subtitle}
                      </h3>
                      <button className="bg-blue-800 text-white px-6 py-2 rounded-md w-max hover:bg-blue-900">
                        {banner.buttonText}
                      </button>
                      {index === 1 && (
                        <div className="mt-4 text-white text-sm">
                          Powered by EaseMyTrip.com
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBannerIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentBannerIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Banner navigation arrows */}
              <button
                onClick={goToPrevBanner}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
                aria-label="Previous banner"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={goToNextBanner}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
                aria-label="Next banner"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

            {/* Other 4 Banners in a grid */}
            <div className="grid grid-cols-4 gap-2 h-64">
            <ServiceCard
                title="B2B"
                subtitle="Get Nearest Vendor"
                bgColor="bg-blue-800"
                imgUrl="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=3840&q=75"
                showArrow={true}
              />
              <ServiceCard
                title="REPAIRS & SERVICES"
                subtitle="Get Nearest Vendor"
                bgColor="bg-blue-800"
                imgUrl="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=3840&q=75"
                showArrow={true}
              />
              <ServiceCard
                title="REAL ESTATE"
                subtitle="Finest Agents"
                bgColor="bg-indigo-600"
                imgUrl="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=3840&q=75"
                showArrow={true}
              />
              <ServiceCard
                title="DOCTORS"
                subtitle="Book Now"
                bgColor="bg-emerald-600"
                imgUrl="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=3840&q=75"
                showArrow={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            <CategoryIcon title="Restaurants" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75" />
            <CategoryIcon title="Hotels" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=96&q=75" />
            <CategoryIcon title="Beauty Spa" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=96&q=75" />
            <CategoryIcon title="Home Decor" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=96&q=75" />
            <CategoryIcon title="Wedding Planning" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=96&q=75" />
            <CategoryIcon title="Education" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=96&q=75" />
            <CategoryIcon title="Rent & Hire" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=96&q=75" />
            <CategoryIcon title="Hospitals" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=96&q=75" />
            <CategoryIcon title="Contractors" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=96&q=75" />
            <CategoryIcon title="Pet Shops" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=96&q=75" />
          </div>

          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mt-4">
            <CategoryIcon title="PG/Hostels" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=48&q=75" />
            <CategoryIcon title="Estate Agent" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=96&q=75" />
            <CategoryIcon title="Dentists" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=96&q=75" />
            <CategoryIcon title="Gym" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=96&q=75" />
            <CategoryIcon title="Loans" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg?w=96&q=75" />
            <CategoryIcon title="Event Organisers" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=96&q=75" />
            <CategoryIcon title="Driving Schools" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=96&q=75" />
            <CategoryIcon title="Packers & Movers" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=96&q=75" />
            <CategoryIcon title="Courier Service" icon="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=96&q=75" />
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
                  image:
                    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
                {
                  name: "Bridal Requisite",
                  image:
                    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_bridalrequisites.png?w=640&q=75",
                },
                {
                  name: "Caterers",
                  image:
                    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_caterers.png?w=640&q=75",
                },
              ]}
            />

            <ServiceSection
              title="Beauty & Spa"
              services={[
                {
                  name: "Beauty Parlours",
                  image:
                    "	https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_beautyparlour.png?w=256&q=75",
                },
                {
                  name: "Spa & Massages",
                  image:
                    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_spamassage.png?w=640&q=75",
                },
                {
                  name: "Salons",
                  image:
                    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_salons.png?w=640&q=75",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ServiceSection
              title="Repairs & Services"
              services={[
                {
                  name: "AC Service",
                  image:
                    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_acrepair.png?w=640&q=75",
                },
                {
                  name: "Car Service",
                  image:
                    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
                {
                  name: "Bike Service",
                  image:
                    "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
              ]}
            />

            <ServiceSection
              title="Daily Needs"
              services={[
                {
                  name: "Movies",
                  image:
                    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
                {
                  name: "Grocery",
                  image:
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
                {
                  name: "Electricians",
                  image:
                    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                },
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
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bharat_billpay_Newlogo.svg"
                    alt="Bharat Connect"
                    className="h-6 ml-2"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Pay your bills & recharge instantly with Justdial
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Explore More
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <BillCategory name="Mobile" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_mobile.svg?w=128&q=75" />
              <BillCategory name="Electricity" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_electricity.svg?w=128&q=75" />
              <BillCategory name="DTH" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_dth.svg?w=128&q=75" />
              <BillCategory name="Water" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_water.svg?w=128&q=75" />
              <BillCategory name="Gas" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_gas.svg?w=128&q=75" />
              <BillCategory name="Insurance" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_insurance.svg?w=128&q=75" />
            </div>
          </div>
        </div>
      </section>

      {/* travel */}

      {/* Bills & Recharge Section */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-bold">Travel Bookings</h2>
                  
                </div>
                <p className="text-sm text-gray-600">
                  Instant ticket bookings for your best travel experience
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Explore More
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              <BillCategory name="Flight" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=128&q=75" />
              <BillCategory name="Bus" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_bus.svg?w=128&q=75" />
              <BillCategory name="Train" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=128&q=75" />
              <BillCategory name="Hotel" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=64&q=75" />
              <BillCategory name="car rental" icon="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=128&q=75" />
              {/* <BillCategory name="Insurance" icon="🛡️" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Top Cities */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">Explore Top Cities</h2>
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
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

      {/* Cool Day Essentials */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Cool Day Essentials</h2>

              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                SEASONAL
              </span>
            </div>
            <h2 className="mt">Discover wide range of winter collection</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <CityCard
                name="HEADPHONE"
                image="https://images.unsplash.com/photo-1659353888477-6e6aab941b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <CityCard
                name="CATERERS"
                image="https://plus.unsplash.com/premium_photo-1687089575952-1d06765f2229?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <CityCard
                name="FISHING EQUIPMENT"
                image="https://plus.unsplash.com/premium_photo-1726848057778-a87a90c6be3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <CityCard
                name="SKIN CARE PRODUCT"
                image="https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
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
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "I recently purchased a laptop from VINITA COMPUTER and opted for the extended warranty. The process was smooth, and the staff was very helpful in explaining the benefits. I feel...",
              }}
            />

            <ActivityCard
              businessName="Shivgay Mobiles & More"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Healthy Lifestyle",
                image:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "Shivgay Mobiles & More is a great place to buy electronic products. The staff is polite and helpful, and the management is prompt in addressing any concerns. I also...",
              }}
            />

            <ActivityCard
              businessName="RECT SERVICES"
              location="Gopalpura Bypass - Jaipur"
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Rahul",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "The service was excellent. I got my laptop repaired without delay. The behaviour of it was very professional and polite.",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <ActivityCard
              businessName="Jain Compu Care"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Rahul",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "The service was excellent. I got my laptop repaired without delay. The behaviour of it was very professional and polite.",
              }}
            />

            <ActivityCard
              businessName="LG Service Center Jaipur"
              location="Mansarovar - Jaipur"
              image="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              reviewer={{
                name: "Rahul",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "The service was excellent. I got my laptop repaired without delay. The behaviour of it was very professional and polite.",
              }}
            />

            <ActivityCard
              businessName="Server Plus"
              location="Gopalpura Bypass - Jaipur"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              reviewer={{
                name: "Rahul",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
                rating: 5,
                review:
                  "The service was excellent. I got my laptop repaired without delay. The behaviour of it was very professional and polite.",
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
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

          <h2 className="text-xl font-bold mb-4">
            One-Stop for All Local Businesses, Services, & Stores Nearby Across
            India
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            Welcome to Justdial, your 'one stop shop' where you are assisted
            with day-to-day and exclusive planning and purchasing activities. We
            take pride in our iconic customer support number, 8888888888 and the
            fact that we own a strong hold on local business information pan
            India.
          </p>

          <p className="text-sm text-gray-400 mb-4">
            Our service extends from providing address and contact details of
            business establishments around the country, to making orders and
            reservations for leisure, medical, financial, travel and domestic
            purposes. We enlist business information across varied sectors like
            Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care,
            Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over
            the country. Holding information right from major cities like
            Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our
            reach stretches out to other smaller cities across the country too.
          </p>

          <p className="text-sm text-gray-400 mb-6">
            Our 'Free Listing' feature gives a platform to showcase varied
            specialities. We then furnish you with the information via phone,
            SMS, web, App and WAP as well as, create a space for you to share
            your experiences through our 'Rate & Review' feature. Through the
            'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure
            that you are offered the best bargains in the market.
          </p>

          <h3 className="text-lg font-bold mb-4">
            Some of our services that will prove useful to you on a day-to-day
            basis are :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">💼</span>
                <h4 className="font-bold">B2B</h4>
              </div>
              <p className="text-sm text-gray-400">
                Experience the ultimate B2B portal by Justdial. You can explore
                countless diverse categories, innumerable top-quality vendors,
                and an unmatched wholesale experience. You'll find everything
                you need for B2B requirements on this exclusive platform. Our
                interactive interface allows you to apply relevant filters,
                ascertain the best rates, and get instant assistance via chat.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🚀</span>
                <h4 className="font-bold">All India</h4>
              </div>
              <p className="text-sm text-gray-400">
                Elevate your search for B2B requisites. From lead generation to
                promoting and selling products/services, Justdial enables
                enterprises to reach vast audiences all across India. Embracing
                digital strategies, Justdial India encompasses manufacturers,
                dealers, suppliers, vendors, wholesalers, and more, offering
                convenience in the B2B market space and empowering businesses
                nationwide.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">📦</span>
                <h4 className="font-bold">Packers and Movers</h4>
              </div>
              <p className="text-sm text-gray-400">
                If you're relocating to another place, or even if you just want
                to send some belongings elsewhere, find the best deals on the
                most reliable packers and movers for your location. Get quotes
                from multiple agencies, read reviews from previous customers,
                and check ratings before making a selection for a hassle-free
                experience.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🍽️</span>
                <h4 className="font-bold">Order Food Online</h4>
              </div>
              <p className="text-sm text-gray-400">
                You are just three clicks away from placing an order and
                exploring a wide range of exotic cuisines. Order food online
                with Justdial and get your favourite food delivered at your
                doorstep. Search for restaurants, view reviews and ratings,
                avail discounts and order your food.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">💼</span>
                <h4 className="font-bold">Jobs</h4>
              </div>
              <p className="text-sm text-gray-400">
                Providing pertinent jobs to job seekers and relevant profiles to
                employers, this service will help you reach out to employers and
                vice-versa across industry verticals, experience levels and
                geographies.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">📽️</span>
                <h4 className="font-bold">Movies</h4>
              </div>
              <p className="text-sm text-gray-400">
                This gives you access to book tickets and keep updated with the
                latest movies. With the provision of a synopsis, cast, crew and
                trailer, you can make a better choice in the movie you would
                like to watc
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">💇</span>
                <h4 className="font-bold">Spa & Salon</h4>
              </div>
              <p className="text-sm text-gray-400">
                Skip the wait to get pampered at a spa or a salon. In a few
                clicks, 'Book an Appointment' online through Justdial before
                your next visit.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🔨</span>
                <h4 className="font-bold">Repair & Services</h4>
              </div>
              <p className="text-sm text-gray-400">
                Find the 'Best Deal', be it for repairing your air-conditioner,
                getting your car serviced or cleaning your water purifier and
                drive your utility problems away.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">🩺</span>
                <h4 className="font-bold">Doctor Appointment</h4>
              </div>
              <p className="text-sm text-gray-400">
                Find the suitable medical specialist to take care of your health
                and well-being. Healthcare made easy.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-300 mr-2">🙅‍♂️</span>
                <h4 className="font-bold">Real Estate Agents</h4>
              </div>
              <p className="text-sm text-gray-400">
                Discover the power of our cohesive platform for simplified
                property searches. Whether your interest lies in PG, rentals,
                buying, or selling, you can connect with trusted agents and
                developers and stay updated on upcoming or trending residential
                and commercial projects.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            Some of the other services that can be of assistance to you for
            leisure, health and home convenience are - Pest Control, Skin Care
            Clinics, Painters, Laundry Services, Interior Designers, Mobile
            Phone Repair, Vaccination Centres, Internet Service Providers, etc.
            With an endless number of things under the sun, you can be sure this
            will be your 'One Stop Shop' to find everything and more.
          </p>
          <h2 className="text-xl font-bold mb-4">Trending Searches</h2>

          <p className="text-sm text-gray-400 mb-4">
            Railway Ticketing AgentsFast FoodMobile Phone Repair &
            Services-AppleBattery Operated Scooter Dealers-OLACar Repair &
            Services-HyundaiVideo Shooting ServicesTnpsc TutorialsDTH TV
            Broadcast Service Providers-Sun DirectAC Repair & Services-Blue
            StarPersonal Loans For Cibil DefaultersElectricity Bill Payment
            CentresPaver Block ManufacturersShoe Dealers-NikeUPSC
            TutorialsTutorials For Ssc CglCoronavirus Vaccination CentresMobile
            Phone Simcard Dealers-JioTirupati Darshanam Ticketing
            ServicesTutorials For Class XII ScienceEvent Organisers For
            JagranTablet DealersTutorials For UGC Net ExamLive Sports
            ScreeningsCap RetailersDNA Testing Labs3 Tesla MRI Scanning
            CentresDance Classes For BollywoodVisa Assistance For UKCourier
            Services For AhmedabadExercise Bicycle DealersBus Ticketing
            Agents-KsrtcCourier Services For UKRain Water Harvesting
            ConsultantsDTH TV Broadcast Service Providers-JioMobile Phone Repair
            & Services-SonyCourier Services For CanadaOpen Air Banquet HallsRpf
            Training CentresSinus DoctorsTutorials For RRB Entrance
            ExamTutorials For GpscBsf Training CentresCricket Live ScreeningTour
            Packages For ThailandFootball DealersCourier Services For
            TirupatiTutorials For CSIR Net Life SciencePersonal Loans-Axis
            BankTour Operators For KedarnathInsurance Agents-United India
          </p>

          <h2 className="text-xl font-bold mb-4">Explore JD Collections</h2>

          <p className="text-sm text-gray-400 mb-4">
            Travel & TourismBeauty & FashionHealth & FitnessFood &
            BeverageFinanceOn demand ServicesHome & LivingEducation &
            CareerRecreationJd Business Guide
          </p>

          <h2 className="text-xl font-bold mb-4">Popular Cities</h2>

          <p className="text-sm text-gray-400 mb-4">
            DelhiMumbaiBangaloreHyderabadChennaiPuneAhmedabadKolkataJaipurChandigarhCoimbatoreLucknowSuratIndorePatnaNagpurErnakulamBhopalVadodaraLudhianaKanpurNashikVaranasiVisakhapatnamRajkotRaipur-ChhattisgarhVijayawadaMaduraiRanchiGoaThiruvananthapuramBhubaneshwarAllahabadAurangabad-MaharashtraDehradunMysoreTrichyGuwahatiAgraKozhikodeJodhpurThrissurKolhapurSalemMeerutMangaloreGorakhpurJabalpurJalandharGwalior
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component for service cards in the slider
function ServiceCard({
  title,
  subtitle,
  bgColor,
  imgUrl,
  showExplore = false,
  showArrow = false,
}) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden h-full ${bgColor} text-white`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

      {/* Top Text Section */}
      <div className="absolute top-3 left-3 z-10">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-3 left-3 w-full flex items-center justify-between z-10">
        {/* Explore Text for B2B */}
        {showExplore && (
          <div className="flex items-center">
            <span className="text-sm font-medium">Explore</span>
            <ChevronRight size={16} />
          </div>
        )}

        {/* Box Icons for B2B */}
        {showExplore && (
          <div className="absolute bottom-12 left-3 flex space-x-2">
            <div className="w-8 h-8 border-2 border-white/50 flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
            </div>
            <div className="w-8 h-8 border-2 border-white/50 flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
            </div>
          </div>
        )}

        {/* Arrow for Other Cards */}
        {showArrow && (
          <div className="absolute bottom-3 right-3">
            <div className="bg-white/30 rounded-full p-1 hover:bg-white/50 transition">
              <ChevronRight size={16} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Component for category icons
function CategoryIcon({ title, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="border rounded-lg w-16 h-16 flex items-center justify-center mb-2 hover:border-blue-500 cursor-pointer transition">
        {/* Corrected img tag usage */}
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
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
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
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
       <img src={icon} alt={name} className="object-contain" />
      <span className="text-sm">{name}</span>
    </div>
  );
}

// Component for activity cards
function ActivityCard({
  businessName,
  location,
  image,
  reviewer,
  hideReviewer = false,
}) {
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
        <img
          src={image}
          alt={businessName}
          className="w-full h-full object-cover"
        />
      </div>

      {!hideReviewer && reviewer && (
        <div className="p-4 border-t">
          <div className="flex items-center mb-2">
            <img
              src={reviewer.image}
              alt={reviewer.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h4 className="font-bold">{reviewer.name}</h4>
              <p className="text-xs text-gray-600">Wrote a review</p>
            </div>
          </div>

          <div className="flex text-orange-500 mb-2">
            {"★".repeat(reviewer.rating)}
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
      {/* Wrapper for Image to maintain aspect ratio */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-3 flex flex-col items-start">
        <h3 className="font-bold mb-2">{title}</h3>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default App;
