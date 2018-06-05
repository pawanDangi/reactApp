import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions'

import './Item.css'

class ItemList extends React.Component {
  removeItem = (key) => this.props.removeItem(key)

  render() {
    return (
      <tr key={this.props.item.key}>
        <td className={'taskNumber'}>Task {this.props.index + 1}:</td>
        <td className={'taskItem'}>{this.props.item.value}</td>
        <td>
          <button
            className={'remove'}
            onClick={() => this.removeItem(this.props.item.key)}
          >X</button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  removeItem: key => dispatch(removeItem(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
