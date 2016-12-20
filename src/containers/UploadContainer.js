import React, { Component } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import DropZoneDemo from '../components/DropZone'


class UploadContainer extends Component{
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    TodoModel.all().then((res) => {
      console.log(res.data)
      this.setState({
        todos: res.data,
        todo: ''
      })
    })
  }

  createTodo(todo){
    let newTodo= {body: todo, completed: false}
    TodoModel.create(newTodo).then((res) => {
      let todos = res.data
      this.setState({todos})
    })
  }

  deleteTodo(todo){
    TodoModel.delete(todo).then((res) => {
      let todos = res.data
      this.setState({todos})
    })
  }

  editTodo(todo){
   this.setState({
     editingTodoId: todo.id
   })
  }

  render(){
    return(
      <div className="TodosContainer">
        <h3>Upload a photo below:</h3>
        <DropZoneDemo/>
      </div>
    )
  }
}

export default UploadContainer