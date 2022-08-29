import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {toast} from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import keys from '../config/keys';
import { PayPalButton } from "react-paypal-button-v2";
import { ShoppingCartOutlined } from "@ant-design/icons";
const checkoutData = () => {
    const [events, setEvents] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [residence, setResidence] = useState("");
    const [price, setPrice] = useState("");
    const [email, setEmail] = useState("");
    const [cart, setCart] = useState([]);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const router = useRouter();
    const _id = router.query._id;
    useEffect(() => {
        if (_id) {
          fetchCartData();
          paypalScript();
        }
    }, [_id])
    const fetchCartData = async () => {
      try {
        const {data} = await axios.get(`/cart-data/${_id}`);
        if (data.error) {
            setCart([]);
        } else {
            setCart(data);
            setEvents(data.events.label);
            setName(data.name);
            setGender(data.gender.label);
            setResidence(data.residence.label);
            setPrice(data.price.value);
            setEmail(data.email);
        }
      } catch (error) {
          console.log(error);
      }
    }
    const paypalScript = () => {
      if (window.paypal) {
        setScriptLoaded(true);
        return false;
      }
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=AXVI2kKwKf_TzwdXLcLSsP7PjlSri4vGTvYO8Av0ZeKvQXmezxsAScuQdLCs-zhxfbWGXuIm5O9JhIle";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
    const makePayment = async (token) => {
        //? we will get token by default
        const body = {
          token,
          events,
          name,
          gender,
          residence,
          price,
          email
        };
    
        try {
          const {data} = await axios.post('/payment', body);
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success("Order Successfully Created. Check email for details");
            router.push("/cart/AddToCart");
          }
        } catch (err) {
          toast.error("Error making payment");
        }
    };
    return (
        <div>
        <div className="row regImg">
        <div className="text-center my-2 py-5">
          <h4 className="text-danger"> Checkout</h4>
        </div>
        </div>
        <div className="row">
        {cart.length !== 0 ? 
        ( 
        <>
        <div className="col-md-8 mx-auto">
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Event</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Residence</th>
            <th>Email</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{events}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{residence}</td>
            <td>{email}</td>
            <td>{price}$</td>
            </tr>
        </tbody>
        </Table>
        </div>
        </>
        ):
        (
          <div className="text-center text-danger fs-4"><ShoppingCartOutlined className="fs-2" /> Cart is Empty</div>
        )
        }
        {cart.length !== 0 &&
        <div className="text-center">
        <StripeCheckout
          stripeKey={keys.stripePublisherKey} // publisher key
          token={makePayment}
          name='Buy Ticket'
          amount={parseInt(price) * 100} // to get amount on dollars
          shippingAddress
          billingAddress={false}
        >
          <button id="stripeBtn">Stripe Pay With Card</button>
        </StripeCheckout>   
        </div>
        }
        {cart.length !== 0 && scriptLoaded && 
          <div className="text-center">
          <PayPalButton
          amount={price}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={ async (details, dt) => {
            // alert("Transaction completed by " + details.payer.name.given_name);
            // OPTIONAL: Call your server to save the transaction
            const {data} = await axios.post("/paypal-transaction-complete", details);
            if (data.success) {
              router.push("/thankPage");
            } else {
              toast.error("Data to Database Failed");
              router.push("/thankPage");
            }
          }}
          />
          </div>
        }
        </div>
        </div>
    )
}

export default checkoutData
