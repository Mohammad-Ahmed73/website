import React from 'react';
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <section className='py-5'>
        <div className='container-lg'>
          <h3 className='head-h3'>Simplify Your Shopping Experience with Our Powerful Platform</h3>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='list-unstyled'>
                <li>
                  Extensive product database Price
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <figure className='mb-0 image'>
                <img src='' />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='head-h2'>Exclusive Deals</h2>
            </div>
            <div className='col-md-6'>
              <figure className='mb-0 image'>
                <img src='' />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container-lg'>
          <div className='row'>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
