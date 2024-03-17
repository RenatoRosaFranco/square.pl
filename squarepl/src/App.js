import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

// Pages
import Home    from './pages/Home/Index';
import Company from './pages/Company/Index';
import Jobs    from './pages/Jobs/Index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
