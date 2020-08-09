import React from 'react'
import { logoProfile } from '../../asset/pict/asset'
import { Link } from 'react-router-dom'



export function Dropdown({ role }) {

    return (
        <div className="dropdown">
            <button className="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="logo logo-profile" alt="logo profile" src={logoProfile} />
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                {
                    role === 1
                        ? <Link className="dropdown-item" to="/IncomingTrip"> Trip </Link>
                        :
                        <>
                            <Link className="dropdown-item" to="/Profile"> Profile </Link>
                            <Link className="dropdown-item" to="/Payment"> Pay </Link>
                        </>
                }
                <hr />
                <Link className="dropdown-item" to="/Logout"> Logout </Link>
            </div>
        </div>
    )
}