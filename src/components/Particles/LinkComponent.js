import React from "react";
import { Typography } from "antd";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/actions";

const { Link } = Typography;

function LinkComponent(props) {
  function handleClick() {
    if (props.toggleModalId){
      props.toggle(props.toggleModalId)
    }
  }

  return (
    <Link onClick={handleClick} href={props.url} target="_blank">
      {props.text}
    </Link>
  );
}
export default connect((state)=>({modalVisible: state}), (dispatch) => ({
  toggle:modalId =>dispatch(toggleModal(modalId))
}))(LinkComponent)