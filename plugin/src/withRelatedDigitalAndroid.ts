import { ConfigPlugin } from '@expo/config-plugins';
import { RelatedDigitalPluginProps } from './index';

export const withRelatedDigitalAndroid: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  {}
) => {
  return config;
};
