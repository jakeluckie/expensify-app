import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 10000, createdAt: -2000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 25000, createdAt: -1000 }))
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 14500, createdAt: 1200 }))
const expenseFour = store.dispatch(addExpense({ description: 'Netflix', amount: 1499, createdAt: 300 }))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))