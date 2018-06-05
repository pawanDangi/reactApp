import React from 'react';
import { connect } from 'react-redux'
import { clearItems } from '../actions'
import { resetItems } from '../actions'

import './ListActions.css'

class ListActions extends React.Component {
  clearItems = () => this.props.clearItems()

  resetItems = () => this.props.resetItems()

  render() {
    return (
      <div>
        <button className={'clear'} onClick={this.clearItems}>
          Clear the List
        </button>
        <button className={'reset'} onClick={this.resetItems}>
          Reset the List
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  clearItems: () => dispatch(clearItems()),
  resetItems: () => dispatch(resetItems())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListActions);
