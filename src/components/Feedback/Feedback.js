import { useState } from 'react';
import SectionTitle from 'components/shared/Section/SectionTitle';
import Notification from 'components/shared/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import WrapBtn from './Feedback.styled';

const feedbackOptions = ['good', 'neutral', 'bad'];
const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const total = feedback.good + feedback.neutral + feedback.bad;

  const onLeaveFeedback = name => {
    setFeedback(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const countPositivePercentage = () => {
    const { good } = feedback;
    if (!total) {
      return 0;
    }
    const result = ((good * 100) / total).toFixed(0);
    return result;
  };

  const { good, neutral, bad } = feedback;
  const positivePersent = countPositivePercentage();

  return (
    <div>
      <div>
        <SectionTitle title="Please leave feedback" />
        <WrapBtn>
          <FeedbackOptions
            options={feedbackOptions}
            onClick={onLeaveFeedback}
          />
        </WrapBtn>
      </div>
      <div>
        <SectionTitle title="Statistics" />

        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePersent={positivePersent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
};
export default Feedback;
