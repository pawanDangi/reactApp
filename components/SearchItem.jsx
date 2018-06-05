import React from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../actions'

import './SearchItem.css'

class SearchItem extends React.Component {
  updateValue = event => this.props.setSearchText(event.target.value)

  render() {
    let value = this.props.search
    return (
      <div>
        <form>
          <input
            type="text"
            className="search"
            placeholder="Serach item"
            value={value}
            onChange={this.updateValue}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
})

const mapDispatchToProps = dispatch => ({
  setSearchText: text => dispatch(setSearchText(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchItem);
