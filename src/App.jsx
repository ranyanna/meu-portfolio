import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <ProfileHeader />
    </main>
    </>
  );
}

export default App;