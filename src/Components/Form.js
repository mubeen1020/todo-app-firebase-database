import React, { Component } from 'react'
import './CSS/todo.css'
import Age from '../age'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
            fathername:"",
            course:"",
            sec:"",
            cnic:"",
            contact:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    coursehandler = (event) => {
        this.setState({
            course: event.target.value
        })
    }

    fathernamehandler = (event) => {
        this.setState({
            fathername: event.target.value
        })
    }
    sechandler = (event) => {
        this.setState({
            sec: event.target.value
        })
    }
    cnichandler = (event) => {
        this.setState({
            cnic: event.target.value
        })
    }
    contacthandler = (event) => {
        this.setState({
            contact: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
            fathername:"",
            course:"",
            sec:"",
            cnic:"",
            contact:"",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div className="to">

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>CNIC :</label> <input type="number" value={this.state.cnic} onChange={this.cnichandler} placeholder="CNIC NO..." /><br />
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>FatherName:</label> <input type="text" value={this.state.fathername} onChange={this.fathernamehandler} placeholder="FatherName..." /><br />
                    <label>Father CNIC :</label> <input type="number" value={this.state.cnic} onChange={this.cnichandler} placeholder="CNIC NO..." /><br />
                    <label>Contact No :</label> <input type="number" value={this.state.contact} onChange={this.contacthandler} placeholder="contact NO..." /><br />
                    <label>Emergency No :</label> <input type="number" value={this.state.contact} onChange={this.contacthandler} placeholder="contact NO..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                    <label>FatherName :</label> <input type="text" value={this.state.fathername} onChange={this.firsthandler} placeholder="FatherName..." /><br />
                    <label>CNIC :</label> <input type="number" value={this.state.cnic} onChange={this.cnichandler} placeholder="CNIC NO..." /><br />
                    
                    <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <label>Select course :</label><select onChange={this. coursehandler} defaultValue="Select course">
                    <option defaultValue>Select course</option>
                        <option value="web and mobile">web and mobile</option>
                        <option value="garphics">garphics</option>
                        <option value="digital science">digital science</option>
                        </select><br />
                        <label>Select sec :</label><select onChange={this. sechandler} defaultValue="Select sec">
                    <option defaultValue>Select sec</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      
                        </select><br />
                        <Age/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form