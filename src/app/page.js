import './globals.css'
import "./app.scss";
import dynamic from 'next/dynamic';
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";
import Contact from "./components/Contact";
// import Earth from './components/Earth';

const Earth = dynamic(() => import('./components/Earth'), {
  ssr: false,
  loading: () => <img src="/images/hero-dots.png"></img>
})


export default function Home() {
  return (
    <main>
      <section className="slider"><Hero /></section>
      <section className="slider">
        <Navbar />
        <About />
      </section>
      <section className="slider relative"><Earth/> <WhatIDo /></section>
      {/* <section className="slider"><WhatIDo /></section> */}
      <section className="slider"><Skills /></section>
      <section className="slider"><Projects /></section>
      <section className="slider"><Contact /></section>
    </main>
  );
}
