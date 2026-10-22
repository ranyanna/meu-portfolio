import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfileHeader />
      <Projects />
    </main>
    </>
  );
}

export default App;