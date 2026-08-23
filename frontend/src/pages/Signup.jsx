import '../styles/Signup.css';
import {useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import valid from "validator";
import {Link } from 'react-router-dom';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    let [signup, setSignup] = useState({
    user_name: "",
    user_email: "",
    passwd: "",
  });
  function displayDetails(e) {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
   
  
  async function handleSignup(e) {
    e.preventDefault();
    if(signup.user_name===""||signup.user_email===""||signup.passwd===""){
      toast.error("Please Fill All The Details");
      return;
    }
    if (signup.passwd.length < 8) {
      toast.error("Password must be atleast 8 characters!");
      return;
    }
    if (signup.user_name.length < 6) {
      toast.error("Username must be atleast 6 characters!");
      return;
    }
    console.log(signup.user_email);
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_name: signup.user_name,
            user_email: signup.user_email,
            passwd: signup.passwd,
          }),
        },
      );
      const data = await res.json();
      console.log(data.msg);
      if (!res.ok) {
        toast.error("User already exists! Try logging in");
        setSignup({
          user_name: "",
          user_email: "",
          passwd: "",
        });
        return;
      }else{
        toast.success("Registered Successfully!");
        setSignup({
          user_name: "",
          user_email: "",
          passwd: "",
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again!");
    }
  }



  return (
    <div className="modal">
      <form className="modal-content">

        {/* Header */}
        <div className="form-header">
          <h2>Signup</h2>
        </div>

        {/* Form */}
        <div className="container">
          <label htmlFor='user_name'><b>Username</b></label>
          <input type="text" name='user_name' id='user_name' placeholder="Enter Username" required  value={signup.user_name}
        onChange={displayDetails}/>

          <label htmlFor='user_email'><b>Email</b></label>
          <input type="email" name='user_email' id='user_email' placeholder="Enter Email" required  value={signup.user_email}
        onChange={displayDetails}/>

          <label htmlFor='passwd'><b>Password</b></label>
          <input type={showPassword ? "text":"password"} name='passwd' id='passwd' placeholder="Enter Password" required  value={signup.passwd}
        onChange={displayDetails}/>

        <div id='passwd_box'>
              <input type="checkbox" name="show_passwd" id="show_passwd"  checked={showPassword}
          onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="show_passwd">Show Password</label>
        </div>


          <button type="submit" id='signup_btn' onClick={handleSignup}>Signup</button>
        </div>

        {/* Bottom */}
        <div className="container_bottom">
            <span className='psw'><Link to="/login">Already have an account? Login</Link></span>
            <span className='psw'><Link to="/">Go to Homepage</Link></span>
        </div>

      </form>
    </div>
  );
}

export default Signup;