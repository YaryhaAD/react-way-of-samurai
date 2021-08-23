import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    // Равносильно
    // let dialogElements = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
    //     <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
    // ];

    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.UpdateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} /> */}
                {/* РАВНОСИЛЬНО */}
                {/* <div className={s.dialog}><NavLink to='/dialogs/1'>Dimych</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Andrey</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Sveta</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Sasha</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>Viktor</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/6'>Valery</NavLink></div> */}
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>

                {/* <Message message={messages[0].message} />
                <Message message={messages[1].message} />
                <Message message={messages[2].message} /> */}
                {/* РАВНОСИЛЬНО */}
                {/* <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div> */}
                
            </div>
        </div>
    );
}

export default Dialogs;