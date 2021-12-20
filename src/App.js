import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Carousel, Container, Image, Nav, Navbar, NavDropdown, Card, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import ClientReview from './components/ClientReview';
import Navbars from './components/Navbars';
import Cards from './components/Cards';
import Carousels from './components/Carousels';

function App() {
  return (<>

    <Navbars />
    <Carousels />
    <Cards />
    <ClientReview />
    <Footer />


  </>

  );
}

export default App;
