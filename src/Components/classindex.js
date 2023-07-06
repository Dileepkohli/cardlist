import React, { Component } from 'react';

import Cardlist from './cardlist';

import './classindex.css'

export default class classindex extends Component {
  render() {
    return (
      <div className='p-2'>
        <Cardlist/>
      </div>
    )
  }
}
