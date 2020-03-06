import React, { Component } from 'react'

export default class Bgvideo extends Component {
  constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=Rq5SEhs9lws'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
}
