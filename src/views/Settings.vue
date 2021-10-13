<template>
  <label for="api-key">API key</label>
  <input id="api-key" v-model="apiKey" />
  <button @click="save">save</button>
  <router-link :to="{name: 'weather'}">home</router-link>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const apiKey = ref('')

const loadApiKey = async (): Promise<void> => {
  await store.dispatch('settings/loadApiKey')
  apiKey.value = store.state.settings.apiKey
}

onMounted(loadApiKey)
const save = (): Promise<void> => store.dispatch('settings/saveApiKey', {apiKey: apiKey.value})

</script>
