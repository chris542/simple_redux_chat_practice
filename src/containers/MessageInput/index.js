import React from 'react';
import { store } from '../../store';
import { setTypingValue, sendMessage } from '../../actions';
import "./MessageInput.css";


const MessageInput = ({value}) => {
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    }
    const handleSubmit = e => {
        e.preventDefault();
        const {typing, activeUserId} = store.getState();
        store.dispatch(sendMessage(typing,activeUserId));
    }
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="Write a message"
            />
        </form>
    );
}

export default MessageInput;
