import Header from '../components/Header';
import Presentation from '../components/Presentation';
import GitHubProjectsProvider from '../components/GitHubProjectsProvider';
import ProjectCarousel from '../components/ProjectCarousel';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <GitHubProjectsProvider>
          <ProjectCarousel />
        </GitHubProjectsProvider>
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
