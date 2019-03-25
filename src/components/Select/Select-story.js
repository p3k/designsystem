import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Select from './Select';
import SelectItem from '../SelectItem';
import SelectItemGroup from '../SelectItemGroup';
import SelectSkeleton from '../Select/Select.Skeleton';

const props = {
  select: () => ({
    className: 'some-class',
    light: boolean('Light variant (light in <Select>)', false),
    inline: boolean(
      'Put control in-line with label (inline in <Select>)',
      false
    ),
    disabled: boolean('Disabled (disabled in <Select>)', false),
    hideLabel: boolean('No label (hideLabel in <Select>)', false),
    invalid: boolean('Show form validation UI (invalid in <Select>)', false),
    invalidText: text(
      'Form validation UI content (invalidText in <Select>)',
      'A valid value is required'
    ),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    onChange: action('onChange'),
  }),
  group: () => ({
    disabled: boolean('Disabled (disabled in <SelectItemGroup>)', false),
  }),
};

storiesOf('Components|Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const groupProps = props.group();
    return (
      <Select {...props.select()} id="select-1" defaultValue="placeholder-item">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
        />
        <SelectItemGroup label="Category 1" {...groupProps}>
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
        </SelectItemGroup>
        <SelectItemGroup label="Category 2" {...groupProps}>
          <SelectItem value="option-3" text="Option 3" />
          <SelectItem value="option-4" text="Option 4" />
        </SelectItemGroup>
      </Select>
    );
  })
  .add('skeleton', () => (
    <div style={{ width: '300px' }}>
      <SelectSkeleton />
    </div>
  ));
