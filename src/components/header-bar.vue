<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarTitle></HeaderBarTitle>
    </nav>
  </header>
</template>

<script>
import HeaderBarTitle from '@/components/header-bar-title';

export default {
  name: 'HeaderBar',
  components: { HeaderBarTitle },
};
</script>
