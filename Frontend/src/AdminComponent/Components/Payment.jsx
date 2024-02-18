import React from "react";


class Payment extends React.Component {
    render() {
        return (
            <div>
                {/* Start right Content here */}
                {/* ============================================================== */}
                <div className="content-page">
                    {/* Start content */}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <h4 className="page-title"><span style={{ color: '#350ad0' }}>Payment</span> :- </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="m-b-20">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="invoice-title">
                                                        <h4 className="float-right font-16"><strong>Order # 12345</strong></h4>
                                                        <h3 className="mt-0">
                                                            <img src="../assets/images/logo.png" alt="logo" height={24} />
                                                        </h3>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <address>
                                                                <strong>Billed To:</strong><br />
                                                                Mukesh<br />
                                                                1234 Main<br />
                                                                Apt. 4B<br />
                                                                Springfield, ST 54321
                                                            </address>
                                                        </div>
                                                        <div className="col-4">
                                                            <address>
                                                                <strong>Payment Method:</strong><br />
                                                                Visa ending **** 4242<br />
                                                                Mukesh@email.com
                                                            </address>
                                                        </div>
                                                        <div className="col-4">
                                                            <address>
                                                                <strong>Order Date:</strong><br />
                                                                October 7, 2021<br /><br />
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div>
                                                        <div className="p-2">
                                                            <h3 className="font-16"><strong>Order summary</strong></h3>
                                                        </div>
                                                        <div className>
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>S. No.</th>
                                                                            <th>Service Name</th>
                                                                            <th>Email ID</th>
                                                                            <th>Date</th>
                                                                            <th>Amount</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>ITES</td>
                                                                            <td>amit@gmail.com</td>
                                                                            <td>17/10/2021</td>
                                                                            <td>Rs. 6,000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>GST Certificate</td>
                                                                            <td>amit@gmail.com</td>
                                                                            <td>17/10/2021</td>
                                                                            <td>Rs. 4,000</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="d-print-none">
                                                                <div className="float-right">
                                                                    <a href ="javascript:window.print()" className="btn btn-success waves-effect waves-light"><i className="fa fa-print" /></a>
                                                                    <a href="#" className="btn btn-primary waves-effect waves-light">Send</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* end row */}
                                        </div>
                                    </div>
                                </div> {/* end col */}
                            </div>
                            {/* end row */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;