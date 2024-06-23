import { addImports } from '@expo/config-plugins/build/android/codeMod';
import {
  ConfigPlugin,
  ExportedConfigWithProps,
  WarningAggregator,
  withDangerousMod,
  withMainApplication
} from '@expo/config-plugins';
import path from 'path';

import fs from 'fs';
import { initEuroMessageJava, initEuroMessageKt } from './initEuroMessage';
import { RelatedDigitalPluginProps } from '..';

async function saveFileAsync(path: string, content: string): Promise<void> {
  return fs.promises.writeFile(path, content, 'utf8');
}

async function readFileAsync(path: string): Promise<string> {
  return fs.promises.readFile(path, 'utf8');
}

async function editMainApplication(
  config: ExportedConfigWithProps,
  action: (mainApplication: string) => string
): Promise<void> {
  const extension =
    config.sdkVersion && config.sdkVersion >= '50.0.0' ? 'kt' : 'java';
  const mainApplicationPath = path.join(
    config.modRequest.platformProjectRoot,
    'app',
    'src',
    'main',
    'java',
    ...config.android!.package!.split('.'),
    `MainApplication.${extension}`
  );

  try {
    const mainApplication = action(await readFileAsync(mainApplicationPath));
    return await saveFileAsync(mainApplicationPath, mainApplication);
  } catch (e) {
    WarningAggregator.addWarningAndroid(
      'expo-related-digital',
      `Couldn't modify MainApplication - ${e}.`
    );
  }
}

export const withInitApplication: ConfigPlugin<RelatedDigitalPluginProps> = (
  config,
  { android }
) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      await editMainApplication(config, (mainApplication: string) => {
        const isJava =
          config.sdkVersion && config.sdkVersion >= '50.0.0' ? false : true;

        mainApplication = addImports(
          mainApplication,
          [
            'com.visilabs.Visilabs',
            'euromsg.com.euromobileandroid.EuroMobileManager'
          ],
          isJava
        );

        mainApplication = addImports(
          mainApplication,
          [
            'com.visilabs.Visilabs',
            'euromsg.com.euromobileandroid.EuroMobileManager'
          ],
          isJava
        );

        mainApplication = mainApplication.replace(
          'ApplicationLifecycleDispatcher.onApplicationCreate(this)',
          `ApplicationLifecycleDispatcher.onApplicationCreate(this)
          initEuroMessage()${isJava ? ';' : ''}`
        );

        mainApplication = mainApplication.replace(
          'class MainApplication : Application(), ReactApplication {',
          `class MainApplication : Application(), ReactApplication {
          
            ${
              isJava ? initEuroMessageJava(android) : initEuroMessageKt(android)
            }`
        );

        return mainApplication;
      });

      return config;
    }
  ]);
};
