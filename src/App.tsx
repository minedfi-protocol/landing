import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Analytics />
      <Hero />
    </main>
  );
}

export default App;
