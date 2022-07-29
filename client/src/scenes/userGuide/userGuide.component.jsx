import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Dropdown, Row, Col, ListGroup } from "react-bootstrap";
import { Carousel } from "bootstrap";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";

export default function UserGuide()
{
	return (

		<div className='container'>
			<h1>User Guide Page</h1>

			<Container>
				<Row>
					<Col>
						once you register to the system the can
						submit the research papers,
						conduct workshops
						present youre research-related activities

						{/* eslint-disable-next-line max-len */}
						you can register by go through navigater's loging and once you register you can click research paper and publish youre research paper by clicking publish research paper and
						{/* eslint-disable-next-line max-len */}
						and view it by clicking view research paper.If you need research paper template also you can select template by "Template".

						{/* eslint-disable-next-line max-len */}
						You can add the conference details and edit as Editor. once you go through "for authers" "Add conference details"

						{/* eslint-disable-next-line max-len */}
						There are landing page that shows all the related information including venue and date.Download page where the research paper templates, workshop PowerPoint
						{/* eslint-disable-next-line max-len */}
						templates, and other templates can be download. Separate pages for each of the main events in the conference. (Research paper
						{/* eslint-disable-next-line max-len */}
						presentations, workshops, etc.) A registration page where a user can be registered as a researcher, workshop
						{/* eslint-disable-next-line max-len */}
						presenter, or attendee. When the researcher registered to the system, the research paper can uploaded alongside the contact information.When the workshop conductor is registered to the system, a proposal containing
						{/* eslint-disable-next-line max-len */}
						all the necessary details about the workshop should be uploaded alongside the contact information. When the user is registered to the system all the necessary contact information
						can uploaded.

					</Col>
					<Col>
						<img src='https://media.istockphoto.com/photos/you-have-the-power-to-control-how-your-story-ends-picture-id1279149314?s=612x612' width='800' height='800' className='img-fluid' alt='' />
						Anyone can view all the conferece details as a guest
						<row>

							{/* eslint-disable-next-line max-len */}
							You can to see the research paper uploads and workshop detail uploads in separate pages as Reviewers.
							The uploads are available to view.
							Reviewers can approve or decline the research papers or workshop proposals. And
							notification is sent to the relevant user.
							Attendees should pay upfront to register for the conference
						</row>
					</Col>
				</Row>
			</Container>
<br/>
			<ListGroup>

				<h4 className='text-primary'>BEFORE THE EVENT</h4>
				<ListGroup.Item variant='primary'>

					{' BEFORE THE EVENT Depending on the event’s format and its requirements the organizers may need to\n'
+ '\t\t\t\t\tprepare or purchase software and hardware. Some software products require\n'
+ '\t\t\t\t\tdifferent licenses depending on the number of participants.What is just as important as the set-up of the physical room where the event is\n'
+ 'hosted is the configuration of the virtual conference room(s). As a general rule we\n'
+ 'recommend preparing as many of these configurations as possible in advance –\n'
+ 'everything that saves time during the conference makes the life of the hosts easier.\n'
+ 'What needs to be planned carefully is: how many virtual rooms are needed,\n'
+ 'whether there should be parallel rooms, when they open and close, whether they\n'
+ 'are open or password-protected etc.\n'
+ 'The layout of each room can be specified according to the scheduled program. A\n'
+ 'change of layout is usually also easily possible during a session. It is useful to predefine various layouts (e.g. lobby, presentation, discussion – see images).'}
				</ListGroup.Item>
				<br/>

				<h4 className='text-secondary'>DURING THE EVENT</h4>
				<ListGroup.Item variant='secondary'>
					{'DURING THE EVENT\n'
				+ 'After finishing all preparatory tasks, the actual hosting starts. Hosting an online\n'
				+ 'event is a demanding task. Therefore, the moderator should concentrate solely on\n'
				+ 'his/her role while the hosts deal with the technical part. Wherever technology is\n'
				+ 'involved things can go wrong; the hosts must therefore anticipate potential\n'
				+ 'situations in advance. We recommend writing a script that lists all actions minute\n'
				+ 'by minute. This is an example from the first day of the CA Online Conference 2019:\n'}
				</ListGroup.Item>
				<br/>

				<h4 className='text-success'>OPENING THE EVENT</h4>
				<ListGroup.Item variant='success'>
					{'OPENING\n'
				+ 'To start on schedule, the virtual conference room should open some minutes\n'
				+ 'before the official start with a lobby layout: an image with the program to come,\n'
				+ 'background music and a chatbox, for example. Whether the attendee list is visible\n'
				+ 'to all participants is up to the hosts to decide: making it visible is likely to help\n'
				+ 'attendees feel part of a group, but if the number of participants is very large, this\n'
				+ 'will not be helpful at all.\n'
				+ 'Participants should be instructed in advance how to enter the virtual room (e.g.\n'
				+ '“first name, last name, institution”). Leaving academic titles out can contribute to\n'
				+ 'a more inclusive atmosphere.'}
				</ListGroup.Item>
				<br/>

				<h4 className='text-danger'>DISCUSSIONS & INTERACTIVE SESSIONS</h4>
				<ListGroup.Item variant='danger'>
					{'DISCUSSIONS & INTERACTIVE SESSIONS\n'
				+ 'To avoid background noise and echoes, for any online meeting we recommend\n'
				+ 'allowing only one person to speak at a time and muting all others in the meantime.\n'
				+ 'To keep discussions organized, participants ought to use the tool to raise their hand\n'
				+ 'if they want to speak. The moderator can then announce who is next to speak and\n'
				+ 'the hosts can switch on the microphone and optionally the camera for this person.\n'
				+ 'The chat can also be used to keep a discussion organized e.g. by posting the order\n'
				+ 'of upcoming speakers. If the group is not too big and participants are disciplined\n'
				+ 'the hosts can assign microphone rights to all participants and they can mute and\n'
				+ 'unmute them on their own. '}
				</ListGroup.Item>
				<br/>

				<h4 className='text-warning'>BREAK-OUT ROOMS</h4>
				<ListGroup.Item variant='warning'>
					{'BREAK-OUT ROOMS\n'
				+ 'If several sessions are running in separate rooms in parallel we highly recommend\n'
				+ 'that every room has one host. Consequently, this implies that there should not be\n'
				+ 'more break-out rooms than hosts available. It should also be clear whether the\n'
				+ 'sessions are self-organized by the groups attending them or require a separate\n'
				+ 'moderator or facilitator. Important: If a session is facilitated by somebody who is\n'
				+ 'not present in the hosting room, the hosts must always be prepared to jump in and\n'
				+ 'take over if the facilitator experiences technical problems. '}
				</ListGroup.Item>
				<br/>

				<h4 className='text-info'>AFTER THE EVENT</h4>
				<ListGroup.Item variant='info'>
					{'AFTER THE EVENT\n'
				+ 'When the event has ended, the hosts can either leave the virtual room open for\n'
				+ 'future uses or close it so that participants cannot enter anymore.\n'
				+ 'To save the results of a session the hosts should consider using appropriate tools\n'
				+ 'or foresee one person who takes minutes. Screenshots or text from note boxes and\n'
				+ 'chats can easily be saved to an external file. If participants are to be involved more\n'
				+ 'actively, they can be asked to leave their notes in an open shared file during or after\n'
				+ 'the session. If the event has been recorded the file(s) can be edited (cutting,\n'
				+ 'anonymizing participants etc.) and made available to participants'}
				</ListGroup.Item>
				<br/>
				<br/>
			</ListGroup>

		</div>

	);
}
