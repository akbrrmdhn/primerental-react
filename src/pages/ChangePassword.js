import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { updatePassword } from "../utils/https/users";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class ChangePassword extends Component {
  state = {
    oldPass: '',
    newPass: '',
    repeatPass: '',
  }
  codeClick = () => {
    if(this.state.oldPass.length < 6) {
        toast.error('Old password must be more than 6 characters!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    if(this.state.newPass.length < 6) {
        return toast.error('New password must be more than 6 characters!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    if(this.state.repeatPass.length < 6) {
        return toast.error('Repeating new password must be more than 6 characters!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    if(this.state.repeatPass !== this.state.newPass) {
        return toast.error('Password does not match!', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
    const body = new URLSearchParams();
    body.append('oldPass', this.state.oldPass);
    body.append('newPass', this.state.newPass);
    const token = localStorage.getItem('token');
    updatePassword(token, body).then((result) => {console.log(result); return toast.success('Password successfully changed!', {position: toast.POSITION.TOP_CENTER})}).catch((error) => console.log(error))
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
                <input type="password" placeholder="Old password..." onChange={(e) => this.setState({ oldPass: e.target.value })} />
                <input type="password" placeholder="New password..." onChange={(e) => this.setState({ newPass: e.target.value })} />
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

const mapStateToProps = ({ auth }) => {
    return {
        auth,
    }
}

export default connect(mapStateToProps)(ChangePassword);