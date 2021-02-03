import React from "react";
import {Button} from "antd";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/actions";

function ButtonComponent(props) {

    function handleClick() {
        if (props.toggleModalId){
            props.toggle(props.toggleModalId)
        }
    }

    return (
        <div>
            <Button onClick={handleClick} type="primary">{props.text}</Button>
        </div>
    );
}

export default connect((state)=>({modalVisible: state}), (dispatch) => ({
    toggle:modalId =>dispatch(toggleModal(modalId))
}))(ButtonComponent)