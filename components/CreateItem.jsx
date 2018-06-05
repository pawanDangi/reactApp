import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

import './CreateItem.css';

class CreateItem extends React.Component {
  state = { item: '', error: false }

  updateValue = (event) => {
    const item = this.state.item.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    if (/\S/.test(item)) {
      this.setState({ error: false });
    }
    this.setState({ item: event.target.value });
  }

  insertItem = () => {
    const item = this.state.item.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    if (!/\S/.test(item)) {
      this.setState({ error: true });
      return
    }
    this.props.addItem(item);
    this.setState({ item: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className={'newTask'}
          value={this.state.item}
          placeholder="Create new work item"
          onChange={this.updateValue}
        />
        {this.state.error ? <div className={'error'}>Please enter a string</div> : ''}
        <br />
        <button
          className={'enter'}
          onClick={this.insertItem}
        >
          Enter New Item
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
