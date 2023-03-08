
import './home.css'
import {Link} from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios'

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        empid:'',
        empage:'',
        empexp: '',
        empname: '',
        empsalary:'',
        empteam:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ empid: event.target.value });
  };

  handlePageChange = (event) => {
    this.setState({ empage: event.target.value });
  };

  handleExpChange = (event) => {
    this.setState({ empexp: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ empname: event.target.value });
  };

  handleSalaryChange = (event) => {
    this.setState({ empsalary: event.target.value });
  };
  handleTeamChange = (event) => {
    this.setState({ empteam: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        empid: this.state.empid,
        empage: this.state.empage,
        empexp: this.state.empexp,
        empname: this.state.empname,
        empsalary: this.state.empsalary,
        empteam: this.state.empteam,

        
      };
    
      axios.put('http://127.0.0.1:8080/put', data)
  };
  render() {
    return (
      <div className='body'>
      <h1 className="h1">Post details</h1>
      <div className="card">
        <form onSubmit={this.handleSubmit}>
<h4>Id:</h4>
<input type="text" className="username" placeholder='Enter id'required value={this.state.empid}
          onChange={this.handleIdChange}>
</input>
<h4>Age:</h4>
<input type="text" className="username" placeholder='Enter branch name'required value={this.state.empage}
          onChange={this.handlePageChange}>
</input>
<h4>Experience:</h4> 
<input type="text" className="username" placeholder="Enter new required" value={this.state.empexp}
          onChange={this.handleExpChange}>
</input> 
<h4>Name:</h4> 
<input type="text" className="username" placeholder="Enter new required" value={this.state.empname}
          onChange={this.handleNameChange}>
</input> 
<h4>Salary:</h4> 
<input type="text" className="username" placeholder="Enter new required" value={this.state.empsalary}
          onChange={this.handleSalaryChange}>
</input> 
<h4>Team:</h4> 
<input type="text" className="username" placeholder="Enter new required" value={this.state.empteamnp}
          onChange={this.handleTeamChange}>
</input>  
 
          <br></br><br></br><br></br>
          <div className="center">
          <button className="btn" type="submit">Update</button>
          </div>
          
        </form>
      </div>
</div> 
    )
  }
}

export default home