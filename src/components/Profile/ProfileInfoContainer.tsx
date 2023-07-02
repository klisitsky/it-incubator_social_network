import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


// const ProfileInfoContainer1 = () => {
//
//   return (<StoreContext.Consumer>
//     {
//       (store) => {
//         return <ProfileInfo bg={store.getState().profilePage.mainBackgroundProfile}/>
//       }
//     }
//   </StoreContext.Consumer>)
// }

export type StatePropsType = {
  bg: string
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    bg: state.profilePage.mainBackgroundProfile,
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default React.memo(ProfileInfoContainer)