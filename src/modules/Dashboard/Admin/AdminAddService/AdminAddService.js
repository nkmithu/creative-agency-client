import React from 'react';
import { useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import Topbar from '../../SharedComponents/Topbar/Topbar';
import './AdminAddService.css'

const AdminAddService = () => {

    const [service, setService] = useState({title:"", description:""});
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    
    const handleService =(e)=>{
        const newService = {...service};
        if (e.target.name === 'title') {
            newService.title= e.target.value;
        }
        if (e.target.name === 'description') {
            newService.description= e.target.value;
        }
        if (e.target.name === 'date') {
            newService.date= e.target.value;
        }
        setService(newService);
        console.log(newService);
    }

    const handleSubmit =()=>{
        const formData = new FormData()
        console.log(service);
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
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
                            <form onSubmit ={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="form-group">
                                            <input onChange={handleService} type="text" name="title" className="form-control" placeholder="Service Title"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="input-group mb-3">
                                            <div className="custom-file">
                                                <input onChange={handleFileChange} type="file" className="custom-file-input" id="inputGroupFile01"/>
                                                <label className="custom-file-label" for="inputGroupFile01">Upload Image</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        onChange={handleService}
                                        className="form-control"
                                        name="description"
                                        id=""
                                        cols="10"
                                        rows="5"
                                        placeholder="Description"></textarea>
                                </div>

                                <div>
                                    <button className="btn btn-secondary submit-green-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminAddService;