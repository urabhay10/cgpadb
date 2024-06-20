import React, { Component } from 'react'

export default class Stats extends Component {
    async componentDidMount() {
        try{
            const response = await fetch('http://localhost:8000/get-stats');
            const data = await response.json();
            console.log(data);
        }catch{

        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
