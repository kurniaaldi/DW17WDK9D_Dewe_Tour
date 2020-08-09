import React from 'react'
import { search, upload, icon } from '../../asset/pict/asset'


function ModalTransactions() {
    return (
        <div>
            <button className="btn btn-transparent" type="button" data-toggle="modal" data-target="#transactionModal">
                <img className="logo logo-profile" alt="logo profile" src={search} />
            </button>
            <div className="modal fade bd-example-modal-lg" id="transactionModal" tabIndex="-1" role="dialog" aria-labelledby="transactionModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="container mt-5 mb-5">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="card-title">
                                        <div className="row">
                                            <div className="col-8">
                                                <img className="icon" src={icon} alt="dewe tour" />
                                            </div>
                                            <div className="col-4 text-right">
                                                <h3>Booking</h3>
                                                <span>Saturday, 22 July 2020</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="row row-pay mb-3">
                                                <div className="col-4">
                                                    <h5>6D/4N Fun Tassie Vacation</h5>
                                                    <p>Australia</p>
                                                </div>
                                                <div className="col-4">
                                                    <h6>Date Trip</h6>
                                                    <p>26 August 2020</p>
                                                </div>
                                                <div className="col-4">
                                                    <h6>Duration</h6>
                                                    <p>6 Day 4 Night</p>
                                                </div>
                                            </div>
                                            <div className="row row-pay mt-3 mb-3">
                                                <div className="col-4">
                                                    <p>Waiting Approve</p>
                                                </div>
                                                <div className="col-4">
                                                    <h6>Accomodation</h6>
                                                    <p>Hotel 4 Night</p>
                                                </div>
                                                <div className="col-4">
                                                    <h6>Transportation</h6>
                                                    <p>Qatar Airways</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 box-upload text-center">
                                            <img className="upload img-fluid" src={upload} alt="dewe tour" />
                                            <p className="card-text">upload payment</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <table className="table text-justify">
                                            <thead >
                                                <tr className='bTop' >
                                                    <th scope="col">No</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col" colSpan='5'>Phone</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>Qty </td>
                                                    <td>:</td>
                                                    <td>1</td>

                                                </tr>
                                                <tr >
                                                    <td colSpan='4'></td>
                                                    <td  >Total </td>
                                                    <td>:</td>
                                                    <td>IDR. 12,398,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="row justify-content-end">
                                            <button type="button" className="btn btn-danger mr-2">Cancel</button>
                                            <button type="button" className="btn btn-success mr-2">Approve</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTransactions