import classNames from 'classnames';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, id, isOnline}) => {
    return(
        <li key={id} className={styles.item}>
            <span className={classNames(isOnline ? styles.status : styles.statusOff)}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
