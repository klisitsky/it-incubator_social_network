import React from "react";
import {addPostCreator, changeMessageTextPostCreator} from "../../../redux/reducerProfile";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

  return (<StoreContext.Consumer>
      {
        (store) => {

          const state = store.getState()

          const addPost = () => {
            if (state.profilePage.messageInTextAreaPost) {
              const action = addPostCreator();
              store.dispatch(action)
            }

          }
          const changePostTextArea = (value: string) => {
            const action = changeMessageTextPostCreator(value)
            store.dispatch(action)

          }

          return <MyPosts posts={state.profilePage.userPosts}
                          messageInTextAreaPost={state.profilePage.messageInTextAreaPost}
                          addPost={addPost}
                          changePostTextArea={changePostTextArea}/>
        }
      }
  </StoreContext.Consumer>
  )
}

export default MyPostsContainer


