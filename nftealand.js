<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<audio muted autoplay loop id="sound1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1624298129/NFTea_Main_Day_song_pjpejd.mp3"></audio>
<audio id="arcade1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Arc1.wav"></audio>
<audio id="arcade2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arc2.wav"></audio>
<audio id="arcade3" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arc3.wav"></audio>
<audio id="arcade4" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190634/Arc4.wav"></audio>
<audio id="arcade5" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arc5.wav"></audio>
<audio id="arcade6" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arc6.wav"></audio>
<script>
var song1 = $('#arcade1');
var song2 = $('#arcade2');
var song3 = $('#arcade3');
var song4 = $('#arcade4');
var song5 = $('#arcade5');
var song6 = $('#arcade6');
var Ar1 = [song1, song2, song3, song4, song5, song6];
var i = -1;
$("a#arcade").click(function() {
  if (i >= 0) {
    Ar1[i].currentTime = 0;
    Ar1[i].trigger('pause');
  }
  i++;
  if (i >= Ar1.length)
    i = 0;
  Ar1[i].trigger('play');
});
</script>
<audio id="bubbles" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/bubb1.wav"></audio>
<audio id="bubbles2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/bubb1.wav"></audio>
<script>
var song1 = $('#bubbles');
var Array5 = [song1, song2];
var i = -1;
$("a#bubble").click(function() {
  if (i >= 0) {
    Array5[i].currentTime = 0;
    Array5[i].trigger('pause');
  }
  i++;
  if (i >= Array5.length)
    i = 0;
  Array5[i].trigger('play');
});
</script>
<audio id="drinkbar1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/bar1.wav"></audio>
<audio id="drinkbar2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/bar2.wav"></audio>
<script>
var song1 = $('#drinkbar1');
var song2 = $('#drinkbar2');
var Array2 = [song1, song2];
var i = -1;
$("a#drinkbar").click(function() {
  if (i >= 0) {
    Array2[i].currentTime = 0;
    Array2[i].trigger('pause');
  }
  i++;
  if (i >= Array2.length)
    i = 0;
  Array2[i].trigger('play');
});
</script>
<audio id="sign1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/sgn.wav"></audio>
<script type="text/javascript">
var song1 = $('#sign1');
var Array6 = [song1];
var i = -1;
$("a#sign").click(function() {
  if (i >= 0) {
    Array6[i].currentTime = 0;
    Array6[i].trigger('pause');
  }
  i++;
  if (i >= Array6.length)
    i = 0;

  Array6[i].trigger('play');
});
</script>
<audio id="pinball1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Pb1.wav"></audio>
<audio id="pinball2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Pb2.wav"></audio>
<script>
var song1 = $('#pinball1');
var song2 = $('#pinball2');
var Array3 = [song1, song2];
var i = -1;
$("a#pinball").click(function() {
  if (i >= 0) {
    Array3[i].currentTime = 0;
    Array3[i].trigger('pause');
  }
  i++;
  if (i >= Array3.length)
    i = 0;
  Array3[i].trigger('play');
});
</script>
<audio id="prize1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Prz1.wav"></audio>
<audio id="prize2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Prz2.wav"></audio>
<script>
var song1 = $('#prize1');
var song2 = $('#prize2');
var Ar4 = [song1, song2];
var i = -1;
$("a#prize").click(function() {

  if (i >= 0) {
    Ar4[i].currentTime = 0;
    Ar4[i].trigger('pause');
  }
  i++;
  if (i >= Ar4.length)
    i = 0;

  Ar4[i].trigger('play');
});
</script>
<audio id="recycle" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Recy.wav"></audio>
<script type="text/javascript">
var song1 = $('#recycle');
var Ar7 = [song1];
var i = -1;
$("a#recycle1").click(function() {

  if (i >= 0) {
    Ar7[i].currentTime = 0;
    Ar7[i].trigger('pause');
  }
  i++;
  if (i >= Ar7.length)
    i = 0;

  Ar7[i].trigger('play');
});
</script>
<script>
  var audio = document.getElementById("sound1");
  audio.volume = 0.5;
</script>
<script>
  var audio = document.getElementById("arcade1");
  audio.volume = 0.8;
</script>
<script>
  var audio = document.getElementById("arcade2");
  audio.volume = 0.8;
</script>
<script>
  var audio = document.getElementById("arcade3");
  audio.volume = 0.8;
</script>
<script>
  var audio = document.getElementById("arcade4");
  audio.volume = 0.8;
</script>
<script>
  var audio = document.getElementById("arcade5");
  audio.volume = 0.8;
</script>
<script>
  var audio = document.getElementById("arcade6");
  audio.volume = 0.8;
</script>

<script>
$("#muteaudio").click(function() {
        var bool = $("audio").prop("muted");
        $("audio").prop("muted",!bool);
});
</script>
<script>
function toggleSound(img)
{
  img.src= img.src=="https://res.cloudinary.com/dh2ufbkjp/image/upload/v1630080736/NFTea_Volume_ON_DAY_Alpha-export_aenomf.png" ? "https://res.cloudinary.com/dh2ufbkjp/image/upload/v1630080733/NFTea_Volume_OFF_DAY_Alpha-export_ma3wxo.png" : "https://res.cloudinary.com/dh2ufbkjp/image/upload/v1630080736/NFTea_Volume_ON_DAY_Alpha-export_aenomf.png";
}

</script>
<script>
    window.onload = function() {
        var anchors = document.getElementsByTagName('*');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                code = this.getAttribute('whenClicked');
                eval(code);   
            }
        }
    }
</script>

<script>
var date = new Date();
var hour = date.getHours();
if(hour >= 7 && hour < 18) {
  document.getElementById("sound1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1624298129/NFTea_M_D.mp3";
}else{
  document.getElementById("sound1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629018126/NFTea_M_N.mp3";
}
</script>

<script>
var d = new Date();
var h = date.getHours();
console.log(h)
var m = date.getMinutes();
const e = document.querySelector(".viewport-div");
const b = document.querySelector(".metaldoorbott");

if(h >=7 && h < 18) {
    document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/61294ee350d0b77f38663805_NFTEA_homepage_Day_Closed_01.gif";
     document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
     document.getElementById("drinkbar1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
     document.getElementById("drinkbar2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
     document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
     b.style.display = "block";
     e.style.backgroundImage =
       "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/60d0476f5b485d3d0ac65254_Tall_Boy_-_NFTEA_LAND_-_cloud_animation-small-export200.gif)";
} else if (h >= 18 && h < 21) {
    document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
    document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
    document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
    document.getElementById("drinkbar1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
    document.getElementById("drinkbar2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
    b.style.display = "block";
    e.style.backgroundImage =
      "url(https://res.cloudinary.com/dh2ufbkjp/image/upload/v1628271809/Night_Clouds_seq_02_jpofwh.gif)";
} else if ((h == 21) && (m >= 0 && m <= 30)) {
   document.getElementById("gif").src = "https://res.cloudinary.com/dh2ufbkjp/image/upload/v1631197608/NFTEA_LAND_CLOSED_BarOpen_9to930pm_poywvw.gif";
  e.style.backgroundImage =
    "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/612f66b141a07b960d68fffa_Starry_Night_V2.2.gif)";
    b.style.display = "block";
    a.href =
    "https://discord.gg/eMtc3ABB";
} else if ( ((h == 21) && (m >= 30 && m <= 59)) || (h >= 22 && h <= 23) || (h >= 0 && h < 5)) {
document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
document.getElementById("drinkbar1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
document.getElementById("drinkbar2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
e.style.backgroundImage =
  "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/612f66b141a07b960d68fffa_Starry_Night_V2.2.gif)";
} else if (h >= 5 && h < 7) {
  document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
	document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
  document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD1.wav";
  document.getElementById("drinkbar1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
  document.getElementById("drinkbar2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/MD3.wav";
e.style.backgroundImage =
  "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif)";
}
</script>
