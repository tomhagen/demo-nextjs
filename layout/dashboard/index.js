import "../../scss/admin.scss";
import "./index.scss";

import React, { Component, Fragment } from "react";
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div>
          {/* Page Wrapper */}
          <div id="wrapper">
            {/* Sidebar */}
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              {/* Sidebar - Brand */}
              <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <div className="sidebar-brand-text mx-3">
                  MRS Admin <i class="fa fa-apple"></i>
                </div>
              </a>

              {/* Divider */}
              <hr className="sidebar-divider" />

              <div className="sidebar-heading">Dynamic Content</div>
              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i class="fa fa-cog"></i>
                  <span>Post</span>
                </a>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Post Management</h6>
                    <a className="collapse-item" href="buttons.html">
                      Add Post
                    </a>
                    <a className="collapse-item" href="cards.html">
                      Other
                    </a>
                  </div>
                </div>
              </li>
              {/* Nav Item - Utilities Collapse Menu */}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
                >
                  <i class="fa fa-user"></i>
                  <span>Users</span>
                </a>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">User Management</h6>
                    <a className="collapse-item" href="utilities-color.html">
                      Add User
                    </a>
                    <a className="collapse-item" href="utilities-border.html">
                      Comment
                    </a>
                  </div>
                </div>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">STATIC CONTENT</div>
              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
                >
                  <i class="fa fa-solar-panel"></i>
                  <span>Pages</span>
                </a>
                <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">
                      Login
                    </a>
                    <a className="collapse-item" href="register.html">
                      Register
                    </a>
                    <a className="collapse-item" href="forgot-password.html">
                      Forgot Password
                    </a>
                    <div className="collapse-divider" />
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">
                      404 Page
                    </a>
                    <a className="collapse-item" href="blank.html">
                      Blank Page
                    </a>
                  </div>
                </div>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  {/* Sidebar Toggle (Topbar) */}
                  <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  {/* Topbar Search */}
                  <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Topbar Navbar */}
                  <ul className="navbar-nav ml-auto">
                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-search fa-fw" />
                      </a>
                      {/* Dropdown - Messages */}
                      <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                      >
                        <form className="form-inline mr-auto w-100 navbar-search">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control bg-light border-0 small"
                              placeholder="Search for..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                    {/* Nav Item - Alerts */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-bell"></i>
                        {/* Counter - Alerts */}
                        <span className="badge badge-danger badge-counter">
                          3+
                        </span>
                      </a>
                      {/* Dropdown - Alerts */}
                      <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                      >
                        <h6 className="dropdown-header">Alerts Center</h6>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="mr-3">
                            <div className="icon-circle bg-primary">
                              <i className="fas fa-file-alt text-white" />
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              December 12, 2019
                            </div>
                            <span className="font-weight-bold">
                              A new monthly report is ready to download!
                            </span>
                          </div>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="mr-3">
                            <div className="icon-circle bg-success">
                              <i className="fas fa-donate text-white" />
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              December 7, 2019
                            </div>
                            $290.29 has been deposited into your account!
                          </div>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="mr-3">
                            <div className="icon-circle bg-warning">
                              <i className="fas fa-exclamation-triangle text-white" />
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              December 2, 2019
                            </div>
                            Spending Alert: We've noticed unusually high
                            spending for your account.
                          </div>
                        </a>
                        <a
                          className="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Show All Alerts
                        </a>
                      </div>
                    </li>
                    {/* Nav Item - Messages */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="messagesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-envelope"></i>
                        {/* Counter - Messages */}
                        <span className="badge badge-danger badge-counter">
                          7
                        </span>
                      </a>
                      {/* Dropdown - Messages */}
                      <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown"
                      >
                        <h6 className="dropdown-header">Message Center</h6>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="dropdown-list-image mr-3">
                            <img
                              className="rounded-circle"
                              src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                              alt
                            />
                            <div className="status-indicator bg-success" />
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">
                              Hi there! I am wondering if you can help me with a
                              problem I've been having.
                            </div>
                            <div className="small text-gray-500">
                              Emily Fowler · 58m
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="dropdown-list-image mr-3">
                            <img
                              className="rounded-circle"
                              src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                              alt
                            />
                            <div className="status-indicator" />
                          </div>
                          <div>
                            <div className="text-truncate">
                              I have the photos that you ordered last month, how
                              would you like them sent to you?
                            </div>
                            <div className="small text-gray-500">
                              Jae Chun · 1d
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="dropdown-list-image mr-3">
                            <img
                              className="rounded-circle"
                              src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                              alt
                            />
                            <div className="status-indicator bg-warning" />
                          </div>
                          <div>
                            <div className="text-truncate">
                              Last month's report looks great, I am very happy
                              with the progress so far, keep up the good work!
                            </div>
                            <div className="small text-gray-500">
                              Morgan Alvarez · 2d
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="dropdown-list-image mr-3">
                            <img
                              className="rounded-circle"
                              src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                              alt
                            />
                            <div className="status-indicator bg-success" />
                          </div>
                          <div>
                            <div className="text-truncate">
                              Am I a good boy? The reason I ask is because
                              someone told me that people say this to all dogs,
                              even if they aren't good...
                            </div>
                            <div className="small text-gray-500">
                              Chicken the Dog · 2w
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Read More Messages
                        </a>
                      </div>
                    </li>
                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                          Valerie Luna
                        </span>
                        <img
                          className="img-profile rounded-circle"
                          src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                        />
                      </a>
                      {/* Dropdown - User Information */}
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          <i class="fa fa-user-secret"></i>
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i class="fa fa-cog"></i>
                          Settings
                        </a>

                        <div className="dropdown-divider" />
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#logoutModal"
                        >
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid">
                  {/* Page Heading */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a
                      href="#"
                      className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    >
                      <i class="fa fa-download"></i>
                      Generate Report
                    </a>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    {/* Number of Posts Card */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Number of Posts
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                40
                              </div>
                            </div>
                            <div className="col-auto">
                              <i class="fa fa-telegram"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Number of users Card  */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Number of users
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                5
                              </div>
                            </div>
                            <div className="col-auto">
                              <i class="fa fa-user-check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Number of comment Card  */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                Number of comment
                              </div>
                              <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                    50
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <i class="fa fa-comment-dots"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Pending Requests Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Pending Requests
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                18
                              </div>
                            </div>
                            <div className="col-auto">
                              <i class="fa fa-address-card"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Row */}
                  <div className="row"></div>
                  {/* Content Row */}
                  <div className="row"></div>
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © MRS Vietnam 2019</span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
          {/* Scroll to Top Button*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
          {/* Logout Modal*/}
          <div
            className="modal fade"
            id="logoutModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
