import PropTypes from 'prop-types';

import Friend from './Friend';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id} className={css.item}>
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
