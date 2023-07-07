import { Container, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

        return(
            <Container>
            {Object.keys(options).map(option => (
                <Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
                        ))}
            </Container>
        )
    
}

FeedbackOptions.propTypes ={
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions