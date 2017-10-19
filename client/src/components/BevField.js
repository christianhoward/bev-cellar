import React from 'react';

export default ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginLeft: '10px', marginBottom: '5px' }} />
        </div>
    );
};