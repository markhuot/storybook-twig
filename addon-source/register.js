// register.js

import React from 'react';
import { STORY_CHANGED } from '@storybook/core-events';
import addons, { types } from '@storybook/addons';

const ADDON_ID = 'twig-source';
const PARAM_KEY = 'twigSource';
const PANEL_ID = `${ADDON_ID}/panel`;

class MyPanel extends React.Component {
    state = { value: '' };

    componentDidMount() {
        const { api } = this.props;

        api.on(STORY_RENDERED, this.onStoryChange);
    }

    componentWillUnmount() {
        const { api } = this.props;

        api.off(STORY_RENDERED, this.onStoryChange);
    }

    onStoryChange = id => {
        const { api } = this.props;
        const params = api.getParameters(id, PARAM_KEY);

        if (params && !params.disable) {
            const value = params.data;
            this.setState({ value });
        } else {
            this.setState({ value: undefined });
        }
    };

    render() {
        const { value } = this.state;
        const { active } = this.props;
        return active ? <div>{value}</div> : null;
    }
}

addons.register(ADDON_ID, api => {
    const render = ({ active }) => <MyPanel api={api} active={active} />;
    const title = 'Source';

    addons.add(PANEL_ID, {
        type: types.PANEL,
        title,
        render,
    });
});