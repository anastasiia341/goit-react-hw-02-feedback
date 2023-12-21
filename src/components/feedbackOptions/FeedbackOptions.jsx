import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ul className={css.feedbackBtnList}>
      {keys.map(key => (
        <li key={key}>
          <button
            className={css.feedbackBtn}
            key={key}
            type="button"
            name={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

export { FeedbackOptions };
