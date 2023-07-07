import { Component } from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import Notification from './Notification/Notification'
import { Container } from './App.styled'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onLeaveFeedback = (key) =>{
    this.setState((prevState) => ({
      [key]: prevState[key] + 1
    }));
  }
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;

  }
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  }
  onStatisticsSection = () =>{
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return (
      <Notification 
        message="There is no feedback"
        />)
    }
    return(<Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback}
    positivePercentage={this.countPositiveFeedbackPercentage}
    />)

  }
  render(){
  return (
    <Container>
      <Section title = 'Please leave feedback'>
      <FeedbackOptions 
      options={this.state}
      onLeaveFeedback={this.onLeaveFeedback}
      />
      </Section>

      <Section title = 'Statistics'>
        {this.onStatisticsSection()}
      </Section>

    </Container>
  )}
}
export default App
