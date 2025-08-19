import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Ecom Education</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Het empoweren van ondernemers om succesvolle e-commerce bedrijven te bouwen door bewezen strategieën, 
              uitgebreide training en doorlopende ondersteuning. Opgericht door succesvolle ondernemers die 
              meer dan €10 miljoen aan e-commerce omzet hebben gegenereerd.
            </p>

            <div className="bg-blue-900 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-100">
                Klaar om te beginnen?
              </h3>
              <a
                href="https://www.paypro.nl/producten/Ecom_Education_Programma_(twv_%E2%82%AC6482)/107285/14535"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Je E-commerce Reis</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#programma" className="text-gray-300 hover:text-white transition-colors">
                  Complete Programma
                </a>
              </li>
              <li>
                <a href="#succesverhalen" className="text-gray-300 hover:text-white transition-colors">
                  Succesverhalen
                </a>
              </li>
              <li>
                <a href="#hoe-het-werkt" className="text-gray-300 hover:text-white transition-colors">
                  Hoe Het Werkt
                </a>
              </li>
              <li>
                <a href="#veelgestelde-vragen" className="text-gray-300 hover:text-white transition-colors">
                  Veelgestelde Vragen
                </a>
              </li>
              <li>
                <a 
                  href="https://www.paypro.nl/producten/Ecom_Education_Programma_(twv_%E2%82%AC6482)/107285/14535"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Schrijf Je Nu In</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ecom Education. Alle rechten voorbehouden.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇳🇱 Nederlandse E-commerce Training</span>
              <span>🌍 Wereldwijde Strategieën</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> Deze website bevat affiliate links. Individuele resultaten kunnen variëren. 
              Succes in e-commerce vereist toewijding, inspanning en toepassing van de geleerde strategieën. 
              Hoewel dit programma duizenden heeft geholpen significante resultaten te behalen, kunnen we geen 
              specifieke inkomensniveaus garanderen. Alle testimonials zijn representatief maar individuele 
              ervaringen kunnen verschillen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;