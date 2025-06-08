import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import './index.css'
import Hero from './Components/Hero/Hero.jsx';
import CardComponent from './Components/Card/CardComponent.jsx';
import Section from './Components/Section/Section.jsx';
import SongsSection from './Components/Songs/SongsSection.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <CardComponent /> */}
    <Section title="Top Albums" apiUrl={"https://qtify-backend-labs.crio.do/albums/top"}/>
    <Section title="New Albums" apiUrl={"https://qtify-backend-labs.crio.do/albums/new"}/>
    <SongsSection />
    </>
  );
}

export default App;
