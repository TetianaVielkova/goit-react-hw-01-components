import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import classNames from 'classnames';

export const FriendList = ({friends}) => {
    return(
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, id, isOnline}) => (
                <li key={id} className={styles.item}>
                    <span className={classNames(isOnline ? styles.status : styles.statusOff)}></span>
                    <img className={styles.avatar} src={avatar} alt={name} width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}