import React, { Component } from 'react'

export interface State {
}

export interface Props {
  
}



class Com1 extends Component<Props,State>{
 constructor(props :Props){
      super(props)
   }
    render() {
        return (
            <div>
        <header className="App-header">
          <p>
            <code>sub site route 1</code>.
          </p>
        </header>
            </div>
        )
    }
}


export default Com1
