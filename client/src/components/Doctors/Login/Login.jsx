import React, { useContext } from 'react'
import {DataContext} from '../../../DataContext'

const Login = () => {
  const { web3Handler, account } = useContext(DataContext)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl text-center font-medium med-eth-title">MED_ETH</h1>
        <br />
        {account ? 
          <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
            <a href="/profile" className="account-text">{account}</a>
          </button>
          :
          <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" onClick={web3Handler}>
            Login
          </button>
        }
      </div>
    </div>
  )
}

export default Login
