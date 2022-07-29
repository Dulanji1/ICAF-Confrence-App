import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { communicationService } from '../../utils';

const CallForWorkshopsViewPage = () =>
{
	const [ editData, setEditData ] = useState('<p></p>');

	const navigate = useNavigate();

	useEffect(() =>
	{
		setEditData('<p></p>');

		communicationService.workshopCallGet(null,
			(res) =>
			{
				const { description } = res.data.data.registrationData;

				setEditData(description);

				console.log(description);
			}, (err) =>
			{
				console.log(err);
			});
	}, []);

	return (
		<>
			<Helmet>
				<title>Workshop call | ICAF</title>
			</Helmet>
			<Container maxWidth='xl' className='mt-3'>
				<Card>
					<CardHeader
						subheader=''
						title='Call for workshops'
					/>
					<Divider />
					<CardContent>
						<>
							{/* eslint-disable-next-line react/no-danger */}
							<div dangerouslySetInnerHTML={{ __html: editData }} className='ck-content' />
						</>
						<Box sx={{ py: 2 }}>
							<Button
								color='primary'
								fullWidth
								size='large'
								type='submit'
								variant='contained'
								onClick={() => navigate('/signup')}
							>
								Proceed
							</Button>
						</Box>
					</CardContent>

					<Divider />
				</Card>
			</Container>

		</>
	);
};

export default CallForWorkshopsViewPage;
