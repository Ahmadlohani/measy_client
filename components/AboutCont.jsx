import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const AboutCont = ({aboutImage}) => {
    return (
        <div>
        <Container className="my-5">
        <Row>
            <Col className="col-lg-6 col-sm-12 p-3">
                <h3 className='text-danger'>About Us</h3>
                <h5 className='text-danger'>We are Professional Teams for Sports Event Management</h5>
                <p className='text-light'>
                We work for the sports management. If there is any event happening
                somewhere. We provide complete details. Even we have tickets for you
                to go and enjoy yourself.
                </p>
            </Col>
            <Col className="col-lg-6 col-sm-12 parallelogram">
            <img src={aboutImage} alt="About" width="100%" height="300px" />
            </Col>
        </Row>
        </Container>  
        </div>
    )
}

export default AboutCont
