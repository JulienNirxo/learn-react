import React from 'react';
import Car from './Car';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      {/* Contenu principal de l'application */}
      <main>
        {/* ... */}
        <Car />
      </main>
      <Footer />
    </div>
  );
}

export default App;
