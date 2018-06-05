import React from 'react'
import { connect } from 'react-redux'
import Title from './components/Title.jsx'
import CreateItem from './components/CreateItem.jsx'
import SearchItem from './components/SearchItem.jsx'
import ItemList from './components/ItemList.jsx'
import ListActions from './components/ListActions.jsx'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <CreateItem />
        <SearchItem />
        <ItemList items={this.props.items} />
        <ListActions />
      </div>
    );
  }
}

const getSearchedItems = (items, search) => {
  return items.filter((item) => ~item['value'].toLowerCase().search(search))
}

const mapStateToProps = state => ({
  items: getSearchedItems(state.items, state.search)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
