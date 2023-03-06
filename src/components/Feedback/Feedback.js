import { Component } from 'react';
import SectionTitle from 'components/shared/Section/Section';
import Notification from 'components/shared/Notification/Notification';
import Section from 'components/shared/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (!total) {
      return 0;
    }
    const result = ((good * 100) / total).toFixed(0);
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positivePersent = this.countPositivePercentage();
    const total = this.countTotalFeedback();
    const onLeaveFeedback = this.onLeaveFeedback;

    return (
      <div>
        <div>
          <SectionTitle title="Please leave feedback" />

          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={onLeaveFeedback}
          />
        </div>
        <div>
          <Section title="Statistics" />

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
  }
}

export default Feedback;
