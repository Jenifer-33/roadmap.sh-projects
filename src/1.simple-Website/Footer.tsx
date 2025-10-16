import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col} from 'react-bootstrap';
export const Footer=()=>{
    return(
      
            <Card className="p-3" style={{height:'300px'}}>
                    <Card.Title >Reviews From My Teachers</Card.Title> 
                  
            <Row >
                 <Col className=' pt-4'> <Card className=" border rounded-4 p-3" >
                <Card.Text>John Doe was a brilliant student; always stood out with his assignments.</Card.Text>
                <Card.Subtitle>Jane Doe, Assistant Professor</Card.Subtitle>
               </Card> </Col >
                 <Col className=' pt-4'><Card className=" border rounded-4 p-3">
                <Card.Text>John Doe was a brilliant student; always stood out with his assignments.</Card.Text>
                <Card.Subtitle>Jane Doe, Assistant Professor</Card.Subtitle>
               </Card> </Col>
                  <Col className=' pt-4'> <Card className="border rounded-4 p-3">
                <Card.Text>John Doe was a brilliant student; always stood out with his assignments.</Card.Text>
                <Card.Subtitle>Jane Doe, Assistant Professor</Card.Subtitle>
               </Card> </Col>
            </Row></Card>
            
    )
}