const About = () => {
    return (
      <section style={{ padding: '50px 20px', backgroundColor: '#1A202C', color: '#FFFFFF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: 1, marginRight: '20px', backgroundColor: '#1A202C', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ color: '#ECC94B', fontSize: '1.5rem', fontWeight: 'bold' }}>Deltrax <span style={{ color: '#FF9F1C' }}>Academy</span></h2>
            <p style={{ margin: '20px 0' }}>Our training academy offers a meticulously crafted curriculum designed to equip you with the knowledge and skills needed to navigate the complexities of the financial markets.</p>
            <ul style={{ textAlign: 'left', padding: '0 20px' }}>
              <li>📘 Robust Curriculum: Fundamental & technical analysis, risk management, advanced strategies.</li>
              <li>🎓 Seasoned Instructors: Learn from experienced professionals in the financial industry.</li>
              <li>🖥️ Interactive Experience: Live webinars, quizzes, and practical exercises for hands-on learning.</li>
            </ul>
            <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ECC94B', color: '#1A202C', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Know more</button>
          </div>
          <div style={{border:"solid", color:"rgba(209, 213, 219, 1)", width:"1px"}}></div>
          <div style={{ flex: 1, marginLeft: '20px', backgroundColor: '#1A202C', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ color: '#ECC94B', fontSize: '1.5rem', fontWeight: 'bold' }}>Deltrax <span style={{ color: '#FF9F1C' }}>Trading</span></h2>
            <p style={{ margin: '20px 0' }}>Our training academy offers a meticulously crafted curriculum designed to equip you with the knowledge and skills needed to navigate the complexities of the financial markets.</p>
            <ul style={{ textAlign: 'left', padding: '0 20px' }}>
              <li>📘 Robust Curriculum: Fundamental & technical analysis, risk management, advanced strategies.</li>
              <li>🎓 Seasoned Instructors: Learn from experienced professionals in the financial industry.</li>
              <li>🖥️ Interactive Experience: Live webinars, quizzes, and practical exercises for hands-on learning.</li>
            </ul>
            <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ECC94B', color: '#1A202C', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Know more</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  