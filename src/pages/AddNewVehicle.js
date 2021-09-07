import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row, Image, Container } from 'react-bootstrap'
import addImage from "../assets/images/add-image.png"
import { Helmet } from 'react-helmet'

export default class AddNewVehicle extends Component {
    render() {
        return (
            <div className="add-vehicle-page">
                <Helmet>
                    <title>Add New Vehicle</title>
                </Helmet>
                <Header />
                <main>
                    <section className="add-vehicle-detail">
                        <Container>
                        <Row>
                            <Col md={5} className="add-vehicle-image">
                                
                                <Image className="add-vehicle-img" src={addImage}/>
                                <Row className="add-vehicle-img-etc">
                                    <Col md={6}>
                                    <Image className="add-vehicle-img" src={addImage}/>
                                    </Col>
                                    <Col md={6}>
                                    <Image className="add-vehicle-img" src={addImage}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={7} className="add-additional-vehicle-details">
                            <input type="text" className="input-vehicle-name" placeholder="Name (max. 20 words)" />
                            <input type="text" className="input-vehicle-location" placeholder="Location" />
                            <input type="text" className="input-vehicle-description" placeholder="Description (max. 150 words)" />
                            <label>Price:</label>

                            </Col>
                        </Row>
                        </Container>
                    </section>
                    <section className="add-vehicle-buttons">

                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
