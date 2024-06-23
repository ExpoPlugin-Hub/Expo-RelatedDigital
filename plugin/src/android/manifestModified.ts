import { withAndroidManifest, ConfigPlugin } from '@expo/config-plugins';

import { Manifest } from '@expo/config-plugins/build/android';

export const withManifestApplication: ConfigPlugin = config => {
  return withAndroidManifest(config, async config => {
    config.modResults = setApplication(config.modResults);
    return config;
  });
};

function setApplication(androidManifest: Manifest.AndroidManifest) {
  /**
   * Add the Related Digital SDK to the AndroidManifest.xml file.
   */
  if (!androidManifest.manifest.application) {
    androidManifest.manifest.application = [];
  }
  if (!androidManifest.manifest.application[0].service) {
    androidManifest.manifest.application[0].service = [];
  }

  androidManifest.manifest.application[0].service.push({
    $: {
      'android:name':
        'euromsg.com.euromobileandroid.service.EuroFirebaseMessagingService',
      'android:exported': 'false'
    },
    'intent-filter': [
      {
        action: [
          {
            $: {
              'android:name': 'com.google.firebase.MESSAGING_EVENT'
            }
          }
        ]
      }
    ]
  });

  return androidManifest;
}
