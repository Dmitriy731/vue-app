<script setup>
  import { onMounted, ref } from 'vue'
  import LeftPanel from '../components/LeftPanel.vue'
  import RightPanel from '../components/RightPanel.vue'
  import LoaderIcon from '../components/ui-kit/LoaderIcon.vue'

  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const activeDataWater = ref(0);
  const dataWeather = ref({
    city: '',
    data: []
  });
  const loading = ref(true);

  const error = ref(null)

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      fetch("/api/location")
        .then(res => res.json())
        .then(data => {
          resolve({
            loc: data.loc,
            city: data.city
          });
        }).catch(err => {
          reject(err);
        });
    });
  }

  async function fetchWeather(loc) {
    const url = `/api/weather?loc=${loc}`;
    const res = await fetch(url)
    return await res.json()
  }

  function createDay(item = {}) {
    const date = item.date ? new Date(item.date) : null
    return {
      day: date ? days[date.getDay()] || '-' : '-',
      date: date
        ? new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }).format(date)
        : '-',
      temperature: item.day?.avgtemp_c ?? '-',
      weather: item.day?.condition?.text ?? '-',
      icon: item.day?.condition?.icon ?? '-',
      humidity: item.day?.avghumidity ?? '-',
      precipitation: item.day?.totalprecip_in ?? '-',
      wind: item.day?.maxwind_mph ?? '-',
    }
  }

  async function loadWeather(city) {
    loading.value = true
    try {
      let locUser, cityUser

      if (!city) {
        const { loc, city } = await getUserLocation()
        locUser = loc
        cityUser = city
      } else {
        locUser = city
        cityUser = city
      }

      const data = await fetchWeather(locUser)
      dataWeather.value.city = data.location.name || cityUser
      dataWeather.value.data = data.forecast.forecastday.map(createDay)
    } catch (err) {
      console.error("Ошибка:", err)
      error.value = err
      dataWeather.value.city = "Не удалось определить"
      dataWeather.value.data = Array.from({ length: 1 }, () => createDay())
    } finally {
      loading.value = false
    }
  }

  function handleClick(index = 0) {
    activeDataWater.value = index;
  }

  function submitForm(e) {
    loadWeather(e);
  }

  onMounted(() => {
    loadWeather();
  })

</script>

<template>
  <div class="main-page">
    <template v-if="!loading && dataWeather.data.length">
      <LeftPanel
        :city="dataWeather.city"
        :data="dataWeather.data[activeDataWater]"
      />
      <RightPanel
        :data="dataWeather.data"
        :active-data-water="activeDataWater"
        @handle-click="handleClick"
        @submit-form="submitForm"
      />
    </template>

    <div v-else>
      <LoaderIcon mod="loader--page" />
    </div>  </div>
</template>

<style scoped>
 .main-page {
  display: flex;
  justify-content: center;
  max-width: 1013px;
  width: 100%;
 }
</style>