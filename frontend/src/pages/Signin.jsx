import '../styles/Signup.css'
import {useState } from 'react';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';


function Signin(){
   
    const [showPassword, setShowPassword] = useState(false);
    
    let [login, setLogin] = useState({
      user_name: "",
      passwd: "",
    });
    
    function displayDetails(e) {
      setLogin((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }

    async function handleSubmit(e){
          e.preventDefault();
      try{
        const res=await fetch(
          "http://localhost:5000/api/auth/login",
          {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
              user_name:login.user_name,
              passwd:login.passwd
            }),
          },
        );
        const data=await res.json();

        if(!data.token){
          toast.error("Username or Password is incorrect!");
          setLogin({
            user_name:"",
            passwd:""

          });
          return;
        }
        localStorage.setItem("token",data.token);
        localStorage.setItem("user_name",data.user_name);
        toast.success("Welcome back!!!");
        setTimeout(()=>{
          window.location.href="/dashboard";
        },4000);

      }catch(err){
        console.log(err);
      }

    };
     
        
    return(
    <>
        <div className="modal">
    
          <form className="modal-content">
            <div className="form-header">
                <h2>Signin</h2>
            </div>

            <div className="container">
              <label htmlFor='user_name'><b>Username</b></label>
              <input type="text" name='user_name' id='user_name' placeholder="Enter Username" required value={login.user_name}
        onChange={displayDetails}/>

              <label htmlFor='passwd'><b>Password</b></label>
              <input type={showPassword ? "text":"password"} name='passwd' id='passwd' placeholder="Enter Password" value={login.passwd}
        onChange={displayDetails}/>
            <div id='passwd_box'>
              <input type="checkbox" name="show_passwd" id="show_passwd"  checked={showPassword}
          onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="show_passwd">Show Password</label>
            </div>

              <button type="submit" id='login_btn' onClick={handleSubmit}>Signin</button>

            </div>

            <div className="container_bottom">
              <span className='psw'><Link to="/signup">Don't have an account? Signup</Link></span>
              <div className='container_bottom1'>
                <span className='psw'><Link to="/forget_password">Forgot password?</Link></span>
                <span className='psw'><Link to="/">Go to Homepage</Link></span>
              </div>
            </div>
          </form>
        </div>
    
    </>
    );
}
export default Signin;