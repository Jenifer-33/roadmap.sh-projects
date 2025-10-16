import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import { Section } from './Section';
import { Footer } from './Footer';
export const Page=()=> {
  return (
   
   <div className="d-flex justify-content-center align-items-center bg-light"
  style={{ minHeight: '100vh', width: '100vw', padding: '2rem' }} >

  <Container
    className="border border-dark p-0 bg-white"
    style={{
      maxWidth: '800px',
      width: '90%',
    }}
  >
        <Header />
        <Section />
        <Footer />
      </Container>
    </div>
  );
}


