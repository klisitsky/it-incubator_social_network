import classes from "./Profile.module.css";
import React from "react";

type ProfileInfoType = {
  bg: string
}
export const ProfileInfo = (props: ProfileInfoType) => {
  return (<>
      <div>
        <img src={props.bg} alt="img"/>
      </div>
      <div className={classes.content}>Ava + desc</div>
    </>)
}