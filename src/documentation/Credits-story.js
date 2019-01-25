/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import { List, ListItem } from '../components/List';
import Page from './Page';

storiesOf(' Documentation', module).add('Credits', () => (
  <Page title="Credits & License" subTitle="Introduction to the new WFP UI Kit">
    <p>
      <Link href="http://brand.manuals.wfp.org/">
        The World Food Programme’s (WFP) Branding Guidance
      </Link>{' '}
      was published first in 2009 and has now been effectively implemented
      across the organization, strengthening WFP’s brand image through
      consistent representation. This new version shall reflect the changes in
      technology.
    </p>
    <h3>The UI-Kit is be heavily based on</h3>
    <List kind="simple">
      <ListItem>
        <Link href="https://github.com/carbon-design-system/carbon-components">
          Carbon Components
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://designsystem.digital.gov/page-templates">
          U.S. Webdesign System
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/frederik-jacques/sketch-favicon-exporter-template">
          Sketch Favicon Exporter Template
        </Link>
      </ListItem>
    </List>
  </Page>
));