import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { withRouter } from './withRouter.js'

export default withRouter(class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: '',
      // navigate: useNavigate()
    }
    this.handleLeaderBoardClick = this.handleLeaderBoardClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLeaderBoardClick() {
    this.props.navigate('/leaderboard')
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.roll)
    const roll = Number(this.state.roll) % 100;
    if (roll > 79 || roll < 0) {
      return;
    }
    if(roll==62){
      window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
    this.props.navigate('/res?roll=' + roll);
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
        alignItems: 'center',
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
        <button onClick={this.handleLeaderBoardClick} style={{
          marginTop: '50px',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '10px',
          cursor: 'pointer'
        }}>Leaderboard</button>
        <hr style={{
          width: '100vw',
          margin: '50px'
        }} />
        <div style={{
          textAlign: 'center'
        }}>
          For any changes in grades or rank, study well and score more marks
        </div>
        <hr style={{
          width: '100vw',
          margin: '50px'
        }} />
        <div style={{
          textAlign: 'center'
        }}>
          For any issues or requests regarding the website, contact Abhay Upadhyay
        </div>
      </div>
    );
  }
})