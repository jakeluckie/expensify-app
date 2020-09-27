import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should display correct message for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary 
        expenses={expenses}
        expenseCount={expenses.length}
        expenseTotal={selectExpensesTotal(expenses)}
    />)
    expect(wrapper).toMatchSnapshot()
})

test('should display correct message for a single expense', () => {
    const expense = [{
        id: '1',
        description: 'burn',
        note: '',
        amount: 2500,
        createdAt: 0
    }]
    const wrapper = shallow(<ExpensesSummary 
        expenses={expense}
        expenseCount={expense.length}
        expenseTotal={selectExpensesTotal(expense)}
    />)
    expect(wrapper).toMatchSnapshot()
})