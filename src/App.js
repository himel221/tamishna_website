import { Routes, Route } from 'react-router-dom';  // Remove Router import
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Companies from './pages/company/companies.jsx';
import Contact from './pages/home/contact.jsx'
import Product from './pages/products/products.jsx';
import Productsdetail from './pages/home/productsdetails.jsx';
import Cotton from './pages/products/cotton.jsx';
import Polyster from './pages/products/polyster.jsx';
import Filament from './pages/products/filament.jsx';
import Client from './pages/clients/client.jsx';
import Sustainability from './pages/sustainability/sustainability.jsx';
import DownloadCenter from './pages/download/downloadcenter.jsx';
import Apparels from './pages/apparels/apparels.jsx';
import Zippers from './pages/zippers/zippers.jsx';
import Dyeing from './pages/dyeing/dyeing.jsx';
import Products from './pages/zippers/zproducts.jsx';
import Buyers from './pages/zippers/zbuyers.jsx';
import Aproducts from './pages/apparels/aproducts.jsx';
import Abuyers from './pages/apparels/abuyers.jsx';
import Dproducts from './pages/dyeing/dproducts.jsx';
import Dbuyers from './pages/dyeing/dbuyers.jsx';
import Acontact from './pages/apparels/acontact.jsx'
import Zcontact from './pages/zippers/zcontact.jsx'
import Dcontact from './pages/dyeing/dcontact.jsx'

function App() {
  return (
    <Routes>  {/* No Router wrapper */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/companies" element={<Companies/>}/>
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
      <Route path="/apparels" element={<Apparels/>}/>
      <Route path="/dyeing" element={<Dyeing/>}/>
      <Route path="/computer" element={<Apparels/>}/>
      <Route path="/zippers" element={<Zippers/>}/>
      <Route path="/zproducts" element={<Products/>}/>
      <Route path="/zbuyers" element={<Buyers/>}/>
      <Route path="/aproducts" element={<Aproducts/>}/>
      <Route path="/abuyers" element={<Abuyers/>}/>
      <Route path="/acontact" element={<Acontact/>}/>
      <Route path="/zcontact" element={<Zcontact/>}/>
      <Route path="/dproducts" element={<Dproducts/>}/>
      <Route path="/dbuyers" element={<Dbuyers/>}/>
      <Route path="/dcontact" element={<Dcontact/>}/>
    </Routes>
  );
}

export default App;