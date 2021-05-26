import React from 'react'



function AdminScreen() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="container-fluid">

                    <div className="card mb-3">

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Contact Id</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                            <th>City</th>
                                            <th>Start date</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AdminScreen
