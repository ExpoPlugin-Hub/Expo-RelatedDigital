import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';

import { withRelatedDigitalAndroid } from './withRelatedDigitalAndroid';
import { withRelatedDigitalIOS } from './withRelatedDigitalIOS';

const pkg = require('expo-related-digital/package.json');

export type RelatedDigitalPluginProps = {};

const withRelatedDigital: ConfigPlugin<RelatedDigitalPluginProps | void> = (
  config,
  props
) => {
  config = withRelatedDigitalAndroid(config, props || {});
  config = withRelatedDigitalIOS(config, props || {});
  return config;
};

export default createRunOncePlugin(withRelatedDigital, pkg.name, pkg.version);
