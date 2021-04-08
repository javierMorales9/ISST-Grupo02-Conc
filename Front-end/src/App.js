import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
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
import {loginAction, savetheclient} from './redux/actions.js';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import AlertTemplate from "react-alert-template-basic";


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

    this.setState({first_charge:true});

    const isLoged = sessionStorage.getItem("login");
    const id = sessionStorage.getItem("cliente");
    let entire_client = sessionStorage.getItem("entire_client")
    if (entire_client != null)
       entire_client = JSON.parse(entire_client)
    this.props.dispatch(loginAction(isLoged,id));
    this.props.dispatch(savetheclient(entire_client))
    

    if(window.location.href+"/" === url_localHost || window.location.href === url_localHost){
      this.setState({primer_componente:<NavbarInicio login={isLoged} id={id} click={this.updateNavBar}/>})
    }else{
      this.setState({primer_componente:<Navbar login={isLoged} id={id} click={this.updateNavBar}/>})
    }
	
  }
    
  /*Revisar si se puede cambiar el nombre*/
  loginUpdate() {
    window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/';
    sessionStorage.setItem("login",true);
    sessionStorage.setItem("cliente",this.props.id_cliente);
    sessionStorage.setItem("entire_client",JSON.stringify(this.props.entire_client))
    console.log(this.entire_client, JSON.stringify(this.props.entire_client))
  }

  logedOut(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("cliente");
    sessionStorage.removeItem("entire_client")
    window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/';
  }


  updateNavBar(e){
    let url = 'https://acallejasz.github.io' + process.env.PUBLIC_URL + '/';
    let url_localHost = 'http://localhost:3000' + process.env.PUBLIC_URL + '/';
    const isLoged = sessionStorage.getItem("login");
    const id = sessionStorage.getItem("cliente");
    

    if(e.target.href === url_localHost){
      this.setState({primer_componente:<NavbarInicio login={isLoged} id={id} click={this.updateNavBar}/>})
    }else{
      this.setState({primer_componente:<Navbar login={isLoged} id={id} click={this.updateNavBar}/>})
    }
  }

  render(){
    window.scrollTo(0,0);
    const options = {
      timeout: 3000,
      position: positions.MIDDLE
    };

    return (
      <Provider template={AlertMUITemplate} {...options}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/">
                <div>
                  {this.state.primer_componente}
                  <Inicio login={this.props.login} id_cliente={this.props.id_cliente} click={this.updateNavBar}/>
                </div>
              </Route>
              <Route path="/leisure">
                <div>
                  {this.state.primer_componente}
                  <Leisure login={this.props.login} cliente={this.props.entire_client} id_cliente={this.props.id_cliente}/>
                </div>
              </Route>
              <Route path="/booking">
                <div>
                  {this.state.primer_componente}
                  <Booking login={this.props.login} cliente={this.props.entire_client} id_cliente={this.props.id_cliente} />
                </div>
              </Route>
              <Route path="/premium">
                <div>
                  {this.state.primer_componente}
                  <OtherService  login={this.props.login} id_cliente={this.props.id_cliente} entire_client={this.props.entire_client} />
                </div>
              </Route>
              <Route path="/profile">
                <div>
                  {this.state.primer_componente}
                  <Profile login={this.props.login} savetheuser = {(entire_client)=>{this.props.dispatch(savetheclient(entire_client));}} entire_client={this.props.entire_client} id_cliente={this.props.id_cliente} logOut={this.logedOut}/>
                </div>
              </Route>
              <Route path="/room_service">
                <div>
                  {this.state.primer_componente}
                  <RoomService login={this.props.login} cliente={this.props.entire_client} id_cliente={this.props.id_cliente}/>
                </div>
              </Route>
              <Route path="/transport">
                <div>
                  {this.state.primer_componente}
                  <Transport login={this.props.login} cliente={this.props.entire_client} id_cliente={this.props.id_cliente}/>
                </div>
              </Route>
              <Route path="/login">
                <div>
                  {this.state.primer_componente}
                  <Login  login={this.props.login} savetheuser = {(entire_client)=>{this.props.dispatch(savetheclient(entire_client));}} login_info = {(login,id) => {this.props.dispatch(loginAction(login,id));}} loginUpdate = {this.loginUpdate}/>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>  
    );
  }
}
    
   
  

function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(App);
