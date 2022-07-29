import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Dropdown } from "react-bootstrap";

export default function ResearchWorkShopView()
{
	return (
		<div className='container'>
			<h2>Workshops</h2>
			<br />

			<div
				className='card mb-3 '
				  style={{
					  marginLeft      : 40,
					  backgroundColor : "#E6E6FA",
				  }}
			>
				<div className='p-3'>

					<h4 className='text-primary'>Workshop Title: </h4>
					<h5>Description: </h5>
					<h5>Publisher: </h5>
					<h6>Publisher Name: </h6>
					<h6>Publisher Details: </h6>
					<h6 className='text-muted'>Publish Date: </h6>

					<button
						type='submit' className='btn btn-warning'
						style={{
							marginLeft : 1000,
						}}
					>
						{' '}
						Edit
					</button>
					<button
						type='submit' className='btn btn-danger'
						style={{
							marginLeft : 40,
						}}
					>
						Delete
					</button>

				</div>

			</div>

		</div>
	);
}
