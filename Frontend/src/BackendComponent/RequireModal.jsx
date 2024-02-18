import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {AiFillCloseCircle} from "react-icons/ai";
import RequireForm from "./RequireForm";
import axios from "axios";

class RequireModal extends Component {
  state = {
    modal: false,
    token: localStorage.getItem('access_token1'),
  };
  componentDidMount() {
    if (this.props.student) {
        const { pk, servicename, userid } = this.props.student;
        this.setState({ pk, servicename, userid });
    }
}
  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };
  getStudents = () => {
    axios.post("http://admin.ngandassociates.com/userrequirement/" + this.state.userid + "/" + this.state.servicename+"/"+this.state.token).then(() => {
    });
};
  render() {
    var title = "User Application Personal Details:";
    var button = <Button onClick={()=>{this.toggle(); this.getStudents();}} style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", backgroundColor:"#74cfbf", borderColor:"#74cfbf" }}>View Details</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}} >{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"125px", position:"absolute",fontSize:"26px",}}/> </ModalHeader>
          <ModalBody>
            <RequireForm
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

export default RequireModal;
