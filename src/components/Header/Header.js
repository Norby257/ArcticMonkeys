import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
             
                <a className="navbar-brand" href="#">Arctic Monkeys</a>
              </div>
          
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="https://github.com/Norby257" target="_blank"> <i class="fa fa-github-square w3-hover-opacity"></i></a></li>
                  <li className="active"><a href="https://linkedin.com/in/nmaddenling" target="_blank"><i class="fa fa-linkedin w3-hover-opacity"></i></a></li>
                  
                </ul>
                <form className="navbar-form navbar-left">
                  <div className="form-group">
                  </div>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="https://norby257.github.io/noreenPortfolio/" target="_blank">Portfolio</a></li>
           
                </ul>
              </div>
            </div>
          </nav>
        )
    }

}


export default Header; 