import React, {Component} from 'react'
import tether from '../tether.png'
import bitcoin from '../bitcoin.png'
import Airdrop from './Airdrop'

class Main extends Component {

    render() {  
        console.log(this.props.tetherBalance)      
        return (
            <div id='content' className='mt-3'>
                <table className='table text-muted text-center'>
                    <thead>
                    <tr style={{color:'white'}}>
                        <th scope='col'>Staking Balance</th>
                        <th scope='col'>Reward Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr style={{color:'white'}}>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT</td>
                            <td>{window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')} RWD</td>
                        </tr>
                    </tbody>
                </table>
                <div className='card mb-2' style={{backgroundImage:`url(${bitcoin})`, backgroundPosition:'right'}}>
                    <form 
                    onSubmit={(event) => {
                        event.preventDefault()
                        let amount
                        amount = this.input.value.toString()
                        amount = window.web3.utils.toWei(amount, 'Ether')
                        this.props.stakeTokens(amount)
                    }}
                    className='mb-3'>
                        <div style={{borderSpace:'0 len'}}>
                            <label className='float-left' style={{color:'black',fontSize:'40px', marginLeft:'10px', fontFamily:'cursive'}}><b>Stake Tokens</b></label>
                            <span className='float-right' style={{color:'white', marginRight:'10px', fontFamily:'cursive'}}>
                                Balance:{window.web3.utils.fromWei(this.props.tetherBalance, 'Ether')}
                            </span>
                            <div className='input-group mb-4'>
                                <input ref={(input)=>{this.input = input}} type='text' placeholder='0' required/>
                                &nbsp;&nbsp;
                                <div className='input-group-open'>
                                    <div className='input-group-text'>
                                        <img src={tether} alt='tether' height='32'/>
                                        &nbsp;&nbsp;USDT
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-warning btn-lg btn-block'>DEPOSIT</button>
                            
                        </div>
                    </form>
                    <button 
                    type='submit'
                    onClick={(event) => {
                        event.preventDefault()
                        this.props.unstakeTokens()
                    }}
                    className='btn btn-warning btn-lg btn-block'>WITHDRAW</button>
                    <div className='card-body text-center' style={{color: 'white'}}>AIR DROP <Airdrop stakingBalance={this.props.stakingBalance}/></div>
                </div>
            </div>
        )
    }
}    

export default Main;