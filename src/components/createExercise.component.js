import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css" 

export default class CreateExercise  extends Component{
  constructor(props){
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeDescription= this.onChangeDescription.bind(this);
    this.onChangeDuration= this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit=  this.onSubmit.bind(this);

        this.state= {
                userName: '',
                description : '',
                duration: 0,
                date: new Date(),
                users: []
            }
        }

        componentDidMount() {
            this.setState = ({
                users:  ['test'],
                userName: 'test user'
            });
  }   

        onChangeUserName(e) {
            this.setState = ({
                userName : e.target.value
            });
        }

        onChangeDescription(e) {
            this.setState = ({
                description : e.target.value
            });
        }

        onChangeDuration(e) {
            this.setState = ({
                duration : e.target.value
            });
        }

        onChangeDate(dates) {
            this.setState = ({
                date : dates
            });
        }

        onSubmit(e) {
            e.preventDefault();
            const exercise= {
                userName: this.state.userName,
                description : this.state.description,
                duration: this.state.duration,
                date : this.state.date
            }

            console.log(exercise);

            window.location = "/";
        }
        render() {
            return (
                <div>
                    <h3> Create New Exercise Log</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>User Name:</label>
                            <select ref="userInput"
                            required
                            className="form-control"
                            value= {this.state.userName}
                            onChange= {this.onChangeUserName} >
                                {
                                    this.state.users.map(function(user) {
                                        return <option 
                                        key ={user}
                                        value = {user} > {user}
                                        </option>;
                                    })
                                }
                            </select>
                        </div>
                        <div className= "form-group">
                            <label>Description:</label>
                            <input className="form-control"
                            required
                            value= {this.state.description}
                            onChange= {this.onChangeUserName} />
                        </div>
                        <div className= "form-group">
                            <label>Duration:</label>
                            <input className="form-control"
                            required
                            value= {this.state.duration}
                            onChange= {this.onChangeDuration} />
                        </div>
                        <div className= "form-group">
                            <label>Date:</label>
                            <div>
                            <DatePicker 
                            selected= {this.state.date}
                            onChange = {this.onChangeDate} />
                            </div>
                        </div>
                        <div className= "form-group">
                            <input type="Submit" value="Create Exercise Log" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            );
        }
    }