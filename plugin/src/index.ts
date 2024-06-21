import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';

import { withNotificationsAndroid } from './withRelatedDigitalAndroid';
import { withNotificationsIOS } from './withRelatedDigitalIOS';

const pkg = require('expo-related-digital/package.json');

export type RelatedDigitalPluginProps = {};

const withRelatedDigital: ConfigPlugin<RelatedDigitalPluginProps | void> = (
  config,
  props
) => {
  config = withNotificationsAndroid(config, props || {});
  config = withNotificationsIOS(config, props || {});
  return config;
};

export default createRunOncePlugin(withRelatedDigital, pkg.name, pkg.version);
