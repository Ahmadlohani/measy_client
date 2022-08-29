import { useContext } from "react";
import { UserContext } from "../context";
import {useState} from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import Link from "next/link";
import AuthForm from '../components/Form/AuthForm';
import {useRouter} from "next/router";
const Login = () => {
    const [state, setState] = useContext(UserContext);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [loading, SetLoading] = useState(false);
    const route = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            SetLoading(true);
            const {data} = await axios.post(`/login`, {
                email,
                password
            });
            if(data.error){
                toast.error(data.error);
                SetLoading(false);
            } else {
                SetLoading(false);
                setState({
                    user: data.user,
                    token: data.token
                });
                window.localStorage.setItem("auth", JSON.stringify(data));
                route.push("/");
            }
        } catch (err) {
            toast.error(err.response.data);
            SetLoading(false);
        }
    }
    if (state && state.token) route.push("/"); 
    return (
        <div>
            <div className="row regImg">
                <div className="col text-center">
                    <h3 className="my-5 text-danger">Login</h3>
                </div>
            </div>
        <div className="container" style={{"marginBottom": "75px"}}>
            <div className="row">
                <div className="col-md-6 mx-auto my-3">
                <AuthForm
                    handleSubmit={handleSubmit}
                    email={email}
                    SetEmail={SetEmail}
                    password={password}
                    SetPassword={SetPassword}
                    loading={loading}
                    page="login"
                />
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-white">
                Not resgistered yet?
                <Link href="/register">
                    <a className="mx-2">Register</a>
                </Link>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                <Link href="/forgot-password">
                    <a className="text-danger">Forgot Password?</a>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login

