import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Paper, TextField } from '@mui/material';


export default class createcard extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardtitle:this.props.eachData && this.props.eachData.cardTitle ? this.props.eachData.cardTitle: '',
      cardDate:this.props.eachData && this.props.eachData.cardDate ? this.props.eachData.cardDate:'',
      orderId:this.props.eachData && this.props.eachData.orderId ? this.props.eachData.orderId:'',
      cardData:this.props.eachData && this.props.eachData.cardData ? this.props.eachData.cardData:'',
      productId: this.props.eachData &&  this.props.eachData.productId ? this.props.eachData.productId : "",
      ProductImage:this.props.eachData&& this.props.eachData.ProductImage ? this.props.eachData.ProductImage:''
      
    }
  }

  onClose = (e) => {
		this.props.onClose && this.props.onClose(e)
	}

  
  

  submitCardForm = (e) =>{
    e.preventDefault()
    console.log(this.props.setitemData);
    this.props.setitemData([this.state]);
    if(this.props.type && this.props.type == 'create'){
      var msg = "Are you sure, you want to save the product?"
      
    }else{
      var msg = "Are you sure, you want to update the product?"
      
    }
    if(window.confirm(msg)){
    this.onClose(e)
  
    }
  }

  hendleDeleteItem =  (e,indx) => {
    e.preventDefault()
    var msg = "Are you sure, you want to delete the product?"
    // this.props.setitemData([]);
    console.log(indx)
    
   
    
    if(window.confirm(msg)){
      this.onClose(e)
    }
  }
  
  handleChange = (e) => {
    if (["card_image", "card_title", "card_date", "card_orderId"].includes(e.target.name)){
      this.setState({[e.target.name]: (e.target.value)})
    }else{
      this.setState({[e.target.name]:e.target.value})
    }
  }

  
  

  render() {

    const {itemData} = this.state;

    
    
    
    return (

       
      
      <div className='container-fluid'>
        {
           this.props.type && this.props.type =='update' ? [

              <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
              <Modal.Header closeButton key="a3">
                  <Modal.Title>Update Card</Modal.Title>
              </Modal.Header>
                <Modal.Body key="a1 " className=''>
                      <Paper className='p-5 ' elevation={3}>
                        <TextField  variant="standard" placeholder='Image path' fullWidth  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                        <TextField id="standard-basic card_title" placeholder='Title' fullWidth variant="standard" type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                        <TextField id="standard-basic card_date" placeholder='Date' fullWidth variant="standard" type='date'  name='card_date'  onChange={(e) => this.handleChange(e,'')}/><br/><br/>
                        <TextField id="standard-basic orderId" placeholder='Order Id:' fullWidth variant="standard"  type='text'  name='order_id'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                        <TextField id="standard-basic card_data" placeholder='Your Toughts'  fullWidth variant="standard" type='text'  name='card_data'  onChange={(e) => this.handleChange(e,'')}/>
                      </Paper>
                </Modal.Body>
                  <Modal.Footer key="a2">
                    <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                      Close
                    </Button>
                    <button className="btn btn-outline-success" type="submit" id="submit" onClick={(e)=>this.submitCardForm(e)}>
                      Update
                    </button>
                  </Modal.Footer> 
            </Modal>

           ] 
           : this.props.type && this.props.type == "delete" ? [
             
                <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
              <Modal.Header closeButton key="b3">
                  <Modal.Title>Delete card</Modal.Title>
              </Modal.Header>
                
                  <Modal.Footer key="b2">
                    <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                      Close
                    </Button>
                    <button className="btn btn-outline-success" type="submit" id="submit" onClick={(e)=>this.hendleDeleteItem(e,'indx')}>
                      Delete
                    </button>
                  </Modal.Footer> 
            </Modal>

           ] 
           : [
                <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
                <Modal.Header closeButton key="c3">
                    <Modal.Title>Create card</Modal.Title>
                </Modal.Header>
                  <Modal.Body key="c1">
                        <Paper className='p-5 '>
                          <TextField  variant="standard" placeholder='Image path' fullWidth  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                          <TextField id="standard-basic card_title" placeholder='Title' fullWidth variant="standard" type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                          <TextField id="standard-basic card_date" placeholder='Date' fullWidth variant="standard" type='date'  name='card_date'  onChange={(e) => this.handleChange(e,'')}/><br/><br/>
                          <TextField id="standard-basic orderId" placeholder='Order Id:' fullWidth variant="standard"  type='text'  name='order_id'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                          <TextField id="standard-basic card_data" placeholder='Your Toughts'  fullWidth variant="standard" type='text'  name='card_data'  onChange={(e) => this.handleChange(e,'')}/>
                        </Paper>
                  </Modal.Body>
                    <Modal.Footer key="c2">
                      <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                        Close
                      </Button>
                      <button className="btn btn-outline-success" type="submit" id="submit" onClick={(e)=>this.submitCardForm(e)}>
                        submit
                      </button>
                    </Modal.Footer> 
              </Modal>

             ]
        }
      </div>
    )
  }
}