import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FacebookOutlined } from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { GooglePlusOutlined } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';
const Footer = () => {
    return (
        <div style={{"marginTop":"200px"}} id="footer">
        <Container className='text-white border-bottom border-4 border-danger p-5'>
            <Row>
                <Col>
                <h1 className='text-white'>LOGO</h1>
                <p>SLOGAN COMPANY</p>
                </Col>
                <Col>
                <p>THEMES</p>
                <p>PRE SALE FAQS</p>
                <p>BUT TICKETS</p>
                </Col>
                <Col>
                <p>SERVICES</p>
                <p>THEME TWEAKS</p>
                </Col>
                <Col>
                <p>SHOWCASE</p>
                <p>WIDGETKIT</p>
                <p>SUPPORT</p>
                </Col>
                <Col>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>AFFILIATES</p>
                <p>RESOURCES</p>
                </Col>
            </Row>
        </Container>
        <div className="container-fluid my-3">
            <div className="d-flex justify-content-center text-danger">
            <FacebookOutlined className='fs-4 p-2' />
            <WhatsAppOutlined className='fs-4 p-2' />
            <InstagramOutlined className='fs-4 p-2' />
            <GooglePlusOutlined className='fs-4 p-2' />
            <TwitterOutlined className='fs-4 p-2' />
            </div>
            <p className="text-center py-4 text-light">Copyright &copy; All Rights Reserved</p>
        </div>
        </div>
    )
}

export default Footer
