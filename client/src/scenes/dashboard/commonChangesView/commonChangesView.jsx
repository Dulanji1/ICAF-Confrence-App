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
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from "@material-ui/core/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { communicationService } from '../../../utils';

const CommonChangesView = () =>
{
	const { state } = useLocation();
	const navigate = useNavigate();

	const { type } = state;

	const [ editData, setEditData ] = useState('');
	const [ disabledButton, setDisabledButton ] = useState(true);
	const [ open, setOpen ] = React.useState(false);
	const [ getError, setError ] = React.useState(false);

	const handleClose = (event, reason) =>
	{
		if (reason === 'clickaway')
		{
			return;
		}

		setOpen(false);
	};

	useEffect(async () =>
	{
		setEditData('');
		setOpen(false);
		setError(false);

		switch (type)
		{
		case 'Registration':
			await communicationService.registrationGetToBeApproved(null,
				(res) =>
				{
					const { description } = res.data.data.registrationData;

					setEditData(description);
					setDisabledButton(false);
					setError(false);
				},
				(err) =>
				{
					setDisabledButton(true);
				});
			break;
		default:
			// debugger;
			navigate('/app/changes');
		}
	}, []);

	const onApproveHandle = (e) =>
	{
		e.preventDefault();

		communicationService.registrationApprove({ description: editData },
			(res) =>
			{
				// debugger;
				setOpen(true);
				navigate('/app/changes');
			},
			(err) =>
			{
				// debugger;
				setOpen(false);
			});
	};

	return (
		<>
			<Helmet>
				<title>Changes | ICAF</title>
			</Helmet>
			<Card>
				<CardHeader
					subheader='Changes '
					title='Review form'
				/>
				<Divider />
				<CardContent>
					<Alert severity='warning' hidden={!disabledButton}>No data to approve</Alert>
					<CKEditor
						editor={ClassicEditor}
						data={editData}
						onReady={(editor) =>
						{
							// You can store the "editor" and use when it is needed.
							console.log('Editor is ready to use!', editor);
						}}
						onChange={(event, editor) =>
						{
							const data = editor.getData();

							console.log({ event, editor, data });

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
					<Button variant='outlined' color='error' disabled={disabledButton}>Discard</Button>
					<Button
						variant='outlined' color='success' disabled={disabledButton}
						onClick={(e) => onApproveHandle(e)}
					>
						Accept
					</Button>
				</CardActions>
				<Divider />
			</Card>
			<Alert severity='error' hidden={!getError}>Something went wrong with data saving</Alert>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Data approved successfully.
				</Alert>
			</Snackbar>
		</>
	);
};

export default CommonChangesView;
