import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altfilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const text = 'd'
    wrapper.find('input').simulate('change', { target: { name: "onTextChange", value: text }})
    expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test('should sort by date', () => {
    const sortBy = 'date'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', { target: { name: "onSortChange", value: sortBy }})
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const sortBy = 'amount'
    wrapper.find('select').simulate('change', { target: { name: "onSortChange", value: sortBy }})
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0)
    const endDate = moment(0).add(4, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const focused = true
    wrapper.find('DateRangePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual({ focused })
})