import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Paper, TextField } from '@mui/material';

export default class createitem extends Component {
    constructor(props){
        super(props);
        this.state={
            itemTitle : this.props.eachData && this.props.eachData.itemTitle ? this.props.eachData.itemTitle:''
        }
    }

    onClose = (e) => {
		this.props.onClose && this.props.onClose(e)
	}


    handleChange = (e) => {
        if ([ "card_title" ].includes(e.target.name)){
          this.setState({[e.target.name]: (e.target.value)})
        }else{
          this.setState({[e.target.name]:e.target.value})
        }
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

      

      deleteItem =(e,indx)=>{
        console.log('delete')
        const {itemData} = this.state.itemData.filter((data) => data.indx !== indx)
      }

  render() {
    const {itemData} = this.state;
    return (
      <div>
        {
            this.props.type&&this.props.type=="update" ? 
            [
                <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
                    <Modal.Header closeButton key="c3">
                        <Modal.Title>Update card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body key="c1">
                            <Paper className='p-5 '>
                            
                                <TextField id="standard-basic card_title" placeholder='Title' fullWidth variant="standard" type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                            
                            </Paper>
                    </Modal.Body>
                        <Modal.Footer key="c2">
                        <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                            Close
                        </Button>
                        <button className="btn btn-outline-success" type="submit" id="submit" onClick={(e)=>this.submitCardForm(e)}>
                            Update
                        </button>
                        </Modal.Footer> 
                    </Modal>
            ] :this.props.type&&this.props.type=="delete" ? 
            [
                <Modal  show={this.props.show} onHide={(e)=>this.onClose(e)}>
                    <Modal.Header closeButton key="c3">
                        <Modal.Title>Delete card</Modal.Title>
                    </Modal.Header>
                    
                        <Modal.Footer key="c2">
                        <Button className="bl-btn2-ol" variant="secondary" onClick={(e)=>this.onClose(e)}>
                            Close
                        </Button>
                        <button className="btn btn-outline-success" type="delete" id="delete" onClick={(e)=>this.deleteItem(e,'indx')}>
                            delete
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
                            
                              <TextField id="standard-basic card_title" placeholder='Title' fullWidth  type='text'   name='card_title'  onChange={(e) => this.handleChange(e,'')} /><br/><br/>
                            
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
