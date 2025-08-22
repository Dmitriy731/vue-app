<script setup>
import Icon from './ui-kit/Icon.vue'

  const props = defineProps({
    city: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {}
    }
  })
</script>

<template>
    <div class="left-panel">
      <picture class="left-panel__background">
        <img src="/images/content/background.webp" alt="sun" />
      </picture>
      <div class="left-panel__top">
          <h1 class="left-panel__title">{{ props.data.day }}</h1>
          <div class="left-panel__subtitle">{{ props.data.date }}</div>
          <div class="left-panel__city">
            <Icon name="location" mod="icon--left-panel" />
            <span >{{ props.city }}</span>
          </div>
      </div>
      <div class="left-panel__bottom">
          <Icon name="sun" mod="icon--weather"></Icon>
          <div class="left-panel__temperature" v-html="props.data.temperature + ' °C'"  />
          <div class="left-panel__weather" v-html="props.data.weather" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .left-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48.67%;
    z-index: 1;
    overflow: hidden;
    padding: 48px 32px 84px;
    border-radius: 30px;

    &__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(152.19deg, rgba(136, 235, 239, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%);
        z-index: 1;
        opacity: 0.8;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 37px;
      margin-bottom: 8px;
    }

    &__subtitle {
      font-weight: 500;
      font-size: 22px;
      margin-bottom: 19px;
    }

    &__city {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      line-height: 100%;
    }

    &__temperature {
        font-weight: 700;
        font-size: 50px;
        line-height: 100%;
        margin-bottom: 22px;
    }

    &__weather {
        font-weight: 700;
        font-size: 30px;
        line-height: 100%;
    }
  }
</style>