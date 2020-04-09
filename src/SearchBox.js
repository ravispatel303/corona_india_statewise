import React from 'react';
import {FormControl} from 'react-bootstrap';

const SearchBox = ({searchChange}) => {
		return(
		<div>
	  	<FormControl 
	  		type="search" 
	  		placeholder="Search States" 
	  		className="mr-sm-2"
	  		onChange={searchChange} 
	  		/>	
		</div>
	);
}

export default SearchBox