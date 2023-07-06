import { Paper } from '@mui/material'
import React, { Component } from 'react'

export default class dummy extends Component {
  render() {
    return (
      <div className='container-fluid bg-warning p-3'>
         <div className='d-flex justify-content-center align-items-center'>
           <Paper className='p-4' elevation={3} style={{width:500}}>
               <h2>Todo List</h2>
           </Paper>
         </div>
      </div>
    )
  }
}
