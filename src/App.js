import { Routes, Route } from 'react-router-dom';  // Remove Router import
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Contact from './pages/home/contact.jsx'
import Product from './pages/products/products.jsx';
import Productsdetail from './pages/home/productsdetails.jsx';
import Cotton from './pages/products/cotton.jsx';
import Polyster from './pages/products/polyster.jsx';
import Filament from './pages/products/filament.jsx';
import Client from './pages/clients/client.jsx';
import Sustainability from './pages/sustainability/sustainability.jsx';
import DownloadCenter from './pages/download/downloadcenter.jsx';

function App() {
  return (
    <Routes>  {/* No Router wrapper */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/productsdetails" element={<Productsdetail/>}/>
      <Route path="/cotton" element={<Cotton/>}/>
      <Route path="/polyster" element={<Polyster/>}/>
      <Route path="/filament" element={<Filament/>}/>
      <Route path="/clients" element={<Client/>}/>
      <Route path="/sustainability" element={<Sustainability/>}/>
      <Route path="/download-center" element={<DownloadCenter />} />
      <Route path="/download-center/:type" element={<DownloadCenter />} />
    </Routes>
  );
}

export default App;