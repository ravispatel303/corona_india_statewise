import React, {Component} from 'react';
import { Button, Table } from 'react-bootstrap';
import data from './recentData.json';
import './Tables.css';

class Tables extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: data,
		}
		this.getKeys = this.getKeys.bind(this);
		this.getHeader = this.getHeader.bind(this);
		this.getRows = this.getRows.bind(this);
	}

  	_refreshPage = () => {
        console.log("Clicked");
        window.location.reload();
      }

	getKeys = () => {
		if (Object.keys(this.props.data).length === 0){
			return ( <button onClick = {this._refreshPage()}> test </button>);
		}else{
			return Object.keys(this.props.data[0]);
		}
	}

	getHeader = () => {
		var keys = this.getKeys();
		return keys.map((key, index) => {
			return <th key={key} >
				<Button variant="info" onClick={() => this.props.sortBy(key)}>
					{key.toUpperCase()}
					<i className="fas fa-sort"></i>
				</Button>
			</th>
		})
	}

	getRows = () => {
		var items = this.props.data;
		var keys = this.getKeys();
		return items.map((item, index) => {
			return <tr key={item['States']} id={item['States']}>{
				keys.map((key, index) => {
				return <td key={index}>{item[key]}</td>
				})
			}
			</tr>	
		}) 
	}

	render(){
		return(
			<div>
				<Table striped bordered hover >
				<thead><tr>{this.getHeader()}</tr></thead>
				<tbody>{this.getRows()}</tbody>
				</Table>
			</div> 
		)
	}
}

export default Tables;