import React from 'react'
import Component from 'react'
import './contact.scss'
import { Alert } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
toast.configure()
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', des: '' }
  }

  handleChangename = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeemail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangedes = (event) => {
    this.setState({ des: event.target.value })
  }
  notify = () => {
    toast.success('SENT!!!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  handleSubmit = (e) => {
    this.notify()
    this.setState({ name: '' })
    this.setState({ des: '' })
    this.setState({ email: '' })
  }
  render() {
    return (
      <div className='contact' id='contact' onSubmit={this.handleSubmit}>
        {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
        {/* <video
        src='https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4'
        autoPlay
        loop
        muted
      ></video> */}
        <div className='background'>
          <div className='container'>
            <div className='heading'>CONTACT</div>
            <ul>
              <li>
                <input
                  type='text'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.handleChangename}
                />
              </li>
              <li>
                <input
                  type='text'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.handleChangeemail}
                />
              </li>
              <li>
                <textarea
                  type='text'
                  placeholder='Message'
                  className='input-text'
                  value={this.state.des}
                  onChange={this.handleChangedes}
                />
              </li>
              <li>
                <button
                  type='submit'
                  className='btn'
                  onClick={this.handleSubmit}
                >
                  Send
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
