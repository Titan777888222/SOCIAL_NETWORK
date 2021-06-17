import React from "react";
import s from "./../Dialogs.module.css";

const MessageResponse = (props) => {
  return <div className={s.responseMessages}>{props.message}</div>;
};

export default MessageResponse;
