import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import SingleComponent from '../../documentation/SingleComponent';
import { exampleStory } from '../../../.storybook/lucid-docs-addon';

import withTests from '../../internal/withTests';

import HtmlComponent from '../../documentation/HtmlComponent';

import Html from '!!raw-loader!./Button.html';

import ButtonRaw from '!!raw-loader!./Button';
import ButtonHtml from '!!raw-loader!./Button.html';

import Button from '../Button';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class',
};

storiesOf('Buttons', module)
  .addDecorator(checkA11y)
  .addDecorator(
    exampleStory({
      component: SingleComponent,
      example: SingleComponent,
      code: ButtonRaw,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(withTests('Button'))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addWithInfo(
    'Primary Buttons',
    `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience.

      Primary buttons should be used for the principle call to action
      on the page. Modify the behavior of the button by changing its event properties.

      Small buttons may be used when there is not enough space for a
      regular sized button. This issue is most found in tables. Small button should have three words
      or less.

      The example below shows Primary Button component .
    `,
    () => (
      <div>
        <Button {...buttonEvents} className="some-class">
          Primary button
        </Button>
        &nbsp;
        <Button {...buttonEvents} href="#" className="some-class">
          Primary button as link
        </Button>
        &nbsp;
      </div>
    )
  )
  .addWithInfo(
    'Secondary Buttons',
    `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Secondary buttons should be used for secondary actions on each page.
      Modify the behavior of the button by changing its property events.
      The example below shows a Secondary Button component.
    `,
    () => (
      <div>
        <Button kind="secondary" {...buttonEvents} className="some-class">
          Secondary button
        </Button>
        &nbsp;
        <Button
          kind="secondary"
          {...buttonEvents}
          href="#"
          className="some-class">
          Secondary link
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Small Buttons',
    `
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most
      commonly found in tables. Small buttons should have three words or less.
    `,
    () => (
      <div>
        <Button small {...buttonEvents} className="some-class">
          Small primary button
        </Button>
        &nbsp;
        <Button small {...buttonEvents} kind="secondary">
          Small secondary Button
        </Button>
        &nbsp;
        <Button
          small
          {...buttonEvents}
          kind="ghost"
          icon="add--glyph"
          iconDescription="Add">
          Small ghost Button
        </Button>
        &nbsp;
        <Button small {...buttonEvents} kind="danger">
          Small danger Button
        </Button>
        &nbsp;
        <Button small {...buttonEvents} href="#" className="some-class">
          Small primary link
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Disabled Button',
    `
      Disabled Buttons may be used when the user cannot proceed until input is collected.
    `,
    () => (
      <div>
        <Button {...buttonEvents} disabled>
          Disabled button
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Button with Icon',
    `
      When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are
      always paired with text.
    `,
    () => (
      <div>
        <Button icon="search--glyph" iconDescription="Search" {...buttonEvents}>
          Primary with icon
        </Button>
        &nbsp;
        <Button
          kind="secondary"
          icon="search--glyph"
          iconDescription="Search"
          {...buttonEvents}>
          Secondary with icon
        </Button>
        &nbsp;
        <Button
          small
          kind="primary"
          icon="search--glyph"
          iconDescription="Search"
          {...buttonEvents}>
          Small primary with icon
        </Button>
        &nbsp;
        <Button
          small
          kind="secondary"
          icon="search--glyph"
          iconDescription="Search"
          {...buttonEvents}>
          Small secondary with icon
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Ghost Buttons',
    `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)
      on the page. Modify the behavior of the button by changing its event properties. The example below
      shows an enabled Danger Button component.
    `,
    () => (
      <div>
        <Button
          kind="ghost"
          className="some-class"
          icon="add--glyph"
          iconDescription="Add"
          {...buttonEvents}>
          Ghost button
        </Button>
        &nbsp;
        <Button
          kind="ghost"
          href="#"
          className="some-class"
          icon="add--glyph"
          iconDescription="Add"
          {...buttonEvents}>
          Ghost link
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Danger Buttons',
    `
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)
      on the page. Modify the behavior of the button by changing its event properties. The example below
      shows an enabled Danger Button component.
    `,
    () => (
      <div>
        <Button kind="danger" {...buttonEvents} className="some-class">
          Danger button
        </Button>
        &nbsp;
        <Button kind="danger" {...buttonEvents} href="#" className="some-class">
          Danger link
        </Button>
        &nbsp;
        <Button kind="danger--primary" {...buttonEvents} className="some-class">
          Danger Primary button
        </Button>
        &nbsp;
        <Button
          kind="danger--primary"
          {...buttonEvents}
          href="#"
          className="some-class">
          Danger Primary link
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Inverse Buttons',
    `
      Inverse Buttons can be used on dark backgrounds
    `,
    () => (
      <div style={{ padding: '5rem', background: '#565557' }}>
        <Button kind="inverse" {...buttonEvents} className="some-class">
          Inverse button
        </Button>
      </div>
    )
  )
  .addWithInfo(
    'Sets of Buttons',
    `
      When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.
    `,
    () => (
      <div>
        <Button kind="secondary" {...buttonEvents} className="some-class">
          Secondary button
        </Button>
        <Button kind="primary" {...buttonEvents} className="some-class">
          Primary button
        </Button>
      </div>
    )
  );

storiesOf('Buttons', module)
  .addDecorator(story => (
    <HtmlComponent html={ButtonHtml}>{story()}</HtmlComponent>
  ))
  .addDecorator(
    exampleStory({
      component: SingleComponent,
      example: SingleComponent,
      code: ButtonHtml,
      options: { showAddonPanel: true },
    })
  )
  .addWithInfo(
    'html',
    `
      Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired. It can be used with react-router by placing <NavLink></NavLink> inside <BreadcrumbItem />
    `,
    () => null
  );

storiesOf('Button', module)
  .addDecorator(
    exampleStory({
      code: Html,
      options: { showAddonPanel: true },
    })
  )
  .addDecorator(story => <HtmlComponent html={Html}>{story()}</HtmlComponent>)
  .addWithInfo(
    'html',
    `
     html view
    `,
    () => null
  );
