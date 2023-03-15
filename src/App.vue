<script>
import {
  HeaderLayout,
  MainLayout,
  FooterLayout
} from './components/layouts/index';

export default {
  name: 'App',
  components: {
    HeaderLayout,
    MainLayout,
    FooterLayout,
  }
};
</script>

<template>
  <HeaderLayout />

  <MainLayout />

  <FooterLayout />
</template>
