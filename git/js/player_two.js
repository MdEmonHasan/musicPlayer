let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let mute_volume = document.querySelector('#volume_mute_problem');
let autoPlayIcon = document.querySelector('#autoPlayIcon');
let bottom_bar = document.querySelector('#bottom_bar');

let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;
let change_volume_icon = false;
// create a audio element 
let track = document.createElement('audio');


// all song list one start
let All_song = [
    {
        name: 'RITVIZ Ringtone',
        path: 'audio/song1.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "RITVIZ"
    },
    {
        name: 'secound song',
        path: 'audio/song2.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "secound singer"
    },
    {
        name: 'third song',
        path: 'audio/song3.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "third singer"
    },
    {
        name: 'fourth song',
        path: 'audio/song4.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "fourth singer"
    },
    {
        name: 'fifth song',
        path: 'audio/song5.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "fifth singer"
    },
];


let top_eight = [
    {
        name: 'RITVIZ Ringtone',
        path: 'audio/song1.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "RITVIZ"
    },
    {
        name: 'secound song',
        path: 'audio/song2.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "secound singer"
    },
    {
        name: 'third song',
        path: 'audio/song3.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "third singer"
    },
    {
        name: 'fourth song',
        path: 'audio/song4.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "fourth singer"
    },
    {
        name: 'fifth song',
        path: 'audio/song5.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "fifth singer"
    },
    {
        name: 'sixth song',
        path: 'audio/song5.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "sixth singer"
    },
    {
        name: 'seven song',
        path: 'audio/song5.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "seven singer"
    },
    {
        name: 'eight song',
        path: 'audio/song5.mp3',
        img: 'images/player_two_images/image-1.jpg',
        singer: "eight singer"
    },
];
// all song list one End


// all function start

// load function start
function load_track(index_no){
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
    track.load();
}
load_track(index_no);




function justplay(){
    if(playing_song == false){
        playsong();
    }
    else{
        pausesong();
    }
    bottom_bar.style.display = "inline-block"
}
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'

}
// load function End

// next song start
function next_song(){
    if(index_no < All_song.length -1){
        index_no = index_no +1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
// next song End

// previus part start
function previous_song(){
    if(index_no > 0){
        index_no = index_no -1;
        load_track(index_no);
        playsong();
    }
   
    else{
        index_no = All_song.length-1;
        load_track(index_no);
        playsong();
    }
}
// previus part End

// reset slider start
function reset_slider(){
    slider.value = 0;
}
// reset slider End

// volume_change part start
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;

}


// i make this start
function mute_sound(){
    if(change_volume_icon == false){
        mute_problem();
    }
    else{
        change_volume_icon = false;
        mute_volume.innerHTML = '<i class="fa fa-volume-up"></i>';
        volume_change();
    }
    
}
function mute_problem(){
    change_volume_icon = true;
    volume_show.innerHTML = 0;
    track.volume = recent_volume.value - recent_volume.value;
    mute_volume.innerHTML = '<i class="fa fa-volume-off"></i>';
}
// i make this End













// volume_change part End

// auto play function start


function autoplay_switch(){
    if(autoplay == 1){
        autoplay = 0;
        autoPlayIcon.style.color = "#ffffff";
    }
    else{
        autoplay = 1;
        autoPlayIcon.style.color = "#ff8a65";
    }
}



// auto play function End

// change duration part start
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
function range_slider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100/track.duration);
        slider.value = position;
    }

    // function will run when song is over


    if(track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(autoplay == 1){
            index_no = index_no + 1;
            load_track(index_no);
            playsong();
        }
    }
}
// change duration part End

// all function End



