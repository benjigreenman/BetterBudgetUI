<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <main class="column">
        <Days />
      </main>
    </div>
     <div class="content-container">
        <div class="text-center section">
          <MonthCalendar />
        </div>
      </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
import Days from '@/components/days';
import MonthCalendar from '@/components/month-calendar';

export default {
  name: 'App',
  components: { HeaderBar, Days, MonthCalendar },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
