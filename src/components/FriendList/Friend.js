import PropTypes from 'prop-types';
import css from './Friend.module.css';

export default function Friend({ avatar, name, status }) {
  return (
    <>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
