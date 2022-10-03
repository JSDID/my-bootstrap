import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Img from '../Legends.jpg';

function Box () {
  return (
    <><h1 className="boxs">Boxs</h1><Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img src={Img} alt="Legends" className='legeneds'/>
                <h5>Tab 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur praesentium odio in quos molestiae. Nemo sint expedita dolorum reiciendis magnam quos asperiores corrupti, voluptatem ea earum exercitationem dignissimos unde!</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img src={Img} alt="Legends" className='legeneds'/>
                <h5>Tab 2</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur praesentium odio in quos molestiae. Nemo sint expedita dolorum reiciendis magnam quos asperiores corrupti, voluptatem ea earum exercitationem dignissimos unde!</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container></>
  );
}

export default Box;