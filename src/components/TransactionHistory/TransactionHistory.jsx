import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction__history}>
            <thead>
                <tr className={css.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => {
                    return index % 2 === 0 ? (
                        <tr key={item.id} className={css.item__table}>
                            <td className={css.pair}>{item.type}</td>
                            <td className={css.pair}>{item.amount}</td>
                            <td className={css.pair}>{item.currency}</td>
                        </tr>
                    ) : (
                        <tr key={item.id} className={css.item__table}>
                            <td className={css.odd}>{item.type}</td>
                            <td className={css.odd}>{item.amount}</td>
                            <td className={css.odd}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ).isRequired,
};