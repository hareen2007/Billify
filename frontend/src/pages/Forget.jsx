import '../styles/Signup.css'
import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forget(){
    const formRef1= useRef();
    const nav=useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const dataReset=()=>{
      formRef1.current.reset();
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);

    };
    const handleChange=(e)=>{
        setformData({
            ...formData,[e.target.name]:e.target.value
        });
    };
     const[formData,setformData]=useState({
            user_name:"",
            passwd_1:"",
    
        });
    return(
      <div className="modal">
        <form className="modal-content" ref={formRef1} onSubmit={handleSubmit}>

        {/* Header */}
        <div className="form-header">
          <h2>Password Change</h2>
          
        </div>

        {/* Form */}
        <div className="container">
          <label htmlFor='user_name'><b>Username</b></label>
          <input type="text" name='user_name' id='user_name'placeholder="Enter Username" required minLength={6} maxLength={15}  value={formData.user_name}
        onChange={handleChange}/>
          <label htmlFor='passwd_1'><b>New Password</b></label>
          <input type={showPassword ? "text":"password"} name='passwd_1' id='passwd_1'  placeholder="Enter Password" required minLength={10} maxLength={20}  value={formData.passwd_1}
        onChange={handleChange}/>
          <div id='passwd_box'>
          <input type="checkbox" name="btn" id="btn"  checked={showPassword} onChange={()=>setShowPassword(!showPassword)}/>
          <label htmlFor='btn'><b>Show Password</b></label>

          </div>

          <button type="submit" id='signup_btn'>Change Password</button>
        </div>

      </form>
    </div>
    );

}

export default Forget;