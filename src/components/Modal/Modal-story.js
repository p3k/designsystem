import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import readme from './README.md';

import Modal from '../Modal';
import TextInput from '../TextInput';

const props = {
  default: () => ({
    className: 'some-class',
    open: boolean('Open (open)', true),
    passiveModal: boolean('Without footer (passiveModal)', false),
    danger: boolean('Danger mode (danger)', false),
    shouldSubmitOnEnter: boolean(
      'Enter key to submit (shouldSubmitOnEnter)',
      false
    ),
    modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
    modalLabel: text('Optional label (modalLabel)', 'Label'),
    modalAriaLabel: text('ARIA label (modalAriaLabel)', ''),
    primaryButtonText: text(
      'Primary button text (primaryButtonText)',
      'Primary Button'
    ),
    secondaryButtonText: text(
      'Secondary button text (secondaryButtonText)',
      'Secondary Button'
    ),
    iconDescription: text(
      'Close icon description (iconDescription)',
      'Close the modal'
    ),
    inPortal: boolean('Render in portal (inPortal', false),
    onBlur: action('onBlur'),
    onClick: action('onClick'),
    onFocus: action('onFocus'),
    onRequestClose: action('onRequestClose'),
    onRequestSubmit: action('onRequestSubmit'),
    onSecondarySubmit: action('onSecondarySubmit'),
  }),
  dialog: () => ({
    className: 'some-class',
    open: boolean('Open (open)', true),
    passiveModal: boolean('Without footer (passiveModal)', false),
    backgroundImage: text(
      'Background Image (backgroundImage)',
      'https://password.go.wfp.org/images/MAU_20150202_WFP-Agron_Dragaj_0018.jpg'
    ),
    danger: boolean('Danger mode (danger)', false),
    hideClose: boolean('Hide the close button (hideClose)', true),
    shouldSubmitOnEnter: boolean(
      'Enter key to submit (shouldSubmitOnEnter)',
      false
    ),
    modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
    modalLabel: text('Optional label (modalLabel)', 'Label'),
    modalAriaLabel: text('ARIA label (modalAriaLabel)', ''),
    primaryButtonText: text(
      'Primary button text (primaryButtonText)',
      'Primary Button'
    ),
    secondaryButtonText: text(
      'Secondary button text (secondaryButtonText)',
      'Secondary Button'
    ),
    iconDescription: text(
      'Close icon description (iconDescription)',
      'Close the modal'
    ),
    inPortal: boolean('Render in portal (inPortal', false),
    onBlur: action('onBlur'),
    onClick: action('onClick'),
    onFocus: action('onFocus'),
    onRequestClose: action('onRequestClose'),
    onRequestSubmit: action('onRequestSubmit'),
    onSecondarySubmit: action('onSecondarySubmit'),
  }),
};

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <Modal {...props.default()}>
        <p className="wfp--modal-content__text">
          Please see ModalWrapper for more examples and demo of the
          functionality.
        </p>
      </Modal>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'Dialog Page (draft)',
    () => (
      <Modal {...props.dialog()}>
        <p className="wfp--modal-content__text">
          <TextInput
            labelText="Your email adress"
            placeholder="yourname@wfp.org"
            helperText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          />
        </p>
      </Modal>
    ),
    {
      info: {
        text: readme,
      },
    }
  );
