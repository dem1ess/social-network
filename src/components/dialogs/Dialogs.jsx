import * as React from "react";
import s from "./Dialogs.module.css";
import {Message} from "./message/Message";
import {DialogItem} from "./dialogItem/DialogItem";

export const Dialogs = (props) => {
    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((p) => (<DialogItem name={p.name} id={p.id}/>));
    let messageElements = state.messages.map((m) => (<Message message={m.message} id={m.id}/>));
    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    let onSendMessageClick = () => {
        props.sendMessage()
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messages}> {messageElements} </div>
            <div className={s.sendMessage}>
                <div>
                    <div>
              <input className={s.InputMessage}
                  placeholder="Write message..."
                  value={newMessageBody}
                  onChange={onNewMessageChange}
              />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
