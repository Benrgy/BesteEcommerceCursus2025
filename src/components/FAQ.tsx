import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Hoeveel geld heb ik nodig om mijn e-commerce business te starten?',
      answer: 'Je kunt beginnen met zo weinig als €300-€500. Dit dekt je initiële productkosten, basis tools en advertentiebudget. In tegenstelling tot traditionele bedrijven die tienduizenden euro\'s aan opstartkapitaal vereisen, minimaliseert ons dropshipping model de voorinvestering terwijl het winstpotentieel wordt gemaximaliseerd.'
    },
    {
      question: 'Heb ik technische ervaring nodig om mijn online winkel te bouwen?',
      answer: 'Geen technische ervaring is vereist. Ons programma bevat stap-voor-stap video tutorials die je begeleiden bij het opzetten van je winkel met gebruiksvriendelijke platforms. We bieden kant-en-klare templates en behandelen alle technische complexiteit voor je. Als je eenvoudige instructies kunt volgen, kun je je winkel bouwen.'
    },
    {
      question: 'Hoe snel kan ik resultaten verwachten en mijn eerste verkoop maken?',
      answer: 'De meeste studenten maken hun eerste verkoop binnen 2-4 weken na het voltooien van de initiële modules. Het bouwen van een duurzaam €5k-€20k maandelijks inkomen duurt echter meestal 2-4 maanden van consistente inspanning. We bieden realistische tijdlijnen en helpen je haalbare mijlpalen te stellen gedurende je reis.'
    },
    {
      question: 'Wat maakt jullie programma anders dan andere e-commerce cursussen?',
      answer: 'Ons programma is gebouwd door ondernemers die persoonlijk meer dan €10 miljoen aan e-commerce omzet hebben gegenereerd. We bieden doorlopende ondersteuning via wekelijkse coaching calls, een actieve community van 5.000+ studenten en geavanceerde AI tools. Plus, je krijgt levenslange toegang tot alle updates en nieuwe content.'
    },
    {
      question: 'Bieden jullie doorlopende ondersteuning nadat ik de cursus heb voltooid?',
      answer: 'Ja! Je krijgt levenslange toegang tot onze community en 6 wekelijkse coaching calls. Ons expert team blijft je ondersteunen terwijl je je business laat groeien. We updaten ook regelmatig de cursusinhoud met nieuwe strategieën en tools om je voor te blijven op de concurrentie.'
    },
    {
      question: 'Kan ik dit part-time doen terwijl ik mijn huidige baan behoud?',
      answer: 'Absoluut! Veel van onze meest succesvolle studenten begonnen part-time. Je kunt beginnen met slechts 10-15 uur per week en opschalen naarmate je business groeit. Ons systeem is ontworpen om rond je bestaande verplichtingen te passen, en we bieden tijdmanagement strategieën specifiek voor part-time ondernemers.'
    },
    {
      question: 'Wat als ik buiten Nederland woon? Werkt dit internationaal?',
      answer: 'Onze strategieën werken wereldwijd! Hoewel onze oprichters gevestigd zijn in Nederland, komen onze studenten uit heel Europa en daarbuiten. We behandelen internationale verzending, wereldwijde betalingsverwerking en regiospecifieke marketingstrategieën. De e-commerce principes die we leren zijn universeel toepasbaar.'
    },
    {
      question: 'Is er een geld-terug-garantie als ik niet tevreden ben?',
      answer: 'Ja, we bieden een 30-dagen geld-terug-garantie. Als je de eerste maand training voltooit en niet tevreden bent met de kwaliteit en waarde van ons programma, zullen we je investering volledig terugbetalen. We zijn zelfverzekerd over ons systeem en staan er 100% achter.'
    },
    {
      question: 'Hoe helpen jullie me winstgevende producten te vinden om te verkopen?',
      answer: 'We bieden toegang tot onze eigen productonderzoek tools en database van gescreende leveranciers. Je leert onze bewezen productselectie criteria, marktvalidatie technieken en trendanalyse methoden. We delen ook winnende producten uit onze community en leren je kansen te identificeren die anderen missen.'
    },
    {
      question: 'Welke doorlopende kosten kan ik verwachten naast de cursuskosten?',
      answer: 'Naast de programmakosten heb je budget nodig voor productkosten (meestal €100-€300/maand om te beginnen), advertentie-uitgaven (we raden aan te beginnen met €300-€500/maand), en basis business tools (rond €50-€100/maand). We leren je hoe je deze kosten effectief beheert en winstgevend schaalt.'
    }
  ];

  return (
    <section id="veelgestelde-vragen" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Krijg antwoorden op de meest gestelde vragen over ons e-commerce onderwijs programma 
            en wat je kunt verwachten van je reis naar het bouwen van een succesvol online bedrijf.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nog Steeds Vragen?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kun je het antwoord dat je zoekt niet vinden? Ons expert team is er om te helpen. 
            Krijg gepersonaliseerde antwoorden op je specifieke vragen over het starten van je e-commerce reis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Krijg Persoonlijke Consultatie
            </a>
            <a
              href="#community"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Vraag Onze Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;