import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, isOnline, name }) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

export default FriendsListItem;