import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import resume from "../images/JOSEPH OTIENO.pdf";

const Header = () => {
	return (
		<section className="header">
			<div className="container">
				<div className="row">
					<div className="col">
						<nav className="navbar navbar-expand-lg">
							<div className="container-fluid">
								<a className="navbar-brand" href="#">
									Joseph's Portfolio
								</a>
								<button
									className="navbar-toggler"
									type="button"
									data-bs-toggle="offcanvas"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<HiMenuAlt4 className="navbar-toggler-icon" />
								</button>

								<div
									className="offcanvas offcanvas-end"
									id="navbarSupportedContent"
								>
									<div className="offcanvas-header">
										<IoClose
											className="btn-close"
											data-bs-dismiss="offcanvas"
											aria-label="close"
										/>
									</div>
									<div className="offcanvas-body">
										<ul className="navbar-nav justify-content-end flex-grow-1">
											<li className="nav-item">
												<a
													className="nav-link active"
													aria-current="page"
													href="#"
												>
													About
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#">
													Experience
												</a>
											</li>
											<li className="nav-item">
												<a href="#" className="nav-link">
													Work
												</a>
											</li>
											<li className="nav-item">
												<a href="#" className="nav-link">
													Contact
												</a>
											</li>
											<li className="nav-item">
												<a href={resume} className="nav-link" download>
													Resume
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
