import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Paper from "@material-ui/core/Paper";
import Logo from '../../../assets/images/logo.png';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) =>
{
	const [ notifications ] = useState([]);

	return (
		<AppBar
			elevation={0}
			{...rest}
		>
			<Toolbar>
				<RouterLink to='/'>
					{/*<img*/}
					{/*	alt='Logo'*/}
					{/*	src={Logo}*/}
					{/*/>*/}

					<img
						src='https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png'
						width='35' height='35' className='d-inline-block align-top' alt=''
					/>
					<a className='navbar-brand text-info' href='#'>ICAF</a>
				</RouterLink>
				<Box sx={{ flexGrow: 1 }} />
				<Paper sx={{ display: { xs: 'none', md: 'block' } }}>
					<IconButton color='inherit'>
						<Badge
							badgeContent={notifications.length}
							color='primary'
							variant='dot'
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color='inherit'>
						<InputIcon />
					</IconButton>
				</Paper>
				<Paper sx={{ display: { xl: 'none', xs: 'block' } }}>
					<IconButton
						color='inherit'
						onClick={onMobileNavOpen}
					>
						<MenuIcon />
					</IconButton>
				</Paper>
			</Toolbar>
		</AppBar>
	);
};

DashboardNavbar.propTypes = {
	// eslint-disable-next-line react/require-default-props
	onMobileNavOpen : PropTypes.func,
};

export default DashboardNavbar;
