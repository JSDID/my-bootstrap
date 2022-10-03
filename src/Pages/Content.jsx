import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Content = () => {
  return (
    <>
     <h1 className="cards">Cards</h1>
       <Container>
      <Row>
        <Col sm={6}>
           <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/13613094/pexels-photo-13613094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
       </Card.Body>
       </Card>
        </Col>
         <Col sm={6}>
           <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/13613094/pexels-photo-13613094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image'/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Content;
