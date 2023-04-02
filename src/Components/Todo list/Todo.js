import React, { Component } from 'react'

export default class Todo extends Component {

     // send id to the todoList component for remove of the todo
     removeHandler(id) {
          this.props.onRemove(id)
     }

     // set id to the todoList component for remove of the completed
     onCompleted(id) {
          this.props.onEdit(id)
     }

     render() {
          let { id, titleTodo, isCompleted } = this.props

          return (
               <div className={`bg-white ${isCompleted ? "bg-[#576CBC]" : ""} rounded-md mb-5 p-3 w-full min-h-[40px] flex justify-between items-center relative`}>
                    <div className={`${isCompleted ? "line-through text-[#fff]" : ""}`}>
                         <p className='text-[18px]'>{titleTodo}</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                         <div className='bg-rose-500 hover:bg-rose-600 overflow-hidden rounded-md' onClick={this.removeHandler.bind(this, id)}>
                              <img src="https://s2.uupload.ir/files/icons8-trash-can-50_ysya.png" className='w-[35px] p-1' alt="" />
                         </div>
                         <div className={`${isCompleted ? "bg-green-700" : ""} bg-green-500 hover:bg-green-600 overflow-hidden rounded-md`}>
                              <img src="https://s2.uupload.ir/files/icons8-done-30_57a.png" className='w-[35px] p-1' alt='' onClick={this.onCompleted.bind(this, id)} />
                         </div>
                    </div>
               </div>
          )
     }
}
