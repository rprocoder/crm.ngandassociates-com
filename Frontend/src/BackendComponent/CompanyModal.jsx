import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import CompanyForm from "./CompanyForm";
import {AiFillCloseCircle} from "react-icons/ai";

class CompanyModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Add User & Company Information:";
    var button = <Button onClick={this.toggle} style={{ fontSize:"13.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", background:" #007aff", borderColor:" #007aff"}}>Add User  +</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={{background:"#16cefe", color:"white"}}>{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"130px", position:"absolute",fontSize:"26px",}}/></ModalHeader>
          <ModalBody>
            <CompanyForm/>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default CompanyModal;
