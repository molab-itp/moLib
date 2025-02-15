//

//
// trigger timer every 5 seconds
//
// let period = 5.0;
// function timer_event() {
//   ... timer event triggered
// }
// let timer = new PeriodTimer({ period, timer_event });
//
export class PeriodTimer {
  //
  // period: seconds between trigger
  //  == 0, to trigger every check
  //  == -1 to disable triggering
  // timer_event: function to call when period has lapse
  //
  constructor({ period, timer_event }) {
    this.period = period;
    this.timer_event = timer_event;
    this.restart();
  }
  clear() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
    this.intervalID = 0;
  }
  restart() {
    this.period_time = Date.now();
    let timer_event = this.timer_event;
    if (timer_event) {
      let delay = this.period * 1000;
      this.clear();
      this.intervalID = setInterval(() => {
        timer_event();
        this.period_time = Date.now();
      }, delay);
    }
  }
  lapse() {
    let ntime = Date.now();
    return (ntime - this.period_time) / 1000;
  }
  check(period_next) {
    let ntime = Date.now();
    let lapse = (ntime - this.period_time) / 1000;
    if (this.period >= 0 && lapse > this.period) {
      this.period_time = ntime;
      if (period_next) {
        period_next();
      }
      return 1;
    }
    return 0;
  }
}

globalThis.PeriodTimer = PeriodTimer;
