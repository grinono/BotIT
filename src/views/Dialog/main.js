import React, {Component} from 'react'
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree'
import crypto from 'crypto'
import EditNode from './edit/editNode'
// var id = crypto.randomBytes(20).toString('hex');

const firstNames = [
  'title1',
  'title2',
  'title3',
  'title4'
]

export default class Dialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      treeData: [{title: 'Peter Olofsson', id: crypto.randomBytes(20).toString('hex')}, { title: 'Karl Johansson', id: crypto.randomBytes(20).toString('hex') }],
    }
  }

  render () {
    // console.log(this.state)
    const getNodeKey = ({ treeIndex }) => treeIndex
    const getRandomName = () =>
      firstNames[Math.floor(Math.random() * firstNames.length)]
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div style={{ height: 300 }}>
                <SortableTree
                  treeData={this.state.treeData}
                  onChange={treeData => this.setState({ treeData })}
                  generateNodeProps={({ node, path }) => ({
                    buttons: [
                      <button
                        onClick={() => {
                          // this.setState({editMode: true})
                          // console.log(this.state)
                          console.log('the current path')
                          console.log(path)
                          console.log('the nodeName')
                          console.log(node)
                        }}
                      >
                        Edit
                      </button>,
                      <button
                        onClick={() =>
                          this.setState(state => ({
                            treeData: addNodeUnderParent({
                              treeData: state.treeData,
                              parentKey: path[path.length - 1],
                              expandParent: true,
                              getNodeKey,
                              newNode: {
                                title: `${getRandomName()} ${node.title.split(
                                  ' '
                                )[0]}sson`,
                                id: crypto.randomBytes(20).toString('hex')
                              }
                            }).treeData
                          }))}
                      >
                        Add Child
                      </button>,
                      <button
                        onClick={() =>
                          this.setState(state => ({
                            treeData: removeNodeAtPath({
                              treeData: state.treeData,
                              path,
                              getNodeKey
                            })
                          }))}
                      >
                        Remove
                      </button>
                    ]
                  })}
                />

              </div>

              <button
                onClick={() =>
                  this.setState(state => ({
                    treeData: state.treeData.concat({
                      title: `${getRandomName()} ${getRandomName()}sson`,
                      id: crypto.randomBytes(20).toString('hex')
                    })
                  }))}
              >
                Add new Node
              </button>
            </div>
            <div
              // style={{backgroundColor: 'white'}}
              className='col'>
              <EditNode />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
