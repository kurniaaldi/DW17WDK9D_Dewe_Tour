import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login({ setAuth }) {

    return (
        <Fragment>
            <Button variant="outline-light" className="mr-2 btn-top" data-toggle="modal" data-target="#loginModal">Login</Button>
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel"  >Login </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </form>
                            <Link to="/">
                                <button type="button" onClick={() => setAuth(true)} className="btn btn-warning btn-lg btn-block mt-2">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login