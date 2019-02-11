import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
<<<<<<< HEAD
        <span>{this.props.band.name}</span>
        <button onClick={()=>this.props.deleteBand(this.props.band.id)}>Delete</button>
=======
        <span>{props.band.name}</span>
        <button onClick={()=>props.deleteBand(props.band.id)}>Delete</button>
>>>>>>> 260126055acc8d7cf650c2eca515f39be9ba6faf
      </li>
    );
  }
};

export default Band;
