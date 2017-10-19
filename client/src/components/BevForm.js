import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import formFields from './formFields';
import BevField from './BevField';
import { submitBev } from '../actions'


class BevForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field key={name} component={BevField} type="text" label={label} name={name} />
            );
        });
    }
    onSubmit(bev) {
        this.props.submitBev(bev);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(props => this.onSubmit(props))}>
                    <input type="hidden" name="_id" />
                    {this.renderFields()}
                    <button className="btn brown darken-4 right">Submit</button>
                </form>
            </div>
        );
    }
};

export default connect(null, { submitBev })(reduxForm({
    form: 'bevForm'
})(BevForm));