import Hero from './components/Hero';
import Topics from './components/Topics';
import Featured from './components/Featured';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      <Topics />
      <Featured />
      <SiteFooter />
    </div>
  );
}

export default App;
