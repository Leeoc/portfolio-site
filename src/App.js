import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience';
import Technologies from './components/Technologies/Technologies';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Hero />
      <Experience />
      <Technologies />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
