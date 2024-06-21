import { ConfigPlugin } from '@expo/config-plugins';
import { RelatedDigitalPluginProps } from '.';

export const withNotificationsIOS: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  {}
) => {
  return config;
};
