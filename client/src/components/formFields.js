export default [
    { label: 'Bev Name', name: 'name', type: 'text', placeholder: 'Enter beverage name...' },
    { label: 'Type', name: 'type', type: 'text', placeholder: 'Enter type of bev'},
    { label: 'Year', name: 'year', type: 'number', placeholder: 'Year bev was made', min: '1800', max: (new Date().getFullYear()) },
    { label: 'Quantity', name: 'quantity', type: 'number', placeholder: 'Quantity', min: '1', max: '999' },
    { label: 'Location', name: 'location', type: 'text', placeholder: 'Where is this stored?' },
    { label: 'Notes', name: 'notes', type: 'textarea', rows: '5', cols: '50', placeholder: 'Enter notes...' }
];