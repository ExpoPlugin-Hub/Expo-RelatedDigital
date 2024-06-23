import {
  ConfigPlugin,
  createRunOncePlugin,
  withPlugins
} from '@expo/config-plugins';

import {
  withMultiDexGradle,
  withManifestApplication,
  withGeofence,
  withInitApplication
} from './android';
import {} from './ios';

export type RelatedDigitalPluginProps = {
  enableGeofence: boolean;
  android: {
    appAlias: string;
    huaweiAppAlias: string;
    organizationId: string;
    siteId: string;
    datasource: string;
    channel: string;
    segmentUrl: string;
    realtimeUrl: string;
    targetUrl: string;
    actionUrl: string;
    geofenceUrl: string;
  };
};

/*
 * This plugin is used to add Related Digital to your Expo project.
 */
const withRelatedDigital: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  { enableGeofence = false, android }
) => {
  return withPlugins(config, [
    // Android
    withMultiDexGradle,
    withManifestApplication,
    [withGeofence, { enableGeofence }],
    [withInitApplication, { android }]
    // IOS
  ]);
};

const pkg = require('../../package.json');
export default createRunOncePlugin(withRelatedDigital, pkg.name, pkg.version);
