import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {AiFillCloseCircle} from "react-icons/ai";
import DocumentForm from "./DocumentForm";
import axios from "axios";


class DocumentModal extends Component {
  state = {
    modal: false,
    token: localStorage.getItem('access_token1'),
  };

  componentDidMount() {
    if (this.props.student) {
        const { pk,userid } = this.props.student;
        this.setState({ pk, userid });
    }
}

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };
  getStudents = () => {
    axios.post("http://admin.ngandassociates.com/userdocument/" + this.state.userid +"/"+this.state.token).then(() => {
    });
};
  render() {
    var title = "User Document Wallet:";
    var button = <Button onClick={()=>{this.toggle(); this.getStudents();}}  style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px"}}>View Docs</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}} >{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"200px", position:"absolute",fontSize:"26px",}}/> </ModalHeader>
          <ModalBody>
            <DocumentForm
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

export default DocumentModal;
