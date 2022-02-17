// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from './NavBar/NavBar'
// import SearchPhotos from './SearchPhotos';


// class SearchDate extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dates: {
//                 startDate: props.startDate,
//                 endDate: props.endDate
//             }
//         };
//     };

//     handleDateChange(event) {
//         let dates = this.state.dates
//         let searchStartDate = event.target.value;
//         dates.startDate = searchStartDate;
//         let searchEndDate = event.target.value;
//         dates.endDate = searchEndDate
//         this.setState({
//             dates: dates
//         });
//     }

//     // handleEndDateChange(event) {
//     //     let dates = this.state.dates
//     //     let searchEndDate = event.target[0].value;
//     //     dates.endDate = searchEndDate
//     //     this.setState({
//     //         dates: dates
//     //     });
//     // }

//     handleButtonClick(event) {
//         event.preventDefault();

//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         console.log(this.state.dates)
//         SearchPhotos();

//     }

//     render() {

//         <NavBar />
//         return (
//             <div>
//                 <form >

//                     <label>
//                         Start Date:
//                     </label>
//                     <input type="text" name='startdate' value={this.state.dates.startDate || ''} onChange={this.handleDateChange.bind(this)} />
//                     <br />
//                     <label>
//                         End Date:
//                     </label>
//                     <input type='text' name='enddate' value={this.state.dates.endDate || ''} onChange={this.handleDateChange.bind(this)} />
//                     <button onClick={this.handleButtonClick.bind(this)} onSubmit={this.handleSubmit} >Submit</button>
//                 </form>
//             </div>
//         )
//     }

// }
// export default SearchDate;