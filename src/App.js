import React, { Component } from 'react';
import logo from './logo.svg';
import swal from 'sweetalert';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      admin: { username: "admin", password: "admin" },
      loginadmin: { username: "bnb", password: "bnb" },
      login: false,
      token: true,
      btn1: "floatingBtn1",
      fBT: true,
      selectedEmployeeID: "",
      newEmployee: [{ id: "", firstName: "", lastName: "", email: "", salary: "", dOB: "", }],
      employee: [{ id: "23AA13", firstName: "YASIR", lastName: "AHMED", email: "yasir@gmail.com", salary: "100000", dOB: "2018-09-05", },
      { id: "13Aa14", firstName: "Muhammad", lastName: "Ali", email: "ali@gmail.com", salary: "200000", dOB: "2018-09-05", }
      ]
    }

    this.updateName = this.updateName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updatelogin = this.updatelogin.bind(this)
    this.renderAlert = this.renderAlert.bind(this)
    this.employeeSelect = this.employeeSelect.bind(this)
    this.addEmployee = this.addEmployee.bind(this)
    this.firstName = this.firstName.bind(this)
    this.lastName = this.lastName.bind(this)
    this.email = this.email.bind(this)
    this.salary = this.salary.bind(this)
    this.dOJ = this.dOJ.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.clearModalFields= this.clearModalFields.bind(this)


  }

  // functions ********************

  clearModalFields(){

    document.getElementById("firstName").value = "";

    document.getElementById("lastName").value = "";

    document.getElementById("email").value = "";

    document.getElementById("salary").value = "";

    document.getElementById("dOJ").value = "";

    document.getElementById("submitBtn").innerHTML = "Submit";
    
    document.getElementById("modalHeader").innerHTML = "Add New Employee";

  }

  delete() {

    const { selectedEmployeeID, employee } = this.state;
    var result = employee.filter(item => item.id !== selectedEmployeeID)
    this.setState({
      employee: result
    })


  }

  update() {

    const { selectedEmployeeID, employee } = this.state;

    var result = employee.filter(item => item.id !== selectedEmployeeID)


    // data-toggle="modal" data-target="#myModal"


    employee.filter((item) => {

      if (item.id === selectedEmployeeID) {

        document.getElementById("firstName").value = item.firstName;

        document.getElementById("lastName").value = item.lastName;

        document.getElementById("email").value = item.email;

        document.getElementById("salary").value = item.salary;

        document.getElementById("dOJ").value = item.dOB;

        document.getElementById("submitBtn").innerHTML = "Update Data";
        document.getElementById("modalHeader").innerHTML = "Update Employee Details";


        this.setState({
          newEmployee: item
        })

        document.getElementById("submitBtn").onclick = function () {

          this.setState({
            employee: result
          })

        }.bind(this);
      }
    })
  }

  handleClick(e) {
    // This doesn't stop the click event in the parent firing like I
    // thought it would
    // Do something
    this.setState({
      selectedEmployeeID: ""
    })
  }

  firstName(e) {

    const { newEmployee } = this.state;

    this.setState({
      newEmployee: { id: newEmployee.id, firstName: e.target.value, lastName: newEmployee.lastName, email: newEmployee.email, salary: newEmployee.salary, dOB: newEmployee.dOB }
    })
  }
  lastName(e) {

    const { newEmployee } = this.state;

    this.setState({
      newEmployee: { id: newEmployee.id, firstName: newEmployee.firstName, lastName: e.target.value, email: newEmployee.email, salary: newEmployee.salary, dOB: newEmployee.dOB }

    })
  }
  email(e) {

    const { newEmployee } = this.state;

    this.setState({
      newEmployee: { id: newEmployee.id, firstName: newEmployee.firstName, lastName: newEmployee.lastName, email: e.target.value, salary: newEmployee.salary, dOB: newEmployee.dOB }

    })
  }
  salary(e) {

    const { newEmployee } = this.state;

    this.setState({
      newEmployee: { id: newEmployee.id, firstName: newEmployee.firstName, lastName: newEmployee.lastName, email: newEmployee.email, salary: e.target.value, dOB: newEmployee.dOB }

    })
  }
  dOJ(e) {

    const { newEmployee } = this.state;

    // randomID

    var random1, random2, randomID;
    random1 = Math.ceil(Math.random() * 100);

    random2 = Math.floor(Math.random() * 100);

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    randomID = random1 + text + random2;

    // randomID


    this.setState({

      newEmployee: { id: randomID, firstName: newEmployee.firstName, lastName: newEmployee.lastName, email: newEmployee.email, salary: newEmployee.salary, dOB: e.target.value }

    })

  }


  addEmployee() {

    const { newEmployee, employee } = this.state;
    employee.push(newEmployee);

    this.setState({

      newEmployee: { id: "", firstName: "", lastName: "", email: "", salary: "", dOB: "" }

    })

    document.getElementById("firstName").value = "";

    document.getElementById("lastName").value = "";

    document.getElementById("email").value = "";

    document.getElementById("salary").value = "";

    document.getElementById("dOJ").value = "";
  }

  updateName(e) {
    const { loginadmin } = this.state;
    var user = e.target.value
    var password = loginadmin.password
    this.setState({
      loginadmin: { username: user, password: password }
    })
  }
  updateEmail(e) {
    const { loginadmin } = this.state;
    var pass = e.target.value
    var user = loginadmin.username
    this.setState({
      loginadmin: { username: user, password: pass }
    })
  }

  updatelogin() {
    const { admin, loginadmin } = this.state;

    this.setState({
      login: admin.username === loginadmin.username && admin.password === loginadmin.password
      ,
      token: false
    })


  }

  employeeSelect(e) {


    this.setState({
      selectedEmployeeID: e
    })
  }

  // render functions **************************

  renderLogin() {


    return (
      <div className="logindiv">

        <h1>LOGIN</h1>
        USERNAME <input className="form-control" type="text" onChange={this.updateName} />
        PASSWORD <input className="form-control" type="password" name="" id="" onChange={this.updateEmail} />
        <button className="btn btn-info" onClick={this.updatelogin}>LOGIN</button>
        <p className="center">username:admin <br/>password:admin</p>

      </div>
    )
  }
  renderMain() {

    const { employee, btn1, selectedEmployeeID } = this.state;

    return (

      <div>

        <div className="datadiv">
          <table className="table" >
            {
              <thead>
                <tr className="info" >
                  <td >FIRST NAME</td>
                  <td >LAST NAME</td>
                  <td >EMAIL</td>
                  <td >SALARY</td>
                  <td >DATE OF JOIN</td>
                </tr>
              </thead>
            }
            {
              <tbody onClick={(event) => { event.stopPropagation()}} >
                {
                  employee.map(function (value, index) {
                    return (
                      <tr className={value.id === selectedEmployeeID ? "selectedEmployee" : " "} key={index} onClick={() => { this.employeeSelect(value.id) }} >
                        <td>{value.firstName}</td>
                        <td>{value.lastName}</td>
                        <td>{value.email}</td>
                        <td>{value.salary}</td>
                        <td>{value.dOB}</td>
                      </tr>
                    )
                  }.bind(this))
                }
              </tbody>
            }

          </table>
          {/* modal */}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 id="modalHeader" className="modal-title" >Add New Employee</h4>
                </div>
                <div className="modal-body">

                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.firstName} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={this.lastName} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email Name" onChange={this.email} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" className="form-control" id="salary" placeholder="Salary" onChange={this.salary} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dOJ">Date of Join</label>
                    <input type="Date" className="form-control" id="dOJ" placeholder="Date of Join" onChange={this.dOJ} />
                  </div>

                  <button id="submitBtn" className="btn btn-default" onClick={this.addEmployee}>Submit</button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}

          <div className="modifyBtn">
            <button className={(selectedEmployeeID !== "") ? "modifyBtn1" : "modifyBtnHide"} type="button" onClick={this.delete} >Delete</button>
            <button className={(selectedEmployeeID !== "") ? "modifyBtn2" : "modifyBtnHide"} type="button" data-toggle="modal" data-target="#myModal" onClick={this.update} >Update</button>
          </div>
          <button className={btn1} type="button" data-toggle="modal" data-target="#myModal" onClick={this.clearModalFields} >Add</button>
        </div>
        <div>
          <button className="logoutBtn"  title="LogOut" onClick={()=>{this.setState({ token :true ,  login: false  })}} >logout</button>
        </div>
      </div>
    )
  }


  renderAlert() {
    swal("Wrong Credntials")
      .then(() => {
        this.setState({
          token: true
        })
      });
  }

  render() {
    const { login, token } = this.state;

    return (
      <div onClick={this.handleClick} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >EMPLOYEES DETAILS</h1>
        </header>
        {(login) ? this.renderMain() : (token || this.renderAlert()) && this.renderLogin()}
      </div>
    );
  }
}

export default App;


