import { document, Node } from 'global';
import { stripIndents } from 'common-tags';
import Twig from 'twig'
Twig.cache(false)

const rootElement = document.getElementById('root');

export default function renderMain({
  parameters = {},
  storyFn,
  selectedKind,
  selectedStory,
  showMain,
  showError,
  forceRender,
}) {
  const { html = {} } = parameters;
  const element = storyFn();

  showMain();

  const [template, vars] = element
  return template(vars)
}
