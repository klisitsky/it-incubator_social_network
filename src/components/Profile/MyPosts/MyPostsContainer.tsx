import React from "react";
import {addPostCreator, changeMessageTextPostCreator} from "../../../redux/reducerProfile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType} from "./Post/Post";
import {DispatchType, RootStateType} from "../../../redux/redux-store";


// const MyPostsContainer = () => {
//   return (<StoreContext.Consumer>
//       {
//         (store) => {
//           const state = store.getState()
//           const addPost = () => {
//             if (state.profilePage.messageInTextAreaPost) {
//               const action = addPostCreator();
//               store.dispatch(action)
//             }
//           }
//           const changePostTextArea = (value: string) => {
//             const action = changeMessageTextPostCreator(value)
//             store.dispatch(action)
//           }
//           return <MyPosts posts={state.profilePage.userPosts}
//                           messageInTextAreaPost={state.profilePage.messageInTextAreaPost}
//                           addPost={addPost}
//                           changePostTextArea={changePostTextArea}/>
//         }
//       }
//   </StoreContext.Consumer>
//   )
// }

type StatePropsType = {
  posts: Array<PostType>
  messageInTextAreaPost: string
}

const mapStateToProps = (state:RootStateType):StatePropsType => {
  return {
    posts: state.profilePage.userPosts,
    messageInTextAreaPost: state.profilePage.messageInTextAreaPost
  }
}

type DispatchPropsType = {
  addPost: () => void
  changePostTextArea: (value: string) => void
}

const mapDispatchToProps = (dispatch:DispatchType):DispatchPropsType => {
  return {
    addPost() {
        const action = addPostCreator();
        dispatch(action)
    },
    changePostTextArea(value: string) {
      const action = changeMessageTextPostCreator(value)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default React.memo(MyPostsContainer)


