//

//
// trigger timer every 5 seconds
// my.timer = new PeriodTimer(5.0);
//
// let timer = PeriodTimer(period)
//
export class PeriodTimer {
  // PeriodTimer(period)
  //    period = seconds between trigger
  //      == 0, to trigger every check
  //      == -1 to disable triggering
  //
  constructor(period) {
    this.period = period;
    this.restart();
  }
  restart() {
    this.period_time = new Date().getTime();
  }
  lapse() {
    let ntime = new Date().getTime();
    return (ntime - this.period_time) / 1000;
  }
  check(period_next) {
    let ntime = new Date().getTime();
    let lapse = (ntime - this.period_time) / 1000;
    if (this.period >= 0 && lapse > this.period) {
      this.period_time = ntime;
      if (period_next) period_next();
      return 1;
    }
    return 0;
  }
}

globalThis.PeriodTimer = PeriodTimer;
