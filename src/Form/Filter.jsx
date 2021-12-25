import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Filter extends Component {
filterId = nanoid();
render() {
    const { filter, onChange} = this.props;
    return (
        <div>
             <label htmlFor={this.filterId}>Find contacts by name
      <input 
      type="text" 
      value={filter}
      id={this.filterId}
      onChange={onChange}
      />
      </label>
        </div>
    )
}
}
Filter.defaultProps = {
    filter: '',
};
export default Filter;