import Zoom from "react-reveal/Zoom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Link from "next/link";
import Container from 'react-bootstrap/Container';

const events = () => {
    return (
        <div style={{"marginBottom": "400px"}}>
                      <div className="row my-5">
                <div className="text-center">
                <Zoom delay={1000} duration={2000}>
                <span className='fs-3 fw-bolder text-white headingBorder'>UPCOMING EVENTS</span>
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
        </div>
    )
}

export default events
