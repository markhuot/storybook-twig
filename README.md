# Storybook for Twig

---

Storybook for HTML is a UI development environment for your plain HTML snippets.
With it, you can visualize different states of your UI components and develop them interactively.

![Storybook Screenshot](https://github.com/storybooks/storybook/blob/master/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started

Your `.storybook/config.js` should look something like this,

```js
import { configure } from 'storybook-twig';
configure(() => {
    // ... load stories
}, module);
```

Then each story should then return the rendered HTML of your twig template. You are free to use any of the add-ons that the native HTML stories support.

```js
import { storiesOf } from 'storybook-twig'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import template from './test.twig'

const stories = storiesOf('Twig', module)
stories.addDecorator(withKnobs)
stories.add('with knobs', () => {
    return template({
        test: text('test', 'foo bar'),
    })
})
```

For more information visit: [storybook.js.org](https://storybook.js.org)

---

Storybook also comes with a lot of [addons](https://storybook.js.org/addons/introduction) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/basics/exporting-storybook) of your storybook and deploy it anywhere you want.
