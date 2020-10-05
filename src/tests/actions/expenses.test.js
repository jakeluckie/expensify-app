import configureMockStore from 'redux-mock-store'
import database from '../../firebase/firebase'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('Should set up edit expense action object', () => {
    const action = editExpense('abc123', { note: 'Hey hey hey' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'Hey hey hey'
        }
    })
})

test('Should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Lovely',
        createdAt: 1202
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDataDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDataDefaults
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDataDefaults)
            done()
    })
})
// test('Should set up the add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })