import React, { Component, createRef } from "react";
import Footer from "../components/Footer";
import { Col, Container, Image, Row } from "react-bootstrap";
import person_img from '../assets/images/person-icon.png';
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getUser } from "../utils/https/users";
import sweetAlert from 'sweetalert2';
import { updateUserData } from "../redux/actionCreators/auth";
import { withRouter } from "react-router";

const url = process.env.REACT_APP_BASE_URL;

class Profile extends Component {
  state = {
    name: '',
    dob: new Date(this.props.auth.authInfo.dob),
    gender: '',
    phone: '',
    address: '',
    image: '',
    email: '',
    gender_id: '',
    upload: '',
  }
  constructor (props){
    super(props);
    this.fileRef = createRef();
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    getUser(token)
    .then((result) => {
      const userData = result.data.result[0];
      this.setState({name: userData.name})
      this.setState({phone: userData.phone})
      this.setState({address: userData.address})
      this.setState({email: userData.email})
      this.setState({image: userData.image})
      this.setState({gender_id: userData.gender_id});
      this.setState({dob: new Date(userData.dob).toISOString()})
      this.setState({image: url + userData.image})
    })
    .catch((error) => {
      console.log(error)
    const errorMsg = String(error); 
    if(errorMsg.includes("403")){
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo')
      this.props.history.replace('/login');
    }    
    });
  }
  submitUpdate = () => {
    const token = localStorage.getItem("token");
    const queries = new FormData();
    queries.append('name', this.state.name);
    queries.append('phone', this.state.phone);
    queries.append('address', this.state.address);
    queries.append('email', this.state.email);
    queries.append('gender_id', this.state.gender_id);
    this.state.upload !== '' && queries.append('image', this.state.upload);
    // queries.append("dob", `${this.state.dob.getFullYear()}-${this.state.dob.getMonth() + 1}-${this.state.dob.getDate()}`);
    // console.log(queries.get("dob"));
    
    sweetAlert.fire({
      title: "Do you want to save these new changes?",
      confirmButtonColor: "#198754",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.onUpdate(queries, token);
        sweetAlert.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        sweetAlert.fire("Changes are not saved", "", "info");
      }
    });
  }
  triggerClick = () => {
    this.setState({ upload: this.fileRef.current.click() })
  }
  onRadioChange = (e) => {
    this.setState({gender_id: e.target.value})
  }
  render() {
    const value = this.state.gender_id;
    return (
      <div className="profile-page">
        <Helmet>
          <title>Prime Rental - Profile</title>
        </Helmet>
        <Header isAuthenticated={this.props.isAuthenticated} />
        <main>
          <Container>
            <section className="profile-section">
              <h2 className="profile-title">Profile</h2>
              <div className="profile-data">
                <div className="profile-img">
                  <Image 
                    className="samantha-profile"
                    src={this.state.image ? `${this.state.image}` : person_img}
                    roundedCircle
                    onClick={this.triggerClick}
                   />
                   <input id="selectImage" type="file" onChange={(value) => this.setState({upload: value.target.files[0], image: URL.createObjectURL(value.target.files[0])})} ref={this.fileRef} hidden />
                </div>
                <h2 className="user-name">{this.state.name}</h2>
                <p className="user-data user-email">{this.state.email}</p>
                <p className="user-data user-phone">{this.state.phone}</p>
                <p className="user-data user-active-since">Has been active since 2013</p>
                <div className="profile-gender">
                  <div className="gender-male">
                    <input type="radio" value="1" className="gender_male" defaultChecked={this.state.gender_id === 1 ? "checked" : ""} checked={value === 1} onClick={() => this.setState({gender_id: 1})} />
                    <label className="gender-label">Male</label>
                  </div>
                  <div className="gender-female">
                    <input type="radio" value="2" className="gender_female" defaultChecked={this.state.gender_id === 2 ? "checked" : ""} checked={value === 2} onClick={() => this.setState({gender_id: 2})} />
                    <label className="gender-label">Female</label>
                  </div>
                </div>
              </div>
            </section>
            <section className="contacts">
              <h4 className="profile-headings">Contacts</h4>
              <label className="contacts-attribute" for="email">Email Address :</label>
              <input
                className="profile-email contacts-attribute"
                type="text"
                placeholder="Email address..."
                defaultValue={this.state.email}
                onChange={e => this.setState({enail: e})}
              ></input>
              <label className="contacts-attribute" for="address">Address :</label>
              <input
                className="profile-address contacts-attribute"
                type="text"
                placeholder="Address..."
                defaultValue={this.state.address}
                onChange={e => this.setState({address: e})}
              ></input>
              <label className="contacts-attribute" for="mobile">Mobile Number :</label>
              <input
                className="profile-mobile contacts-attribute"
                type="text"
                placeholder="Mobile Number..."
                defaultValue={this.state.phone}
                onChange={e => this.setState({phone: e})}
              ></input>
            </section>
            <section className="identity">
              <h4 className="profile-headings">Identity</h4>
              <Row className="identity-row">
                <Col md={6}>
                  <label for="display-name">Display Name</label>
                  <input
                    className="profile-display-name"
                    type="text"
                    placeholder="Name..."
                    defaultValue={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                  ></input>
                </Col>
                <Col md={6}>
                  <label for="dob">Date of Birth</label>
                  <input
                    className="profile-dob"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    defaultValue={this.state.dob}
                    onChange={(e) => this.setState({dob: e.target.value})}
                  ></input>
                </Col>
              </Row>
            </section>
            <section className="submit-buttons">
              <button className="btn profile-save" onClick={this.submitUpdate}>Save Changes</button>
              <button className="btn profile-edit-password" onClick={() => this.props.history.push('/changepassword')}>
                Edit Password
              </button>
              <button className="btn profile-cancel">Cancel</button>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (body, token) => {
      dispatch(updateUserData(body, token))
    }
  }
}

const firstHOC = connect(mapStateToProps, mapDispatchToProps)(Profile) 
export default withRouter(firstHOC);