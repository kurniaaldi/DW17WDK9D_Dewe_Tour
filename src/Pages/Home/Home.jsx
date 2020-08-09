import React, { Component } from 'react'
// import { Navbar, Nav } from 'react-bootstrap'
import './Home.css'
import { guarantee, love, agent, cs } from '../../asset/pict/asset'
import Card from '../../Component/Home/Card'
import Jumbotron from '../../Component/Home/Jumbotron'


class Home extends Component {





    render() {
        return (

            <div className='mb-5'>

                <Jumbotron />

                <div className="center">

                    <div className="mr-5 ml-5 text-center">
                        <div className="row row-card">
                            <div className="col-3">
                                <div className="card card-info " >
                                    <img className="card-img-top" src={guarantee} alt="pict" />
                                    <div className="card-body">
                                        <h1 className="card-title text-center">Best Price Guarantee</h1>
                                        <p className="card-text"> A small river named Duren flows by their place and supplies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card card-info  "  >
                                    <img className="card-img-top" src={love} alt="pict" />

                                    <div className="card-body">
                                        <h1 className="card-title text-center">Travellers Love Us</h1>
                                        <p className="card-text">A small river named Duren flows by their place and supplies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card card-info " >
                                    <img className="card-img-top" src={agent} alt="pict" />
                                    <div className="card-body">
                                        <h1 className="card-title text-center">Best Travel Agent</h1>
                                        <p className="card-text">A small river named Duren flows by their place and supplies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card card-info " >
                                    <img className="card-img-top" src={cs} alt="pict" />
                                    <div className="card-body">
                                        <h1 className="card-title text-center">Our Dedicated Support</h1>
                                        <p className="card-text">A small river named Duren flows by their place and supplies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-5 mr-5 groups">
                    <h1>Group Tour</h1>
                    <div className="center">
                        <div className="row">
                            <Card />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home