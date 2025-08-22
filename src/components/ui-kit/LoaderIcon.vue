<script setup>
    const props = defineProps({
        mod: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <svg :class="['loader', props.mod]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle fill="currentColor" stroke="white" stroke-width="15" r="15" cx="40" cy="65">
            <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
        </circle>
        <circle fill="currentColor" stroke="white" stroke-width="15" r="15" cx="100" cy="65">
            <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
        </circle>
        <circle fill="currentColor" stroke="white" stroke-width="15" r="15" cx="160" cy="65">
            <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
        </circle>
    </svg>
</template>

<style lang="scss" scoped>
    .loader {
        height: 28px;

        &--page {
            height: 200px;
            color: rgba(83, 91, 230, 0.9);
        }
    }
</style>