import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col, ListGroup } from 'react-bootstrap';
export const Section=()=>{
    return(
       
          <Row className="g-0">
                {/* projects */}
                 <Col md={4} ><Card  style={{height:'350px'}}>
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>HTML Only Portfolio</ListGroup.Item>
                      <ListGroup.Item>Calculator</ListGroup.Item>
                       <ListGroup.Item>Quiz App</ListGroup.Item>
                        <ListGroup.Item>Countdown Timer</ListGroup.Item>
                         <ListGroup.Item>Product Upcoming Page</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
                </Col>
                {/* Work Experience */}
                <Col md={4} ><Card  style={{height:'350px'}}>
<Card.Body>
                    <Card.Title>Work Experience</Card.Title>
                    <Card.Subtitle>roadmap.sh</Card.Subtitle>
                    <Card.Text>Solved all the frontend projects</Card.Text>
                    <Card.Link>visit my profile</Card.Link>
                    <hr/>
                <Card.Subtitle>OpenSource work</Card.Subtitle>
                <Card.Text>
                    Contributed to 50 open source projects. Made my own projects with 200 GitHub stars.
                </Card.Text>
                <Card.Link>Visit my GitHub Profile</Card.Link>
                    </Card.Body></Card></Col>

                    {/* Education */}
                    <Col md={4} ><Card style={{height:'350px', fontSize:'13px'}}>
                        <Card.Body>
                            <Card.Title>Education</Card.Title>
                            <Card.Text>
                                Graduated with <strong>3.76 out of 4 CGPA</strong>. Won Acme Hackathon. Organized 30 sessions.
                            </Card.Text>
                            <Card.Subtitle>Couses I took:</Card.Subtitle>
                            <ul>
                                <li>Object Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Web Engineering</li>
                <li>Artificial Intelligence</li>
                <li>Human Computer Interaction</li>
                <li>Computer Graphics</li>
                <li>Database Management Systems</li>
                <li>Distributed Database Systems</li>
                <li>Discrete Mathematics</li></ul>
                        </Card.Body>
                    </Card>
                    </Col>

                
            </Row>
            
    
         

    )
}