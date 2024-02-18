import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {AiFillCloseCircle} from "react-icons/ai";
import UserdocForm from "./UserdocForm";
import axios from "axios";


class UserdocModal extends Component {
  state = {
    modal: false,
    email:"",
    companyname:"",
    token: localStorage.getItem('access_token1'),
  };

  componentDidMount() {
    if (this.props.student) {
        const { pk, email,companyname } = this.props.student;
        this.setState({ pk, email,companyname });
    }
}

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal    
    }));
  };

  getStudents = () => {
    const formData = new FormData();
        formData.append("email", this.state.companyname);
        const config = {
          headers: {
              'content-type': 'multipart/form-data',
          },
      };
    axios.post("http://admin.ngandassociates.com/userdocument/"+this.state.token,formData, config).then(() => {
    });
};

  render() {
    var title = "User Application Document :";
    var button = <Button onClick={()=>{this.getStudents(); this.toggle();}}  style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px"}}>View Docs</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}} >{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"170px", position:"absolute",fontSize:"26px",}}/> </ModalHeader>
          <ModalBody>
            <UserdocForm
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

export default UserdocModal;
