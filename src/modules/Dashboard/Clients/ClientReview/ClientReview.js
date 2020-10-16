import React from 'react';
import { useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const ClientReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [review, setReview] = useState({});
    
    const handleOnblur =(e)=>{
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        newReview.img = loggedInUser.img;
        setReview(newReview);
        console.log(review);
    }

    const handleOnSubmit =(e)=>{
        const newReview = {
            ...review
        };
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
    }

    return (
        <main className="d-flex dasboard-wrapper">
            <Sidebar/>
            <section className="contentWithTopbar">
                <Topbar/>
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <input onBlur={handleOnblur} name="name" type="text" class="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnblur} name="companyName" type="text" class="form-control" placeholder="Company’s name, Designation"/>
                            </div>
                            <div className="form-group">
                               <textarea onBlur={handleOnblur} name="description" className="form-control" id="" cols="10" rows="5" placeholder="Description"></textarea>
                            </div>
                            <div>
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClientReview;