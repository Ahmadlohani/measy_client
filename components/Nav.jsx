import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Nav = () => {
    const router = useRouter();
    const [state, setState] = useContext(UserContext);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);
    const logout = () => {
        window.localStorage.removeItem("auth");
        setState(null);
        router.push("/login");
    }
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-center">
            <img width={"220px"} height={"120px"} src="/images/site_logo.png" alt="Logo" />
            </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg" style={{"backgroundColor": "#1F51FF"}}>
            <div className="container-fluid">
                <img width={"150px"} src="/images/site_logo.png" alt="Logo" />
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link href="/">
                    <a className={`nav-link text-white ${current === "/" && "navactive"}`} aria-current="page">Home</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/events">
                    <a className={`nav-link text-white ${current === "/events" && "navactive"}`} aria-current="page">Events</a>
                    </Link>                    
                    </li>
                    <li className="nav-item">
                    <Link href="/shop">
                    <a className={`nav-link text-white ${current === "/shop" && "navactive"}`} aria-current="page">Shop</a>
                    </Link>                    
                    </li>
                    <li className="nav-item">
                    <Link href="/results">
                    <a className={`nav-link text-white ${current === "/results" && "navactive"}`} aria-current="page">Results</a>
                    </Link>                    
                    </li>
                    <li className="nav-item">
                    <Link href="/uploadResults">
                    <a className={`nav-link text-white ${current === "/uploadResults" && "navactive"}`} aria-current="page">Upload Results</a>
                    </Link>                    
                    </li>
                    <li className="nav-item">
                    <Link href="/about">
                    <a className={`nav-link text-white ${current === "/about" && "navactive"}`} aria-current="page">About</a>
                    </Link>                    
                    </li>
                    <li className="nav-item">
                    <Link href="/contact">
                    <a className={`nav-link text-white ${current === "/contact" && "navactive"}`} aria-current="page">Contact</a>
                    </Link>                    
                    </li>
                </ul>
                <span className="d-flex">
                    {state !== null ? (
                    <>
                    <NavDropdown
                    id="nav-dropdown"
                    title={state && state.user && state.user.name}
                    menuVariant="dark"
                    className="bg-dark"
                    >
                    <NavDropdown.Item href="#action/3.1">
                    <Link href="/user/dashboard">
                        <a className="text-white">Dashboard</a>
                    </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                    <a onClick={logout} className="text-white">Log Out</a>
                    </NavDropdown.Item>
                    </NavDropdown>
                    </>
                    ):(
                        <>
                            <Link href="/register">
                                <a className="nav-link btn btn-sm btn-danger text-white mx-2 roleBtn">Register</a>
                            </Link>
                            <Link href="/login">
                                <a className="nav-link btn btn-sm btn-danger text-white mx-2 roleBtn">Login</a>
                            </Link>
                        </>
                    )
                    }
                </span>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Nav
