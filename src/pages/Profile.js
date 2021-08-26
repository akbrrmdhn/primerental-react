import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navi from '../components/Navi'
import { Image } from 'react-bootstrap'
import samantha from "../assets/images/samantha.png"

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
                            <Image className="samantha-profile" src={samantha} roundedCircle>
                            
                            </Image>
                            <div className="circle-inner"></div>
                            </div>
                        
                        </div>    
                    </section>
                    <section className="contacts">

                    </section>
                    <section className="identity">

                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
