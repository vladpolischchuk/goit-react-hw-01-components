import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => (
                <FriendsListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.name}
                />
            ))}
        </ul>
    );
};

export default FriendsList;