<template>
  <div v-if="apiKey.length">
    <input v-model="city" />
    <button @click="getInfo" @keyup.enter="getInfo">get info</button>
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
      try {
        weatherInfo.data = await getData(city.value)
      } catch (error) {
        weatherInfo.data = {
          error
        }
      }
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