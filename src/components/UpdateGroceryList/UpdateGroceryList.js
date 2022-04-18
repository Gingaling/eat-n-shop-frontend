import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateGroceryList.css';

export default function UpdateGroceryList() {
    // eslint-disable-next-line
    const { id, name } = useParams();
    const navigate = useNavigate();
    const [grocery, setGrocery] = useState(null);

    useEffect(() => {
        fetch(`https://eat-n-shop-api.herokuapp.com/grocery/`)
            .then(res => res.json())
            .then(data => {
                setGrocery(data);
            })
            .catch(err => console.log(err));
    }, []);

      if (!grocery) {
        return <h1>Loading...</h1>;
    }
    
    const handleChange = (event) => {
        setGrocery({ ...grocery, [event.target.id]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.put(`https://eat-n-shop-api.herokuapp.com/grocery/${grocery._id}`, grocery);
            if (res.status === 200) {
                console.log('all is good');
            }
        } catch (err) {
            console.log(err)
        }
        navigate('/');
    };

    const handleDelete = async () => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (confirm) {
            try {
                // eslint-disable-next-line
                const res = await axios.delete(`https://eat-n-shop-api.herokuapp.com/grocery/${grocery._id}`);
                if (res.status === 200) {
                    navigate('/');
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

      return (
        <>
        <div id="cupboard-container">
            <section className="form-container">
                <div className="card-title">
                    <h3 className="editGrocery">
                        Modify your cupboard or record what you have eaten
                    </h3>
                </div>
           <form onSubmit={handleSubmit}>
                    <div className="name-container">
                        <div className="name-label">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="name-input">
                            <input 
                                onChange={handleChange}
                                id="name"
                                value={grocery.name}
                                placeholder="name of grocery modifying"
                            />
                      </div>
                    </div>
                    <div className="howMuch-container">
                        <div className="howMuch-label">
                            <label htmlFor="howMuch">amount on hand</label>
                        </div>
                        <div className="howMuch-input">
                            <input
                                onChange={handleChange}
                                id="howMuch" 
                                value={grocery.howMuch}
                                placeholder="amount" 
                            />
                        </div>
               </div>
                    <div className="eaten-container">
                        <div className="eaten-label">
                           <label htmlFor="eaten">amount consumed</label>
                        </div>
                        <div className="eaten-input">
                            <input
                                onChange={handleChange}
                                id="eaten"
                                value={grocery.eaten}
                                placeholder="amount"
                            />
                        </div>
                    </div>
           <div className="minimum-container">
                        <div className="minimum-label">
                            <label htmlFor="minimum">my minimum</label>
                        </div>
                        <div className="minimum-input">
                            <input
                                onChange={handleChange} 
                                id="minimum" 
                                value={grocery.minimum}
                                placeholder="amount"
                            />
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="img-label">
                            <label htmlFor="img">grocery image</label>
                        </div>
                        <div className="img-input">
                            <input
                                onChange={handleChange}
                                id="img"
                                value={grocery.img}
                                placeholder="http://image.png"
                            />
                        </div>
                    </div>
                    <div className="unitMeasure-container">
                        <div className="unitMeasure-label">
                            <label htmlFor="unitMeasure">unit of measurement</label>
                        </div>
                        <div className="unitMeasure-input">
                            <input
                                onChange={handleChange}
                                id="unitMeasure"
                                value={grocery.unitMeasure}
                                placeholder="unit"
                            />
                        </div>
          <div className="purchased-container">
                        <div className="purchased-label">
                            <label htmlFor="purchased">purchased?</label>
                        </div>
                        <div className="purchased-input">
                            <input
                                onChange={handleChange}
                                id="purchased"
                                value={grocery.purchased}
                                placeholder="false"
                            />
                        </div>
                    </div>
                    <div className="Date-container">
                        <div className="Date-label">
                            <label htmlFor="Date">date of activity</label>
                        </div>
                        <div className="Date-input">
                            <input
                                onChange={handleChange}
                                id="Date"
                                value={grocery.Date}
                                placeholder="yyyy-mm-dd"
                            />
                        </div>
                    </div>
                    <div className="type-container">
                        <div className="type-label">
                            <label htmlFor="type">type of grocery</label>
                        </div>
                        <div className="type-input">
                            <input
                                onChange={handleChange}
                                id="type"
                                value={grocery.type}
                                placeholder="type"
         />
                        /div>
                    </div>
                    <div className="editButtons">
                        <button type="submit">
                            Submit Changes
                        </button>
                        <button onClick={handleDelete}>
                            Delete
                         </button>
                         navigate('/')
                    </div>
                </div>
                </div>
                </form>
            </section>     
        </div>
        </>
    );
}
