import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path = "/" element={<Layout />} >
                    <Route index element={<Gallery />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
