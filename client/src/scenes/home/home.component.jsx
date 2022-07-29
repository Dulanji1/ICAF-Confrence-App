import React from 'react';
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
	TextareaAutosize,
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import GoogleMapReact from 'google-map-react';

const Home = () => (
	<div>
		<Container
			style={{
				width          : '100%',
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center" }}
			maxWidth='xl' className='mt-3'
		>
			<Paper style={{ width: '100%', height: '50%', display: "flex flex-col", justifyContent: "center", alignItems: "center", background: '#4e9af2' }}>
				<Typography style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: '30px' }}>
					3RD INTERNATIONAL CONFERENCE ON ADVANCEMENTS IN COMPUTING 2021
				</Typography>
				<Typography style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: '20px' }}>
					9th, 10th and 11th December 2021
				</Typography>
				<Typography style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: '16px' }}>
					Sri Lanka institute of Information Technology, SriLanka
				</Typography>
			</Paper>
		</Container>
		<div>
			<div
				style={{
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<h3>About Our Conference</h3>
			</div>

			<div
				style={{
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					color          : '#e77728',
				}}
			>
				<h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: "sans-serif" }}>
					3RD INTERNATIONAL CONFERENCE ON
					ADVANCEMENTS IN COMPUTING 2021
				</h2>
			</div>
			<Container
				style={{
					width          : '100%',
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center" }}
				maxWidth='lg' className='mt-3'
			>
				<p style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "16px", fontFamily: "sans-serif" }}>
					The 3rd International conference on advancements in computing
					-2021 (ICAC2021) is organized by the
					Faculty of Computing of the Sri Lanka
					Institute of Information Technology (SLIIT)
					as an open forum for academics along with industry professionals
					to present the latest findings and research output
					and practical deployments in the Computer Science
					and Information Technology domains.
					Primary objective of the ICAC is to uplift
					the research culture and the quality of
					research done by Sri Lankan researchers.
					This conference will create a platform
					for national and international researchers
					to showcase their research output,
					networking opportunities to discuss innovative
					ideas, and initiate collaborative work. ICAC 2019 and ICAC 2020
					were successfully conducted with a technical
					co-sponsorship by IEEE Sri Lanka Section and
					all publications are available in IEEE Xplore digital library
				</p>
			</Container>
			<div>
				<Container
					style={{
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
						color          : '#e77728',
					}}
					maxWidth='xl' className='mt-3'
				>
					<Paper style={{ width: '100%', display: "flex flex-col", justifyContent: "center", alignItems: "center", background: '#e77728' }}>
						<h3 style={{
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
							fontWeight     : "bold",
						}}
						>
							Keynote Speakers
						</h3>
						<Container
							style={{
								display        : "flex",
								justifyContent : "center",
								alignItems     : "center",
								color          : '#e77728',
							}}
						>
							<Avatar className='ml-16' alt='Remy Sharp' src='https://images.app.goo.gl/c4ch6d5TvA9ueRvB7' sx={{ width: 200, height: 200 }} style={{ display: "flex", justifyContent: "center", alignItems: "left" }} />
							<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
								<Typography
									color='textPrimary'
									variant='h4'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									Prof Elizabeth Anne Broadbent
								</Typography>
								<Typography
									color='textPrimary'
									variant='h6'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									Department of Psychological Medicine, University of Auckland
								</Typography>
							</div>

							<Avatar className='ml-16' alt='Remy Sharp' src='https://images.app.goo.gl/c4ch6d5TvA9ueRvB7' sx={{ width: 200, height: 200 }} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
							<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
								<Typography
									color='textPrimary'
									variant='h4'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									Prof William Wong
								</Typography>
								<Typography
									color='textPrimary'
									variant='h6'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									Middlesex University London
								</Typography>
							</div>
						</Container>

						<h3 style={{
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
							fontWeight     : "bold",
						}}
						>
							Guest Speakers
						</h3>
						<Container
							className='justify-between p-20'
							style={{
								display        : "flex",
								justifyContent : "center",
								alignItems     : "center",
								color          : '#e77728',
							}}
						>
							<Avatar className='ml-16' alt='Remy Sharp' src='https://images.app.goo.gl/c4ch6d5TvA9ueRvB7' sx={{ width: 200, height: 200 }} style={{ display: "flex", justifyContent: "center", alignItems: "left" }} />
							<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
								<Typography
									color='textPrimary'
									variant='h4'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									DR. UPENDRA PIERIS
								</Typography>
								<Typography
									color='textPrimary'
									variant='h6'
									className='ml-16'
									style={{
										display        : "flex",
										justifyContent : "end",
										alignItems     : "end",
									}}
								>
									Vice President, OREL IT
								</Typography>
							</div>
						</Container>
					</Paper>
				</Container>

				<Container
					style={{
						width          : '100%',
						display        : "flex flex-col",
						justifyContent : "center",
						alignItems     : "center",
						color          : '#e77728',
					}}
					maxWidth='xl' className='mt-3'
				>

					<h3 style={{
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
						fontWeight     : "bold",
						fontSize       : "40px",
					}}
					>
						Conference Tracks
					</h3>

					<Paper style={{ width: '100%', display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
						<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
							<List style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "30px" }}>
								Data science and data driven approaches
							</List>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Data Mining
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Data driven approaches and technologies.
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Data analytics and visualizations
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Data science applications
							</ListItem>

						</div>
						<br />
						<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
							<List style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "30px" }}>
								Technology enhanced learning
							</List>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								E-learning applications
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Adaptive learning
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Learning analytics and dashboards
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								MOOCs and other online education approaches
							</ListItem>

						</div>
						<div style={{ display: "flex flex-col", justifyContent: "center", alignItems: "center" }}>
							<List style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "30px" }}>
								Computer Vision
							</List>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Biometrics, face, gesture, body pose
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Neural generative models, auto encoders, GANs
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Recognition (object detection, categorization)
							</ListItem>
							<ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px" }}>
								Video analysis and understanding
							</ListItem>

						</div>
					</Paper>
				</Container>
			</div>
		</div>
	</div>
);

export default Home;
