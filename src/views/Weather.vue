<template>
  <div v-if="apiKey.length">
    <input v-model="city" />
    <button @click="getInfo">get info</button>
    {{weatherInfo}}
  </div>
  <div v-else>No api key provided</div>
  <div>
    <router-link :to="{name: 'settings'}">settings</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, reactive} from 'vue'
import { useStore } from 'vuex'
import {getData} from '../middlewares/openWeatherMap'

export default defineComponent({
  name: 'Weather',
  setup () {
    const store = useStore()
    const city = ref('')
    const weatherInfo = reactive({
      data: {}
    })
    const getInfo = async () => {
      weatherInfo.data = await getData(city.value)
    }
    return {
      getInfo,
      apiKey: computed(() => store.state.settings.apiKey),
      city,
      weatherInfo
    }      
  }
})
</script>