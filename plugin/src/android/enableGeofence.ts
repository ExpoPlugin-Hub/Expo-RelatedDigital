import { withAndroidManifest, ConfigPlugin } from '@expo/config-plugins';

import { Manifest } from '@expo/config-plugins/build/android';
import { RelatedDigitalPluginProps } from '..';

export const withGeofence: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  { enableGeofence }
) => {
  if (!enableGeofence) {
    return config;
  }

  return withAndroidManifest(config, async config => {
    config.modResults = setGeofence(config.modResults);
    return config;
  });
};

function setGeofence(androidManifest: Manifest.AndroidManifest) {
  if (!androidManifest.manifest.application) {
    androidManifest.manifest.application = [];
  }
  if (!androidManifest.manifest.application[0].service) {
    androidManifest.manifest.application[0].service = [];
  }

  androidManifest.manifest.application[0].service.push({
    $: {
      'android:name':
        'com.visilabs.gps.geofence.GeofenceTransitionsIntentService',
      'android:enabled': 'true',
      'android:permission': 'android.permission.BIND_JOB_SERVICE'
    }
  });

  androidManifest.manifest.application[0].service.push({
    $: {
      'android:name': 'com.visilabs.gps.geofence.GeofenceMonitor',
      'android:enabled': 'true',
      'android:exported': 'true'
    }
  });

  if (!androidManifest.manifest.application[0].receiver) {
    androidManifest.manifest.application[0].receiver = [];
  }

  androidManifest.manifest.application[0].receiver.push({
    $: {
      'android:name': 'com.visilabs.gps.geofence.GeofenceTransitionsReceiver',
      'android:enabled': 'true',
      'android:exported': 'true'
    },
    'intent-filter': [
      {
        action: [
          {
            $: {
              'android:name':
                'com.visilabs.android.gps.geofence.ACTION_RECEIVE_GEOFENCE'
            }
          }
        ]
      }
    ]
  });

  androidManifest.manifest.application[0].receiver.push({
    $: {
      'android:name': 'com.visilabs.gps.geofence.VisilabsAlarm',
      'android:exported': 'false'
    }
  });

  androidManifest.manifest.application[0].receiver.push({
    $: {
      'android:name': 'com.visilabs.gps.geofence.GeofenceBroadcastReceiver',
      'android:enabled': 'true',
      'android:exported': 'true'
    }
  });

  return androidManifest;
}
