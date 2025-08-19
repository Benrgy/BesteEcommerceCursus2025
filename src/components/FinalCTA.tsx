import React from 'react';
import { ArrowRight, Clock, Users, Trophy, Shield } from 'lucide-react';

const FinalCTA = () => {
  const benefits = [
    {
      icon: Users,
      title: '5.000+ Studenten Community',
      description: 'Sluit je aan bij onze actieve community van succesvolle ondernemers'
    },
    {
      icon: Trophy,
      title: '87% Succespercentage',
      description: 'Bewezen track record met gedocumenteerde student resultaten'
    },
    {
      icon: Clock,
      title: 'Levenslange Toegang',
      description: 'Verlies nooit toegang tot updates, nieuwe content en community'
    },
    {
      icon: Shield,
      title: '30-Dagen Garantie',
      description: 'Risicovrij met onze geld-terug-garantie'
    }
  ];

  return (
    <section id="schrijf-je-nu-in" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Klaar Om Je €100k+ E-commerce Business Te Bouwen?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Sluit je aan bij duizenden succesvolle ondernemers die hun leven hebben getransformeerd met ons bewezen systeem. 
            Je reis naar financiële vrijheid begint vandaag.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-gray-900 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full inline-block mb-4 font-semibold">
              🔥 Beperkte Tijd Aanbieding - Bespaar €2.000
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete E-commerce Onderwijs Programma
            </h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-3xl text-gray-400 line-through">€6,482</span>
              <span className="text-5xl font-bold text-green-600">€4,482</span>
            </div>
            <p className="text-gray-600 mb-8">
              Eenmalige betaling • Levenslange toegang • 30-dagen geld-terug-garantie
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-3 rounded-xl inline-flex mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://www.paypro.nl/producten/Ecom_Education_Programma_(twv_%E2%82%AC6482)/107285/14535"
              className="bg-blue-600 text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-3"
            >
              <span>Start Je Reis Nu</span>
              <ArrowRight className="h-6 w-6" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Veilige betalingsverwerking • Directe toegang na aankoop
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">5.000+</div>
            <div className="text-blue-200">Tevreden Studenten</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">€10M+</div>
            <div className="text-blue-200">Omzet Gegenereerd</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">4.9★</div>
            <div className="text-blue-200">Gemiddelde Beoordeling</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Community Ondersteuning</div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full inline-block font-bold mb-4">
            ⚡ Sluit je aan bij 127 studenten die zich deze week hebben ingeschreven
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Wacht niet tot morgen om je financiële toekomst te beginnen bouwen. 
            Elke dag dat je uitstelt is potentiële omzet verloren. Onderneem nu actie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;