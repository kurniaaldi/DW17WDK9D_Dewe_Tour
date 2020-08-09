import React from 'react'
import { } from 'react-router-dom'
import ModalTransactions from '../../Component/Admin/ModalTransactions'

function Transactions() {
    return (
        <div className="container mt-5 mb-5">
            <h1>Incoming Transactions</h1>
            <table className="table table-hover bg-light">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Users</th>
                        <th scope="col">Trip</th>
                        <th scope="col">Bukti Transfer</th>
                        <th scope="col">Status Payment</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Aldi Tamvan</td>
                        <td>Japan</td>
                        <td>Resi.jpg</td>
                        <td>Pending</td>
                        <td><ModalTransactions /></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Aldi Tamvan</td>
                        <td>Japan</td>
                        <td>Resi.jpg</td>
                        <td>Pending</td>
                        <td><ModalTransactions /></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Aldi Tamvan</td>
                        <td>Japan</td>
                        <td>Resi.jpg</td>
                        <td>Pending</td>
                        <td><ModalTransactions /></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Aldi Tamvan</td>
                        <td>Japan</td>
                        <td>Resi.jpg</td>
                        <td>Pending</td>
                        <td><ModalTransactions /></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Aldi Tamvan</td>
                        <td>Japan</td>
                        <td>Resi.jpg</td>
                        <td>Pending</td>
                        <td><ModalTransactions /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions
