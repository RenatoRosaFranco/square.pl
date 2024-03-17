import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
	return(
		<section id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className='row'>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li><Link to="/">Privacy Policy</Link></li>
									<li><Link to="/">Impressum</Link></li>
									<li><Link to="/">Terms of Service</Link></li>
								</ul>
							</div>
							
							<div className="col-md-2">
								<h4 className='bold uppercase'>Our services</h4>
								<ul className="list-unstyled">
									<li><Link to="/">Development</Link></li>
									<li><Link to="/">Integration</Link></li>
									<li><Link to="/">Cloud Operations</Link></li>
								</ul>
							</div>

							<div className="col-md-2">
								<h4 className="bold uppercase">Company</h4>
								<ul className="list-unstyled">
									<li><Link to="/company#founders">Founders</Link></li>
									<li><Link to="/jobs">Jobs</Link></li>
									<li><Link to="/">Our hiring process</Link></li>
								</ul>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<p className='copyright'>&copy; 2024 Square. All rights reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>		
	)
}

export default Footer;