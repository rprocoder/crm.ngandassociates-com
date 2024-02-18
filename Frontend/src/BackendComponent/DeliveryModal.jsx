import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {AiFillCloseCircle} from "react-icons/ai";
import DeliveryForm from "./DeliveryForm";
import axios from "axios";

class DeliveryModal extends Component {
  state = {
    modal: false,
    pk: 0,
    action: "",
  };

  componentDidMount() {
    if (this.props.student) {
        const { pk, action, userid } = this.props.student;
        this.setState({ pk, action, userid });
    }
}

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};


editStudent = e => {
  e.preventDefault();
  axios.put("http://admin.ngandassociates.com/showworkstatus/" + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
  });
};

defaultIfEmpty = value => {
  return value === "" ? "" : value;
};


  render() {
    var title = "Upload User Application Certificate:";
    var button = <Button onClick={this.toggle} style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px",background:"#58db83", borderColor:"#58db83",}}>Complete
                    </Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}} >{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"80px", position:"absolute",fontSize:"26px",}}/> </ModalHeader>
          <ModalBody>
            <DeliveryForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default DeliveryModal;
