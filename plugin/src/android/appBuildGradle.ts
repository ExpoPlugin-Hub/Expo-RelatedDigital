import { withAppBuildGradle, ConfigPlugin } from '@expo/config-plugins';

export const withMultiDexGradle: ConfigPlugin = config => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = setMultiDex(config.modResults.contents);
    } else {
      throw new Error(
        'Cannot add multiDex settings to app build.gradle if it is not groovy'
      );
    }
    return config;
  });
};

function setMultiDex(buildGradle: string) {
  if (buildGradle.includes('multiDexEnabled')) {
    return buildGradle;
  }

  buildGradle = buildGradle.replace(
    /dependencies\s?{/,
    `dependencies {
        implementation 'androidx.multidex:multidex:2.0.1'`
  );

  if (!buildGradle.includes('multiDexEnabled')) {
    buildGradle = buildGradle.replace(
      /defaultConfig\s?{/,
      `defaultConfig {
        multiDexEnabled true`
    );
  }

  return buildGradle;
}
