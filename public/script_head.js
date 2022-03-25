/* eslint-disable prettier/prettier */
// var before_loadtime = new Date().getTime();
// function Pageloadtime() {
//   var after_loadtime = new Date().getTime();
//   let loadtime = (after_loadtime - before_loadtime) / 1000;
//   document.getElementById('Time').textContent = 'Page loaded: ' + loadtime;
// }
// window.onload = Pageloadtime;

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const getServerLoadingTime = () => {
      if (!document.cookie.includes('server-loading-time')) return -1;
      return parseInt(
        document.cookie.match(/server-loading-time=(.+?);*/)[1],
        10,
      );
    };
    const loadTime = window.performance.now().toFixed(0);
    document.getElementById(
      'Time',
    ).innerText = `Total time: ${loadTime} ms (client) + ${getServerLoadingTime()} ms (server)`;
  });
})();
