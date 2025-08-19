import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const Problem = () => {
  const problems = [
    'Hoge opstartkosten die je ervan weerhouden om te beginnen',
    'Ingewikkelde technische setup en website ontwikkeling',
    'Het vinden van betrouwbare leveranciers en voorraadbeheer',
    'Gebrek aan marketingkennis en klantacquisitie',
    'Overweldigende hoeveelheid tegenstrijdige informatie online'
  ];

  const solutions = [
    'Begin met minimale investering (onder €500)',
    'Kant-en-klare templates en stap-voor-stap technische gidsen',
    'Gescreend leveranciersnetwerk en voorraadbeheersystemen',
    'Bewezen marketing frameworks en automatiseringstools',
    'Duidelijke, geteste strategieën van succesvolle ondernemers'
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stop Met Worstelen Met Traditionele Bedrijfsmodellen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De meeste mensen falen in e-commerce omdat ze het juiste systeem, mentorschap en bewezen strategieën missen. 
            Wij hebben deze exacte problemen opgelost voor meer dan 5.000 studenten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems */}
          <div className="bg-red-50 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Veelvoorkomende Obstakels
              </h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{problem}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-red-100 rounded-xl">
              <p className="text-red-800 font-medium text-center">
                <strong>Resultaat:</strong> 95% van de mensen begint nooit of faalt binnen het eerste jaar
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Onze Oplossingen
              </h3>
            </div>
            
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-green-100 rounded-xl">
              <p className="text-green-800 font-medium text-center">
                <strong>Resultaat:</strong> 87% succespercentage met ons bewezen systeem
              </p>
            </div>
          </div>
        </div>

        {/* Bridge to Solution */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Klaar Om Je Aan Te Sluiten Bij De Succesvolle 87%?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Ons uitgebreide programma elimineert elk obstakel en voorziet je van 
              het exacte systeem, tools en ondersteuning gebruikt door onze meest succesvolle studenten.
            </p>
            <a
              href="#programma"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Bekijk Het Complete Programma</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;