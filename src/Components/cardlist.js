import React, { Component } from 'react';
import { MdAdd }from 'react-icons/md';
import Card from './card';
import Createcard from './createcard'

export default class cardlist extends Component {
  constructor(){
    super()
    this.state = {
       categoryData : [],
       itemData : [],
       newData:'',
       show:false
    }
  }

  

  

  showModel = (e) => {
    this.setState({
        show: !this.state.show
    })
  }


  render() {

    

    const cards = this.state.itemData.map((data,indx)=>{
      return(
             <Card key={indx} EachItemData={data} categoryData={this.state.categoryData} />
      )
  });


    return (
      <div className='container-fluid p-4 mt-4'>
        <div className='d-flex'>
           <h2>Cards List</h2>
           <button className='btn btn-outline-dark ms-auto' onClick={(e)=>this.showModel(e)}>
              <span>CREATE</span>
            <span className='position-relative p-1' style={{top:-2}}><MdAdd/></span>
           </button>
         </div><hr/>
         <div>
           {
            this.state.itemData.length > 0 ?
            <div className='d-flex flex-wrap'>{cards}</div> 
            : <div className='d-flex justify-content-center p-4'>
               <p>Hello User! You have no cards added in your account.Please click on 'CREATE' button to start adding your products.</p>
              </div> 
           }
         </div>
         <Createcard   setitemData={(itemData) => this.setState({itemData : [...this.state.itemData, ...itemData]})} 
             onClose={this.showModel} show={this.state.show} />
      </div>
    )
  }
}