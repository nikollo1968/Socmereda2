
import { addPostActionCreator, onPostChangeActionCreator } from './../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }     
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        // updateNewPostText: (text) => { dispatch(onPostChangeActionCreator(text))}
        updateNewPostText: (text) => { 
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        } 
    }  
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
  
export default MyPostsContainer;