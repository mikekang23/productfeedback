import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return 'Still deciding';
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="1" className="nav-item active">
            <Payments className="nav-link"/>
        </li>,
          <li key="2" className="nav-item active">
            <a className="nav-link" href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
        <div className="container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="navbar-brand"
          >
            Product Feedback
          </Link>
          <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <div className="form-inline my-2 my-lg-0">
                {
                  this.renderContent()
                }
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);
