import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { SyncOutlined } from "@ant-design/icons";
import axios from 'axios';
const contact = () => {
    const [event, setEvent] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [eID, setEID] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var contactData = {
            event,
            enquiry,
            name,
            phone,
            eID,
            message
        }
        try {
            setLoading(true);
            const {data} = await axios.post(`/contact`, contactData);
            if(data.error){
                toast.error(data.error);
                setLoading(false);
            }else{
                setEvent("");
                setEnquiry("");
                setName("");
                setPhone("");
                setEID("");
                setMessage("");
                toast.success(data.success);
                setLoading(false);
            }
        } catch (err) {
            // toast.error(err.response.data);
            console.log(err);
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <div className="text-center">
                    <h4 className='text-danger'>Contact Us</h4>
                    <p style={{"color":"gray"}}>We will be happy to listen from you</p>
                </div>
                <Form className='text-danger mx-auto' style={{"marginTop":"44px","width":"80%"}} onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingSelect" label="Event">
                <Form.Select className="blanks" onChange={e => setEvent(e.target.value)} aria-label="Floating label select example" value={event} >
                    <option value="">Select Event</option>
                    <option>Elevation Crossing Failaka</option>
                    <option>Riyadh Marathon 2022</option>
                    <option>Kuwait Duathlon 2nd Edition</option>
                </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="Enquiry Type">
                <Form.Select className="blanks" onChange={e => setEnquiry(e.target.value)} aria-label="Floating label select example" value={enquiry}>
                    <option >Suggestion</option>
                    <option >Enquiry</option>
                    <option >Complain</option>
                    <option >Other</option>
                </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                >
                    <Form.Control className="blanks" onChange={e => setName(e.target.value)} type="text" value={name} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                >
                    <Form.Control className="blanks" onChange={e => setPhone(e.target.value)} type="text" value={phone} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email ID"
                >
                    <Form.Control className="blanks" onChange={e => setEID(e.target.value)} type="text" value={eID} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Enquiries">
                    <Form.Control
                    as="textarea"
                    className="enquiryBox"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    />
                </FloatingLabel>
                <Button className="w-100 pointer" id='contactBtn' type="submit"
                disabled={ !event || !enquiry || !name || !phone || !eID || !message }>
                { loading ? <SyncOutlined spin className="py-1" /> : "Submit" }
                </Button>
                </Form>   
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291202.8570075175!2d26.38182761209197!3d26.834937781436263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2s!4v1641836104147!5m2!1sen!2s" width="600" height="650" style={{"border":"0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default contact
