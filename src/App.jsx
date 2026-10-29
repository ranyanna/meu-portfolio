import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfileHeader />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;