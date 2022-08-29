import AboutCont from "../components/AboutCont";
import Partners from "../components/partners";
import Zoom from 'react-reveal/Zoom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const about = () => {
    const aboutImage = "/images/about.jpg";
    return (
        <div>
            <div className="row">
                <div className="col">
                <AboutCont aboutImage={aboutImage} />
                </div>
            </div>
            <div className="row" style={{"marginTop":"100px"}}>
                <div className="text-center">
                <Zoom delay={1000} duration={2000}>
                <span className='fs-3 fw-bolder text-white headingBorder'>Our Team</span>
                </Zoom>
                </div>
            </div>
            <Container className='my-5'>
                <Row className='d-flex justify-content-center'>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid1.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 1</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid2.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 2</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid3.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 3</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid1.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 1</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid2.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 2</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                    <Col className="col-lg-3 col-md-6 col-sm-12 mx-2 my-2 teamCard py-2">
                        <img src="images/slid3.jpg" width={"100%"} height={"200px"} alt="partners" />
                        <h5 className='text-center text-danger py-2'>Employer 3</h5>
                        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                    </Col>
                </Row>
            </Container>
            <div className="row">
                <Partners />
            </div>
        </div>
    )
}

export default about
