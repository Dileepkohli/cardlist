import React, { Component } from 'react';
import Cards from './cards';
import Todolist from './todolist'
import Cardlist from './cardlist';
import Itemlist from './itemlist';
import Dummy from './dummy';
import './classindex.css'

export default class classindex extends Component {
  render() {
    return (
      <div className='p-2'>
         <Todolist/> 
        {/* <Cardlist/><hr/> */}
        {/* <Itemlist/> */}
        <Dummy/> 
        
      </div>
    )
  }
}
