import React from 'react'
import './Jumbotron.css'


function Jumbotron() {
    return (
        <div className="jumbotron ">
            <div className="text-left">
                <h1 className="display-4">Explore</h1>
                <p className="lead">your amazing city together</p>
                <p className="mt-5">Find great places to holliday</p>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-warning" type="button">Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jumbotron;