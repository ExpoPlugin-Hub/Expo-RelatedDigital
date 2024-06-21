# expo-related-digital

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
      "expo-related-digital",
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
