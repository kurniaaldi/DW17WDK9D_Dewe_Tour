import React, { Component } from 'react'
// import { Navbar, Nav } from 'react-bootstrap'
import './Home.css'
import { guarantee, love, agent, cs } from '../../asset/pict/asset'
import Card from '../../Component/Home/Card'
import Jumbotron from '../../Component/Home/Jumbotron'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            card: [
                {
                    id: 1,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Australia'
                }, {
                    id: 2,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Australia'
                }, {
                    id: 3,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Australia'
                }, {
                    id: 4,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Australia'
                }, {
                    id: 5,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Japan'
                }, {
                    id: 6,
                    image: 'https://static.toiimg.com/photo/72975551.cms',
                    title: '6D/ 4N Fun Tassie Vacation',
                    price: 12398000,
                    vacation: 'Australia'
                }
            ]
        }
    }



    render() {
        return (

            <div >
                {/* <Navbar bg="transparent" expand="lg">
                    <Navbar.Brand href="#home" className="ml-5">
                        <img className="logo" src={logo} alt="dewe tour" />
                    </Navbar.Brand>
                    <Nav className="justify-content-end ml-auto">
                        <Login />
                        <Register />
                    </Nav>
                </Navbar> */}
                <Jumbotron />


                <div className="mr-5 ml-5">
                    <div className="row row-card">
                        <div className="col-3">
                            <div className="card card-info text-center" >
                                <img className="card-img-top" src={guarantee} alt="pict" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-info text-center "  >
                                <img className="card-img-top" src={love} alt="pict" />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-info text-center" >
                                <img className="card-img-top" src={agent} alt="pict" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card-info text-center" >
                                <img className="card-img-top" src={cs} alt="pict" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-5 mr-5 groups">
                    <h1>Group Tour</h1>
                    <div className="row">
                        {
                            this.state.card.map((e) => {
                                return (
                                    <Card key={e.id} data={e} />
                                )
                            })
                        }
                    </div>
                </div>
                <blockquote className="blockquote text-center">
                    <p className="mb-0">Copyright @ 2020 Dewe Tour - Aldi Kurniawan. All Rights reserved </p>
                </blockquote>
            </div>
        )
    }
}

export default Home