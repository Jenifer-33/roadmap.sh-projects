import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card,Breadcrumb,Row,Col} from "react-bootstrap"
export const Header=()=>{
    return(
        <Container   className='p-0'>
            <Card className="p-4"style={{ height: '300px'}}>
           <Row>
            <Col><Card.Text><strong>Your Name</strong></Card.Text></Col>
            <Col xs={5} className="text-end">
            <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Articles</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">contacts</Breadcrumb.Item>
                  </Breadcrumb>
                  </Col>
                  </Row>
                  

                <Card.Title className="d-flex justify-content-center align-items-center pt-5" as="h1">Frontend Developer </Card.Title>
                <Card.Subtitle className="d-flex justify-content-center align-items-center">frontend developer with strong passion to learn and implement</Card.Subtitle>
                 </Card> 
        </Container>
        
    )
}