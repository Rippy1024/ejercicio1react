import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className='container'>
          <Navbar.Brand href="#home">
           {' '}
            Practico React 
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section className='pt-4 mt-4 mainPage'>
      <h1 className='text-center display-2 my-4'>Hola Mundo!!!</h1>
      </section>
      <Footer></Footer>
      </>
  )
}

export default App
