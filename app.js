const music =new Audio('PLAYLIST/1 MP3.mp3');
// music.play();

const songs =[
    {
        id:1,
        songName:`410 <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/1 JPG.jpeg"
    },
    {
        id:2,
        songName:`Drippy <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/2 MP3.jpeg"
    },
    {
        id:3,
        songName:`GOAT>> <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/3 JJPG.jpeg"
    },
    {
        id:4,
        songName:`LEVEL >>>> <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/4 MP3.jpeg"
    },
    {
        id:5,
        songName:`DHAKKA?? <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/5 JPG.jpeg"
    },
    {
        id:6,
        songName:`sAME Beef <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/6 JPG.jpeg"
    },
    {
        id:7,
        songName:`panjabbb <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/7 JPG.jpeg"
    },
    {
        id:8,
        songName:`Dollar  NAM apna CHLDA <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/8 JPG.jpeg"
    },
    {
        id:9,
        songName:`DEAR MAMA <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/9 MP3.jpeg"
    },
    {
        id:10,
        songName:`OWN WAY&#12389 <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/10 JPG.jpeg"
    },
    {
        id:11,
        songName:`LOW KEY <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/11 JPG.jpeg"
    },
    {
        id:12,
        songName:`old SKOol <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/12 MP3.jpeg"
    },
    {
        id:13,
        songName:`JATT da MUQABLA <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/13 JPG.jpeg"
    },
    {
        id:14,
        songName:` putt JATT DA<br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/14 JPG.jpeg"
    },
    {
        id:15,
        songName:`295 MOST LEGEND <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/15 JPG.jpeg"
    },
    {
        id:16,
        songName:`DAWood<br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/16 JPG.jpeg"
    },
    {
        id:17,
        songName:`SO-- HIGH <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/17 JPG.jpeg"
    },
    {
        id:18,
        songName:`RAULE <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/18 JPG.jpeg"
    },
    {
        id:19,
        songName:`SANJU <br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/19 JPG.jpeg"
    },
    {
        id:20,
        songName:` RIP SIDhu<br>
        <div class="subtitle">sidhhu moosewala
        </div>`,
        poster:"IMAGES PLAYLIST/20 JPG.jpeg"
    },
]

let masterplay = document.getElementById('masterplay')
let wave = document.getElementById('wave')

masterplay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
masterplay.classList.remove('bi-pause-fill');

        
    }
});

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach(el =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeallbackground =()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach(el =>{
        el.style.background = "rgb(105,105,105,.0)";
    })
}



let index = 0 ;
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',( el) => {
index = el.target.id;
// console.log(el);
music.src = `PLAYLIST/${index}.mp3`;
// poster_master_side.src = `IMAGES PLAYLIST/${index}.jpeg`;
music.play();
masterplay.classList.remove('bi-play-fill');
masterplay.classList.add('bi-pause-fill');

let songTitles = songs.filter((els)=>{
    return els.id==index;
});
songTitles.forEach(elss =>{
    let { songName,poster,music} = elss;
    title.innerHTML = songName
    poster_master_side.src = poster;
  
});
makeallbackground();
Array.from(document.getElementsByClassName('songitem'))[index-1].style .background = "rgb(105,105,105,.1"
makeallplays();
el.target.classList.remove('bi-play-circle-fill');
el.target.classList.add('bi-pause-circle-fill');
wave.classList.add('active1');


    });
})









Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i] .songName;

})





let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
})

let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
   item.scrollLeft +=330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -=330;
})
