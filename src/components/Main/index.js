import React from 'react';
import './Main.css';
import Empty from '../Empty';
import ChatWindow from '../../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        return (!activeUserId)
            ?<Empty user={user}/>
            :<ChatWindow activeUserId={activeUserId}/>
    }

    return <main className="Main">{renderMainContent()}</main>
}

export default Main;
