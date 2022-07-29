import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';
import { Copyright } from '../../components/organisms';
import { communicationService, SessionManagement } from '../../utils';
import { loginAction } from '../../utils/store/user/user';

export default function Login()
{
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [ errorState, setErrorState ] = useState({
		showUnauthorized : false,
	});

	useEffect(() =>
	{
		setErrorState({
			showUnauthorized : false,
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>Login | ICAF</title>
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
				<Container maxWidth='sm'>
					<Formik
						initialValues={{
							email    : '',
							password : '',
						}}
						validationSchema={Yup.object().shape({
							email    : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
							password : Yup.string().max(255).required('Password is required'),
						})}
						onSubmit={(values, { setSubmitting }) =>
						{
							communicationService.login(values,
								(res) =>
								{
									const { success } = res.data;

									if (success)
									{
										dispatch(loginAction(res.data));

										const { data } = res.data;

										const tokenObj = {
											token        : data.token,
											refreshToken : data.refreshToken.token,
											user         : data.user,
										};

										SessionManagement.GetSetSession(tokenObj);

										// Redirect role user to home page and others to dashboard
										if (data.user.role.priority === 4)
										{
											navigate('/', { replace: true });
										}
										else
										{
											navigate('/app/dashboard', { replace: true });
										}

										return;
									}

									setErrorState({ showUnauthorized: true });
									setSubmitting(true);
								}, (err) =>
								{
									setErrorState({ showUnauthorized: true });
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
										Sign in
									</Typography>
									<Typography
										color='textSecondary'
										gutterBottom
										variant='body2'
									>
										Sign in on the internal platform
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
								<Box
									sx={{
										pb : 1,
										pt : 3,
									}}
								>
									<Typography
										align='center'
										color='textSecondary'
										variant='body1'
									>
										or login with email address
									</Typography>
								</Box>
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
								<Stack sx={{ width: '100%' }} spacing={2}>
									{
										errorState.showUnauthorized ? <Alert severity='error'>Email or password is incorrect !</Alert>
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
										Sign in now
									</Button>
								</Box>
								<Typography
									color='textSecondary'
									variant='body1'
								>
									Don&apos;t have an account?
									{' '}
									<Link
										component={RouterLink}
										to='/register'
										variant='h6'
									>
										Sign up
									</Link>
								</Typography>
							</form>
						)}
					</Formik>
				</Container>
			</Box>
		</>
		// <Container component='main' maxWidth='xs'>
		// 	<CssBaseline />
		// 	<div className={classes.paper}>
		// 		<Avatar className={classes.avatar}>
		// 			<LockOutlinedIcon />
		// 		</Avatar>
		// 		<Typography component='h1' variant='h5'>
		// 			Sign in
		// 		</Typography>
		// 		<form className={classes.form} noValidate>
		// 			<TextField
		// 				variant='outlined'
		// 				margin='normal'
		// 				required
		// 				fullWidth
		// 				id='username'
		// 				label='Email Address'
		// 				name='username'
		// 				autoComplete='email'
		// 				autoFocus
		// 				value={formState.username}
		// 				onChange={(e) => handleChange(e)}
		// 			/>
		// 			<TextField
		// 				variant='outlined'
		// 				margin='normal'
		// 				required
		// 				fullWidth
		// 				name='password'
		// 				label='Password'
		// 				type='password'
		// 				id='password'
		// 				autoComplete='current-password'
		// 				value={formState.password}
		// 				onChange={(e) => handleChange(e)}
		// 			/>
		// 			<FormControlLabel
		// 				control={<Checkbox value='remember' color='primary' />}
		// 				label='Remember me'
		// 			/>
		// 			{
		// 				errorState.showUnauthorized
		// 					? <Alert severity='error'>User name or Password is incorrect !</Alert>
		// 					: null
		// 			}
		//
		// 			<Button
		// 				type='button'
		// 				fullWidth
		// 				variant='contained'
		// 				color='primary'
		// 				className={classes.submit}
		// 				id='login'
		// 				onClick={(e) => handleSubmit(e)}
		// 			>
		// 				Sign In
		// 			</Button>
		// 			<Grid container>
		// 				<Grid item xs>
		// 					<Link href='/' variant='body2'>
		// 						Forgot password?
		// 					</Link>
		// 				</Grid>
		// 				<Grid item>
		// 					<Link href='/' variant='body2'>
		// 						Don&#39;t have an account? Sign Up
		// 					</Link>
		// 				</Grid>
		// 			</Grid>
		// 		</form>
		// 	</div>
		// 	<Box mt={8}>
		// 		<Copyright />
		// 	</Box>
		// </Container>
	);
}
