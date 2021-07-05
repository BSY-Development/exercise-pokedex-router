import React from 'react';

export default class PokeInfos extends React.Component {
  render() {
    const { id } = this.props.match.params; 
    return (
      <h1>Infos {id}</h1>
    );
  }
}
