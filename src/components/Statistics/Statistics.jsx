import { List } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(

            <List>
                <li>Good: {good}</li>
                <li>neutral: {neutral}</li>
                <li>bad: {bad}</li>
                <li>total: {total()}</li>
                <li>positive feedback: {positivePercentage()}%</li>
            </List>

    )
}

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,   
}

export default Statistics