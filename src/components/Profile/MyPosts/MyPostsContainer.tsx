import React from "react";
import {addPost, changePostTextArea} from "../../../redux/reducerProfile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostType} from "./Post/Post";
import {RootStateType} from "../../../redux/redux-store";


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


const MyPostsContainer = connect(mapStateToProps,{
  addPost,
  changePostTextArea
} as DispatchPropsType)(MyPosts)

export default React.memo(MyPostsContainer)


