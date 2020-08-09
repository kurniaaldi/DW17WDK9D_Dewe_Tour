import React, { useState, Fragment } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'





function Card() {

    const [fake] = useState({
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
            }]
    })


    return (
        <Fragment>
            {
                fake.card.map((data) => {
                    return (
                        <div className="col-4 card-group" key={data.id}>
                            <Link to="/DetailTrip">
                                <div className="card" >
                                    <img className="card-img-bot" src={data.image} alt="pict" />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <div className="row">
                                            <p className="card-text"> IDR. {data.price}</p>
                                            <p className="vacation ml-auto"> {data.vacation}</p>
                                        </div>
                                        <span className="span">13/15</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default Card;