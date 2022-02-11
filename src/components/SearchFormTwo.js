import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import SearchPhotos from './SearchPhotos';


class SearchDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                startDate: props.startDate,
                endDate: props.endDate
            }
        };
    };

    handleStartDateChange(event) {
        let dates = this.state.dates
        let searchStartDate = event.target.value;
        dates.startDate = searchStartDate;
        this.setState({
            dates: dates
        });
    }

    handleEndDateChange(event) {
        let dates = this.state.dates
        let searchEndDate = event.target.value;
        dates.endDate = searchEndDate
        this.setState({
            dates: dates
        });
    }

    handleButtonClick(event) {
        event.preventDefault();
        console.log(this.state.dates)
    }

    handleSubmit(event) {
        event.preventDefault()
        SearchPhotos()
    }

    render() {

        <NavBar />
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Start Date:
                    </label>
                    <input type="text" onChange={this.handleStartDateChange.bind(this)} />
                    <br />
                    <label>
                        End Date:
                    </label>
                    <input type='text' onChange={this.handleEndDateChange.bind(this)} />
                    <Link to='/searchphotos'  onSubmit={this.handleSubmit}>Submit</Link>
                </form>
            </div>
        )
    }

}
export default SearchDate;