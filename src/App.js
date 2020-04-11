import React, {Component} from 'react';
import data from './recentData.json';
import Tables from './Tables';
// import logo from './logo.svg';
import './App.css';
import { Card, Navbar, Nav, Form, FormControl, Button, Container, Alert } from 'react-bootstrap';
import Footers from './Footers';
import Headers from './Headers';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      data: data,
      searchfield: '',
      direction: {
        'States': 'asc',
        'New Cases': 'asc',
        'New Deaths': 'asc',
        'Total Cases': 'asc',
        'Total Deaths': 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
    // this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange = (event) => {
    // console.log(event)
    this.setState({ searchfield: event.target.value })
  }

  sortBy = (key) => {
    // console.log(this.state.direction)
    if(key === 'States'){
      this.state.direction[key] === 'asc'
      ?this.setState({
        data: data.sort((a,b) => {
            if(b.States < a.States){
              return 1
            }else if(a.States < b.States){
              return -1
            }else{
              return 0
            }
          }),
        direction:{
          [key]: 'desc'
        }
      })
      :this.setState({
        data: data.sort((a,b) => {
            if(b.States > a.States){
              return 1
            }else if(a.States > b.States){
              return -1
            }else{
              return 0
            }
          }),
        direction:{
          [key]: 'asc'
        }
      })
    }else{
      this.setState({
        data: data.sort((a,b) => (
          this.state.direction[key] === 'asc'
          ? a[key] - b[key]
          : b[key] - a[key]
        )),
        direction: {
          [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
        }
      })
    }
  }

  render() {

    const { data, searchfield } = this.state;
    const filteredRobots = data.filter(dat => {
      return dat.States.toLowerCase().includes(searchfield.toLowerCase())
    })


    return (
    <div className="Jumbotron">
      <Headers searchChange={this.onSearchChange}/>
      <Scroll>     
      <Container className='py-5'>
        <Alert key='time' variant='info'>
    Last Updated on: 11 April 2020, 08:00 GMT+5:30
  </Alert>
      <ErrorBoundry>
       <Tables data={filteredRobots} sortBy={this.sortBy}/>
      </ErrorBoundry>
      </Container>
      </Scroll>
      <Footers/>
    </div>
    );  
  }

}

export default App;
