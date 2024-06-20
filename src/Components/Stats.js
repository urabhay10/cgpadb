import React, { Component } from 'react'

export default class Stats extends Component {
    async componentDidMount() {
        try{
            const response = await fetch('https://cgpa-server-4aef3303c3a7.herokuapp.com/get-stats');
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
