const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action ) => {

    // let stateCopy = {
    //   ...state, 
    //   messages: [...state.messages]
    // };
    
    switch( action.type ) {

          case UPDATE_NEW_MESSAGE_BODY: {              
            let stateCopy = {
              ...state,
              newMessageBody: action.body
            };
              // stateCopy.newMessageBody = action.body;
            
              return stateCopy;
          }
          case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let stateCopy = {
              ...state, 
              newMessageBody: ' ',
              messages: [...state.messages, { id: 8, message: body }] //это вместо push - { id: 8, message: body } добавляется в конец массива
                                                                      //а если нужно добавить в начало массива,то вот так[{ id: 8, message: body }, ...state.messages]
            };
              
            // let body = state.newMessageBody;
            //stateCopy.newMessageBody;
              // stateCopy.newMessageBody = ' ';
              
             // stateCopy.messages = [...state.messages];
              // stateCopy.messages.push({ id: 8, message: body });

              return stateCopy;
          }
      default: 

        return state;


    }

   
} 
export const sendMessageCreator = () => ( {type: SEND_MESSAGE} );
export const updateNewMessageBodyCreator = ( body ) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} );

export default dialogsReducer;