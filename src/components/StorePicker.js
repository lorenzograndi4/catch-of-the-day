import React from 'react';

export default class StorePicker extends React.Component {
  render() {
    return (

      <form className='store-selector' >
        <h2>Enter store</h2>
        { /* This is a comment in JSX */ }
        <input type='text' required />
        <hr/>
        <br/>
      </form>
    )
  }
}
