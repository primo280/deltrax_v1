import Hero from '../components/Hero';
import About from '../components/About';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
const Home = () => {  return (
    <div>
      
      <div>
        <Hero/>
        <About/>
        <OurServices/>
        <Testimonials/>
        <FAQs/>
        
      </div>
    </div>
  );
};

export default Home;