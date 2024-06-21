import { ConfigPlugin } from '@expo/config-plugins';
import { RelatedDigitalPluginProps } from './index';

export const withNotificationsAndroid: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  {}
) => {
  return config;
};
