import React from 'react';
import { Card } from 'react-bootstrap';

const Footers = () => {
	return(
	<Card bg="dark" variant="dark" text="white" className="text-center">
	  <Card.Header>Sources: Dataset retrieved from <a href='https://www.mohfw.gov.in/' target='blank' className="text-decoration-none">MoHFW</a></Card.Header>
	  <Card.Body>
	    <Card.Title>Developed By:</Card.Title>
	    <Card.Text>
	      <a href='https://github.com/ravispatel303/corona_india_statewise' target='blank' className="text-decoration-none">Ravi Patel</a>
	    </Card.Text>
	  </Card.Body>
	</Card>
	);
}

export default Footers