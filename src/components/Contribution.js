import React from 'react'
import './Contribution.css' 
const GithubCalendar = require('github-calendar');

class Contribution extends React.Component {

    componentDidMount() {
        const { user } = this.props;
        const options = {
            reponsive: true,
            summary_text: false,
        }
        new GithubCalendar('.githubCalendar', user.login, options);
    }

    render() {

        return (
            <div className='githubCalendar'>
                loading...
            </div>
        )
    }
}

export default Contribution;