<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Days</h2>
      <div class="columns">
        <div class="column is-8" v-if="days">
          <ul v-if="!selectedDay">
            <li v-for="day in days" :key="day.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="day.name" class="name">
                      {{ day.date }}
                    </div>
                    <div class="totalSpend">{{ day.totalSpend }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item" @click="selectDay(day)">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>See Details</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>
          <DayDetail
            :day="selectedDay"
            @save="saveDay"
            @cancel="cancelDay"
            v-if="selectedDay"
          />
          <div class="notification is-info" v-show="message">{{ message }}</div>
        </div>
      </div>
    </div>
    <div class="section content-title-group">
      <h2 class="title">Monthly View</h2>
    </div>
  </div>
</template>

<script>
import { dayWatchers, lifecycleHooks, data } from '../shared';
import DayDetail from '@/components/day-detail';

export default {
  name: 'Days',
  data() {
    return {
      days: [],
      selectedDay: undefined,
    };
  },
  components: {
    DayDetail,
  },
  mixins: [lifecycleHooks, dayWatchers],
  async created() {
    await this.loadDays();
  },
  methods: {
    async loadDays() {
      this.days = [];
      this.message = 'getting the days, please be patient';

      this.days = await data.getDays();

      this.message = '';
    },
    cancelDay() {
      this.selectedDay = undefined;
    },
    saveDay(day) {
      const index = this.days.findIndex((d) => d.id === day.id);
      this.days.splice(index, 1, day);
      this.days = [...this.days];
      this.selectedDay = undefined;
    },
    selectDay(day) {
      this.selectedDay = day;
    },
  },
};
</script>
