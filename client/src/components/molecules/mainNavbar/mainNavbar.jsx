// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MainNavbar = (props) =>
{
	const navigate = useNavigate();

	return (
		<AppBar
			elevation={0}
			{...props}
		>

			<nav className='navbar navbar-expand-lg navbar-light bg-primary'>
				<div className='container-fluid'>
					<img
						src='https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png'
						width='35' height='35' className='d-inline-block align-top' alt=''
					/>

					<a className='navbar-brand text-info' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>ICAF</a>

					<button
						className='navbar-toggler' type='button' data-bs-toggle='collapse'
						data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link active text-white' aria-current='page' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link active text-white' aria-current='page' style={{ cursor: 'pointer' }} onClick={() => navigate('/registration')}>Registration |</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link text-white' style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>Login |</a>
							</li>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Download Materials</span>
								}
							>
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/workshop/templates')}> workshop PowerPoint Templates </NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/research/templates')}>Research Papers Templates</NavDropdown.Item>

							</NavDropdown>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Workshop</span>
								}
								id='navbarScrollingDropdown'
							>
								{/* <NavDropdown.Item href='/researchWorkshop/publish'>Workshop </NavDropdown.Item>*/}
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/researchWorkshop/publish')}>Publish</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/researchWorkshopView/view')}>View</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/workshop/templates')}>Templates</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/callForWorkshops/view')}>Call for workshops</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Research Papers</span>
								}
								id='navbarScrollingDropdown'
							>
								{/* <NavDropdown.Item href='/research/publish'>Publish</NavDropdown.Item>*/}
								{/* eslint-disable-next-line max-len */}
								 <NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/research/publish')}>Publish</NavDropdown.Item>
								 <NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/research/view')}>View</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item style={{ cursor: 'pointer' }} onClick={() => navigate('/research/templates')}>Templates</NavDropdown.Item>
							</NavDropdown>
							<li className='nav-item'>
								<a className='nav-link  text-white' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>About Us |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link  text-white cus-pointer' style={{ cursor: 'pointer' }} onClick={() => navigate('/contactUs')}>Contact Us |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link  text-white' style={{ cursor: 'pointer' }} onClick={() => navigate('/userGuide')}>User Guide |</a>
							</li>

							<li className='nav-item'>
								<form
									style={{
										marginLeft : 300,
									}}
								>
									{/* <input*/}
									{/*	className='float-right p-2 bg-light border' type='search'*/}
									{/*	placeholder='Search' aria-label='Search'*/}
									{/* />*/}
									{/* <button className='btn btn btn-dark mb-2' type='submit'>Search</button>*/}

								</form>
							</li>
						</ul>

					</div>

				</div>

			</nav>

			{/*	</Toolbar>*/}
			{/* </Toolbar>*/}
		</AppBar>
	);
};

export default MainNavbar;
