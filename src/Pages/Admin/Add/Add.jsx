import React from 'react'
import './Add.css'

function Add() {
    return (
        <div className='container mt-5 mb-5'>
            <form>
                <div className="form-group">
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" className="form-control" id="inputTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputCountry">Country</label>
                    <input type="text" className="form-control" id="inputCountry" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAccomodation">Accomodation</label>
                    <input type="text" className="form-control" id="inputAccomodation" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputTranspotation">Transpotation</label>
                    <input type="text" className="form-control" id="inputTranspotation" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEat">Eat</label>
                    <input type="text" className="form-control" id="inputEat" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="inputCity">Duration</label>
                        <div className="form-row align-items-center">
                            <div className="col-4">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="inputCity" className='mt-2'>Day</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="inputCity" className='mt-2'>Night</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDate">Date Trip</label>
                    <input type="text" className="form-control" id="inputDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPrice">Price</label>
                    <input type="text" className="form-control" id="inputPrice" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputQuota">Quota</label>
                    <input type="text" className="form-control" id="inputQuota" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="input-group w-50">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile04" />
                        <label className="custom-file-label" htmlFor="inputGroupFile04">Attache Here</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-warning rounded mx-auto d-block w-25 mt-5 mb-5">Add Trip</button>
            </form>
        </div>
    )
}

export default Add
