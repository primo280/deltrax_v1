const Hero = () => {
  return (
    <section style={{ padding: '7px 20px', backgroundColor: '#1A202C', color: '#FFFFFF' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.1rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Elevate Your <br/> <span style={{ color: '#FFCB01' }}>Crypto </span><span style={{ color: '#FF7759' }}> Skills</span>
          </h1>
          <p style={{ fontSize: '0,7rem', marginBottom: '30px' }}>
            From promoting digital education and economic empowerment to creating cutting-edge technological solutions
          </p>
          <button style={{ padding: '10px 20px', backgroundColor: '#ECC94B', color: '#1A202C', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '1rem' }}>Join Academy</button>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src="/crypto-coins.png" alt="Crypto Coins" style={{ width: '300px', height:"400px", borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Crypto Experience with <span style={{ color: '#ECC94B' }}>Our Dual Platform!</span>
        </h2>
        <p style={{ fontSize: '1rem' }}>
          Accelerate Your Learning Curve, Amplify Your Profits: Seamlessly Integrate Trading and Training for Optimal Results
        </p>
      </div>
    </section>

  );
};

export default Hero;
