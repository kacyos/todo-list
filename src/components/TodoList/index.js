import React, { Component } from 'react';
import TodoItens from '../todoItens';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefa: '',
      itens: [],
    };
  }


  criarTarefa = (event) => {
    const novaTarefa = event.target.value;
    this.setState({ tarefa: novaTarefa });
  };


  adicionarItem = (event) => {
    const state = this.state;

    if (this._tarefaInput.value !== '') {
        const novoItem = {
            text: this._tarefaInput.value,
            key: Date.now()
        };

        this.setState({itens: [...state.itens, novoItem]});
    }
    
    event.preventDefault();
    
    this.setState({tarefa: ''})
  }


  log = () => {
      console.log(this.state.itens)
  }


  deleteItem = (key) => {
    let itens = this.state.itens.filter((item) => {
        return(
            item.key !== key
        )
    })
    
    this.setState({itens:[...itens]})
  }


  render() {
    const { tarefa } = this.state;

    return (
      <div>
        <form onSubmit={this.adicionarItem}>
          <input
            type="text"
            placeholder="Nova tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={this.criarTarefa}
            ref={(event) => (this._tarefaInput = event)}
          />
          <button type="submit">Adicionar</button>
          <button onClick={this.log}>Log</button>
        </form>

        <TodoItens lista={this.state.itens} deletar={this.deleteItem}/>
        
      </div>
    );
  }
}

export default TodoList;
