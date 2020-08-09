import React from 'react'
import Card from '../../../Component/Home/Card'
import { Link } from 'react-router-dom'
import './IncomingTrip.css'

function IncomingTrip() {
    return (
        <div className='container'>
            <div className="row justify-content-between mt-5">
                <h1>Incoming Trip</h1>
                <Link to='/Add' className='row w-25 justify-content-end'>
                    <button className='btn btn-warning w-50 '>Add Trip</button>
                </Link>
            </div>
            <div className="row box-card-admin">
                <Card />
            </div>
        </div>
    )
}

export default IncomingTrip
