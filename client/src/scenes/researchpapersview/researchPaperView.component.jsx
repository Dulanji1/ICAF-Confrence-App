import React from 'react';

export default function ResearchPaperView()
{
	return (
		<div className='container'>
			<h2>View Research papers</h2>
			<br />

			<div
				className='card mb-3 '
				  style={{
					  marginLeft      : 40,
					  backgroundColor : "#E6E6FA",
				  }}
			>
				<div className='p-3'>

					<h5>Category: </h5>
					<h4 className='text-primary'>Title: </h4>
					<h5>Publisher Name: </h5>
					<h6>Description: </h6>
					<h6>Research Paper: </h6>
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
