import selectExpensesTotal from '../../selectors/expenses-total.js'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([])
    expect(result).toEqual(0)
})

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(2500)
})

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(9000)
})