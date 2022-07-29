import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import DashboardNavbar from './dashboardNavbar';
import DashboardSidebar from './dashboardSidebar';
import checkAuthorization from "../../../utils/Authorization/UserAuthorization";

const DashboardLayoutRoot = experimentalStyled('div')(
	({ theme }) => ({
		backgroundColor : theme.palette.background.default,
		display         : 'flex',
		height          : '100%',
		overflow        : 'hidden',
		width           : '100%',
	}),
);

const DashboardLayoutWrapper = experimentalStyled('div')(
	({ theme }) => ({
		display                      : 'flex',
		flex                         : '1 1 auto',
		overflow                     : 'hidden',
		paddingTop                   : 64,
		[theme.breakpoints.up('lg')] : {
			paddingLeft : 256,
		},
	}),
);

const DashboardLayoutContainer = experimentalStyled('div')({
	display  : 'flex',
	flex     : '1 1 auto',
	overflow : 'hidden',
});

const DashboardLayoutContent = experimentalStyled('div')({
	flex     : '1 1 auto',
	height   : '100%',
	overflow : 'auto',
});

const DashboardLayout = () =>
{
	const [ isMobileNavOpen, setMobileNavOpen ] = useState(false);

	if (!checkAuthorization('reviewer'))
	{
		return <Navigate to='/403' />;
	}

	return (
		<DashboardLayoutRoot>
			<DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<DashboardSidebar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<DashboardLayoutWrapper>
				<DashboardLayoutContainer>
					<DashboardLayoutContent>
						<Outlet />
					</DashboardLayoutContent>
				</DashboardLayoutContainer>
			</DashboardLayoutWrapper>
		</DashboardLayoutRoot>
	);
};

export default DashboardLayout;
