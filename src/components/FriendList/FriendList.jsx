import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';



export const FriendList = ({friends}) => {
    return(
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, id, isOnline}) => (
                <FriendListItem 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}