import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { UserContext } from "../context";
import Zoom from 'react-reveal/Zoom';
import SliderText from '../components/SliderText';
import Link from "next/link";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Partners from '../components/partners';
import Carousel from 'react-bootstrap/Carousel';
import AboutCont from '../components/AboutCont';
const aboutImage = "/images/about.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const index = () => {
    const [state, setState] = useContext(UserContext);
    return (
        <div>
            <div className="container-fluid" style={{"padding": "0px"}}>
            <Carousel fade>
            <Carousel.Item>
                <div style={{"position":"relative"}}>
                <img
                className="d-block w-100"
                height={"650px"}
                src="images/slid1.jpg"
                alt="First slide"
                />
                <div className='w-100' style={{"position": "absolute", "bottom": "6px", "left":"16px"}}>
                <SliderText />
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{"position":"relative"}}>
                <img
                className="d-block w-100"
                height={"650px"}
                src="images/slid3.jpg"
                alt="Second slide"
                />
                <div className='w-100' style={{"position": "absolute", "bottom": "6px", "left":"16px"}}>
                <SliderText />
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{"position":"relative"}}>
                <img
                className="d-block w-100"
                src="images/slid2.jpg"
                height={"650px"}
                style={{"objectFit":"cover","objectPosition":"center center"}}
                alt="Third slide"
                />
                <div className='w-100' style={{"position": "absolute", "bottom": "6px", "left":"16px"}}>
                <SliderText />
                </div>
                </div>
            </Carousel.Item>
            </Carousel>
            </div>
            {/* <div className="row" id="slider">
                <div className="bottom-left">
                <Zoom duration={3000}>
                <SliderText />
                </Zoom>
                </div>
            </div> */}
            <div className="row" style={{"marginTop":"100px"}}>
                <div className="text-center">
                <Zoom delay={1000} duration={2000}>
                <span className='fs-3 fw-bolder text-white headingBorder'>EVENTS</span>
                </Zoom>
                </div>
                <div className="text-end">
                <Link href={"events"}>
                <a className='btn btn-sm btn-danger' id='allProd' href="#">See All</a>
                </Link>
                </div>
            </div>
            <Container>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="justify-content-center p-3 mb-3 border-0">
            <Tab eventKey="all" title="All">
            <div className="row my-3">
                <div className="col my-3 d-flex justify-content-end">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi1.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center'>Social Media Site</Card.Title>
                    <Card.Text>
                    This is a social media site where you can create posts. Add Images
                    and change content at any time.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
                <div className="col my-3 d-flex justify-content-center">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="grow pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi2.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center'>Activity</Card.Title>
                    <Card.Text>
                    You can follow others. See their Posts and comment on Posts
                    to deliver what you feel about them.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
                <div className="col my-3 d-flex justify-content-start">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="grow pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi3.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center' >Authentication</Card.Title>
                    <Card.Text>
                    Login for best User Experience. Feel the Magic
                    of Social Media Activities.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
            </div>
            <div className="row my-3">
                <div className="col my-3 d-flex justify-content-end">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="grow pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi1.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center'>Social Media Site</Card.Title>
                    <Card.Text>
                    This is a social media site where you can create posts. Add Images
                    and change content at any time.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
                <div className="col my-3 d-flex justify-content-center">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="grow pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi2.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center'>Activity</Card.Title>
                    <Card.Text>
                    You can follow others. See their Posts and comment on Posts
                    to deliver what you feel about them.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
                <div className="col my-3 d-flex justify-content-start">
                <Link href={`/event/12345`}>
                <Card style={{ width: '20rem' }} className="grow pointer">
                <div className="img-hover-zoom">
                    <Card.Img variant="top" className='grow' height={"150px"} src="/images/smi3.jpg" />
                </div>
                <Card.Body className='bg-primary text-white'>
                    <Card.Title className='text-center' >Authentication</Card.Title>
                    <Card.Text>
                    Login for best User Experience. Feel the Magic
                    of Social Media Activities.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
                </div>
            </div>
            </Tab>
            <Tab eventKey="weight" title="Lifting">
            <h5 className='text-center text-white'>Weight Lifting Coming Soon..</h5>
            </Tab>
            <Tab eventKey="bike" title="Bike">
            <h5 className='text-center text-white'>Biking Coming Soon..</h5>
            </Tab>
            <Tab eventKey="running" title="Running">
            <h5 className='text-center text-white'>Running Coming Soon..</h5>
            </Tab>
            <Tab eventKey="bicycle" title="BiCycle">
            <h5 className='text-center text-white'>BiCycle Coming Soon..</h5>
            </Tab>
            <Tab eventKey="swimming" title="Swimming">
            <h5 className='text-center text-white'>Swimming Coming Soon..</h5>
            </Tab>
            </Tabs>
            </Container>
            <div className="row" style={{"marginTop":"100px"}}>
                <div className="text-center">
                <Zoom delay={1000} duration={2000}>
                <span className='fs-3 fw-bolder text-white headingBorder'>About Us</span>
                </Zoom>
                </div>
            </div>
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
                <div className="col fw-bolder">
                <Partners />
                </div>
            </div>
        </div>
    )
}

export default index;
