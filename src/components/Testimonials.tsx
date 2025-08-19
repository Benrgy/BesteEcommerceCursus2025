import React from 'react';
import { Star, Quote, TrendingUp, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah van der Berg',
      title: 'E-commerce Ondernemer',
      location: 'Amsterdam, Nederland',
      revenue: '€125,000/month',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Ik ging van complete beginner naar €125k maandelijkse omzet in slechts 8 maanden. De community ondersteuning en wekelijkse coaching calls waren game-changers voor mij.',
      results: 'Begonnen met €300, nu €125k/maand genereren'
    },
    {
      name: 'Marco Jansen',
      title: 'Digital Marketing Specialist',
      location: 'Rotterdam, Nederland',
      revenue: '€85,000/month',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'De AI tools en automatiseringsstrategieën die in dit programma worden geleerd hebben me 20+ uur per week bespaard. Ik kan me nu focussen op schalen in plaats van dagelijkse operaties.',
      results: 'Geautomatiseerde systemen gebouwd die €85k/maand genereren'
    },
    {
      name: 'Lisa de Vries',
      title: 'Voormalig Corporate Executive',
      location: 'Utrecht, Nederland',
      revenue: '€95,000/month',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Na 15 jaar in het bedrijfsleven bouwde ik mijn eigen €95k/maand business in 6 maanden. De stap-voor-stap begeleiding maakte het mogelijk zelfs met mijn drukke schema.',
      results: 'Corporate salaris vervangen door €95k/maand business'
    },
    {
      name: 'David Bakker',
      title: 'Universiteitsstudent',
      location: 'Den Haag, Nederland',
      revenue: '€45,000/month',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Als student begon ik met slechts €200. Binnen 4 maanden verdiende ik meer dan mijn ouders. De community hielp me bij elke stap.',
      results: 'Student die €45k/maand verdient tijdens studie'
    },
    {
      name: 'Emma Smit',
      title: 'Mode Ondernemer',
      location: 'Eindhoven, Nederland',
      revenue: '€110,000/month',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Het leveranciersnetwerk en branding strategieën hielpen me een premium mode merk te bouwen. Ik ging van dropshipping naar mijn eigen merk in slechts één jaar.',
      results: 'Premium merk gebouwd dat €110k/maand genereert'
    },
    {
      name: 'Tom Visser',
      title: 'Tech Professional',
      location: 'Groningen, Nederland',
      revenue: '€75,000/month',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'De technische kant was perfect voor mij. De integratie met AI tools en geavanceerde analytics hielp me alles te optimaliseren voor maximale winst.',
      results: 'Geoptimaliseerde tech stack die €75k/maand genereert'
    }
  ];

  return (
    <section id="succesverhalen" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Echte Studenten, Echte Resultaten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Geloof niet alleen ons woord. Zie hoe onze studenten hun leven hebben getransformeerd 
            met ons bewezen e-commerce onderwijs programma.
          </p>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5.000+</div>
              <div className="text-gray-600">Succesverhalen</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">€10M+</div>
              <div className="text-gray-600">Omzet Gegenereerd</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
              <div className="text-gray-600">Succespercentage</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600">Gemiddelde Beoordeling</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Succesvolle e-commerce ondernemer`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold text-lg">{testimonial.revenue}</div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Results */}
              <div className="bg-green-50 rounded-xl p-4 flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium text-sm">{testimonial.results}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Bekijk Meer Succesverhalen
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Bekijk video testimonials van onze studenten die hun complete reis delen van 
            beginner tot succesvolle e-commerce ondernemer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Sluit Je Aan Bij Onze Community</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Bekijk Video Verhalen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;