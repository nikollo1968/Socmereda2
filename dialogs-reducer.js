const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Nik'},
            {id: 2, name: 'Oksena'}, 
            {id: 3, name: 'Keats'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messageData: [
            {id: 1, message:'Hi'},
            {id: 2, message:'Hello'}, 
            {id: 3, message:'Yes words'},
            {id: 4, message:'Yo'},
            {id: 5, message:'Yo! Yo!'}
        ],
        newMessageBody: " ",
    }
};

const dialogsReducer = (state = initialState, action) => {

    // let stateCopy = {...state,
    //     newMessageBody: [...state.dialogsPage.newMessageBody]};
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            let stateCopy = {...state,
                newMessageBody: [...state.dialogsPage.newMessageBody]};
            stateCopy.dialogsPage.newMessageBody = action.body;
            return stateCopy;
            
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = state.newMessageBody;
            
            stateCopy.dialogsPage.messageData.push({id: 6, message: body});
            stateCopy.dialogsPage.newMessageBody = " ";
            return stateCopy;
        };
        
        default:
            return state;  
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;