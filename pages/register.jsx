import {useState} from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from "next/link";
import AuthForm from '../components/Form/AuthForm';
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context";
const Register = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [security, SetSecurity] = useState("");
    const [loading, SetLoading] = useState(false);
    const [ok, SetOk] = useState(false);
    const [state, setState] = useContext(UserContext);
    const route = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            SetLoading(true);
            const {data} = await axios.post(`/register`, {
                name,
                email,
                password,
                security
            });
            if(data.error){
                toast.error(data.error);
                SetLoading(false);
            }else{
                SetName("");
                SetEmail("");
                SetPassword("");
                SetSecurity("");
                SetOk(data.ok);
                SetLoading(false);
            }
        } catch (err) {
            toast.error("Something went wrong. Try Again");
            SetLoading(false);
        }
    }
    if (state && state.token) route.push("/"); 
    return (
        <div>
            <div className="row regImg">
                <div className="col text-center">
                    <h3 className="my-5 text-danger">Register</h3>
                </div>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto my-3" >
                <AuthForm
                    handleSubmit={handleSubmit}
                    name={name}
                    SetName={SetName}
                    email={email}
                    SetEmail={SetEmail}
                    password={password}
                    SetPassword={SetPassword}
                    security={security}
                    SetSecurity={SetSecurity}
                    loading={loading}
                    page="register"
                />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Modal
                        title="Congratulations!"
                        visible={ok}
                        onCancel={() => SetOk(false)}
                        footer={null}
                    >
                    <p>You have successfully resgistered</p>
                    <Link href="/login">
                    <a className="btn btn-sm btn-danger">Login</a>
                    </Link>
                    </Modal>
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-white">
                Already resgistered?
                <Link href="/login">
                    <a className="px-2">Login</a>
                </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register
