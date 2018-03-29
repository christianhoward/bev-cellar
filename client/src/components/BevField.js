import React from 'react';

export default ({ input, type, min, max, placeholder, rows, cols, label, meta: { error, touched } }) => {
    switch (type) {
        case 'number':
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} type="number" min={min} max={max} style={{ marginLeft: '10px', marginBottom: '5px' }} placeholder={placeholder} />
                    <div className="red-text" style={{ marginBottom: '20px' }}>
                        {touched && error}
                    </div>
                </div>
            );
        case 'textarea':
            return (
                <div>
                    <label>{label}</label>
                    <textarea {...input} rows={rows} cols={cols} style={{ marginLeft: '10px', marginBottom: '5px' }} placeholder={placeholder} className="materialize-textarea"></textarea>
                    <div className="red-text" style={{ marginBottom: '20px' }}>
                        {touched && error}
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <label>{label}</label>
                    <input {...input} style={{ marginLeft: '10px', marginBottom: '5px' }} placeholder={placeholder} />
                    <div className="red-text" style={{ marginBottom: '20px' }}>
                        {touched && error}
                    </div>
                </div>
            );
    } 
};