import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-8 max-w-5xl px-4">
        
        <div>
          <h3 className="text-lg font-bold mb-4">ENTREPRISE</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" legacyBehavior>
                <a className="hover:underline">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs" legacyBehavior>
                <a className="hover:underline">FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/exchanges" legacyBehavior>
                <a className="hover:underline">Exchanges</a>
              </Link>
            </li>
            <li>
              <Link href="/academia" legacyBehavior>
                <a className="hover:underline">Academia</a>
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" legacyBehavior>
                <a className="hover:underline">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms" legacyBehavior>
                <a className="hover:underline">Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-4">ENTREPRISE</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" legacyBehavior>
                <a className="hover:underline">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms" legacyBehavior>
                <a className="hover:underline">Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="mt-6 flex justify-center">
        <Image src="/Tete.png" alt="DELTRAX Logo" width={50} height={50} />
      </div>
      <p className="text-lg font-bold mt-2">DELTRAX</p>
      <p className="text-sm">2024 - Deltrax - Tous droits réservés</p>

     
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
