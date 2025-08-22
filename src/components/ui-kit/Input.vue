<script setup>
    const props = defineProps({
        modelValue: {
            type: String,
            default: ''
        }
    })

    const emit = defineEmits(['update:modelValue'])

    function onInput(e) {
        emit('update:modelValue', e.target.value)
    }
</script>

<template>
    <input
    type="text"
    class="input"
    :value="props.modelValue"
    @input="onInput"
  />
</template>

<style lang="scss" scoped>
    .input {
        font-family: var(--font);
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: var(--cl-white);
        text-decoration: none;
        background-color: #272E37;

        padding: 14px 14px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
            --color1: rgba(144, 217, 224, 0.9);
            --color2: rgba(84, 96, 230, 0.9);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 220%;
            height: 100%;
            border-radius: 5px;
            background: linear-gradient(90.8deg, var(--color1) 0.2%, var(--color2) 45%, var(--color2) 55.1%, var(--color1) 100%);

            z-index: -1;
            transition: left 0.3s;
        }

        &:hover {
            &::before {
                left: -120%;
            }
        }
    }
</style>