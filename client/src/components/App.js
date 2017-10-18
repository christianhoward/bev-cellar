import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../actions';

// import Header from './Header';
// import Landing from './Landing';
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    // componentDidMount() {
    //     this.props.fetchUser();
    //     console.log(this.props);
    // }
    // render() {
    //     return (
    //         <div className="container">
    //             <BrowserRouter>
    //                 <div className="container">
    //                     <Header />
    //                     <Route exact path="/" component={Landing} />
    //                     <Route exact path="/surveys" component={Dashboard} />
    //                     <Route path="/surveys/new" component={SurveyNew} />
    //                 </div>
    //             </BrowserRouter>
    //         </div>
    //     );
    // }
    render() {
        return(
        <div><a href="/auth/google">Login with Google</a></div>
        );
    }
};

//not using mapStateToProps, so null is the first value for the connect function
// export default connect(null, actions)(App);
export default App;