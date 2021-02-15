import {Setting} from '../Domain/Setting/Setting'

interface SettingStorageInterface {
  get(): Setting
  set(setting: Setting): void
}

export class SettingStorage implements SettingStorageInterface {
  get (): Setting {
    return {
      apiKey: globalThis.localStorage.getItem('apiKey')
    }
  }

  set (setting: Setting): void {
    globalThis.localStorage.setItem('apiKey', (setting.apiKey || ''))
  }
}