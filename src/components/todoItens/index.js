import React, { Component } from 'react';
import './itens.css';

class TodoItens extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  deletar = (key) => {
    this.props.deletar(key)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.lista.map((item) => {
            return (
              <li key={item.key}>
                {item.text}{' '}
                <img
                  src={require('../../assects/lixeira.png')}
                  className="lixeira"
                  onClick={() => this.deletar(item.key)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItens;
