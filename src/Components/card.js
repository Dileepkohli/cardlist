
import { Paper } from '@mui/material';
import React, { Component } from 'react';
import { BiEdit  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import Createcard from './createcard';


export default class card extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      type:''
    }
  }

      showModel = (e, type) => {
        this.setState({
            show: !this.state.show,
            type: type
        })
      }

     

      

  render() {

    

    return (
      <div className='p-3' >
       
            <Paper className='card ms-2' elevation={3}  style={{width:565,marginLeft:-30,borderRadius:20}}>
              <div className="d-flex ms-auto " style={{ fontSize: 30,marginRight:10,marginTop:-5}}>
                  <button className="border-0 bg-transparent edit-icon" title="Edit" style={{ marginRight: 20}} onClick={(e)=>this.showModel(e,"update")}><BiEdit /></button>
                  <button style={{marginRight:10}} className="border-0 bg-transparent del-icon" title="Delete"  onClick={(e)=>this.showModel(e,"delete")}><RiDeleteBinLine /></button><br/>
              </div>
              <div className='d-flex'>
                <div className='p-2 ' style={{marginLeft:30}} >
                    {
                      <img className='image'    width={140} height={140} style={{borderRadius:70,}} />
                    }
                </div>
                  <div className='p-4'>
                    <h3 style={{color:'blue'}}>{this.props.EachItemData.card_title}</h3>
                    <p>Upcoming on {this.props.EachItemData.card_date}</p>
                    <p style={{fontWeight:600}}>Order Id : {this.props.EachItemData.order_id}</p>
                  </div>
                  <div className='p-4' style={{marginTop:40,}}><button className='btn btn-primary ' style={{borderRadius:20}}>Pending</button></div>
              </div>
              <div className='p-4' style={{marginTop:-20,color:'CaptionText'}}>
                <p style={{textAlign:'justify',marginLeft:15}}>{this.props.EachItemData.card_data}</p>
              </div>

            </Paper>

            { <Createcard  onClose={this.showModel}  show={this.state.show}  type={this.state.type}     /> }
            
      </div>
    )
  }
}
