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
      <li
        v-for="item in clockCounter"
        :key="item.name"
        :class="`clock__item ${item.name}`"
      >
        <div class="clock__mask clock__future">
            <div class="clock__mask-top">
              <span class="clock__text">{{ item.future }}</span>
            </div>
            <div class="clock__mask-bottom">
              <span class="clock__text">{{ item.future }}</span>
            </div>
        </div>
        <div class="clock__mask clock__present">
            <div :class="`clock__mask-top ${ updateSeconds ? 'change' : '' }`">
                <span class="clock__text">{{ item.value }}</span>
            </div>
            <div class="clock__mask-bottom">
                <span class="clock__text">{{ item.value }}</span>
            </div>
            <em class="clock__ref">{{ item.name }}</em>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CountDownComponent',
  data() {
    return {
      expectedDate: 'Mar 03, 2022 15:37:25',
      countDownDate: null,
      clockCounter: {
        days: { name: 'days', value: '00', future: '00' },
        hours: { name: 'hours', value: '00', future: '00' },
        minutes: { name: 'minutes', value: '00', future: '00' },
        seconds: { name: 'seconds', value: '00', future: '00' }
      },
      updateDays: false,
      updateHours: false,
      updateMinutes: false,
      updateSeconds: false,
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

        if(seconds === this.clockCounter.seconds.future) {
            this.updateSeconds = true;
        }

        this.clockCounter.days.future = this.addZero(days - 1);
        this.clockCounter.hours.future = this.addZero(hours - 1);
        this.clockCounter.minutes.future = this.addZero(minutes - 1);
        this.clockCounter.seconds.future = this.addZero(seconds - 1);

        this.clockCounter.days.value = this.addZero(days);
        this.clockCounter.hours.value = this.addZero(hours);
        this.clockCounter.minutes.value = this.addZero(minutes);
        this.clockCounter.seconds.value = this.addZero(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
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