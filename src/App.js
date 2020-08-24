import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import TodoApp from './components/TodoApp'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const LoginView = () => (
  <Login />
);

const TodoAppView = () => (
  <TodoApp />
);

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        isLogginIn: false

      }
    }

    componentWillMount(){
      this.setState({
          isLogginIn: localStorage.getItem("isLogginIn")
      })
    }


    render() {


      return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {!this.state.isLogginIn && (<li><Link to="/">Login</Link></li>)}
                        {this.state.isLogginIn && (<li><Link to="/todo">Todo</Link></li>)}
                    </ul>

                    <div>
                        {!this.state.isLogginIn && (<Route exact path="/" component={LoginView}/>)}
                        {this.state.isLogginIn && (<Route path="/todo" component={TodoAppView}/>)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
