import React from 'react';
import { Helmet } from 'react-helmet';
import {
	Box,
	Container,
	Typography,
} from '@material-ui/core';
import { SERVER_URL } from "../../config";

const AccessDenied = () => (
	<>
		<Helmet>
			<title>403 | ICAF</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor : 'background.default',
				display         : 'flex',
				flexDirection   : 'column',
				height          : '100%',
				justifyContent  : 'center',
			}}
		>
			<Container maxWidth='md'>
				<Typography
					align='center'
					color='textPrimary'
					variant='h1'
				>
					403: Access to the requested resource is forbidden
				</Typography>
				<Typography
					align='center'
					color='textPrimary'
					variant='subtitle2'
				>
					You either tried some shady route or you came here by mistake.
					Whichever it is, try using the navigation
				</Typography>
				<Box sx={{ textAlign: 'center' }}>
					<img
						alt='Access Denied'
						src={`${SERVER_URL}accessDenied.png`}
						style={{
							marginTop : 50,
							display   : 'inline-block',
							maxWidth  : '100%',
							width     : 560,
						}}
					/>
				</Box>
			</Container>
		</Box>
	</>
);

export default AccessDenied;
