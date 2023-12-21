import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.statisticText}>Good: {good}</p>
      <p className={css.statisticText}>Neutral: {neutral}</p>
      <p className={css.statisticText}>Bad: {bad}</p>
      <p className={css.statisticText}>Total: {total}</p>
      <p className={css.statisticText}>
        Positive feedback:{' '}
        {Number.isNaN(positivePercentage) ? '0' : positivePercentage}%
      </p>
    </div>
  );
};

export { Statistics };
