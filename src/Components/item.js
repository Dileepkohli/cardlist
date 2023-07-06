
import { Paper } from '@mui/material';
import React, { Component } from 'react';
import { BiEdit  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import Createitem from './createitem';


export default class item extends Component {
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
       
            <Paper className='card ms-2' elevation={3}  style={{width:565,borderRadius:20}}>
              <div className="d-flex ms-auto " style={{ fontSize: 30,marginRight:10,marginTop:-5}}>
                  <button className="border-0 bg-transparent edit-icon" title="Edit" style={{ marginRight: 20}} onClick={(e)=>this.showModel(e,"update")}><BiEdit /></button>
                  <button style={{marginRight:10}} className="border-0 bg-transparent del-icon" title="Delete"  onClick={(e)=>this.showModel(e,"delete")}><RiDeleteBinLine /></button><br/>
              </div>
              <div className='p-3' align='center'>
                <h2 >{this.props.EachItemData.card_title}</h2>
              </div>
              

            </Paper>

            { <Createitem  onClose={this.showModel}  show={this.state.show}  type={this.state.type}   eachitemData={this.props.eachData}  /> }
            
      </div>
    )
  }
}
