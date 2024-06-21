import { ConfigPlugin } from '@expo/config-plugins';
import { RelatedDigitalPluginProps } from '.';

export const withRelatedDigitalIOS: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  {}
) => {
  return config;
};
