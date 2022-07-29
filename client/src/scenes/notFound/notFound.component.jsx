import React from 'react';
import { Helmet } from 'react-helmet';
import {
	Box,
	Container,
	Typography,
} from '@material-ui/core';
import notFoundImage from '../../assets/images/notFound.svg';

const NotFound = () => (
	<>
		<Helmet>
			<title>404 | ICAF</title>
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
					404: The page you are looking for isn’t here
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
						alt='Under development'
						src={notFoundImage}
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

export default NotFound;
