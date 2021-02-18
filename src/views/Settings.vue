<template>
  <label for="api-key">API key</label>
  <input id="api-key" v-model="apiKey" />
  <button @click="save">save</button>
  <router-link :to="{name: 'weather'}">home</router-link>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: "Settings",
  setup () {
    const store = useStore()
    const apiKey = ref('')

    const loadApiKey = async () => {
      await store.dispatch('settings/loadApiKey')
      apiKey.value = store.state.settings.apiKey
    }
    
    onMounted(loadApiKey)
    
    return {
      apiKey,
      save: () => store.dispatch('settings/saveApiKey', {apiKey: apiKey.value})
    }
  }
});
</script>
