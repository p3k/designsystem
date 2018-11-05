import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from 'react-select'
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

storiesOf('ReactSelect', module)
  .addDecorator(withReadme([readme]))
  .addWithInfo(
    'default',
    `
      We recommend [React-Table](https://react-table.js.org/) for Tables. To use the custom Pagination you can use the TablePagination component.
    `,
    () => (
      <div style={{minWidth: '400px'}}>
        <Select
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          isMulti
          options={options}
        />
      </div>
    )
  );