import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';
import { communicationService } from '../../../utils';

// eslint-disable-next-line react/display-name
const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />);

const RegistrationEditPage = () =>
{
	const [ editData, setEditData ] = useState('');
	const [ open, setOpen ] = React.useState(false);

	useEffect(() =>
	{
		setEditData('');

		communicationService.registrationGet(null,
			(res) =>
			{
				const { description } = res.data.data.registrationData;

				setEditData(description);
			}, (err) =>
			{
				console.log(err);
			});
	}, []);

	const handleClick = () =>
	{
		setOpen(true);
	};

	const handleClose = (event, reason) =>
	{
		if (reason === 'clickaway')
		{
			return;
		}

		setOpen(false);
	};

	const handleSubmit = (e) =>
	{
		e.preventDefault();

		communicationService.registrationCreate({ description: editData },
			(res) =>
			{
				console.log(res);
				setOpen(true);
			},
			(err) =>
			{

			});
	};

	return (
		<>
			<Helmet>
				<title>Registration Edit | ICAF</title>
			</Helmet>
			<Card>
				<CardHeader
					subheader='edit'
					title='Registration page'
				/>
				<Divider />
				<CardContent>
					<CKEditor
						editor={ClassicEditor}
						data={editData ?? ''}
						onReady={(editor) =>
						{
							// You can store the "editor" and use when it is needed.
							console.log('Editor is ready to use!', editor);
						}}
						onChange={(event, editor) =>
						{
							const data = editor.getData();

							// console.log({ event, editor, data });

							setEditData(data);
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
				<CardActions>
					<Button
						variant='outlined'
						color='success'
						onClick={(e) => handleSubmit(e)}
					>
						Save and Move to Approval
					</Button>
				</CardActions>
				<Divider />
			</Card>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Data saved successfully.
				</Alert>
			</Snackbar>
		</>
	);
};

export default RegistrationEditPage;
