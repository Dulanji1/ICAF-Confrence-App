import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import { useNavigate } from 'react-router-dom';
import Alert from "@material-ui/core/Alert";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import IconButton from "@material-ui/core/IconButton";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { communicationService } from '../../../utils';
import { SERVER_URL } from '../../../config';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function createData(id, publisherName, category, publishDate, pdfData)
{
	return { id, publisherName, category, publishDate, pdfData };
}

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />);

const ResearchPaperViewPage = () =>
{
	const navigate = useNavigate();

	const [ rows, setRows ] = useState([]);

	const [ editData, setEditData ] = useState('');
	const [ pdfData, setPdfData ] = useState('');

	const [ numPages, setNumPages ] = useState(null);
	const [ pageNumber, setPageNumber ] = useState(1);

	function onDocumentLoadSuccess({ pg })
	{
		setNumPages(pg);
	}

	const [ open, setOpen ] = React.useState(false);
	const [ getError, setError ] = React.useState(false);

	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) =>
	{
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) =>
	{
		setRowsPerPage(Number(event.target.value));
		setPage(0);
	};

	const handleClickOpen = () =>
	{
		setOpen(true);
	};

	const handleClose = () =>
	{
		setOpen(false);
	};

	function fetchResearch()
	{
		communicationService.getResearch(null,
			(res) =>
			{
				const { data } = res.data;

				const rowData = [];

				data.user.map((item) =>
				{
					rowData.push(
						createData(item._id,
							item.publisherName, item.category, item.publishDate, item.fileName),
					);

					return item;
				});

				setRows(rowData);
			},
			(err) =>
			{

			});
	}

	useEffect(async () =>
	{
		setEditData('');
		setOpen(false);
		setError(false);

		fetchResearch();
	}, []);

	const onApproveHandle = (e, id) =>
	{
		e.preventDefault();
		communicationService.approveResearch({ id },
			(res) =>
			{
				fetchResearch();
			},
			(err) =>
			{
			});
	};

	const onRejectHandle = (e, id) =>
	{
		e.preventDefault();

		communicationService.rejectResearch(id,
			(res) =>
			{
				// debugger;
				fetchResearch();
			},
			(err) =>
			{
				// debugger;
			});
	};

	const onViewPdf = (e, data) =>
	{
		e.preventDefault();

		setOpen(true);
		setPdfData(data);
	};

	return (
		<>
			<Helmet>
				<title>Changes | ICAF</title>
			</Helmet>
			<Card>
				<CardHeader
					subheader='All the research paper submissions '
					title='Research Paper Review form'
				/>
				<Divider />
				<CardContent>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Researcher</TableCell>
									<TableCell align='right'>Category</TableCell>
									<TableCell align='right'>Publish Year</TableCell>
									<TableCell align='right'>PDF</TableCell>
									<TableCell align='right'>Approve</TableCell>
									<TableCell align='right'>Reject</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => (
										<TableRow
											key={row.id}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row.publisherName}
											</TableCell>
											<TableCell align='right'>{row.category}</TableCell>
											<TableCell align='right'>{row.publishDate}</TableCell>
											<TableCell align='right'>
												<IconButton
													color='primary' aria-label='upload picture' component='span'
													onClick={(e) => onViewPdf(e, row.pdfData)}
												>
													<PictureAsPdfIcon />
												</IconButton>
											</TableCell>
											<TableCell align='right'>
												<Button
													variant='outlined' color='success'
													onClick={(e) => onApproveHandle(e, row.id)}
												>
													Approve
												</Button>
											</TableCell>
											<TableCell align='right'>
												<Button
													variant='outlined' color='error'
													onClick={(e) => onRejectHandle(e, row.id)}
												>
													Reject
												</Button>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[ 10, 25, 100 ]}
						component='div'
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</CardContent>
				<Divider />
			</Card>
			<Alert severity='error' hidden={!getError}>Something went wrong with data saving</Alert>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				fullWidth
				maxWidth='xl'
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle id='alert-dialog-slide-title'>
					View PDF
				</DialogTitle>
				<DialogContent>
					<Document
						file={`${SERVER_URL}materials/${pdfData}`}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ResearchPaperViewPage;
