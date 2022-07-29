import React, { useEffect, useMemo, useState } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CardContent from "@material-ui/core/CardContent";
import { Box, Button, Card, CardHeader, Divider } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/core/Alert";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { communicationService, checkAuthorization } from "../../utils";

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

const ResearchWorkShop = (props) =>
{
	if (!checkAuthorization('user'))
	{
		return <Navigate to='/login' />;
	}

	const { user } = useSelector((state) => state.user);

	const [ values, setValues ] = useState({
		title         : '',
		publisherName : '',
		description   : '',
		publishDate   : '',
		type          : 'WorkshopCoordinator',
	});

	const [ alertData, setAlertData ] = useState({
		display : false,
		message : '',
	});

	const [ successData, setSuccessData ] = useState({
		display : false,
		message : '',
	});

	const [ open, setOpen ] = React.useState(false);

	const { acceptedFiles, getRootProps, getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject } = useDropzone({
		accept   : 'application/pdf',
		maxFiles : 1,
	});

	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {}),
	}), [
		isDragActive,
		isDragReject,
		isDragAccept,
	]);

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path}
			{' '}
			-
			{file.size}
			{' '}
			bytes
		</li>
	));

	useEffect(() =>
	{
		setValues({
			title        : '',
			workShopName : '',
			description  : '',
			publishDate  : '',
			type         : 'WorkshopCoordinator',
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

	const handleClick = () =>
	{
		setOpen(true);
	};

	const handleChange = (event) =>
	{
		setValues({
			...values,
			[event.target.name] : event.target.value,
		});
	};

	const onSubmit = (e) =>
	{
		e.preventDefault();

		if (values.title.length <= 3)
		{
			setAlertData({ display: true, message: 'category must be at least 3 characters long.' });

			return;
		}

		if (values.workShopName.length <= 3)
		{
			setAlertData({ display: true, message: 'title must be at least 3 characters long.' });

			return;
		}

		if (values.publishDate.length <= 0)
		{
			setAlertData({ display: true, message: 'publish date is required.' });

			return;
		}

		setAlertData({ display: false, message: '' });

		const formData = new FormData();

		formData.append("title", values.title);
		formData.append("publisherName", values.workShopName);
		formData.append("publishDate", values.publishDate);
		formData.append("description", values.description);
		formData.append("user", user.email);
		acceptedFiles.forEach((file) =>
		{
			formData.append("resourceFile", file);
		});

		communicationService.workshopUpload(formData, (res) =>
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
						title='Workshop Publish'
					/>
					<Divider />
					<CardContent>
						<div className='mb-3'>

							<label htmlFor='subjectName' className='form-label'>Workshop Title</label>
							<input
								type='text'
								onChange={handleChange}
								className='form-control'
								id='title'
								name='title'
							/>
						</div>

						<div className='mb-3'>
							<label htmlFor='subjectName' className='form-label'>Workshop Name</label>
							<input
								type='text'
								className='form-control'
								id='workShopName'
								name='workShopName'
								onChange={handleChange}
							/>
						</div>

						<div className='mb-3'>
							<label htmlFor='description' className='form-label'>Description</label>
							<CardContent>
								<CKEditor
									editor={ClassicEditor}
									data={values.description ?? ''}
									onReady={(editor) =>
									{
										// You can store the "editor" and use when it is needed.
										console.log('Editor is ready to use!', editor);
									}}
									onChange={(event, editor) =>
									{
										const data = editor.getData();

										setValues({ ...values, description: data });
									}}
									onBlur={(event, editor) =>
									{
										console.log('Blur.', editor);
									}}
									onFocus={(event, editor) =>
									{
										console.log('Focus.', editor);
									}}
								/>
							</CardContent>
							<br />

							<Box sx={{ py: 2 }}>
								<Card>
									<CardHeader
										subheader={'The research paper should be uploaded alongside '
										+ 'the contact information (pdf files only)'}
									/>
									<Divider />
									<CardContent>
										<section className='container'>
											<div {...getRootProps({ style })}>
												<input {...getInputProps()} />
												{/* eslint-disable-next-line max-len */}
												<p>Drag &rsquo;n&rsquo; drop some files here, or click to select files</p>
											</div>
											<aside>
												<h6>Files</h6>
												<ul>{files}</ul>
											</aside>
										</section>
									</CardContent>
								</Card>
							</Box>

						</div>
						<div className='mb-3'>
							<label htmlFor='subjectAmount' className='form-label'>Publish Date</label>
							<br />

							<input
								type='datetime-local'
								className='form-control'
								id='publishDate'
								name='publishDate'
								onChange={handleChange}
							/>

						</div>
					</CardContent>
					<Divider />
					<Alert severity='error' hidden={!alertData.display}>{alertData.message}</Alert>
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
							Submit
						</Button>
					</Box>
				</Card>
			</Container>
		</form>
	);
};

export default ResearchWorkShop;