
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message:'Hi, how are you?', likesCount: 12},
        {id: 2, message:'Yes words', likesCount: 25}, 
        {id: 3, message:'Hello'},
        {id: 4, message:'Yo'},
        {id: 5, message:'Yo! Yo!'},
        {id: 6, message:'Yo! Yo!'},
        {id: 7, message:'Yes words', likesCount: 25} 
      ], 
    newPostText:  ' ',
  };

const profileReducer = (state = initialState, action) => {   
    switch (action.type){
        case ADD_POST:
            return {...state,
            newPostText:' ',
            postData: [...state.postData, { id: 8, message: state.newPostText, likesCount: 3 }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state,
            newPostText: action.newText
            }        
        default:
            return state; 
    }


}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;