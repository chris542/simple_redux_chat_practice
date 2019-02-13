import React from 'react';
import './Sidebar.css';
import User from '../../containers/User';

const Sidebar = ({ contacts }) => {
    const renderUser = (contacts) => (
        contacts.map(contact=> <User user={contact} key={contact.user_id}/>)
    )
    return (
        <aside className="Sidebar">
            {renderUser(contacts)}
        </aside>
    );
}

export default Sidebar;
