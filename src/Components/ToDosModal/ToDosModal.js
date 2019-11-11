import React, { Component } from 'react'

export default class ToDosModal extends Component {
    render() {
        return (
            <div>
                {/* model 1 popup */}
                <div class="modal" id="addTodo1">
                    <div class="modal-dialog my-dialog">
                        <div class="modal-content my-content">

                            {/* <!-- Modal Header --> */}
                            <div class="modal-header custom-header">
                                <h5 class="modal-title">Add to List</h5>
                                <button type="button" class="close" data-dismiss="modal">
                                    {/* &times; */}<i class="fa fa-times-circle" aria-hidden="true"></i>
                                </button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <div className="container">
                                    <table class="table table-responsive table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Payment ID</th>
                                                <th>Payment Mode</th>
                                                <th>Date Received</th>
                                                <th>Payment Account</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Credit Card</td>
                                                <td>16/10/2019</td>
                                                <td>$83.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end modal popup */}

                {/* model 2 popup */}
                <div class="modal" id="addTodo">
                    <div class="modal-dialog my-dialog">
                        <div class="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div class="modal-header my-header">
                                <h4 class="modal-title">Add to List</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <div className="container custom-container">
                                    <div className="padded">
                                        <div className="row custom-row">
                                            <div className="col-md-2 col-sm-6">
                                                <h5>Text</h5>
                                            </div>
                                            <div className="col-md-10 col-sm-6">
                                                <input type="text" class="form-control" id="usr" placeholder="add something..." name="username" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4 col-sm-4 col-xs-2 custom-buttons">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end modal popup */}
            </div>
        )
    }
}
