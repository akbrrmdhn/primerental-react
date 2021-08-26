import React, { Component } from "react";
import Footer from "../components/Footer";
import Navi from "../components/Navi";
import { Image } from "react-bootstrap";
import samantha from "../assets/images/samantha.png";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <Navi />
        <main>
          <section className="profile">
            <h2>Profile</h2>
            <div className="profile-data">
              <div className="profile-img">
                <Image
                  className="samantha-profile"
                  src={samantha}
                  roundedCircle
                ></Image>
              </div>
              <h2 className="user-name">Samantha Doe</h2>
              <p className="user-email">samanthadoe@mail.com</p>
              <p className="user-phone">+62833467823</p>
              <p className="user-active-since">Has been active since 2013</p>
              <div className="profile-gender">
                <input type="radio" value="MALE" name="gender" /> Male
                <input type="radio" value="FEMALE" name="gender" /> Female
            </div>
            </div>
          </section>
          <section className="contacts">
              <label for="email">Email Address</label>
              <input name="email" type="text" placeholder="Email address..."></input>
              <label for="email">Address</label>
              <input name="address" type="text" placeholder="Address..."></input>
              <label for="mobile">Mobile Number</label>
              <input name="mobile" type="text" placeholder="Mobile Number..."></input>
          </section>
          <section className="identity">
              <label for="display-name">Display Name</label>
              <input name="display-name" type="text" placeholder="Name..."></input>
              <label for="dob">DD/MM/YYYY</label>
              <input name="dob" type="text" placeholder="DD/MM/YY"></input>
          </section>
          <section className="submit-buttons">
              <button>Save Changes</button>
              <button>Edit Password</button>
              <button>Cancel</button>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
