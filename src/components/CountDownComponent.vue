<template>
  <div class="container__clock clock">
    <h2
      v-if="endCounter"
      class="expired">
        Time expired!
    </h2>
    <ul
      v-else
      class="clock__main"
    >
      <count-down-item-component
        item="Days"
        :future="fDays"
        :present="days"
      />
      <count-down-item-component
        item="Hours"
        :future="fHours"
        :present="hours"
      />
      <count-down-item-component
        item="Minutes"
        :future="fMinutes"
        :present="minutes"
      />
      <count-down-item-component
        item="Seconds"
        :future="fSeconds"
        :present="seconds"
      />
    </ul>
  </div>
</template>

<script>
import CountDownItemComponent from './CountDownItemComponent.vue';
export default {
  name: 'CountDownComponent',
  components: {
    CountDownItemComponent
  },
  data() {
    return {
      expectedDate: 'Mar 03, 2022 15:37:25',
      countDownDate: null,
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      fDays: '00',
      fHours: '00',
      fMinutes: '00',
      fSeconds: '00',
      endCounter: false,
    }
  },
  mounted() {
    this.countDownDate = new Date(this.expectedDate).getTime();
    this.updateTime();
  },
  methods: {
    setTime() {
        this.updateSeconds = false;
        let now = new Date().getTime();
        let distance = this.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.fDays = this.addZero(days - 1).toString();
        this.fHours = this.addZero(hours - 1).toString();
        this.fMinutes = this.addZero(minutes - 1).toString();
        this.fSeconds = this.addZero(seconds - 1).toString();

        this.days = this.addZero(days).toString();
        this.hours = this.addZero(hours).toString();
        this.minutes = this.addZero(minutes).toString();
        this.seconds = this.addZero(seconds).toString();

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval();
          this.endCounter = true;
        }
    },
    updateTime() {
        setInterval(() => {
            this.setTime();
        }, 1000);
    },
    addZero(item) {
        return item <= 9 ? `0${item}` : item;
    }
  },
}
</script>