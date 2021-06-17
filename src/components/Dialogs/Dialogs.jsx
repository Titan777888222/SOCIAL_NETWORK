import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { dialogs, messages } from "./../../index";
import Avatars from "./Avatars/Avatars";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import MessageResponse from "./Message/MessageResponse";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  
  let dialogsAvatars = props.state.dialogs.map((a) => {
    return <Avatars avatar={a.avatar} />;
  });

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageBody = state.newMessageBody;
    

  let messagesResponse = props.state.messages.map((r) => {
    return <MessageResponse message={r.message} id={r.id} />;
  });

  let onSendMessageClick = () => {
    props.store.dispatch( sendMessageCreator() );
  };
  let onNewMessageChange = (e) => {
      debugger;
      let body = e.target.value; // Атрибут тэга textarea - target указывает, что он будет передавать событие, 
                                // которое придет через е со значением value из textarea
      props.store.dispatch( updateNewMessageBodyCreator( body ) );
  };
  
  return (
    <div className={s.dialogs}>
      D I A L O G S
      <div className={s.dialogs_items}>
          <b>U s e r s </b>
          <div className = {s.avatar}>{dialogsAvatars}</div>
          <div className = {s.name}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <b>M e s s a g e s</b>
        <div className = {s.responseFirstMessages}>
            <div>{messagesElements}</div>
            <div>
              <div> <textarea 
                      value = { newMessageBody }/* значение newMessageBody равно себе строка 27 + state */
                      onChange = { onNewMessageChange }
                      placeholder = 'Enter you message' >
                    </textarea> 
              </div>
              <div> <button onClick = { onSendMessageClick }> Send </button> </div> 
              {/* После  onSendMessageClick скобки () не ставятся, так как сам onClick
              ее вызывает */} 
            </div>
        </div>
        <div className = {s.responseSecondMessages}>{messagesResponse}</div>
      </div>
    </div>
  );
};

export default Dialogs;

/* let dialogs = [
    {id: 1, name:'Dimych'},
    {id: 2, name:'Andrei'},
    {id: 3, name:'Sveta'},
    {id: 4, name:'Sasha'},
    {id: 5, name:'Viktor'},
    {id: 6, name:'Valera'},
    {id: 7, name:'Serg'}
  ];  */

/*  let messages = [
    {id: 1, message:'Hi  !!!'},
    {id: 2, message:'Hello'},
    {id: 3, message:'How are you?'},
    {id: 4, message:'I am fine'},
    {id: 5, message:'Thanks'},
    {id: 6, message:'I am OK'},
    {id: 7, message:'You look good'}
  ]; */
/* [ 
    
    <DialogsItem name ={dialogsData[1].name} id = {dialogsData[1].id}/>,
    <DialogsItem name ={dialogsData[2].name} id = {dialogsData[2].id} />,
    <DialogsItem name ={dialogsData[3].name} id = {dialogsData[3].id} />,
    <DialogsItem name ={dialogsData[4].name} id = {dialogsData[4].id} />,
    <DialogsItem name ={dialogsData[5].name} id = {dialogsData[5].id} />,
    <DialogsItem name ={dialogsData[6].name} id = {dialogsData[6].id} />                  
  ]; */

/* [  
    
    <Message message = {messagesData[1].messages} id = {messagesData[1].id}/>,
    <Message message = {messagesData[2].messages} id = {messagesData[2].id}/>,
    <Message message = {messagesData[3].messages} id = {messagesData[3].id}/>,
    <Message message = {messagesData[4].messages} id = {messagesData[4].id}/>,
    <Message message = {messagesData[5].messages} id = {messagesData[5].id}/>,
    <Message message = {messagesData[6].messages} id = {messagesData[6].id}/>
   ]; */
