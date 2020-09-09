import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    //rest api를 호출할 수 있는 component 생명주기 
    componentDidMount(){
        UserService.getUsers().then((response)=>{
            this.setState({users : response.data})
        });
    }
    
    //React.compoent method
    render(){

        //jsx(syntax of js+html)
        return (
            <div>
                
                <h1 className = "text-center"> Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>    
                            <td>User First Name</td>    
                            <td>User Last Name</td>    
                            <td>User Eamil Id</td>    
                        </tr>    
                    </thead>
                    <tbody>
                        {
                        this.state.users.map(
                            user =>
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>

                            </tr>
                        )
                        }
                    </tbody>
                </table>

            </div>

        )
    }

}

export default UserComponent;