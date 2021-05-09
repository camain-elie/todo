import { Component } from 'react'
import './App.scss';
import Todo from './Components/Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.addTodo = this.addTodo.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

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
    if(this.state.inputText !== ''){
      this.setState({
        todoList: [...this.state.todoList,{todo: this.state.inputText, completed: false}],
        inputText: '',
      })
    }
  }

  handleChange(e){
    console.log(e.target.parentElement)
  }

  handleMenuClick(e){
    this.setState({ currentMenu: e.target.dataset.name })
  }

  render(){
    

    
    return(
      <div className="app">

        <div className="menu">
          <ul>
            <li data-name="all" onClick={this.handleMenuClick}>All</li>
            <li data-name="active" onClick={this.handleMenuClick}>Active</li>
            <li data-name="completed" onClick={this.handleMenuClick}>Completed</li>
          </ul>
        </div>

        <div className="input">
          <input type="text" value={this.state.inputText} onChange={(event) => this.setState({ inputText: event.target.value})} />
          <button onClick={this.addTodo}>Add</button>
        </div>

        
        {this.state.currentMenu}
        
        
        <div className="todo-list">
          {this.state.todoList.map((line, index) => 
            <Todo todo={line.todo} completed={line.completed} handleChange={this.handleChange} key={index} />
          )}
        </div>
      </div>
    )
  }
}

export default App;
