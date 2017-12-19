import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: this.props.openModal
    }
    this.toggle = this.toggle.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.openModal === true) {
      this.setState({modal: true})
    }
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
    this.props.closeModal(!this.state.modal)
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <Form>
             <FormGroup row>
               <Label for="exampleEmail2" sm={2}>Title</Label>
               <Col sm={10}>
                 <Input type="email" name="email" id="exampleEmail2" placeholder="Title" />
               </Col>
             </FormGroup>
           </Form>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
               <Label for="exampleSearch">If bot recognized Intent name</Label>
               <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
             </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
