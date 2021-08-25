import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navi from '../components/Navi'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-page">
                <Navi />
                <main>
                    <section className="profile">

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
