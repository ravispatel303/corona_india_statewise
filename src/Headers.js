import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import logo from './corona.gif';
// import SearchBox from './SearchBox';
 

const Headers = (props) => {
	return(
	
        <Navbar bg="dark" variant="dark" expand='lg' >
			<Navbar.Brand href="https://coronainindia.netlify.com/" ><p className='container-fluid'><img src={logo} alt="logo"/> COVID-19 Statewise Cases in INDIA</p></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />			
			<Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto"></Nav>
				<Form inline>
				  	  	<FormControl 
			  		type="search" 
			  		placeholder="Search States" 
			  		className="mr-sm-2"
			  		onChange={props.searchChange} 
			  		/>	
				</Form>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Headers