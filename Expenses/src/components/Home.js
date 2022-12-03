import React from 'react'
import{Balance} from './Balance'
import {IncomeExpenses} from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { GlobalProvider } from '../context/GlobalState'
import { Navbar } from './Navbar'
import { AddTransaction } from './AddTransaction'

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <GlobalProvider>
                <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
                </div>
            </GlobalProvider>
        </div>
    )
}
