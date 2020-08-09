import React from 'react'
import { jumbo } from '../../asset/pict/asset'
import './DetailTrip.css'
import { Link } from 'react-router-dom'
import { hotel, meal, plan, time, calender, minus, plus } from '../../asset/pict/asset'

function DetailTrip() {
    return (
        <div className="p-5 box-main-detail">
            <div className="container">
                <h1>6D/4N Fun Tassie Vacation + Sydney</h1>
                <p>Australia</p>
            </div>
            {/* images */}
            <div className="container">
                <div className="row">
                    <div className="box-image col-12">
                        <img src={jumbo} className="image-detail img-fluid" alt="ResponsiveImage" />
                    </div>
                </div>
                <div className="row">
                    <div className="box-images col-4">
                        <img src={jumbo} className="image-detail img-fluid" alt="ResponsiveImage" />
                    </div>
                    <div className="box-images col-4">
                        <img src={jumbo} className="image-detail img-fluid" alt="ResponsiveImage" />
                    </div>
                    <div className="box-images col-4">
                        <img src={jumbo} className="image-detail img-fluid" alt="ResponsiveImage" />
                    </div>
                </div>
            </div>
            {/* info */}
            <div className="container mt-5">
                <h4>Information Trip</h4>
                <div className="d-flex flex-row justify-content-between">
                    <div className="p-3 bg-light  bg-transparent">
                        <div className="row">
                            <p>Accomodation</p>
                        </div>
                        <div className="row">
                            <div className="box-img-flex col-4">
                                <img src={hotel} className="img-fluid img-flex" alt="ResponsiveImage" />
                            </div>
                            <div className="col-8">
                                <p>Hotel 4 Nights</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-light  bg-transparent">
                        <div className="row">
                            <p>transportation</p>
                        </div>
                        <div className="row">
                            <div className=" box-img-flex col-4">
                                <img src={plan} className="img-fluid img-flex" alt="ResponsiveImage" />
                            </div>
                            <div className="col-8">
                                <p>Qatar Airways</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-light  bg-transparent">
                        <div className="row">
                            <p>Eat</p>
                        </div>
                        <div className="row">
                            <div className=" box-img-flex col-4">
                                <img src={meal} className="img-fluid img-flex" alt="ResponsiveImage" />
                            </div>
                            <div className="col-8">
                                <p>Included as ltinerary</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-light  bg-transparent">
                        <div className="row">
                            <p>Duration</p>
                        </div>
                        <div className="row">
                            <div className=" box-img-flex col-4">
                                <img src={time} className="img-fluid img-flex" alt="ResponsiveImage" />
                            </div>
                            <div className="col-8">
                                <p>6 Day 4 Night</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-light  bg-transparent">
                        <div className="row">
                            <p>Date Trip</p>
                        </div>
                        <div className="row">
                            <div className=" box-img-flex col-4">
                                <img src={calender} className="img-fluid img-flex" alt="ResponsiveImage" />
                            </div>
                            <div className="col-8">
                                <p>26 August 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                <h3>Description</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolores voluptatem mollitia voluptatibus, amet dolore quae vitae reiciendis omnis quas illum molestiae. Provident similique laborum, distinctio accusantium repellat aliquam inventore.</p>
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-9 col-form-label">IDR. 12,398,000 / Person</label>
                        <div className="col-sm-3">
                            <div className="row w-100 justify-content-end">
                                <button className="btn btn-transparen ">
                                    <img alt="logo profile" src={minus} />
                                </button>
                                <span className="mx-2 align-self-center">0</span>
                                <button className="btn btn-transparent btn-sm concat ">
                                    <img alt="logo profile" src={plus} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-9 col-form-label">Total :</label>
                        <div className="col-sm-3 align-self-end">
                            <p className='text-right mr-1'>IDR. 12,398,000</p>
                        </div>
                    </div>
                    <hr />

                    <Link to="/Payment" className="row w-100 justify-content-end btn-book">
                        <button type="submit" className="btn btn-warning w-25">BOOK NOW</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default DetailTrip
