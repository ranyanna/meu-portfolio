import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfileHeader />
      <Projects />
      <About />
      <Skills />
    </main>
    </>
  );
}

export default App;