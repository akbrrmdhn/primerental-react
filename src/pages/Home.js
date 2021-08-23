import React from 'react';
import Navi from '../components/Navi';
import Footer from '../components/Footer';
//import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div className="home-page">
                <Navi />
                <main>
                    <div className="content">
                        This is a content.
                    </div>
                </main>
                <Footer />
            </div>
            
        );
    }
}

export default Home;