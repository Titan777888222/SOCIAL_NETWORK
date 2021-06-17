import { combineReducers, createStore } from 'redux'
import profileReducer  from './profile-reducer'
import dialogsReducer  from './dialogs-reducer'
import sidebarReducer  from './sidebar-reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore( reducers );

window.store = store;// написав это мы получаем, что теперь глобальный store получает что-то при нажатии на кнопку 
                    //отправить сообщение в textarea, но при нажатии ничего не выведет, так как нужно придерживаться
                    // концепции чистых функций

export default store;
