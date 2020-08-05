import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'





function Card(props) {
    return (
        <div className="col-4 card-group">
            <Link to="/DetailTrip">
                <div className="card" >
                    <img className="card-img-bot" src={props.data.image} alt="pict" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <div className="row">
                            <p className="card-text"> IDR. {props.data.price}</p>
                            <p className="vacation ml-auto"> {props.data.vacation}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;