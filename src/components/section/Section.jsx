import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.feedbackTitle}>{title}</h1>
      {children}
    </div>
  );
};

export { Section };
