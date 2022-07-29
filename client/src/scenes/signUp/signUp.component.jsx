import React, { useEffect, useState, useMemo } from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	TextField,
} from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/core/Alert";
import { useDropzone } from 'react-dropzone';
import { passwordStrength } from 'check-password-strength';
import { communicationService } from '../../utils';

const types = [
	{
		value : 'Attendee',
		label : 'Attendee',
	},
	{
		value : 'Researcher',
		label : 'Researcher',
	},
	{
		value : 'WorkshopPresenter',
		label : 'Workshop Presenter',
	},

];

const baseStyle = {
	flex            : 1,
	display         : 'flex',
	flexDirection   : 'column',
	alignItems      : 'center',
	padding         : '20px',
	borderWidth     : 2,
	borderRadius    : 2,
	borderColor     : '#eeeeee',
	borderStyle     : 'dashed',
	backgroundColor : '#fafafa',
	color           : '#bdbdbd',
	outline         : 'none',
	transition      : 'border .24s ease-in-out',
};

const activeStyle = {
	borderColor : '#2196f3',
};

const acceptStyle = {
	borderColor : '#00e676',
};

const rejectStyle = {
	borderColor : '#ff1744',
};

const SignupForm = (props) =>
{
	const [ values, setValues ] = useState({
		fullName        : '',
		email           : '',
		password        : '',
		confirmPassword : '',
		phone           : '',
		type            : 'Attendee',
	});

	const [ alertData, setAlertData ] = useState({
		display : false,
		message : '',
	});

	const [ successData, setSuccessData ] = useState({
		display : false,
		message : '',
	});

	useEffect(() =>
	{
		setValues({
			fullName        : '',
			email           : '',
			password        : '',
			confirmPassword : '',
			phone           : '',
			type            : 'Attendee',
		});

		setAlertData({
			display : false,
			message : '',
		});

		setSuccessData({
			display : false,
			message : '',
		});
	}, []);

	const handleChange = (event) =>
	{
		setValues({
			...values,
			[event.target.name] : event.target.value,
		});
	};

	function validateEmail(email)
	{
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(String(email).toLowerCase());
	}

	const onSubmit = (e) =>
	{
		e.preventDefault();

		if (values.password !== values.confirmPassword)
		{
			setAlertData({ display: true, message: 'password and confirm password not matched' });

			return;
		}
		else
		{
			setAlertData({ display: false, message: '' });
		}

		if (values.fullName.length <= 5)
		{
			setAlertData({ display: true, message: 'full name must be at least 6 characters long.' });

			return;
		}

		if (values.password.length <= 5)
		{
			setAlertData({ display: true, message: 'password must be at least 6 characters long.' });

			return;
		}

		if (passwordStrength(values.password).id <= 2)
		{
			setAlertData({ display: true, message: 'password is week' });

			return;
		}

		if (values.email.length <= 5)
		{
			setAlertData({ display: true, message: 'email is required.' });

			return;
		}

		if (!validateEmail(values.email))
		{
			setAlertData({ display: true, message: 'email is not valid.' });

			return;
		}

		setAlertData({ display: false, message: '' });

		const formData = new FormData();

		formData.append("name", values.fullName);
		formData.append("email", values.email);
		formData.append("password", values.password);
		formData.append("phone", values.phone);
		formData.append("type", values.type);
		// acceptedFiles.forEach((file) =>
		// {
		// 	formData.append("resourceFile", file);
		// });

		communicationService.registerUser(formData, (res) =>
		{
			setSuccessData({
				display : true,
				message : res.data.message,
			});

			setAlertData({ display: false, message: '' });
		},
		(err) =>
		{
			setSuccessData({
				display : false,
				message : '',
			});

			setAlertData({ display: true, message: 'Something went wrong with data saving. Please try again' });
		});
	};

	return (
		<form
			autoComplete='off'
			noValidate
			{...props}
		>
			<Container maxWidth='xl' className='mt-3'>
				<Card>
					<CardHeader
						subheader='User can be registered as a researcher, workshop
presenter, or attendee'
						title='Apply For Registration'
					/>
					<Divider />
					<CardContent>
						<Grid
							container
							spacing={3}
						>
							<Grid
								item
								md={6}
								xs={12}
							>
								<TextField
									fullWidth
									helperText='Please specify the full name'
									label='Full name'
									name='fullName'
									onChange={handleChange}
									required
									value={values.fullName}
									variant='standard'
								/>
							</Grid>
							<Grid
								item
								md={6}
								xs={12}
							>
								<TextField
									fullWidth
									label='Email Address'
									name='email'
									onChange={handleChange}
									required
									value={values.email}
									variant='standard'
								/>
							</Grid>
							<Grid
								item
								md={6}
								xs={12}
							>
								<TextField
									fullWidth
									label='Password'
									name='password'
									onChange={handleChange}
									required
									type='password'
									value={values.password}
									variant='standard'
								/>
							</Grid>
							<Grid
								item
								md={6}
								xs={12}
							>
								<TextField
									fullWidth
									label='Confirm Password'
									name='confirmPassword'
									onChange={handleChange}
									required
									type='password'
									value={values.confirmPassword}
									variant='standard'
								/>
							</Grid>
							<Grid
								item
								md={6}
								xs={12}
							>
								{/* <TextField*/}
								{/*	fullWidth*/}
								{/*	label='Phone Number'*/}
								{/*	name='phone'*/}
								{/*	onChange={handleChange}*/}
								{/*	type='number'*/}
								{/*	value={values.phone}*/}
								{/*	variant='outlined'*/}
								{/* />*/}
								<PhoneInput
									country='lk'
									value={values.phone}
									name='phone'
									onChange={((p) => setValues({ ...values, phone: p }))}
								/>
							</Grid>
							<Grid
								item
								md={6}
								xs={12}
							>
								<TextField
									fullWidth
									label='Select User Type'
									name='type'
									onChange={handleChange}
									required
									select
									SelectProps={{ native: true }}
									value={values.type}
									variant='standard'
								>
									{types.map((option) => (
										<option
											key={option.value}
											value={option.value}
										>
											{option.label}
										</option>
									))}
								</TextField>
							</Grid>
						</Grid>
						<Alert severity='error' hidden={!alertData.display}>{alertData.message}</Alert>
					</CardContent>
					<Divider />
					<Alert severity='success' hidden={!successData.display}>{successData.message}</Alert>
					<Divider />
					<Box
						sx={{
							display        : 'flex',
							justifyContent : 'flex-end',
							p              : 2,
						}}
					>
						<Button
							color='primary'
							variant='contained'
							onClick={(e) => onSubmit(e)}
						>
							Save details
						</Button>
					</Box>
				</Card>
			</Container>

		</form>
	);
};

export default SignupForm;
