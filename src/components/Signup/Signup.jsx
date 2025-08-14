import React from 'react';
import './Signup.css'

function Signup() {
    return (
        <div className='signup-container'>
            <div className="singup-form">
                <div className="logo">
                    <h2>Embark Your Journey</h2>
                    <h1>Sign Up to BlueBrick</h1>
                </div>

                <form>
                    <input type="text" placeholder="Your name" required /> <br/>
                    <input type="email" placeholder="Email address" required />

                    <div className="password-input">
                        <input type="password" placeholder="Password" required />
                        <span className="eye-icon">👁</span>
                    </div>
                    <button type="submit" className="btn-primary">Sign up</button>
                </form>

                <div className="divider">
                    <span> or sign Up with</span>
                    <hr/>
                </div>

                <div className="social-login">
                    <button className="social-btn-fb">facebook</button>
                    <button className="social-btn-google">Google</button>
                    <button className="social-btn-insta">Instagram</button>
                </div>

                <p className="signin-link">
                    Have an account? <a href="#">Sign In</a>
                </p>
            </div>

            <div className="signup-image"></div>
        </div>
    );
}

export default Signup;

