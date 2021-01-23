import React from 'react';

export default class Upgrade extends React.Component {
  render() {
    return (
      <div className="Upgrade">
        {this.props.upgrade.name}
        <button onClick={this.props.onPurchase} disabled={this.props.counter < this.props.upgrade.cost}>
          Acheter
        </button>
      </div>
    )
  }
}
