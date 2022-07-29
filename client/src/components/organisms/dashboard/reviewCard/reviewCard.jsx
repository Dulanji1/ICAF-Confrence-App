import React from 'react';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Button from "@material-ui/core/Button";
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../../../config';

const ReviewCard = ({ items, ...rest }) =>
{
	const navigate = useNavigate();

	return (
		<Card
			sx={{
				display       : 'flex',
				flexDirection : 'column',
				height        : '100%',
			}}
			{...rest}
		>
			<CardContent>
				<Box
					sx={{
						display        : 'flex',
						justifyContent : 'center',
						pb             : 3,
					}}
				>
					<Avatar
						alt='Item'
						src={SERVER_URL + items.media}
						variant='square'
					/>
				</Box>
				<Typography
					align='center'
					color='textPrimary'
					gutterBottom
					variant='h4'
				>
					{items.title}
				</Typography>
				<Typography
					align='center'
					color='textPrimary'
					variant='body1'
				>
					{items.description}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }} />
			<Divider />
			<Box sx={{ p: 2 }}>
				<Grid
					container
					spacing={2}
					sx={{ justifyContent: 'space-between' }}
				>
					<Grid
						item
						sx={{
							alignItems : 'center',
							display    : 'flex',
						}}
					>
						<AccessTimeIcon color='action' />

					</Grid>
					<Grid
						item
						sx={{
							alignItems : 'center',
							display    : 'flex',
						}}
					>
						<Button
							variant='contained'
							endIcon={<ArtTrackIcon />}
							onClick={() => navigate('research')}
						>
							View
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Card>
	);
};

ReviewCard.propTypes = {
	items : PropTypes.object.isRequired,
};

export default ReviewCard;
