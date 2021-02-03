import React, {useEffect} from "react";
import {Modal, Button, message} from "antd";
import {connect} from "react-redux";
import {toggleModal} from "../../redux/actions";


const ModalComponent = ({children, modalId, modalVisible, toggle, isOpen, width, height}) => {

    function initializeModal() {
        if (isOpen){
            toggleModalVisibility()
        }
    }

    function toggleModalVisibility(){
        toggle(modalId)
    }
    useEffect(() => {
        initializeModal()
    }, [])


    const handleOk = () => {
        message.info("OK CLICKED")
        toggleModalVisibility();
    };
    const handleCancel = () => {
        message.info("CANCEL MODAL")
        toggleModalVisibility();
    };

    const isModalVisible = modalVisible[modalId]
    let modalStyle = {
        width: width,
        height: height
    }
    return (
        <>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={modalStyle}
            >
                {children}
            </Modal>
        </>
    );
};
export default connect((state)=>({modalVisible: state}), (dispatch) => ({
    toggle:modalId =>dispatch(toggleModal(modalId))
}))(ModalComponent);
