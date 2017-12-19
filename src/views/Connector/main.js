import React, {Component} from 'react';
import { render } from 'react-dom';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';
import WitForm from './wit/WIT'

export default class Integration extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <p> WIT connector details </p>
        <WitForm />
        <p> LIUS connector details </p>
        <p> Watson connector details </p>
        <p> Dialogflow connector details </p>
      </div>
    )
  }
}
