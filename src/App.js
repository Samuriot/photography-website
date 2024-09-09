import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Layout from './components/Layout/Layout';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path = "/" element={<Layout />} >
                    <Route index element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
