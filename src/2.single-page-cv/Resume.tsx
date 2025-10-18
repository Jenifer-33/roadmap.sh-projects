import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,ListGroup,Container} from 'react-bootstrap';
function Resume() {
  return (
     <div className="d-flex justify-content-center align-items-center"
  style={{ minHeight: '100vh', width: '100vw', padding: '2rem' }} >

  <Container
    className=" border-dark  "
    style={{
      maxWidth: '700px',
      width: '90%',
    }}
  >
      <Card className="border-dark ">
      <Card.Body>
        {/* header */}
        <hr/>
        <Card.Title as="h2">Divya Jenifer</Card.Title>
        <Card.Subtitle > Junior Frontend Developer</Card.Subtitle>
        <br/>
        <Card.Text> 123 west street,Dindigul,Tamilnadu,India.(123)345-678divya@gmail.com </Card.Text>
       <hr/>

  {/* skills */}
  <h5 className="text-success mt-3">Skills</h5>
    <Card.Text>   
        Html,css,java script,react,git  
    </Card.Text>
    {/* Education */}
    <h5 className="text-success mt-3">Education</h5>
    <Card.Text className="mb-1 text-primary">SSMIET,Dindigul,Tamilnadu,India-B.E/ECE</Card.Text>
    <Card.Text>April 20th 2025</Card.Text>
    <Card.Text>Volly ball,tennis,chess,drawing,Painting</Card.Text>

    {/* Experience.1 */}
    <h5 className="text-success mt-3">Experience</h5>
    <Card.Text className="mb-1 text-primary">kenpack- junior frontend developer</Card.Text>
    <Card.Text>10.5.2025 to 7.11.2026</Card.Text>
    <ListGroup variant="flush">
        <ListGroup.Item>Established comprehensive testing protocols achieving 95% code coverage</ListGroup.Item>
        <ListGroup.Item>Developed product design solutions through user research and prototyping</ListGroup.Item>
        <ListGroup.Item>Developed responsive React applications from Figma specs and wireframes</ListGroup.Item>
      </ListGroup>
      <br/>

      {/* Experience.2 */}
      <Card.Text className="mb-1 text-primary">Gateway Software solutions- junior frontend developer</Card.Text>
    <Card.Text>10.5.2025 to 7.11.2026</Card.Text>
    <ListGroup variant="flush">
        <ListGroup.Item>Established comprehensive testing protocols achieving 95% code coverage</ListGroup.Item>
        <ListGroup.Item>Developed product design solutions through user research and prototyping</ListGroup.Item>
        <ListGroup.Item>Developed responsive React applications from Figma specs and wireframes</ListGroup.Item>
      </ListGroup>
   
    {/* Internet links */}
    <h5 className="text-success mt-3">Across the Internet</h5>
    <Card.Link href="#">LinkdIn account</Card.Link>
    <Card.Link href="#">Git account</Card.Link>
    </Card.Body>
   
    </Card>
   </Container>  
   </div>
  );
}

export default Resume;