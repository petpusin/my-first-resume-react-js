import React, { Component } from "react";
import Social from "../components/Social"
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from "react-typing-effect";
class Home extends Component {
    render() {
        return (
            <div className='condiv home'>
                <img src='https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/200144170_5592310970843884_3638808433078530032_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFb47luP1h0O-yd0-_0i33ROXgBLmVECgY5eAEuZUQKBgCqe_QWEgFfnWkO-vqSnKJz3e3eow8wXQECCiNwDUM_&_nc_ohc=SKCziEfe-DwAX-QdzDX&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT92FqwKH70pGEPdcqR4kFidlCZ5DMxWFktOf0SnWbGrsA&oe=634C2C97' alt="profile" className='profilepic' />
                <ReactTypingEffect text={['I am Attachai Pusin', 'Backend Developer']} speed={80} eraseDelay={200} className='typingeffect' />
                <Social />
            </div>
        )
    }
}

export default Home