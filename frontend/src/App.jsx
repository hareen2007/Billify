import "./styles/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Foot from "./pages/Footer.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  return (
    <>
      <section className="head_bar">
        <div className="head_m">
          <div className="logo">
            <img src="src/assets/01.png" alt="" />
            <h1 id="head_main">Billify</h1>
          </div>
          <div id="options">
            <div className="btn">About</div>
            <div onClick={() => nav("/login")} className="btn">
              Signin
            </div>
            <div onClick={() => nav("/signup")} className="btn">
              Signup
            </div>
          </div>
        </div>
      </section>
      <section id="main">
            {/* <div className="glass-box">
              <div className="glass-box1">
                  <div className="head_abt">
                    <h1>About us</h1>
                  </div>
                  <div className="desc_abt">
                <p>
                  Billify is a modern invoice and billing management platform
                  designed to simplify the way businesses create, manage, and store
                  invoices. Whether you're a freelancer, startup, or small business,
                  Billify helps you generate professional invoices in just a few
                  clicks.
                </p>
                  </div>  
              </div>  
              <div className="glass-box1">
                        <div className="head_abt">
                          <h1>Why us</h1>
                        </div>
                        <div className="desc_abt">
                          <p>
                            Billify delivers a fast, reliable, and responsive experience
                            across devices. Our goal is to replace manual billing processes
                            with a digital solution that saves time, improves accuracy, and
                            keeps business records organized.
                          </p>

                        </div>
              </div>    
              <div className="glass-box1">
                        <div className="head_abt">
                          <h1>Our Mission</h1>
                        </div>
                        <div className="desc_abt">
                          <p>
                            To make invoicing simple, efficient, and accessible for everyone.
                          </p>

                        </div>
              </div>    
              <div className="glass-box1">
                        <div className="head_abt">
                          <h1>Our Vision</h1>
                        </div>
                        <div className="desc_abt">
                          <p>
                            To empower businesses with smart digital billing solutions that streamline financial operations and support business growth.
                          </p>

                        </div>
              </div>    
        </div> */}
    </section>
      <Foot />
    </>
  );
}
export default App;
