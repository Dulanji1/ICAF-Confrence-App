import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Dropdown, Row, Col, NavDropdown } from "react-bootstrap";
import { Container } from "@material-ui/core";

export default function ContactUs()
{
	return (
		<div className='container'>
			<h1>Contact Us Page</h1>
			{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

			<Container>
				<Row>
					<Col><img src='https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?s=612x612' width='800' height='800' className='img-fluid' alt='' /></Col>
					<Col>
						<form>
							<h2>Leave a Comment</h2>
							<Form.Group controlId='exampleForm.ControlInput1'>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' placeholder='name@example.com' />
							</Form.Group>
							<div className='mb-3'>

								<label htmlFor='txtName' className='form-label'>Name</label>
								<input
									type='text'
									className='form-control'
									id='txtName'
									name='txtName'
								/>
							</div>
							<div className='mb-3'>

								<label htmlFor='subjectName' className='form-label'>Subject</label>
								<input
									type='text'
									className='form-control'
									id='subjectName'
									name='subjectName'
								/>
							</div>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label>Youre Comment(Optional) </Form.Label>
								<Form.Control as='textarea' rows={3} />
							</Form.Group>
							<br />
							<button type='submit' className='btn btn-primary'  onClick={() => alert("Successfully Send Message!")}>Submit</button>


						</form>
					</Col>
				</Row>
			</Container>

		</div>
	);
}
