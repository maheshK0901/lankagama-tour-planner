import React from 'react';
import { TreePine, Users, Heart, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import backgroundImage from '../assets/background_img.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-gradient-to-r from-green-800 to-green-600 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Lankagama
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Discover the heart of Sri Lanka's rainforest community where tradition meets conservation
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto gap-2 shadow-lg">
            Explore Our Village
            <ArrowRight size={20} />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Lankagama Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our village represents the perfect harmony between human community and nature conservation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rainforest Conservation</h3>
              <p className="text-gray-600 leading-relaxed">
                We protect over 1,000 acres of pristine rainforest, home to rare species and ancient trees that have stood for centuries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Strong Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 300+ families work together in sustainable agriculture, traditional crafts, and eco-tourism initiatives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cultural Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Ancient traditions, Buddhist temples, and indigenous knowledge systems are carefully preserved and shared.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Village</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nestled in the heart of Sri Lanka's central highlands, Lankagama has been a beacon of sustainable living for over 200 years. Our community has developed unique practices that allow us to thrive while protecting the precious rainforest ecosystem around us.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From traditional herbal medicine gardens to innovative water conservation systems, we demonstrate that modern life and environmental stewardship can coexist beautifully.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">200+</div>
                  <div className="text-sm text-gray-600">Years of History</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-sm text-gray-600">Families</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <TreePine size={80} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Village Image Placeholder</p>
                  <p className="text-sm opacity-75">Replace with actual village photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;