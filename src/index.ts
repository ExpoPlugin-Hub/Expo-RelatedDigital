import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoRelatedDigital.web.ts
// and on native platforms to ExpoRelatedDigital.ts
import ExpoRelatedDigitalModule from './ExpoRelatedDigitalModule';
import ExpoRelatedDigitalView from './ExpoRelatedDigitalView';
import { ChangeEventPayload, ExpoRelatedDigitalViewProps } from './ExpoRelatedDigital.types';

// Get the native constant value.
export const PI = ExpoRelatedDigitalModule.PI;

export function hello(): string {
  return ExpoRelatedDigitalModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRelatedDigitalModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoRelatedDigitalModule ?? NativeModulesProxy.ExpoRelatedDigital);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoRelatedDigitalView, ExpoRelatedDigitalViewProps, ChangeEventPayload };
