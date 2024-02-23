import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime)).then(() => {
        console.log('El tiempo de reproducción se ha restablecido a', currentTime);
    }).catch((error) => {
        console.error('Error al establecer el tiempo de reproducción:', error);
    });
}


const saveTimeThrottled = throttle((time) => {
    localStorage.setItem('videoplayer-current-time', time.toString());
    console.log('Tiempo de reproducción guardado:', time);
}, 1000, { trailing: false }); 

player.on('timeupdate', function(data) {
    saveTimeThrottled(data.seconds); 
});