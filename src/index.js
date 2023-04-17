import $ from 'jquery';
import './style.scss';

let num = 0;

function count() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}

setInterval(count, 1000);
