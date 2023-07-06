import React, { Component } from 'react';
import { MdAdd }from 'react-icons/md';
import Card from './item';

import Createitem from './createitem';

export default class cardlist extends Component {
  constructor(props){
    super(props)
    this.state = {
       categoryData : [],
       itemData : [],
       cardId:null,
       show:false
    }
  }

  

  

  showModel = (e) => {
    this.setState({
        show: !this.state.show
    })
  }


  render() {

    

    const items = this.state.itemData.map((data,indx)=>{
      return(
             <Card key={indx} EachItemData={data}  deleteitem={this.deleteItem} />
      )
  });


    return (
      <div className='container-fluid p-4 mt-4'>
        <div className='d-flex'>
           <h2>Item List</h2>
           <button className='btn btn-outline-dark ms-auto' onClick={(e)=>this.showModel(e)}>
              <span>CREATE</span>
            <span className='position-relative p-1' style={{top:-2}}><MdAdd/></span>
           </button>
         </div><hr/>
         <div>
           {
            this.state.itemData.length > 0 ?
            <div className='d-flex flex-wrap'>{items}</div> 
            : <div className='d-flex justify-content-center p-4'>
               <p>Hello User! You have no cards added in your account.Please click on 'CREATE' button to start adding your products.</p>
              </div> 
           }
         </div>
         <Createitem    setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})} 
             onClose={this.showModel} show={this.state.show} />
      </div>
    )
  }
}