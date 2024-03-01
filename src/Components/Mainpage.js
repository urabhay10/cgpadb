import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.roll)
    const roll = Number(this.state.roll) % 100;
    const res = await fetch('https://cgpa-server-4aef3303c3a7.herokuapp.com/get-res?roll=' + roll);
    const data = await res.json();
    console.log(data);
    this.props.changeres(data)
  }
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.handleSubmit(e);
      }
    }
    )
  }
  handlechange = (e) => {
    this.setState({ roll: e.target.value });
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh'
      }}>
        <div style={{
          fontWeight: 'bold',
          marginTop: '200px'
        }}>
          Enter roll number
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw'
        }}><input
            type="text"
            value={this.state.roll}
            onChange={this.handlechange}
            style={{
              width: '10vw',
              height: '10vh',
              maxHeight: '25px',
              minWidth: '100px'
            }}
          />
          <button type="submit" onClick={this.handleSubmit} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            maxHeight: '25px',
            margin: '5px'
          }}><FaArrowRight /></button></div>
      </div>
    );
  }
}
