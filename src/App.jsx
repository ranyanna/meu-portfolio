import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfileHeader />
      <Projects />
      <About />
    </main>
    </>
  );
}

export default App;