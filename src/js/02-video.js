import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = 'videoplayer-current-time';

const saveCurrentTime = throttle(function(time) {
  localStorage.setItem(storageKey, time);
}, 1000);

player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
});

const savedTime = localStorage.getItem(storageKey);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}