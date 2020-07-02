import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      name:'',
      description:'',
      skills:''
    }
  }

  handleChange = (e)=>{
    console.log(e.target.value)
this.setState({name : e.target.value})
  }

  handelDescription = (e)=>{
    this.setState({description : e.target.value})
  }

  handleChooisChange = (e)=>{
    this.setState({
      skills:e.target.value
    })
  }


  handleSubmit = (e)=>{
e.preventDefault()
this.setState({
  name:this.state.name,
  description:this.state.description,
  skills:this.state.skills
})
  }

  render(){
      const {name,description,skills} = this.state
    return (
      <div className="App">
   
            <form onSubmit={this.handleSubmit}> 
             <div>
                <label>Enter your name</label>
                <input type='text' onChange={this.handleChange} value={name}/>
               
            </div>

            <div>
                <lable>descripe your self</lable>
              <textarea onChange={this.handelDescription}></textarea>
             
            </div>

                    <div>
                        <label> select your skills</label>
                        <select onChange={this.handleChooisChange}>
                        <option value='react'> react</option>
                        <option value='Angular'>Angular</option>
                        <option value="vue">vue</option>
                        </select>
                    </div>


      <button>submit</button>
      <p>you are {name}</p>
      <p> about u {description}</p>
        <p>skills is {skills}</p>

        </form>
    </div>
    )
  }
}

export default App;
