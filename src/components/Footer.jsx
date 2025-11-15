import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router';



export const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:justify-evenly">
      <div>
        <h2 className="text-gold-light text-xl font-semibold">Where to find us: </h2>
        <a   className="flex items-center gap-2 text-gold-light hover:text-gold whitespace-nowrap"

          href="https://www.google.com/maps/place/%C4%8Cechova+307%2F27,+170+00+Praha+7/@50.1024042,14.4177148,17z/data=!3m1!4b1!4m6!3m5!1s0x470b94d07bf76f1f:0x5e764ea5d03c52fe!8m2!3d50.1024008!4d14.4202897!16s%2Fg%2F11j0py8td3?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
        >
          <MapPin className="w-5 h-5" />
        Čechova 27, Prague 7        </a>
        
        <p className="flex items-center gap-2 text-gold-light hover:text-gold whitespace-nowrap"> <Clock className="w-5 h-5"/> Every day 6am - 11:55pm</p>

      </div>
      <br />
      <div>
        <h2 className="text-gold-light text-xl font-semibold">Contact us: </h2>
        <a className="flex items-center gap-2 text-gold-light hover:text-gold whitespace-nowrap"
          href="tel:+420608493808"
        >
          <Phone className="w-5 h-5" />
          608 493 808
        </a>
        <a className="flex items-center gap-2 text-gold-light hover:text-gold whitespace-nowrap"
          href="mailto:jerry@vaultfit.cz"
        >
          <Mail className="w-5 h-5" />
          Jerry@vaultfit.cz
        </a>
        <a className="flex items-center gap-2 text-gold-light hover:text-gold whitespace-nowrap"
          href="https://www.instagram.com/"
        >
          <Instagram className="w-5 h-5" />
         Vault_Fit
        </a>
      </div>
      <div>
        <h2 className="text-gold-light text-xl font-semibold">More info: </h2>
        <Link
          to="/terms" 
          className="text-gold-light hover:text-gold transition-colors"
        >
          Terms & Conditions
        </Link>

      </div>
      </div>
    </footer>
  )
}
