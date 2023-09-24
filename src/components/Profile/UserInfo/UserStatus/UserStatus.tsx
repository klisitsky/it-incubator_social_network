
import React, {ChangeEvent} from "react";

type UserInfoPropsType = {
  userStatus: string
   updateUserStatusAPI: (status: string) => void
}

export class UserStatus extends React.Component<UserInfoPropsType> {

  state = {
    editMode: false,
    userStatus: this.props.userStatus
  }

  onDoubleClickHandler = () => {
    this.setState({editMode: !this.state.editMode})
  }


  onBlurHandler = () => {
    this.onDoubleClickHandler()
    this.props.updateUserStatusAPI(this.state.userStatus)
  }

  onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    this.setState({userStatus: e.currentTarget.value})
  }

  componentDidUpdate(prevProps: Readonly<UserInfoPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.userStatus !== prevProps.userStatus) {
      this.setState({userStatus: this.props.userStatus})
    }
  }

  render() {

    return (<div>Ваш статус:
      {!this.state.editMode
        ? <span onDoubleClick={this.onDoubleClickHandler}>{this.props.userStatus || '---'}</span>
        : <input autoFocus={true}
                 onChange={this.onChangeHandler}
                 onBlur={this.onBlurHandler}
                 value={this.state.userStatus}/>
      }
    </div>)
  }
}