import PropTypes from 'prop-types';
import randomColor from '../../utils/RandomColor';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ label, id, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
