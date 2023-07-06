import { Paper } from '@mui/material';
import React, { Component } from 'react';
import Carddata from './carddata';

export default class cards extends Component {
    constructor(){
        super();
        this.state = {
           data:Carddata,
           isLoading:false,
           error:null
        };
       
    }



    
    deleteCard =(index)=>{
        const Carddata = this.state
        Carddata.splice(index,1);
        this.setState({Carddata})
    }


  render() {
    
    return (
      <div className='container-fluid '>
          <header >
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                        <div className="container-fluid ">
                            <a className="navbar-brand " ><h2>GroupDream</h2></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav ms-auto justify-content-space-around ">
                                    <li className="nav-item ms-2">HOME</li>
                                    <li className="nav-item ms-2">ABOUT</li>
                                    <li className="nav-item ms-2">CONTACT</li>
                                    
                                </ul>
                                <div className='d-flex ms-4'>
                                    <button className='btn btn-dark ms-2'>SignIn</button>
                                    <button  className='btn btn-dark ms-2' >SignUp</button>
                                </div>
                            </div>
                            
                        </div>
                </nav>
          </header>
          <section>
             <div className='d-flex flex-wrap overflow-auto  m-2'   >
                
                {
                    Carddata.map((post,index)=>
                     <Paper key={index} elevation={3} className='m-3' style={{width:271,height:350}}>
                        <div className='card-header  p-2' align='center'><h6 style={{textAlign:'justify'}}>{post.title}</h6><hr/></div>
                        <div className='card-body p-3'><p style={{textAlign:'justify'}}>{post.body}</p></div>
                        <div className='card-footer d-flex p-2' >
                            <button className='btn btn-primary ms-auto ms-4' onClick={()=>this.updateCard()}>update</button>
                            <button className='btn btn-primary ms-4' onClick={()=>this.deleteCard(index)}>Delete</button></div>
                     </Paper>
                    )
                }
             </div>
          </section>
          <footer className='bg-dark text-white p-4'>
              <h3 align='center'>THIS IS FOOTER</h3>
          </footer>
      </div>
    )
  }
}
