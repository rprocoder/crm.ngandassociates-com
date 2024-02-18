import React, { useState, useEffect } from "react";
import ChartBox from "react-apexcharts";
import axios from "axios";
import Chart from "react-google-charts";


const pieOptions = {
    is3D: true,
    pieHole: 0.4,
};

function Admin() {
    const [services, setServices] = useState([]);
    const [months, setMonths] = useState([]);
    let token = localStorage.getItem("access_token3");
    const options1 = {
        Chart: {
            id: "basic-bar444",
        },
        xaxis: {
            categories: [""],
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                width: "100px"
            }
        },
        is3D: true,
    };


    const fetchMon = async () => {
        const result = await axios.get(`http://admin.ngandassociates.com/mondata/${token}`);
        console.log(result.data);
        setMonths(result.data);
    };

    const fetchCount = async () => {
        const result = await axios.get(`http://admin.ngandassociates.com/charts/${token}`);
        console.log(result.data);
        setServices(result.data);

    };
    useEffect(() => {
        fetchCount();
        fetchMon();
    }, []);
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
                                <div className="page-title-box m-t-10">
                                    <h4 className="page-title">Dashboard</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">
                                            Welcome to NG-Associates Dashboard
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                        <div className="row">
                            <div className="col-xl-3 col-md-6 ">
                                <div className="mini-stat ">
                                    <div className="card-body mini-stat-img bg-primary">
                                        <div className="text-white">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-cube-outline float-right" />
                                            </div>
                                            <h6 className="text-uppercase mb-3">Orders</h6>
                                            {services.map((service, index) => (
                                                <h4 className="mb-4">{service.total_new_application}</h4>
                                            ))}
                                            <span className="badge badge-info"> +11% </span> <span className="ml-2">From previous period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="mini-stat">
                                    <div className="card-body mini-stat-img bg-primary">
                                        <div className="text-white">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-buffer float-right" />
                                            </div>
                                            <h6 className="text-uppercase mb-3">Revenue</h6>
                                            {services.map((service, index) => (
                                                <h4 className="mb-4">{service.total_application_amount}</h4>
                                            ))}
                                            <span className="badge badge-danger"> -29% </span> <span className="ml-2">From previous period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="mini-stat ">
                                    <div className="card-body mini-stat-img bg-primary">
                                        <div className="text-white">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-tag-text-outline float-right" />
                                            </div>
                                            <h6 className="text-uppercase mb-3">Average Price</h6>
                                            {services.map((service, index) => (
                                                <h4 className="mb-4">{service.total_revenue}</h4>
                                            ))}
                                            <span className="badge badge-warning"> 0% </span> <span className="ml-2">From previous period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="mini-stat">
                                    <div className="card-body mini-stat-img bg-primary">
                                        <div className="text-white">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-briefcase-check float-right" />
                                            </div>
                                            <h6 className="text-uppercase mb-3">Product Sold</h6>
                                            {services.map((service, index) => (
                                                <h4 className="mb-4">{service.total_old_application}</h4>
                                            ))}
                                            <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className=" m-b-20">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Current Month Order Records(Bar Chart)</h4>
                                        {months.map((service, index) => (
                                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">

                                                <li className="list-inline-item" >
                                                    <h5 className="mb-0">{service.complete_order}</h5>
                                                    <p className="text-muted">Activated</p>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h5 className="mb-0">{service.pending_order}</h5>
                                                    <p className="text-muted">Pending</p>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h5 className="mb-0">{service.cancel_order}</h5>
                                                    <p className="text-muted">Deactivated</p>
                                                </li>

                                            </ul>
                                        ))}
                                        {months.map((service, index) => (
                                            <ChartBox
                                                options={options1}
                                                series={[
                                                    {
                                                        name: "Activated",
                                                        data: [Number(service.complete_order),],
                                                        color: "#176e0d"
                                                    },
                                                    {
                                                        name: "Deactivated",
                                                        data: [Number(service.cancel_order),],
                                                        color: "#eb3b17"
                                                    },
                                                    {
                                                        name: "Pending",
                                                        data: [Number(service.pending_order),],
                                                        color: "#ffc114"
                                                    },
                                                    {
                                                        name: "Total",
                                                        data: [Number(service.total_order),],
                                                        color: "#1240c9"
                                                    },
                                                ]}
                                                type="bar"
                                                width="100%"
                                                height="350"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div> {/* end col */}
                            <div className="col-lg-6">
                                <div className=" m-b-20">
                                    {services.map((service, index) => (
                                        <div className="card-body">

                                            <h4 className="mt-0 header-title">All Order Records(Pie Chart)</h4>

                                            <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">

                                                <li className="list-inline-item" >
                                                    <h5 className="mb-0">{service.total_old_application}</h5>
                                                    <p className="text-muted">Activated</p>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h5 className="mb-0">{service.pendingvalue}</h5>
                                                    <p className="text-muted">Pending</p>
                                                </li>
                                                <li className="list-inline-item">
                                                    <h5 className="mb-0">{service.total_cancel_application}</h5>
                                                    <p className="text-muted">Deactivated</p>
                                                </li>
                                            </ul>
                                            <Chart
                                                width={"100%"}
                                                height={"365px"}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart</div>}
                                                data={[
                                                    ["Task", "Hours per Day"],
                                                    ["Total Order = " + service.total_new_application, Number(service.total_new_application)],
                                                    ["Cancel Order  = " + service.total_cancel_application, Number(service.total_cancel_application)],
                                                    ["Panding Order = " + service.pendingvalue, Number(service.pendingvalue)],
                                                    ["complete Order = " + service.total_old_application, Number(service.total_old_application)],
                                                ]}
                                                options={pieOptions}
                                                rootProps={{ "data-testid": "3" }}
                                            />
                                        </div>
                                    ))}
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


export default Admin;