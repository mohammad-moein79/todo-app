import React, { Fragment } from 'react';
import Todo from './Todo';
import Header from './Header';

export default class TodoList extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               todos: [],
               todoTitel: '',
               status: "all",
               isError: false
          }

          this.todoTitleHandler = this.todoTitleHandler.bind(this)
          this.addTodo = this.addTodo.bind(this)
          this.removeTodo = this.removeTodo.bind(this)
          this.EditTodo = this.EditTodo.bind(this)
          this.filterATodos = this.filterATodos.bind(this)
     }

     // this function is change value input
     todoTitleHandler(event) {
          this.setState({
               todoTitel: event.target.value
          });
     }

     // add todo in dotolist at state
     addTodo(e) {
          e.preventDefault()

          // validation text todo
          if (this.state.todoTitel) {
               // add todo 
               ////create a new todo
               let newTodo = {
                    id: this.state.todos.length + 1,
                    titleTodo: this.state.todoTitel,
                    isCompleted: false
               }

               ////set state a new todo in todos
               this.setState(preveState => {
                    return {
                         todos: [...preveState.todos, newTodo]
                    }
               })

               /// reast todo title
               this.setState({
                    todoTitel: ''
               })

          } else {
               // render error for if the fild is ''
               this.setState({
                    isError: true
               })

               setTimeout(() => {
                    this.setState({
                         isError: false
                    })
               }, 5000);
          }
     }

     // remove todo of todo list
     removeTodo(id) {

          // filter of the new array
          let newFilterOfArry = this.state.todos.filter(todo => {
               return todo.id !== id
          })

          // set the new array
          this.setState({
               todos: newFilterOfArry
          })
     }

     // edit todo for edit component
     EditTodo(id) {
          let newTodos = [...this.state.todos]

          newTodos.forEach(todo => {
               if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted
               }
          })

          this.setState({
               todos: newTodos
          })
     }

     //filter array for status
     filterATodos(e) {
          this.setState({
               status: e.target.value
          });
     }

     render() {
          return (
               <Fragment>
                    <Header></Header>
                    <div className='w-full min-h-[550px] mt-[10px] flex  items-center justify-center'>
                         <div className='flex justify-center flex-col md:flex-row w-full'>
                              <div className='md:w-[32%] flex justify-start items-start md:items-start p-4 md:min-h-[520px]'>
                                   <form onSubmit={this.addTodo} className='w-full flex  flex-col justify-center items-center '>
                                        <div className='w-[80%] relative'>
                                             <input type="text" value={this.state.todoTitel} onChange={this.todoTitleHandler} placeholder='please write your todo...' className='w-full outline-none text-[#2B3467] text-[18px] p-2 rounded-md h-[48px]' />
                                             <button type='submit' className=' rounded-md absolute right-0 top-0 w-[40px] h-full bg-[#9DC08B] hover:bg-[#68B984] felx justify-center '>
                                                  <img src="https://s2.uupload.ir/files/icons8-plus-math-24_mphv.png" className='h-[70%]' alt="" />
                                             </button>
                                        </div>
                                        {this.state.isError &&
                                             <span className='text-[16px] text-[#EB455F]'>please fill the form</span>
                                        }
                                        <div className='w-[80%] mt-[23px]'>
                                             <select className='w-full h-[48px] rounded-md outline-none p-1' onChange={this.filterATodos}>
                                                  <option className='p-2' value="all">All</option>
                                                  <option className='p-2' value="completed">completed</option>
                                                  <option className='p-2' value="uncompleted">uncompleted</option>
                                             </select>
                                        </div>
                                   </form>
                              </div>
                              <div className='md:w-[32%] flexflex-col justify-start items-start p-4 md:min-h-[520px]'>
                                   {/* //filter a all array */}
                                   {this.state.status === "all" && this.state.todos.map(todo => (
                                        <Todo key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.EditTodo} ></Todo>
                                   ))}

                                   {/* //filter completed array */}
                                   {this.state.status === "completed" && this.state.todos.filter(todo => todo.isCompleted).map(todo => (
                                        <Todo key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.EditTodo} ></Todo>
                                   ))}

                                   {/* //filter uncompleted array */}
                                   {this.state.status === "uncompleted" && this.state.todos.filter(todo => todo.isCompleted === false).map(todo => (
                                        <Todo key={todo.id} {...todo} onRemove={this.removeTodo} onEdit={this.EditTodo} ></Todo>
                                   ))}
                              </div>
                         </div>
                    </div>
               </Fragment>
          )
     }
}
