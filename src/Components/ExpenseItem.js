import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div className="expense-item__description">1st january 2023</div>
            <div>
                <h2>Car insurance</h2>
                <div className="expense-item__price">$ 2300</div>
            </div>
        </div>
    );
}

export default ExpenseItem; 