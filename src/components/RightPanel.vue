<script setup>
    import { computed, ref } from 'vue'
    import Button from './ui-kit/Btn.vue'
    import Icon from './ui-kit/Icon.vue'
    import Input from './ui-kit/Input.vue'

    const props = defineProps({
        data: {
            type: Array,
            default: () => []
        },
        activeDataWater: {
            type: Number,
            default: 0
        }
    })

    const inputCity = ref('')
    const emit = defineEmits(['handleClick', 'submitForm'])

    function onClick(i) {
        emit('handleClick', i)
    }

    function submitForm(e) {
        e.preventDefault();

        emit('submitForm', inputCity.value)
    }

    const currentDay = computed(() => props.data[props.activeDataWater] || {})

</script>

<template>
    <div class="right-panel">
        <div class="right-panel__top">
            <div class="right-panel__humidity">ВЛАЖНОСТЬ <span>{{ currentDay.humidity }} %</span></div>
            <div class="right-panel__humidity"> ОСАДКИ <span>{{ currentDay.precipitation }} %</span></div>
            <div class="right-panel__humidity">ВЕТЕР <span>{{ currentDay.wind }} м/ч</span></div>
        </div>
        <div class="right-panel__day-list">
            <div v-for="(item, i) in props.data" :key="i" :class="['right-panel__day-item', { active: props.activeDataWater === i }]" @click="onClick(i)">
                <Icon :name="item.icon" mod="icon--right-panel" />
                <div class="right-panel__day" v-html="item.day" />
                <div class="right-panel__temperature" v-html="item.temperature + '°C'" />
            </div>
        </div>
        <div class="right-panel__bottom">
            <form v-if="true" class="right-panel__form" @submit="submitForm">
                <Input
                    v-model="inputCity"
                    name="city"
                />
                <Button class="btn">
                    <span>Сохранить</span>
                </Button>
            </form>
            <Button v-else class="btn--location">
                <Icon name="location" mod="icon--location"></Icon>
                <span>Изменить город</span>
            </Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .right-panel {
        width: calc(51.33% + 40px);
        margin-block: 21px;
        background-color: var(--cl-bunker);
        border-radius: 25px;
        margin-left: -40px;
        padding: 55px 48px 62px 95px;

        &__top {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 80px;
        }

        &__humidity {
            font-weight: 700;
            font-size: 28px;
            line-height: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            & span {
                font-weight: 500;
            }
        }

        &__day-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin-bottom: 70px;
        }

        &__day-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            padding: 12px 12px 20px;
            min-width: 100px;
            width: calc((100% / 2) - 3px);
            flex-grow: 1;
            overflow: hidden;
            box-shadow: 1px 2px 4px 0px #272E37;
            background-color: #272E37;
            cursor: pointer;

            transition: background-color 0.3s, color 0.3s;

            &.active {
                background-color: var(--cl-white);
                color: var(--cl-black);

                & .icon {
                    color: var(--cl-black);
                }
            }
        }

        &__day {
            font-weight: 400;
            font-size: 20px;
            margin-bottom: 14px;
        }

        &__temperature {
            font-weight: 700;
            font-size: 20px;
        }

        &__form {
            display: flex;
            column-gap: 12px;
        }
    }
</style>