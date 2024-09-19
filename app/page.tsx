'use client';
import { useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import GetInTouch from './pages/GetInTouch';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import WorkingExp from './pages/WorkingExp';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const landingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sideNavRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pagesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const workRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      landingRefs.current,
      { opacity: 0, y: -20 },
      { duration: 0.8, opacity: 1, y: 0, ease: Power3.easeOut, stagger: 0.2 }
    )
      .fromTo(sideNavRefs.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        pagesRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power3.out',
          // stagger: 0.1,
          scrollTrigger: {
            trigger: pagesRefs.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
            // markers: true,
          },
        }
      );
    // .fromTo(
    //   workRefs.current,
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.3,
    //     ease: 'power3.out',
    //     // stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: workRefs.current,
    //       start: 'bottom 110%',
    //       toggleActions: 'play reset play reset',
    //       markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <main className='flex flex-col h-screen scroll-smooth'>
      <NavBar refs={sideNavRefs} />
      <LandingPage refs={landingRefs} />
      <AboutMe refs={pagesRefs} />
      <WorkingExp />
      <Projects />
      <GetInTouch />
      <Sidebar refs={sideNavRefs} />
    </main>
  );
}
