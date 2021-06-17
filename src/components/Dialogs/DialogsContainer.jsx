import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
// import { dialogs, messages } from "../../index";
// import Avatars from "./Avatars/Avatars";
// import DialogItem from "./DialogItem/DialogItem";
// import s from "./Dialogs.module.css";
// import Message from "./Message/Message";
// import MessageResponse from "./Message/MessageResponse";
import Dialogs from "./Dialogs";

const DialogsContainer = (/* props */) => {

  // let state = props.store.getState().dialogsPage;
  
  // let onSendMessageClick = () => {
  //   props.store.dispatch( sendMessageCreator() );
  // };
  // let onNewMessageChange = ( body ) => {
  //     debugger;
      
  //     props.store.dispatch( updateNewMessageBodyCreator( body ) );
  // };
  
  return (
    <StoreContext.Consumer > 
    {
        ( store ) => {

          let state = /* props. */store.getState().dialogsPage;
    
          let onSendMessageClick = () => {
            /* props. */store.dispatch( sendMessageCreator() );
          };
          let onNewMessageChange = ( body ) => {
              debugger;
              
              /* props. */store.dispatch( updateNewMessageBodyCreator( body ) );
          };

        return (
        < Dialogs 
                  updateNewMessageBody = { onNewMessageChange }
                  sendMessage = { onSendMessageClick }
                  dialogsPage = { state } />
          )
        }
    }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

