const Navbar = () => {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#1F2A37', color: '#FFFFFF',  }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/Tete.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#ECC94B' }}>DELTRAX</span>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 15px' }}><a href="/about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a></li>
          <li style={{ margin: '0 15px' }}><a href="/faqs" style={{ color: '#FFFFFF', textDecoration: 'none' }}>FAQs</a></li>
          <li style={{ margin: '0 15px' }}><a href="/blog" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Blog</a></li>
          <li style={{ margin: '0 15px' }}><a href="/contact" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contact</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#ECC94B', color: '#1A202C', border: 'none', borderRadius: '20px', cursor: 'pointer' }}><a href="/Signup" style={{ color: '#1A202C', textDecoration: 'none' }}>Get in start</a></button>
          <button style={{ padding: '5px 15px', backgroundColor: 'transparent', color: '#FFFFFF', border: '1px solid #FFFFFF', borderRadius: '20px', cursor: 'pointer' }}><a href="/Signin" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Login</a></button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;