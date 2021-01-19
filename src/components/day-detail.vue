<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ daySummary }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <li v-for="moni in day.monies" :key="moni.id">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <label class="label" for="amount">Amount</label>
                    <input class="input" name="amount" v-model="moni.amount" />
                  </div>
                  <div class="field">
                    <label class="label" for="category">Category</label>
                    <input
                      class="input"
                      name="category"
                      v-model="moni.category"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="subCategory">Sub-Category</label>
                    <input
                      class="input"
                      name="subCategory"
                      v-model="moni.subCategory"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="dateAdded">Date Added</label>
                    <input
                      type="date"
                      class="input"
                      id="dateAdded"
                      v-model="moni.dateAdded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelDay()"
        >
          <i class="fas fa-undo"></i>
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveDay()">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

import { displayDateFormat, lifecycleHooks } from '../shared';

export default {
  name: 'DayDetail',
  props: {
    day: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      clonedDay: { ...this.day },
    };
  },
  mixins: [lifecycleHooks],
  computed: {
    daySummary() {
      return this.clonedDay
        ? `${this.clonedDay.date} - ${this.clonedDay.totalSpend}`
        : '';
    },
  },
  methods: {
    cancelDay() {
      this.$emit('cancel');
    },
    saveDay() {
      this.$emit('save', this.clonedDay);
    },
  },
  filters: {
    shortDate: function (value) {
      return format(value, displayDateFormat);
    },
  },
};
</script>
