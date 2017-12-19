import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class editNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Form>
          <ListGroup>
             <ListGroupItem>
               <Input placeholder='Title' />
             </ListGroupItem>
             <ListGroupItem>
               <Input placeholder='intent/Entities to recognize' />
             </ListGroupItem>
             <ListGroupItem>
               <Input placeholder='Text response' />
             </ListGroupItem>
             <ListGroupItem>
               <Input placeholder='Webhook' />
             </ListGroupItem>
          </ListGroup>
        </Form>
      </div>
    )
  }
}
