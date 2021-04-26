import React, { Component } from 'react'


export interface State {
    data:any
}

export interface Props {
    
}



export default class Com2 extends Component<Props,State>{
  constructor(props : Props) {
      super(props)
      this.state = {
          data: null
      }
  }
  componentDidMount(){
    this.getData();
  }

  getData=()=>{
  fetch("https://cat-fact.herokuapp.com/facts")
  .then(res => res.json())
  .then(res=>{
    this.setState({
      data:res
    })
  })

  }

  


    render() {
        return (
            <div>
            <header className="App-header">
              <p>
                <code>sub site route 2</code>.
              </p>
            <table style={{marginTop:"20px"}}>
            <thead>Data from API</thead>
            {this.state.data && this.state.data.map((item:any,i:any)=>(
                <tr key={i}><td>{`${i} ---> ${item.text}`}</td></tr>
            ))}
              </table>
            </header>
                </div>
            ) 
      }
}


