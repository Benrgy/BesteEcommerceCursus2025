import React from 'react';
import { BookOpen, Users, Zap, Target, Headphones, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Complete Video Cursus Bibliotheek',
      description: 'Meer dan 150+ uur gedetailleerde video training die alles behandelt van winkel setup tot geavanceerde schaalstrategieën.',
      benefits: ['Stap-voor-stap tutorials', 'Geavanceerde technieken', 'Regelmatige updates', 'Mobiel-vriendelijke toegang']
    },
    {
      icon: Users,
      title: 'Actieve Community & Netwerken',
      description: 'Sluit je aan bij 5.000+ gelijkgestemde ondernemers in onze privé community voor ondersteuning, partnerships en motivatie.',
      benefits: ['24/7 community ondersteuning', 'Netwerkmogelijkheden', 'Partner matching', 'Succesvieringen']
    },
    {
      icon: Headphones,
      title: 'Wekelijkse Live Coaching Sessies',
      description: '6 wekelijkse coaching calls met ons expert team om vragen te beantwoorden en gepersonaliseerde begeleiding te bieden.',
      benefits: ['Live Q&A sessies', 'Gepersonaliseerd advies', 'Strategie reviews', 'Probleem oplossing']
    },
    {
      icon: Zap,
      title: 'AI-Aangedreven Tools & Automatisering',
      description: 'Geavanceerde AI tools voor productonderzoek, content creatie, klantenservice en marketing automatisering.',
      benefits: ['Product onderzoek AI', 'Content generatie', 'Klantenservice bots', 'Marketing automatisering']
    },
    {
      icon: Target,
      title: 'Bewezen Marketing Frameworks',
      description: 'Gevechtsgeteste marketing strategieën inclusief Facebook Ads, Google Ads, influencer marketing en organische groei.',
      benefits: ['Facebook Ads meesterschap', 'Google Ads training', 'Influencer strategieën', 'SEO technieken']
    },
    {
      icon: Trophy,
      title: 'Exclusieve Bonussen & Bronnen',
      description: 'Premium bronnen inclusief leveranciersdatabases, design templates, juridische documenten en case studies.',
      benefits: ['Leveranciers directory', 'Design templates', 'Juridische templates', 'Succes case studies']
    }
  ];

  return (
    <section id="programma" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Alles Wat Je Nodig Hebt Om Je €100k+ Business Te Bouwen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ons uitgebreide programma biedt alle training, tools en ondersteuning die nodig is om je 
            e-commerce business te lanceren en op te schalen van nul naar zes cijfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Program Statistics */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Program Impact & Results</h3>
            <p className="text-blue-100 text-lg">Echte cijfers van onze studenten community</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">5.000+</div>
              <div className="text-blue-100">Actieve Studenten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">€10M+</div>
              <div className="text-blue-100">Omzet Gegenereerd</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">87%</div>
              <div className="text-blue-100">Succespercentage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Uur Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;