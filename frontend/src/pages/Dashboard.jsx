import '../styles/Dashboard.css'
import '../styles/FormInput.css'
import { useNavigate } from "react-router-dom";
import Background from "./Background.jsx";
import { Link } from 'react-router-dom'
import Foot from './Footer.jsx';
import logo from  '../assets/01.png';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Dashboard(){
    const navigate= useNavigate();
    const[formData,setformData]=useState({
            comp_name:"",
            comp_address:"",
            comp_phone:"",
            comp_email:"",
            services:""
    });
    const handleChange=(e)=>{
        setformData({
            ...formData,[e.target.name]:e.target.value
        });
    };

   
    async function handleSubmit(e) {
        e.preventDefault();
        try{
                const res = await fetch(
            "http://localhost:5000/api/comp_details/dashboard",
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                comp_name:comp_name,
                comp_address:comp_address,
                comp_phone:comp_phone,
                comp_email:comp_email,
                services:services
            }),
            },
        );
    const data = await res.json();
    if(res.ok){
        setSignup({
            comp_name:"",
            comp_address:"",
            comp_phone:"",
            comp_email:"",
            services:""
            
        });
        toast.success("Company details updated Successfully!");
        setTimeout(() => {
            toast.success("Choose a template to proceed!!!");
        }, 2000);
    }

        }catch(err){
            toast.error("Something went wrong. Try again!");
        }
    }
    return(
    <>

    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="" />
            <h1>Billify</h1>
        </div>
        <div className="tagline">
            <h1>Simplify. Billify. Amplify</h1>
        </div>
        <div className="options">
            <Link to='/' className='exit'>SignOut</Link>
        </div>
    </div>
    <div className='main'>
        <div className="company_form">
            <div className="main1">
                <form>
                <div className='company_form_head'>
                    <h1>Enter Company Details</h1>
                </div>
                    <div>
                        <label htmlFor="comp_name">Organisation Name:</label>
                        <input type="text" name="comp_name" id="comp_name" required placeholder='Enter the company name' value={formData.comp_name}
                onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="comp_address">Organisational Address</label>
                        <input type="text" name="comp_address" id="comp_address" required placeholder="Enter the company location"  value={formData.comp_address}
                onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="comp_phone">Organisation no:</label>
                        <input type="text" name="comp_phone" id="comp_phone" required placeholder='Enter the company phone number'  value={formData.comp_phone}
                onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="comp_email">Email</label>
                        <input type="email" name="comp_email" id="comp_email" required placeholder='Enter the company email' value={formData.comp_email}
                onChange={handleChange}/>
                    </div>
                    {/* <div>
                        <label htmlFor="logo">Logo:</label>
                        <span className='important'>*Upload file as jpg or png</span>
                        <input type="file" name="logo" id="logo" placeholder='upload file size:'  
                        onChange={(e) => {
                            const file = e.target.files[0];

                            setformData({
                                ...formData,logo: file
                            });

                            setLogoPreview(URL.createObjectURL(file));
                            }}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="services">Organisational tag line</label>
                        <input type="text" name="services" id="services" required placeholder='Enter the tag line'  value={formData.services}
                onChange={handleChange}/>
                    </div>
                    <div>
                        <button type="submit" onSubmit={handleSubmit}>Submit Company details</button>
                    </div>
                </form>    
            </div>
        </div>    
        <div className="templates">
            <div id="head_1">
                <h2>Choose a template:</h2>
            </div>
            <div className="template_opts">
                <div className="temp_options">
                    <h2>Inventory bill</h2>
                    <button onClick={()=>navigate('/form')}>Create here</button>
                </div>
                <div className="temp_options">
                    <h2>Doctor Prescription</h2>
                    <button onClick={()=>navigate('/form')}>Create here</button>
                </div>
            </div>
        </div>
        {/* <div className="recent_templates_main">
            <div className="recent_templates_head">
                <h1>Recent Bills</h1>
            </div>
            <div className="recent_templates">
                <div className='recent_bill'>
                    bill1
                </div>
            </div>
        </div> */}


    </div>
    <Foot/>
    </>
    );

}

export default Dashboard;