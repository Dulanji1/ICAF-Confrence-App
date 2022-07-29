import React from 'react';
import { Link } from "react-router-dom";
import { NavDropdown, Button } from "react-bootstrap";

export default function ResearchPaperTemplates()
{
	return (
		<div className='container'>
			<div className='container'>
				{/* <h2>Research Paper Templates</h2>*/}
				<br />

				<div className='row'>
					<div className='col-sm-6'>
						<div className='card alert alert-secondary'>
							<div className='card-body'>
								<h5 className='card-title'>How to write a research paper</h5>
								<p className='card-text'>

									A research paper is a document that contains the
									interrelation of the research question/s,
									thesis, variable interpretation, and methodology
									results evaluation.

									Choose a research paper template.
								</p>
								<img
									src='https://www.powerpac.org/wp-content/uploads/2017/07/contract.png'
									width='120' height='120' className='d-inline-block align-top' alt=''
								/>
								<a href='https://www.scribbr.com/research-paper/research-paper-format/' className='btn btn-primary'>Do the Check</a>
							</div>
						</div>
					</div>

					<div className='col-sm-6'>
						<div className='card alert alert-secondary'>
							<div className='card-body'>
								<h5 className='card-title'>Understanding plagiarism</h5>
								<p className='card-text'>
									Plagiarism means presenting someone else’s work as your own.
									Plagiarism can have serious consequences for students and researchers,
									even when it’s done accidentally.
								</p>
								<img
									src='data:image/png;base64,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'
									width='120' height='120' className='d-inline-block align-top' alt=''
								/>
								<a href='#' className='btn btn-primary'> Do the Check</a>
							</div>
						</div>
					</div>
				</div>
				<h3> Research Paper Templates in PDF</h3>

				<label htmlFor='description' className='form-control text-primary'>1. Student Research Paper Templates</label>

				<p>
					Here Research Paper Templates are regarding Student Research Paper.
					If you want to create a research paper, you may use the templates
					which you can download from this post as your guide in making the document.
					The samples available in this article are all in PDF.
				</p>
				<Button color='inherit'>

					<NavDropdown
						title='Student Research Paper Templates' id='navbarScrollingDropdown' className='form-control'
					>

						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>

							Student Research Paper
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Student Career Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Example of Student Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
					</NavDropdown>
				</Button>
				<br />
				<br />
				<br />

				<label htmlFor='description' className='form-control text-primary'>2. Medical Research Paper Templates</label>

				<p>
					Here Research Paper Templates are regarding
					Medical Research Paper.If you want to create
					a research paper, you may use the templates
					which you can download from this post as your
					guide in making the document.
					The samples available in this article are all in PDF.
				</p>
				<Button className='btn btn-info'>

					<NavDropdown
						title='Medical Research Paper Templates' id='navbarScrollingDropdown' className='form-control'
					>

						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>

							Structure of Medical Research Paper
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Sample Medical Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Assessment Medical Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
					</NavDropdown>
				</Button>
				<br />
				<br />
				<br />

				<label htmlFor='description' className='form-control text-primary'>3. Research Paper Outline Templates</label>

				<p>
					Here Research Paper Templates are regarding Research Paper Outline Templates.
					If you want to create a research paper, you may use
					the templates which you can download
					from this post as your guide in making the document.
					The samples available in this article are all in PDF.
				</p>
				<Button className='btn btn-success'>

					<NavDropdown
						title='Medical Research Paper Templates' id='navbarScrollingDropdown' className='form-control'
					>

						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>

							Basic Research Paper Outline
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Career Research Paper Outline

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Research Paper Outline Example

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
					</NavDropdown>
				</Button>
				<br />
				<br />
				<br />

				<label htmlFor='description' className='form-control text-primary'>4. Business Research Paper Templates</label>

				<p>
					Here Research Paper Templates are
					regarding Research Paper Outline Templates.
					If you want to create a research paper,
					you may use the templates which you can download .
					from this post as your guide in making the document.
					The samples available in this article are all in PDF.
				</p>
				<Button className='btn btn-secondary'>

					<NavDropdown
						title='Business Research Paper Templates' id='navbarScrollingDropdown' className='form-control'
					>

						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>

							Basic Research Paper Outline
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Business School Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Business Model Research Paper

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
					</NavDropdown>
				</Button>
				<br />
				<br />
				<br />

				<label htmlFor='description' className='form-control text-primary'>5. Marketing Research Paper Templates</label>

				<p>
					Here Research Paper Templates are regarding Marketing
					Research Paper Templates.If you want to create a research
					paper, you may use the templates which you can download
					from this post as your guide in making the document.
					The samples available in this article are all in PDF.
				</p>
				<Button className='btn btn-warning'>

					<NavDropdown
						title='Marketing Research Paper Templates' id='navbarScrollingDropdown' className='form-control'
					>

						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>

							Marketing Management Research Paper
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Career Research Paper Outline

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='http://www.ijsrp.org/IJSRP-paper-submission-format-double-column.docx'>
							Research Paper Outline Example

							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnyvMu-d96GKT3U0xT_18hT4IJ6nH0oaZCBagsb_5h7ZKwVDg70-yy_Q_Zydy7NUleME&usqp=CAU'
								width='30' height='30' className='d-inline-block align-top' alt=''
							/>
						</NavDropdown.Item>
					</NavDropdown>
				</Button>
				<br />
				<br />
				<br />

			</div>
		</div>
	);
}
