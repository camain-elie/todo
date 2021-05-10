import { Component } from 'react'
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)

    this.addTodo = this.addTodo.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
    this.deleteOne = this.deleteOne.bind(this)

    this.state={
      todoList: [
        {
          todo: "Do coding challenges",
          completed: false
        },
        {
          todo: "Do coding challenges",
          completed: false
        },
        {
          todo: "Task completed",
          completed: true
        },
      ],
      inputText: '',
      currentMenu: 'all',
    }
  }

  addTodo(){
    //console.log( this.state.inputText.split(' '))
    if(this.state.inputText){
      this.setState({
        todoList: [...this.state.todoList,{todo: this.state.inputText, completed: false}],
        inputText: '',
      })
    }
  }

  handleCheckbox(index){

    const list = this.state.todoList.map((item, i) => {
      if (index === i) {
        return {todo: item.todo, completed: !item.completed}
      } else {
        return item
      }
    })

    this.setState({ todoList: list })
  }

  deleteOne(index){
    const list = this.state.todoList.filter((item, i) => index !== i)
    this.setState({ todoList: list })
  }

  deleteAll(){
    const list = this.state.todoList.filter((item) => !item.completed)
    this.setState({ todoList: list})
  }

  handleMenuClick(e){
    this.setState({ currentMenu: e.target.dataset.name })
  }

  render(){
    
    const todoList = this.state.todoList.map((item, index) => {

      return(
        <li className={`todo ${item.completed ? 'todo--completed' : ''} 
          ${(this.state.currentMenu === 'active' && item.completed ) || (this.state.currentMenu === 'completed' && !item.completed) ? 'disabled' : ''}`}
          key={index}
        >
          <input type="checkbox" checked={item.completed} onChange={() => this.handleCheckbox(index)}></input>
          <p>{item.todo}</p>
          <button onClick={() => this.deleteOne(index)}>delete me</button>
        </li>
      )
    })
    
    return(
      <div className="app">
        <h1>#todo</h1>
        <div className="menu">
          <ul>
            <li className={this.state.currentMenu === 'all' ? 'menu-active' : ''} data-name="all" onClick={this.handleMenuClick}>All</li>
            <li className={this.state.currentMenu === 'active' ? 'menu-active' : ''} data-name="active" onClick={this.handleMenuClick}>Active</li>
            <li className={this.state.currentMenu === 'completed' ? 'menu-active' : ''} data-name="completed" onClick={this.handleMenuClick}>Completed</li>
          </ul>
        </div>

        <div className={`todo__input ${this.state.currentMenu !== 'completed' ? '' : 'disabled'}`}>
          <input placeholder="Add details" className="todo__add-input" type="text" value={this.state.inputText} onChange={(event) => this.setState({ inputText: event.target.value})} />
          <button className="todo__add-button" onClick={this.addTodo}>Add</button>
        </div>
        
        
        <div className="todo-list">

          {todoList}
          
          <div className={`todo-list__delete-all ${this.state.currentMenu === 'completed' ? '' : 'disabled'}`}>
            <button onClick={this.deleteAll}>Delete all</button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
