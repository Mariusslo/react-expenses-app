import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props){
    const [date, setDate] = useState('2021');
    
    const filterHandler = selectedYear => {
        setDate(selectedYear);
    }

    const filteredExpenses = props.arrExpenses.filter(expense => {
        return expense.date.getFullYear().toString() == date;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selectedDate={date} onFilterChange={filterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;