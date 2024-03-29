import CretaterOf from '@/components/Cretater';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';

const Home = () => {
  return (
    <Layout>
      <div className='font-spartan'>
        <HeroSection />
        <Skills />
        <CretaterOf />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
