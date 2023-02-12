import PropTypes from 'prop-types';

import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id} class="status">
          <Friend avatar={avatar} status={isOnline} name={name} />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
