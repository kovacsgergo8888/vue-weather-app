import settingStorage from '../../middlewares/settingStorage'
import {Setting} from '../../Domain/Setting/Setting'

export default {
  namespaced: true,
  state: {
    apiKey: ''
  },
  mutations: {
    setApiKey (state: any, value: string) {
      state.apiKey = value
    }
  },
  actions: {
    async loadApiKey ({commit}: any) {
      const setting = await settingStorage.get()
      commit('setApiKey', setting.apiKey)
    },
    saveApiKey ({commit}: any, setting: Setting) {
      commit('setApiKey', setting.apiKey)
      settingStorage.set(setting)
    }
  }
}