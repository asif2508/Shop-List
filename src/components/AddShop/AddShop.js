import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import './AddShop.css';
const AddShop = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
      const result = event.target.value.replace(/[^a-z]/gi, '');
  
      setMessage(result);
    };
    var dates = {
        convert:function(d) {
            // Converts the date in d to a date-object. The input can be:
            //   a date object: returned without modification
            //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
            //   a number     : Interpreted as number of milliseconds
            //                  since 1 Jan 1970 (a timestamp) 
            //   a string     : Any format supported by the javascript engine, like
            //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
            //  an object     : Interpreted as an object with year, month and date
            //                  attributes.  **NOTE** month is 0-11.
            return (
                d.constructor === Date ? d :
                d.constructor === Array ? new Date(d[0],d[1],d[2]) :
                d.constructor === Number ? new Date(d) :
                d.constructor === String ? new Date(d) :
                typeof d === "object" ? new Date(d.year,d.month,d.date) :
                NaN
            );
        },
        compare:function(a,b) {
            // Compare two dates (could be of any type supported by the convert
            // function above) and returns:
            //  -1 : if a < b
            //   0 : if a = b
            //   1 : if a > b
            // NaN : if a or b is an illegal date
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(a=this.convert(a).valueOf()) &&
                isFinite(b=this.convert(b).valueOf()) ?
                (a>b)-(a<b) :
                NaN
            );
        },
        inRange:function(d,start,end) {
            // Checks if date in d is between dates in start and end.
            // Returns a boolean or NaN:
            //    true  : if d is between start and end (inclusive)
            //    false : if d is before start or after end
            //    NaN   : if one or more of the dates is illegal.
            // NOTE: The code inside isFinite does an assignment (=).
           return (
                isFinite(d=this.convert(d).valueOf()) &&
                isFinite(start=this.convert(start).valueOf()) &&
                isFinite(end=this.convert(end).valueOf()) ?
                start <= d && d <= end :
                NaN
            );
        }
    }
    const handleAddShop = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const catagory = event.target.catagory.value;
        const location = event.target.area.value;
        const opening = event.target.opening.value;
        const closing = event.target.closing.value;

        
        if(dates.compare(opening, closing) === 1 ){
            console.log("hello world");
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

        
    }
    return (
        <div> 
            <Container>
                <div className='w-50 mx-auto mt-5 text-start card-style add-shop'>
                    <h3 className='text-center'>Add a Shop</h3>
                    <form onSubmit={handleAddShop}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Shop Name</Form.Label>
                            <Form.Control name="name" type="name" placeholder="Enter Shop Name" value={message} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} controlId="formGridState">
                            <Form.Label>Shop Catagory</Form.Label>
                            <Form.Select name='catagory' defaultValue="Choose...">
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
                            <Form.Select name='area' defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Thane</option>
                                <option>Pune</option>
                                <option>Mumbai Suburban</option>
                                <option>Nashik</option>
                                <option>Nagpur</option>
                                <option>Ahmednagar</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Opening Date</Form.Label>
                            <Form.Control name='opening' type="date" placeholder="Select an Opening Date" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Closing date</Form.Label>
                            <Form.Control name='closing' type="date" placeholder="Select a Closing date"/>
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