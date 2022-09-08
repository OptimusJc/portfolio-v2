import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
	return (
		<section class="header sticky-top">
			<div class="container">
				<div class="row">
					<div class="col">
						<nav class="navbar navbar-expand-lg">
							<div class="container-fluid">
								<a class="navbar-brand" href="#">
									Joseph's Portfolio
								</a>
								<button
									class="navbar-toggler"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<HiMenuAlt4 class="navbar-toggler-icon" />
								</button>

								<div
									class="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul class="navbar-nav me-auto mb-2 mb-lg-0">
										<li class="nav-item">
											<a class="nav-link active" aria-current="page" href="#">
												About
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												Experience
											</a>
										</li>
										<li class="nav-item">
											<a href="#" class="nav-link">
												Work
											</a>
										</li>
										<li class="nav-item">
											<a href="#" class="nav-link">
												Contact
											</a>
										</li>
										<li class="nav-item">
											<a href="#" class="nav-link">
												Resume
											</a>
										</li>
									</ul>
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
