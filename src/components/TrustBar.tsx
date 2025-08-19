import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const TrustBar = () => {
  const trustElements = [
    {
      icon: Award,
      text: 'Gecertificeerde E-commerce Experts',
      subtext: 'Opgericht 2019'
    },
    {
      icon: Users,
      text: '5.000+ Actieve Studenten',
      subtext: 'Groeiende Community'
    },
    {
      icon: Shield,
      text: '30-Dagen Geld Terug',
      subtext: 'Risicovrije Garantie'
    },
    {
      icon: Clock,
      text: 'Levenslange Toegang',
      subtext: 'Verloopt Nooit'
    }
  ];

  return (
    <section className="bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustElements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">
                  {item.text}
                </h3>
                <p className="text-sm text-gray-600">{item.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Zoals vermeld in en vertrouwd door:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-4 py-2 rounded text-sm font-medium text-gray-700">
              E-commerce Nederland
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded text-sm font-medium text-gray-700">
              Ondernemer Magazine
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded text-sm font-medium text-gray-700">
              Quote Magazine
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded text-sm font-medium text-gray-700">
              Webwinkel Vakblad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;