import PropTypes from 'prop-types';

export default function Friend({ avatar, name, status }) {
  return (
    <div>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
