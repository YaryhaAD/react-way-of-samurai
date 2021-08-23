import React from 'react'
import { sendMessageCreator, UpdateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (body) => {
                store.dispatch(UpdateNewMessageBodyCreator(body));
            }

            return <Dialogs UpdateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;