import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';





function Dialogs(props) {
    
    let state = props.dialogsPage;
    let dialogsEl = state.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesEl = state.dialogsPage.messageData.map(m => <Messages message={m.message} />);
    let newMessageBody = state.dialogsPage.newMessageBody;

    let onSendMessageClick =() => {
        props.sendMessage()
    };
  
    let onNewMessageChange =(e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={s.messages}>
                <div>{messagesEl}</div>
                <div>
                    <div><textarea value= {newMessageBody} 
                            onChange= {onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
            
        </div>
    );
}
export default Dialogs;