import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
// import { dialogs, messages } from "../../index";
// import Avatars from "./Avatars/Avatars";
// import DialogItem from "./DialogItem/DialogItem";
// import s from "./Dialogs.module.css";
// import Message from "./Message/Message";
// import MessageResponse from "./Message/MessageResponse";



 
let mapStateToProps = ( state ) => { // создает часть state в props
  
  return {
    dialogsPage: state.dialogsPage // здесь будут сидеть данные из state
  }
}
let mapDispatchToProps = ( dispatch ) => {
 
  return {
    sendMessage: () => { dispatch( sendMessageCreator() )},
    updateNewMessageBody: ( body ) => { dispatch( updateNewMessageBodyCreator( body ) )}
  }
}
const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )(Dialogs); // сейчас мы Dialogs как бы законнектили к store
//Dialogs перерисуется, если объект dialogsPage будет иным, скопируется или изменится
export default DialogsContainer;

