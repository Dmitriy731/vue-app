<script setup>
    import Btn from '../components/ui-kit/Btn.vue'
</script>

<template>
    <h1>Кнопки</h1>
    <Btn class="btn--test" >Обычная кнопка</Btn>
    <Btn class="btn--test" as="link" href="https://google.com">Внешняя ссылка</Btn>
    <Btn class="btn--test" as="router" to="/about">Роутер-ссылка</Btn>
</template>
