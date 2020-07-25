import React, { Component } from 'react'
import {getAllOrdersActionCreator} from './../Store/Actions/actionCreator';
import {connect} from 'react-redux'
import Customer from './customer'
class LoginForm extends Component {

    constructor(){
        super()
        this.state = {
            userId: '',
            customerType: false,
            customerView: false,
            staffView: false,
            viewType: ''
        }
       this.handleRequestChange =  this.handleRequestChange.bind(this);
       this.logIn =  this.logIn.bind(this);
    }
    handleRequestChange(e){
        if(e.target.name === 'userIdName'){
            this.setState({userId: e.target.value})
        }
        else if(e.target.name === 'customerTypeName'){
            this.setState({customerType: e.target.value})
        }
    }
    logIn(){
        if(this.state.customerType){
            //Route to chef page
            this.setState({staffView: true, viewType: 'Staff'})
            this.props.history.push('/staff');
         }
        else{
            this.props.getAllOrdersActionCreator();
            this.props.history.push('/customer');
            this.setState({customerView: true, viewType: 'Customer'})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container container-margin">
                {
                                !this.state.customerView && 
                    <div className='card'>
                        <div className='card-body'>
                            
                                <form>
                                <div className="form-group">
                                    <label htmlFor="userIdLabel">User ID</label>
                                    <input id='userId' name='userIdName' className="form-control"  placeholder="Enter User ID"  onChange= {(e)=>this.handleRequestChange(e)}/>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" name='customerTypeName' className="form-check-input" id="exampleCheck1" value={this.state.customerType} onChange= {(e)=>this.handleRequestChange(e)}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Are you a chef?</label>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.logIn}>Log In</button>
                            </form>
                        </div>
                    </div>
    }
                    {
                                (this.state.customerView || this.state.staffView )&& <Customer orderData={this.props.allOrders} viewType={this.state.viewType}       />
                            }
                </div>

            </React.Fragment>

        )
    }
}



const mapStateToProps = state => {
    console.log(state.reducerReturn.allOrders,"state.reducerReturn.empData")
    return {
        allOrders: state.reducerReturn.allOrders
     }
}

const mapDispatchToProps = dispatch => {
    return {
        //getEmpActionCreator: (id) => dispatch(getEmpActionCreator(id))
        getAllOrdersActionCreator: () => dispatch(getAllOrdersActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);