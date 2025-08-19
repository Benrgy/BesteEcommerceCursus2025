import React from 'react';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bouw Je{' '}
              <span className="text-blue-600">€100,000+</span>{' '}
              Online Business
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Leer bewezen dropshipping en e-commerce strategieën van ondernemers die 
              <strong className="text-gray-900"> meer dan €10 miljoen omzet</strong> hebben gegenereerd. 
              Begin met het verdienen van €5.000-€20.000 maandelijks inkomen zonder hoge opstartkosten.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">5.000+ Studenten</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">€10M+ Gegenereerd</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Levenslange Toegang</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#schrijf-je-nu-in"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Start Je Reis Vandaag</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#hoe-het-werkt"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Ontdek Hoe Het Werkt
              </a>
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-500 mt-6">
              ⭐⭐⭐⭐⭐ Beoordeeld met 4.9/5 door 2.500+ geverifieerde studenten
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Succesvolle ondernemers die werken aan e-commerce business met laptops en grafieken die groei tonen"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Maandelijkse Omzet</p>
                  <p className="font-bold text-gray-900">€125,000+</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Succespercentage</p>
                  <p className="font-bold text-gray-900">87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;