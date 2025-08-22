<script setup lang="ts">
    import IconSprite from './components/ui-kit/IconSprite.vue'
</script>
  <template>
    <nav style="position: absolute; top: 0; left: 0; width: 100%; background-color: grey;">
      <router-link to="/">Главная</router-link>
      <router-link to="/icons-fonts">Ну что то типо иконочного шрифта</router-link>
      <router-link to="/button">Кнопки</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <IconSprite />
</template>