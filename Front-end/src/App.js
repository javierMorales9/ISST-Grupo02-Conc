import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import Inicio from './pages/inicio';
import Booking from './pages/booking';
import Leisure from './pages/leisure';
import OtherService from './pages/other_services';
import Profile from './pages/profile';
import RoomService from './pages/room_service';
import Transport from './pages/transport';
import Navbar from './components/navbar.js';
import NavbarInicio from './components/navbarInicio.js';
import Login from './pages/login.js';
import './public/navbar.css';
import {loginAction} from './redux/actions.js';


class App extends React.Component {

  constructor(props){
    super(props);
    this.updateNavBar = this.updateNavBar.bind(this);
    this.loginUpdate = this.loginUpdate.bind(this);
    this.logedOut = this.logedOut.bind(this);
    this.state = {
      primer_componente:<NavbarInicio login={false}/>,
    }

  }

  componentDidMount(){
    let url = 'https://acallejasz.github.io' + process.env.PUBLIC_URL + '/';
    let url_localHost = 'http://localhost:3000' + process.env.PUBLIC_URL + '/';

    const isLoged = sessionStorage.getItem("login");
    const id = sessionStorage.getItem("cliente");
    this.props.dispatch(loginAction(isLoged,id));

    if(window.location.href+"/" === url_localHost || window.location.href === url_localHost){
      this.setState({primer_componente:<NavbarInicio login={isLoged} click={this.updateNavBar}/>})
    }else{
      this.setState({primer_componente:<Navbar login={isLoged} click={this.updateNavBar}/>})
    }

  }
    
  /*Revisar si se puede cambiar el nombre*/
  loginUpdate() {
    document.getElementById("a_pinchar").click();
    sessionStorage.setItem("login",true);
    sessionStorage.setItem("cliente",this.props.id_cliente);
  }

  logedOut(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("cliente");
    window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/';
  }


  updateNavBar(e){
    let url = 'https://acallejasz.github.io' + process.env.PUBLIC_URL + '/';
    let url_localHost = 'http://localhost:3000' + process.env.PUBLIC_URL + '/';

    if(e.target.href === url_localHost){
      this.setState({primer_componente:<NavbarInicio login={this.props.login} click={this.updateNavBar}/>})
    }else{
      this.setState({primer_componente:<Navbar login={this.props.login} click={this.updateNavBar}/>})
    }
  }

  render(){
    window.scrollTo(0,0);

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/">
              <div>
                {this.state.primer_componente}
                <Inicio click={this.updateNavBar}/>
              </div>
            </Route>
            <Route path="/leisure">
              <div>
                {this.state.primer_componente}
                <Leisure/>
              </div>
            </Route>
            <Route path="/booking">
              <div>
                {this.state.primer_componente}
                <Booking id_cliente={this.props.id_cliente} />
              </div>
            </Route>
            <Route path="/premium">
              <div>
                {this.state.primer_componente}
                <OtherService  id_cliente={this.props.id_cliente} />
              </div>
            </Route>
            <Route path="/profile">
              <div>
                {this.state.primer_componente}
                <Profile logOut={this.logedOut}/>
              </div>
            </Route>
            <Route path="/room_service">
              <div>
                {this.state.primer_componente}
                <RoomService/>
              </div>
            </Route>
            <Route path="/transport">
              <div>
                {this.state.primer_componente}
                <Transport/>
              </div>
            </Route>
            <Route path="/login">
              <div>
                {this.state.primer_componente}
                <Login  login_info = {(login,id) => {this.props.dispatch(loginAction(login,id));}} loginUpdate = {this.loginUpdate}/>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>  
    );
  }
}
    
   
  

function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(App);
