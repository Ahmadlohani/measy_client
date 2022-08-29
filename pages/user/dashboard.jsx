import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/UserRoute/UserRoute";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const dashboard = () => {
    const [state, setState] = useContext(UserContext);
    
    return (
        <UserRoute>
        <div>
        <div className="row regImg">
            <div className="col text-center">
                <h3 className="my-5 text-danger">User Dashboard</h3>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row my-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3} className="mx-2">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item >
                    <Nav.Link eventKey="first">Personal Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">My Booking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">My Wallet</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fourth">My WishList</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fifth">My Address</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={8}>
                <Tab.Content className="text-white">
                    <Tab.Pane eventKey="first">
                    Personal Info
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    My Booking
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    My Wallet
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    My WishList
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    My Address
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div>
        </div>
        </div>
        </UserRoute>
    )
}

export default dashboard
