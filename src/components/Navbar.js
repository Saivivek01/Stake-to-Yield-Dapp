import React, {Component} from 'react'
import stakinglogo from '../staking-logo.png'

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar navbar-dark shadow p-0' style={{backgroundColor:'#0d0452', height:'50px'}}>
                
                <a className='navbar-brand col-sm-3 col-md-2 mr-0' 
                style={{color:'#fff', fontFamily:'-moz-initial'}}>
                <img src={stakinglogo} width='30' height='30' className='d-inline-block align-top' alt='staking logo'></img>
                &nbsp; STAKE to YIELD
                </a>
                <ul className='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'#fff'}}>
                            ACCOUNT NUMBER: &nbsp; {this.props.account}
                        </small>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;