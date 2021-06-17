import React from "react";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
// import { dialogs, messages } from "./../../index";
// import Avatars from "./Avatars/Avatars";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import MessageResponse from "./Message/MessageResponse";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  
  // let dialogsAvatars = props.state.dialogs.map((a) => {
  //   return <Avatars avatar={a.avatar} />;
  // });
  
  debugger;
  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} id={m.id} />;
  });

  let newMessageBody = state.newMessageBody;
    

  let messagesResponse = state.messages.map((r) => {
    return <MessageResponse message={r.message} id={r.id} />;
  });

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
      debugger;
      let body = e.target.value; // Атрибут тэга textarea - target указывает, что он будет передавать событие, 
                                // которое придет через е со значением value из textarea
      props.updateNewMessageBody( body );
      // props.store.dispatch( updateNewMessageBodyCreator( body ) );
  };
  
  return (
    <div className={s.dialogs}>
      D I A L O G S
      <div className={s.dialogs_items}>
          <b>U s e r s </b>
          {/* <div className = {s.avatar}>{dialogsAvatars}</div> */}
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


