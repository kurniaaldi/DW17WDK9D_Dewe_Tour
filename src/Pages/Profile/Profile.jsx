import React, { Component } from 'react'
import './Profile.css'
import CardProfile from '../../Component/Profile/CardProfile'
import CardHistory from '../../Component/Profile/CardHistory'


export class Profile extends Component {
    render() {
        return (
            <div className="App">
                <div class="card w-50 container mt-5">
                    <div class="card-body">
                        <CardProfile />
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <CardHistory />
                </div>
            </div>
        )
    }
}