import React from "react";
/* import {rerenderEntireTree} from './../render' */
import { useState } from 'react';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

/* const ADD_POST =  'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'; */

let store = {

   _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi. How are you!", like: 15 },
        { id: 2, message: "It is my first post", like: 20 },
        { id: 3, message: "I am first men", like: 22 },
        { id: 4, message: "It is my first commit", like: 88 },
        { id: 5, message: "This is myfirst post", like: 77 },
      ],
      newPostText: "it-kamasutra.com"
    },
  
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Dimych",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 2,
          name: "Andrei",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 3,
          name: "Sveta",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 4,
          name: "Sasha",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 5,
          name: "Viktor",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 6,
          name: "Valera",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
        {
          id: 7,
          name: "Serg",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU",
        },
      ],
      messages: [
        { id: 1, message: "Hi  !!!" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "I am fine" },
        { id: 5, message: "Thanks" },
        { id: 6, message: "I am OK" },
        { id: 7, message: "You look good" },
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    
    return this._state;
  },

  subscribe( observer) {
    this._callSubscriber = observer; 
    // здесь rerenderEntireTree равно обновленной странице с новыми сообщениями
    // и это колбэк, когда вызывается функцией другая функция
  },
    
  dispatch( action ) { 

    this._state.profilePage = profileReducer( this._state.profilePage, action );
    this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action );
    this._state.sidebar = sidebarReducer( this._state.sidebar, action );

    this._callSubscriber( this._state );
    
    
  }

  
}
/* debugger;
export const addPostActionCreator = () => ( {type: 'ADD-POST'} );
export const updateNewPostTextActionCreator = ( text ) => ( {type: 'UPDATE-NEW-POST-TEXT', newText: text} );

export const sendMessageCreator = () => ( {type: 'SEND-MESSAGE'} );
export const updateNewMessageBodyCreator = ( body ) => ( {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} ); */



export default store; 
window.store = store;








