import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App() {
  return (

<div className="flex flex-col min-h-screen"> 
      <Navbar />
      
      <main className="flex-grow">

        <h1 className="text-2xl p-8 text-center"></h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;