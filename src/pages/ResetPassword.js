import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { changePassword } from "../utils/https/users";
import { withRouter } from "react-router";

class ResetPassword extends Component {
  state = {
    email: '',
    code: '',
    password: '',
    repeatPass: '',
  }
  codeClick = () => {
    if(this.state.password.length < 6) {
        toast.error('Password must be more than 6 characters!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    if(this.state.repeatPass.length < 6) {
        return toast.error('Repeating new password must be more than 6 characters!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    if(this.state.repeatPass !== this.state.password) {
        return toast.error('Repeating password does not match!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    const body = new URLSearchParams();
    body.append('email', this.props.location.state.email);
    body.append('code', this.props.location.state.code);
    body.append('password', this.state.password);
    changePassword(body).then((result) => {console.log(result); toast.success('Password successfully changed!', {position: toast.POSITION.TOP_CENTER})}).catch((error) => console.log(error))
  }
  render() {
    return (
      <div className="forgot-password-page">
        <Helmet>
          <title>Prime Rental - Forgot Password</title>
        </Helmet>
        <main>
          <section className="hero-section-password">
            <div className="back-button-pass">
              
              <Link to="/login" style={{textDecoration: "none"}}>
              <p className="forgot-pass-heading"> {"<"} Back </p>
              </Link>
            </div>
            <div className="hero-container-password">
              <div>
                <p className="donot-worry-heading">Changing Your Password?</p>
              </div>
              <div>
                <input type="password" placeholder="New password..." onChange={(e) => this.setState({ password: e.target.value })} />
                <input type="password" placeholder="Repeat new password..." onChange={(e) => this.setState({ repeatPass: e.target.value })} />
              </div>
              <div className="resend-password-link">
                <button className="btn resend-password-button" onClick={this.codeClick}>
                  Change Password
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}


export default withRouter(ResetPassword);