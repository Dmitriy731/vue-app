<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        mod: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <svg :class="['icon', props.mod]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <use :href="`#${name}`" :xlink:href="`#${name}`"/>
    </svg>
</template>

<style lang="scss" scoped >
    .icon {
        font-size: var(--icon-font-size, 'inherit');
        color: var(--cl-white, 'inherit');
        width: 1em;
        height: 1em;
        fill: currentColor;

        &--location {
            font-size: 32px;
            margin-block: -6px;
        }

        &--left-panel {
            font-size: 27px;
        }

        &--weather {
            font-size: 95px;
            margin-bottom: 8px;
        }

        &--right-panel {
            transition: color 0.3s;
            font-size: 55px;
            margin-bottom: 15px;
        }
    }
</style>