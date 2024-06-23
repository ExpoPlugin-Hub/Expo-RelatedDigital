****# expo-related-digital

react-native-related-digital expo module

## Supported versions

**"react": ">=16.8.6"**

**"react-native": ">=0.60.0"**

## Installation

- Install prerequisites.

```
npx expo install @react-native-async-storage/async-storage
npx expo install @react-native-firebase/app
npx expo install expo-build-properties
```

- Configuration app.json

```json
{
  "expo": {
    "android": {
      "package": "com.example.app"
    },
    "ios": {
      "bundleIdentifier": "com.example.app"
    },
    "plugins": [
      [
        "../app.plugin.js",
        {
          "enableGeofence": true,
          "android": {
            "appAlias": "demo-alias",
            "huaweiAppAlias": "demo-alias-huawei",
            "organizationId": "OID",
            "siteId": "SID",
            "datasource": "datasource",
            "channel": "Android",
            "segmentUrl": "http://lgr.visilabs.net",
            "realtimeUrl": "http://rt.visilabs.net",
            "targetUrl": "http://s.visilabs.net/json",
            "actionUrl": "http://s.visilabs.net/actjson",
            "geofenceUrl": "http://s.visilabs.net/geojson"
          }
        }
      ],
      "@react-native-firebase/app",
      "@react-native-firebase/messaging",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ]
  }
}
```

- Install package.
