import React from 'react'
import Item from './Item.jsx'

import './ItemList.css'

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <table className="taskTable">
          <thead>
            <tr className={'tableHead'}>
              <th className={'taskNumber'}>#</th>
              <th className={'taskItem'}>Task</th>
              <th>(X)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              if (item.isHide) return ''
              return <Item
                key={item.key}
                item={item}
                index={index}
              />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default ItemList;
