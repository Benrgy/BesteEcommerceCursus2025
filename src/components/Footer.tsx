import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
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

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:support@ecom-education.com" className="text-gray-300 hover:text-white transition-colors">
                  support@ecom-education.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+31-20-1234567" className="text-gray-300 hover:text-white transition-colors">
                  +31 20 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Amsterdam, Nederland</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
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
                <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Ondersteuning
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Business */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Juridisch & Bedrijf</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
                  Algemene Voorwaarden
                </a>
              </li>
              <li>
                <a href="#refund" className="text-gray-300 hover:text-white transition-colors">
                  Restitutiebeleid
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <span className="text-gray-300">KvK: 12345678</span>
              </li>
              <li>
                <span className="text-gray-300">BTW: NL123456789B01</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ecom Education. Alle rechten voorbehouden. Opgericht in 2019, dienend aan ondernemers door heel Europa.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇳🇱 Gevestigd in Nederland</span>
              <span>🇪🇺 Dienend aan heel Europa</span>
              <span>🌍 Wereldwijde Ondersteuning</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> Individuele resultaten kunnen variëren. Succes in e-commerce vereist toewijding, 
              inspanning en toepassing van de geleerde strategieën. Hoewel ons programma duizenden heeft geholpen 
              significante resultaten te behalen, kunnen we geen specifieke inkomensniveaus garanderen. Alle testimonials 
              zijn van echte studenten maar individuele ervaringen kunnen verschillen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;