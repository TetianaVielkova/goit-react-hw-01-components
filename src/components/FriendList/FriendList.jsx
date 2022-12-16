import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return(
        <ul class="friend-list">
            {friends.map(({avatar, name, id, isOnline}) => (
                <li key={id} class="item">
                    <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt={name} width="48" />
                    <p class="name">{name}</p>
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