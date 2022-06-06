import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import './AddShop.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dates from '../../customFunctions/datesfunction';
const AddShop = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
      const result = event.target.value.replace(/[^a-zA-Z\s]*$/gi, '');
  
      setMessage(result);
    };
    const handleAddShop = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const catagory = event.target.catagory.value;
        const location = event.target.area.value;
        const opening = event.target.opening.value;
        const closing = event.target.closing.value;

        
        if(dates.compare(opening, closing) === 1 ){
            toast.error('Closing date should be after Opening date!');
            return;
        }
        const data ={
            name: name,
            catagory:catagory,
            location: location,
            opening: opening,
            closing: closing
        };
        console.log(data);
        fetch(`http://localhost:5000/shops`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            if(res.ok){
                toast.info('Shop Added Successfully');
                return res.json()
            }else{
                return toast.error("Failed to add shop");
            }
        })
        .then(data => console.log(data))
        
    event.target.reset();
    setMessage('');
        
    }
    return (
        <div className='pb-4'> 
            <Container>
                <div className='mx-auto mt-5 text-start card-style add-shop'>
                    <h3 className='text-center'>Add a Shop</h3>
                    <form onSubmit={handleAddShop}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Shop Name</Form.Label>
                            <Form.Control name="name" type="name" placeholder="Enter Shop Name" value={message} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} controlId="formGridState">
                            <Form.Label>Shop Catagory</Form.Label>
                            <Form.Select name='catagory' defaultValue="Choose..." required>
                                <option>Choose...</option>
                                <option>Grocery</option>
                                <option>Butcher</option>
                                <option>Baker</option>
                                <option>Chemist</option>
                                <option>Stationery shop</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} controlId="formGridState">
                            <Form.Label>Shop Area</Form.Label>
                            <Form.Select name='area' defaultValue="Choose..." required>
                                <option>Choose...</option>
                                <option>Thane, India</option>
                                <option>Pune, India</option>
                                <option>Mumbai Suburban, India</option>
                                <option>Nashik, India</option>
                                <option>Nagpur, India</option>
                                <option>Ahmednagar, India</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Opening Date</Form.Label>
                            <Form.Control name='opening' type="date" placeholder="Select an Opening Date" required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Closing date</Form.Label>
                            <Form.Control name='closing' type="date" placeholder="Select a Closing date" required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <input type="submit" value="Add Shop" className='w-100 add-shop-btn p-2' />
                        </Form.Group>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddShop;