import React, { Fragment } from 'react'
import { NavLink, Outlet } from "react-router-dom";
//import "../css/Dashboard.css"
const Dashboard = () => {
    return (
        <Fragment>

            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Disease Surveillance System</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <NavLink to="home" ><i class="fs-4 bi bi-map"></i> <span class="ms-1 d-none d-sm-inline">Heat Map</span></NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a class="nav-link px-0 align-middle">
                                        <NavLink to="chartmain"><i class="fs-4 bi-bar-chart"></i> <span class="ms-1 d-none d-sm-inline">Charts</span> </NavLink>
                                    </a>
                                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <NavLink to="agdao"> <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Agdao</span>  </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="baguio"> <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Baguio</span>  </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="buhangin"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Buhangin</span>  </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="bunawan"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Bunawan</span>  </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="calinan"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Calinan</span>  </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="marilog"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Marilog</span> </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="paquibato"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Paquibato</span> </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="poblacion"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Poblacion</span> </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="talomo"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Talomo</span> </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="toril"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Toril</span> </a></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="tugbok"><a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"> <i class="bi bi-geo-alt-fill"></i> Tugbok</span> </a></NavLink>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                            <hr />
                            <div class="dropdown pb-4">
                                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

                                    <span class="d-none d-sm-inline mx-1">User</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard