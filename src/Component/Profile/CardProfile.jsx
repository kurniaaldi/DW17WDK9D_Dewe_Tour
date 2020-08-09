import React from 'react'
import { foto, name, phone, mail, maps } from '../../asset/pict/asset'

function CardProfile() {
    return (
        <div className="row">
            <div className="col-7">
                <div className="row">
                    <h4 className="card-title info-self">Personal Info</h4>
                </div>
                <div className="row mb-4 p-1">
                    <div className="col-2 col-logo">
                        <img src={name} className="img-fluids " alt="ResponsiveImage" />

                    </div>
                    <div className="col-10">
                        <h6>Aldi Tamvan</h6>
                        <p>Full Name</p>
                    </div>
                </div>
                <div className="row mb-4 p-1">
                    <div className="col-2 col-logo">
                        <img src={mail} className="img-fluids " alt="ResponsiveImage" />

                    </div>
                    <div className="col-10">
                        <h6>aldikurniawan1606@gmail.com</h6>
                        <p>Email</p>
                    </div>
                </div>
                <div className="row mb-4 p-1">
                    <div className="col-2 col-logo">
                        <img src={phone} className="img-fluids " alt="ResponsiveImage" />

                    </div>
                    <div className="col-10">
                        <h6>0899-8300-060</h6>
                        <p>Mobile Phone</p>
                    </div>
                </div>
                <div className="row mb-4 p-1">
                    <div className="col-2 col-logo">
                        <img src={maps} className="img-fluids " alt="ResponsiveImage" />

                    </div>
                    <div className="col-10">
                        <h6>perum griya alam sentosa blok N18 no16</h6>
                        <p>Address</p>
                    </div>
                </div>
            </div>
            <div className="col-5 ">
                <img className="img-fluid" src={foto} alt="dewe tour" />
                <button className='btn btn-warning btn-style'>Change Profile</button>
            </div>
        </div>
    )
}

export default CardProfile
