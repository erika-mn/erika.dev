import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import GetInTouch from './pages/GetInTouch';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import WorkingExp from './pages/WorkingExp';

export default function Home() {
  return (
    <main className='flex flex-col h-screen '>
      <NavBar />
      <LandingPage />
      <AboutMe />
      <WorkingExp />
      <Projects />
      <GetInTouch />
      <Sidebar />
    </main>
  );
}
