import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Container from "@material-ui/core/Container";
import { Navigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@material-ui/core";
import Stack from "@material-ui/core/Stack";
import Alert from "@material-ui/core/Alert";
import checkAuthorization from "../../utils/Authorization/UserAuthorization";
import { communicationService, SessionManagement } from '../../utils';
// eslint-disable-next-line import/no-unresolved
require('yup-password')(Yup);

const UsersPage = () =>
{
	const [ notificationState, setNotificationState ] = useState({
		showSavedSuccessfully : false,
	});

	const { priority } = JSON.parse(SessionManagement.GetSession()).user.role;
	const creatableRolePriorities = [ 1, 2, 3, 4 ].filter((num) => priority <= num);

	useEffect(() =>
	{
		setNotificationState({
			showSavedSuccessfully : false,
		});
	}, []);

	if (!checkAuthorization('reviewer'))
	{
		return <Navigate to='/403' />;
	}

	return (
		<>
			 <Helmet>
				<title>Users | ICAF</title>
			 </Helmet>
			<Container maxWidth='xl' className='mt-3'>
				<Box
					sx={{
						backgroundColor : 'background.default',
						display         : 'flex',
						flexDirection   : 'column',
						height          : '100%',
						justifyContent  : 'center',
					}}
				>
					<Container maxWidth='sm'>
						<Formik
							initialValues={{
								email            : 'asd@asd.asd',
								password         : 'asd',
								confirm_password : 'asd',
								phone            : '1111111111',
								name             : 'asd',
								role             : '2',
							}}
							validationSchema={Yup.object().shape({
								email    : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
								password : Yup.string().password().min(10).max(255)
									.required('Password is required'),
								confirm_password : Yup.string().oneOf([ Yup.ref('password'), null ], 'Passwords must match'),
								phone            : Yup.string().max(10).min(10),
								name             : Yup.string().max(255).required('Name is required'),
								role             : Yup.string().required('Role is required'),
							})}
							onSubmit={(values, { setSubmitting }) =>
							{
								let createFunction;

								switch (values.role)
								{
								case '1':
									createFunction = 'createAdmin';
									break;
								case '2':
									createFunction = 'createEditor';
									break;
								case '3':
									createFunction = 'createReviewer';
									break;
								case '4':
									createFunction = 'createUser';
									break;
								default:
									createFunction = 'createUser';
								}
								delete values.confirm_password;
								delete values.role;
								communicationService[createFunction](values,
									(res) =>
									{
										setNotificationState({
											showSavedSuccessfully : true,
											showErrorMessage      : false,
										});
										setSubmitting(false);
									}, (err) =>
									{
										console.error(err.message);
										setNotificationState({
											showSavedSuccessfully : false,
											showErrorMessage      : true,
										});
										setSubmitting(false);
									});
							}}
						>
							{({
								  errors,
								  handleBlur,
								  handleChange,
								  handleSubmit,
								  isSubmitting,
								  touched,
								  values,
							  }) => (
								<form onSubmit={handleSubmit}>
									<Box sx={{ mb: 3 }}>
										<Typography
											color='textPrimary'
											variant='h2'
										>
											Add User
										</Typography>
										<Typography
											color='textSecondary'
											gutterBottom
											variant='body2'
										>
											Add a user
										</Typography>
									</Box>
									<Grid
										container
										spacing={3}
									>
										<Grid
											item
											xs={12}
											md={6}
										/>
										<Grid
											item
											xs={12}
											md={6}
										/>
									</Grid>
									<TextField
										error={Boolean(touched.name && errors.name)}
										fullWidth
										helperText={touched.name && errors.name}
										label='Name'
										margin='normal'
										name='name'
										onBlur={handleBlur}
										onChange={handleChange}
										type='text'
										value={values.name}
										variant='outlined'
									/>
									<TextField
										error={Boolean(touched.email && errors.email)}
										fullWidth
										helperText={touched.email && errors.email}
										label='Email Address'
										margin='normal'
										name='email'
										onBlur={handleBlur}
										onChange={handleChange}
										type='email'
										value={values.email}
										variant='outlined'
									/>
									<FormControl variant='outlined' fullWidth>
										<InputLabel id='lbl_id_role'>Role</InputLabel>
										<Select
											fullWidth
											labelId='lbl_id_role'
											margin='dense'
											name='role'
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.role}
											variant='outlined'
										>
											{ creatableRolePriorities.includes(1) ? <MenuItem value={1}>Admin</MenuItem> : '' }
											{ creatableRolePriorities.includes(2) ? <MenuItem value={2}>Editor</MenuItem> : '' }
											{ creatableRolePriorities.includes(3) ? <MenuItem value={3}>Reviewer</MenuItem> : '' }
											{ creatableRolePriorities.includes(4) ? <MenuItem value={4}>User</MenuItem> : '' }
										</Select>
									</FormControl>
									<TextField
										error={Boolean(touched.phone && errors.phone)}
										fullWidth
										helperText={touched.phone && errors.phone}
										label='Phone'
										margin='normal'
										name='phone'
										onBlur={handleBlur}
										onChange={handleChange}
										type='number'
										value={values.phone}
										variant='outlined'
									/>
									<TextField
										error={Boolean(touched.password && errors.password)}
										fullWidth
										helperText={touched.password && errors.password}
										label='Password'
										margin='normal'
										name='password'
										onBlur={handleBlur}
										onChange={handleChange}
										type='password'
										value={values.password}
										variant='outlined'
									/>
									<TextField
										error={Boolean(touched.confirm_password && errors.confirm_password)}
										fullWidth
										helperText={touched.confirm_password && errors.confirm_password}
										label='Confirm Password'
										margin='normal'
										name='confirm_password'
										onBlur={handleBlur}
										onChange={handleChange}
										type='password'
										value={values.confirm_password}
										variant='outlined'
									/>
									<Stack sx={{ width: '100%' }} spacing={2}>
										{
											notificationState.showSavedSuccessfully ? <Alert severity='success'>User created successfully.</Alert>
												: null
										}
										{
											notificationState.showErrorMessage ? <Alert severity='error'>User not created.</Alert>
												: null
										}
									</Stack>
									<Box sx={{ py: 2 }}>
										<Button
											color='primary'
											disabled={isSubmitting}
											fullWidth
											size='large'
											type='submit'
											variant='contained'
										>
											Add User
										</Button>
									</Box>
								</form>
							)}
						</Formik>
					</Container>
				</Box>
			</Container>

		</>
	);
};

export default UsersPage;
