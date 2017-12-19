import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class WIT extends React.Component {
  render () {
    return (
      <Form>
        <FormGroup row>
          <Label for='exampleText' sm={2}>Access Token</Label>
          <Col sm={10}>
            <Input placeholder='fksajfwklerjsadofijsafk' name='text' id='exampleText' />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
