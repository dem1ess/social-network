const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dasha",
        },
        {
            id: 2,
            name: "Kirill",
        },
        {
            id: 3,
            name: "Max",
        },
        {
            id: 4,
            name: "Nikita",
        },
        {
            id: 5,
            name: "Mother",
        },
        {
            id: 6,
            name: "Egor",
        },
    ],
    messages: [
        {
            id: 1,
            message: "Hi",
        },
        {
            id: 2,
            message: "Hello, bitch!!",
        },
        {
            id: 3,
            message: "How are you??",
        },
        {
            id: 4,
            message: "I`m fine and you??",
        },
        {
            id: 5,
            message: "I`m coding new social notwork",
        },
        {
            id: 6,
            message: "That`s cool!!!!",
        },
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 7, message: state.newMessageBody}
            state.messages.push(newMessage);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
});

export default dialogsReducer;
