import '../styles/FormInput.css'
import Table from './ItemsTabledoc.jsx'
import Template from "./Template.jsx";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Foot from './Footer.jsx';

function FormoneInput(){
    const [logoPreview, setLogoPreview] = useState("");
    const [billData, setBillData] = useState(null);
    const[formData,setformData]=useState({
        comp_name:"",
        comp_address:"",
        comp_phone:"",
        comp_email:"",
        logo:"",
        services:"",
        gender:"",
        recp_name:"",
        recp_age:"",
        recp_no:"",
        date1:"",
        time1:"",
        employee:"",
        pay_opt:""

    });
   const [items, setItems] = useState([
    {
      itemName: "",
      qty: 1,
      price:"",
    },
  ]);

    const handleChange=(e)=>{
        setformData({
            ...formData,[e.target.name]:e.target.value
        });
    };

   
    const handleSubmit = (e) => {
  e.preventDefault();

  const generatedPrescription = {
    ...formData,
    items,
  };

  setBillData(generatedPrescription);

  navigate("/templatedoc", {
    state: generatedPrescription,
  });
    };
    const navigate = useNavigate();
    return(
    <>
    <div className="main1">
        <form  onSubmit={handleSubmit}>
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
            <div>
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
            </div>
            <div>
                <label htmlFor="services">Organisational tag line</label>
                <input type="text" name="services" id="services" required placeholder='Enter the tag line'  value={formData.services}
        onChange={handleChange}/>
            </div>
            <div className='form_head'>
                <h1>Enter the Recipient Details</h1>
            </div>
            <div className='Gender'>
                <div className='head1'>
                    <h4>Gender</h4>
                </div>
                <div className='Geender'>
                    <div className="gender1">
                            <label htmlFor="male">Male </label>
                            <input type="radio" name="gender" id="male" value="Mr." checked={formData.gender === "Mr."} onChange={handleChange} />
                    </div>
                    
                    <div className="gender1">
                            <label htmlFor="female">Female </label>
                            <input type="radio" name="gender" id="female" value="Mrs." checked={formData.gender === "Mrs."} onChange={handleChange}/>
                        

                    </div>
                </div>
            </div>
            <div className='field'>
                <label htmlFor="recp_name">Patient Name</label>
                <input type="text" name="recp_name" id="recp_name" required placeholder="Enter patient name"  value={formData.recp_name}
        onChange={handleChange}/>
            </div>
            <div className='field full-width'>
                <label htmlFor="recp_age">Patient Age</label>
                <input type="text" name="recp_age" id="recp_age" required placeholder="Enter patient age"  value={formData.recp_age}
        onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="recp_no">Patient no:</label>
                <input type="text" name="recp_no" id="recp_no" required minLength={10} placeholder="Enter customer phone number"  value={formData.recp_no}
        onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="date1">Date:</label>
                <input type="date" name="date1" id="date1"  value={formData.date1}
        onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="time1">Time:</label>
                <input type="time" name="time1" id="time1"  value={formData.time1}
        onChange={handleChange} />
            </div>
            <div>
                <Table items={items} setItems={setItems}/>
            </div>
            <div>
                <label htmlFor="employee">Generated by</label>
                <select name="employee" id="employee"  value={formData.employee}
        onChange={handleChange}>
                <option value="">Select Doctor Name</option>
                <option value="Dr. Vivekananda Sahu">Dr. Vivekananda Sahu</option>
                </select>
            </div>
            <div>
                <label htmlFor="pay_opt">Payment Method</label>
                <select name="pay_opt" id="pay_opt"  value={formData.pay_opt}
        onChange={handleChange}>
                    <option value="">Select Payment Method</option>
                    <option value="Gpay">Gpay</option>
                    <option value="Credit card">Credit card</option>
                    <option value="Debit card">Debit card</option>
                    <option value="Cash">Cash</option>
                </select>
            </div>
            <div>
                <button type="submit">Generate Bill</button>
            </div>
        </form>
        {
    }
    </div>
    <Foot/>
    </>
    );
}
export default FormoneInput;