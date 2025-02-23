// components/Footer.jsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">À Propos de Nous</h3>
            <p className="text-blue-100">
              Votre plateforme de confiance pour les services à domicile et soins de santé. 
              Nous connectons les professionnels qualifiés avec ceux qui en ont besoin.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="hover:text-blue-200 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-200 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className=" hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Services Médicaux
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Soins Dentaires
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Services à Domicile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Urgences
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Rendez-vous Express
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-200" />
                <span className="text-blue-100">+212 681 566 34</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-200" />
                <span className="text-blue-100">contact@domicile-sante.ma</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-blue-200" />
                <span className="text-blue-100">24/7 - Support Client</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-200" />
                <span className="text-blue-100">Guelmim,Maroc</span>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </footer>
  );
}