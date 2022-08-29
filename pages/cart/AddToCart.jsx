import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Button from 'react-bootstrap/Button';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {SyncOutlined} from "@ant-design/icons";
import axios from "axios";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
const AddToCart = () => {
    const [events, setEvents] = useState({});
    const [name, setName] = useState("");
    const [gender, setGender] = useState({});
    const [nationality, setNationality] = useState({});
    const [residence, setResidence] = useState({});
    const [price, setPrice] = useState({});
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const countryOptions = useMemo(() => countryList().getData(), []);
    const eventOptions = [
        { value: 'Elevation Crossing Failaka', label: 'Elevation Crossing Failaka' },
        { value: 'Riyadh Marathon 2022', label: 'Riyadh Marathon 2022' },
        { value: 'Kuwait Duathlon 2nd Edition', label: 'Kuwait Duathlon 2nd Edition' }
    ]
    const genderOptions = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
        { value: 'other', label: 'other' }
    ]
    const priceOptions = [
        { value: '5', label: 'S' },
        { value: '10', label: 'M' },
        { value: '15', label: 'L' },
        { value: '20', label: 'XL' }
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();
        var confirm = window.confirm("Are you sure? You won't be able to change details");
        if (!confirm) {
            return false;
        }
        var cartData = {
            events,
            name,
            gender,
            nationality,
            residence,
            phone,
            price,
            email
        }
        setLoading(true);
        try {
            const {data} = await axios.post("/cartData", cartData);
            if (data.error) {
                setLoading(false);
                toast.error(data.error);
            } else {
                setLoading(false);
                router.push(`/cart/checkout/${data._id}`);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? 'red' : 'white',
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 1000,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          const color = "red";
      
          return { ...provided, opacity, transition, color };
        }
    }
    return (
        <div>
        <div className="row regImg">
        <div className="text-center py-5">
            <h3 className='text-danger'> Product Form</h3>
        </div>
        </div>
        <div className='row'>
            <div className="col-md-8 mx-auto my-3">
            <Form className='py-3 px-3' onSubmit={handleSubmit}>
            <Select className="mb-4" options={eventOptions} onChange={e => setEvents(e)} placeholder="Select Event"/>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className='mb-4'
            >
                <Form.Control onChange={e => setName(e.target.value)} type="text" value={name} />
            </FloatingLabel>
            <Select className="mb-4" options={genderOptions} onChange={e => setGender(e)} placeholder="Select Gender"/>
            <Select className="mb-4" options={countryOptions} onChange={e => setNationality(e)}  placeholder="Select nationality" />
            <Select className="mb-4" options={countryOptions} onChange={e => setResidence(e)}  placeholder="Select Residence" />
            <PhoneInput
            international
            defaultCountry="EG"
            countryCallingCodeEditable={false}
            onChange={e => setPhone(e)}
            className='mb-4' />
            <Select className="mb-4" options={priceOptions} onChange={e => setPrice(e)}  placeholder="Shirt Size" />
            <FloatingLabel
                controlId="floatingInput"
                label="Email Address"
                className='mb-4'
            >
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email} />
            </FloatingLabel>
            <Button className="w-100" variant="danger" type="submit"
            disabled={ !events || !name || !gender || !nationality || !residence || !phone || !email }>
            {loading ? <SyncOutlined spin className='py-2'/> : "Add to Cart" }
            </Button>
            </Form>
            </div>
        </div>
        </div>
    )
}

export default AddToCart
