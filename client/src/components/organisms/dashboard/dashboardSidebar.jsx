import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Divider,
	Drawer,
	List,
	Typography,
} from '@material-ui/core';
import {
	BarChart as BarChartIcon,
	Settings as SettingsIcon,
	ShoppingBag as ShoppingBagIcon,
	User as UserIcon,
	UserPlus as UserPlusIcon,
	Users as UsersIcon,
} from 'react-feather';
import Paper from "@material-ui/core/Paper";
import RateReviewIcon from '@material-ui/icons/RateReview';
import { useSelector } from 'react-redux';
import NavItem from '../../molecules/navItem/navItem';

const items = [
	{
		href  : '/app/dashboard',
		icon  : BarChartIcon,
		title : 'Dashboard',
	},
	{
		href  : '/app/registration',
		icon  : UsersIcon,
		title : 'Registration',
	},
	{
		href  : '/app/changes',
		icon  : ShoppingBagIcon,
		title : 'Changes List',
	},
	{
		href  : '/app/account',
		icon  : UserIcon,
		title : 'Account',
	},
	{
		href  : '/app/settings',
		icon  : SettingsIcon,
		title : 'Settings',
	},
	{
		href  : '/app/review',
		icon  : RateReviewIcon,
		title : 'Review',
	},
	{
		href  : '/app/users',
		icon  : UserPlusIcon,
		title : 'Register',
	},
];

const DashboardSidebar = ({ onMobileClose, openMobile }) =>
{
	const location = useLocation();

	const { user } = useSelector((state) => state.user);

	useEffect(() =>
	{
		if (openMobile && onMobileClose)
		{
			onMobileClose();
		}
	}, [ location.pathname ]);

	const content = (
		<Box
			sx={{
				display       : 'flex',
				flexDirection : 'column',
				height        : '100%',
			}}
		>
			<Box
				sx={{
					alignItems    : 'center',
					display       : 'flex',
					flexDirection : 'column',
					p             : 2,
				}}
			>
				<Avatar
					component={RouterLink}
					src='https://image.flaticon.com/icons/png/512/2922/2922510.png'
					sx={{
						cursor : 'pointer',
						width  : 64,
						height : 64,
					}}
					to='/app/account'
				/>
				<Typography
					color='textPrimary'
					variant='h5'
				>
					{user.name}
				</Typography>
				<Typography
					color='textSecondary'
					variant='body2'
				>
					{user.role.name}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);

	return (
		<>
			<Paper sx={{ display: { xl: 'none', xs: 'block' } }}>
				<Drawer
					anchor='left'
					onClose={onMobileClose}
					open={openMobile}
					variant='temporary'
					PaperProps={{
						sx : {
							width : 256,
						},
					}}
				>
					{content}
				</Drawer>
			</Paper>
			<Paper sx={{ display: { xs: 'none', md: 'block' } }}>
				<Drawer
					anchor='left'
					open
					variant='persistent'
					PaperProps={{
						sx : {
							width  : 256,
							top    : 64,
							height : 'calc(100% - 64px)',
						},
					}}
				>
					{content}
				</Drawer>
			</Paper>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose : PropTypes.func,
	openMobile    : PropTypes.bool,
};

DashboardSidebar.defaultProps = {
	onMobileClose : () => { },
	openMobile    : false,
};

export default DashboardSidebar;
