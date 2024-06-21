import {
  ConfigPlugin,
  createRunOncePlugin,
  withPlugins
} from '@expo/config-plugins';

import {} from './android';
import {} from './ios';

export type RelatedDigitalPluginProps = {};

/*
 * This plugin is used to add Related Digital to your Expo project.
 */
const withRelatedDigital: ConfigPlugin<RelatedDigitalPluginProps | void> = (
  config,
  props
) => {
  return withPlugins(config, [
    // Android

    // IOS
  ]);
};

const pkg = require('expo-related-digital/package.json');
export default createRunOncePlugin(withRelatedDigital, pkg.name, pkg.version);
