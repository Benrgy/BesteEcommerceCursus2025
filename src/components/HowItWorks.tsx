import React from 'react';
import { Play, Users, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Play,
      title: 'Beheers de Fundamenten',
      description: 'Begin met onze uitgebreide basis modules die e-commerce basics, marktonderzoek en niche selectie behandelen.',
      timeframe: 'Week 1-2',
      details: [
        'Complete beginnersvriendelijke video training',
        'Kies je winstgevende niche met onze bewezen methode',
        'Stel je bedrijfsstructuur en juridische vereisten op',
        'Toegang tot onze leveranciersdatabase en evaluatietools'
      ]
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Launch Je Winkel',
      description: 'Bouw en lanceer je professionele e-commerce winkel met onze templates en stap-voor-stap technische begeleiding.',
      timeframe: 'Week 3-4',
      details: [
        'Creëer je winkel met onze kant-en-klare templates',
        'Zoek en importeer je eerste producten',
        'Stel betalingsverwerking en verzending op',
        'Configureer analytics en tracking systemen'
      ]
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Genereer Traffic & Verkopen',
      description: 'Implementeer bewezen marketing strategieën om klanten aan te trekken en consistent je eerste verkopen te genereren.',
      timeframe: 'Week 5-8',
      details: [
        'Start Facebook en Google advertentiecampagnes',
        'Implementeer onze organische traffic strategieën',
        'Stel email marketing automatisering op',
        'Optimaliseer voor conversies met onze geteste methoden'
      ]
    },
    {
      number: '04',
      icon: Users,
      title: 'Schaal & Optimaliseer',
      description: 'Schaal je succesvolle campagnes en optimaliseer operaties voor duurzame groei naar €100k+ maandelijkse omzet.',
      timeframe: 'Maand 3+',
      details: [
        'Schaal winstgevende advertentiecampagnes systematisch',
        'Implementeer geavanceerde automatiseringstools',
        'Bouw je team en delegeer operaties',
        'Ontwikkel je merk voor langetermijnsucces'
      ]
    }
  ];

  return (
    <section id="hoe-het-werkt" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Jouw Pad Naar E-commerce Succes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Volg ons bewezen 4-stappen systeem dat duizenden studenten heeft geholpen succesvolle 
            online bedrijven te bouwen van complete beginners tot €100k+ per maand.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 text-blue-600 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <div className="text-blue-600 font-semibold">{step.timeframe}</div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="bg-green-100 p-1 rounded-full mt-1">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12">
                      <div className="text-center">
                        <div className="bg-white rounded-full p-6 inline-flex mb-6 shadow-lg">
                          <Icon className="h-12 w-12 text-blue-600" />
                        </div>
                        <div className="text-6xl font-bold text-blue-600 mb-2">{step.number}</div>
                        <div className="text-gray-600 font-medium">{step.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Timeline */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Typische Student Succes Tijdlijn
            </h3>
            <p className="text-gray-600">Gemiddelde mijlpalen gebaseerd op 5.000+ student resultaten</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">30d</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Eerste Maand</h4>
              <p className="text-sm text-gray-600">Winkel gelanceerd en eerste verkopen</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">90d</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Derde Maand</h4>
              <p className="text-sm text-gray-600">€5k-€10k maandelijkse omzet</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-lg">6m</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Zes Maanden</h4>
              <p className="text-sm text-gray-600">€20k-€50k maandelijkse omzet</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">12m</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Een Jaar</h4>
              <p className="text-sm text-gray-600">€100k+ maandelijkse omzet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;