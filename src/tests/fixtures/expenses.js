import moment from 'moment'

export default [{
    id: '1',
    description: 'burn',
    note: '',
    amount: 2500,
    createdAt: 0
},{
    id: '2',
    description: 'hells',
    note: '',
    amount: 5000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'learn',
    note: '',
    amount: 1500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]