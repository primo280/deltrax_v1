import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1F2A37', color: '#ffffff', padding: '2rem 1rem', fontSize: '14px', textAlign: 'center', justifyContent:'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Entreprise Section */}
        <div style={{ margin: '1rem' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>ENTREPRISE</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link legacyBehavior href="/blog"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Blog</a></Link></li>
            <li><Link legacyBehavior href="/faqs"><a style={{ color: '#ffffff', textDecoration: 'none' }}>FAQs</a></Link></li>
            <li><Link legacyBehavior href="/about"><a style={{ color: '#ffffff', textDecoration: 'none' }}>About</a></Link></li>
            <li><Link legacyBehavior href="/contact"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</a></Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div style={{ margin: '1rem' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>SERVICES</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link legacyBehavior href="/exchanges"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Exchanges</a></Link></li>
            <li><Link legacyBehavior href="/academia"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Academia</a></Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div style={{ margin: '1rem' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>LEGAL</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link legacyBehavior href="/privacy-policy"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</a></Link></li>
            <li><Link legacyBehavior href="/terms"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Terms & Conditions</a></Link></li>
          </ul>
        </div>

        {/* Duplicate Entreprise Section */}
        <div style={{ margin: '1rem' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>ENTREPRISE</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link legacyBehavior href="/privacy-policy"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</a></Link></li>
            <li><Link legacyBehavior href="/terms"><a style={{ color: '#ffffff', textDecoration: 'none' }}>Terms & Conditions</a></Link></li>
          </ul>
        </div>
      </div>

    
      <div style={{ margin: ' 0.5rem', paddingLeft:"47%" }}>
        <Image src="/Tete.png" alt="DELTRAX Logo" width={50} height={50}  />
        
      </div>

      <p style={{ fontSize: '18px', fontWeight: 'bold'}}>DELTRAX</p>
      <p>2024 - Deltrax - Tous droits réservés</p>

    
      <div style={{ marginTop: '1rem' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#ffffff', fontSize: '20px', textDecoration: 'none' }}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#ffffff', fontSize: '20px', textDecoration: 'none' }}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#ffffff', fontSize: '20px', textDecoration: 'none' }}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
