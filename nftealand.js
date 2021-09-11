<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<audio muted autoplay loop id="sound1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1624298129/NFTea_Main_Day_song_pjpejd.mp3"></audio>
<audio id="arcade1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Arcade_1_Explosion_d7la3l.wav"></audio>
<audio id="arcade2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arcade_2_Blip_w__Ping_xpjgge.wav"></audio>
<audio id="arcade3" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arcade_3_Jump_vehzg8.wav"></audio>
<audio id="arcade4" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190634/Arcade_4_Falling_qpajyk.wav"></audio>
<audio id="arcade5" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arcade_5_Crunch_sorgyc.wav"></audio>
<audio id="arcade6" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Arcade_6_jump_2_uafrfx.wav"></audio>
<script>
var song1 = $('#arcade1');
var song2 = $('#arcade2');
var song3 = $('#arcade3');
var song4 = $('#arcade4');
var song5 = $('#arcade5');
var song6 = $('#arcade6');
var audioArray1 = [song1, song2, song3, song4, song5, song6];
var i = -1;
$("a#arcade").click(function() {
  if (i >= 0) {
    audioArray1[i].currentTime = 0;
    audioArray1[i].trigger('pause');
  }
  i++;
  if (i >= audioArray1.length)
    i = 0;
  audioArray1[i].trigger('play');
});
</script>
<audio id="bubbles" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Bubbles_Home_Page_kjb3jf.wav"></audio>
<audio id="bubbles2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Bubbles_Home_Page_kjb3jf.wav"></audio>
<script>
var song1 = $('#bubbles');
var audioArray5 = [song1];
var i = -1;
$("a#bubble").click(function() {
  if (i >= 0) {
    audioArray5[i].currentTime = 0;
    audioArray5[i].trigger('pause');
  }
  i++;
  if (i >= audioArray5.length)
    i = 0;
  audioArray5[i].trigger('play');
});
</script>
<audio id="drinkbar1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/Drink_Bar_Sound_1_suhjm4.wav"></audio>
<audio id="drinkbar2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/Drink_Bar_Sound_2_orq3iv.wav"></audio>
<script>
var song1 = $('#drinkbar1');
var song2 = $('#drinkbar');
var audioArray2 = [song1, song2];
var i = -1;
$("a#drinkbar").click(function() {
  if (i >= 0) {
    audioArray2[i].currentTime = 0;
    audioArray2[i].trigger('pause');
  }
  i++;
  if (i >= audioArray2.length)
    i = 0;
  audioArray2[i].trigger('play');
});
</script>
<audio id="sign1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190632/NFTea_Land_Sign_nymfs6.wav"></audio>
<script type="text/javascript">
var song1 = $('#sign1');
var audioArray6 = [song1];
var i = -1;
$("a#sign").click(function() {
  if (i >= 0) {
    audioArray6[i].currentTime = 0;
    audioArray6[i].trigger('pause');
  }
  i++;
  if (i >= audioArray6.length)
    i = 0;

  audioArray6[i].trigger('play');
});
</script>
<audio id="pinball1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190631/Pinball_1_lcbsmo.wav"></audio>
<audio id="pinball2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/PinballBall_2_oniihf.wav"></audio>
<script>
var song1 = $('#pinball1');
var song2 = $('#pinball2');
var audioArray3 = [song1, song2];
var i = -1;
$("a#pinball").click(function() {
  if (i >= 0) {
    audioArray3[i].currentTime = 0;
    audioArray3[i].trigger('pause');
  }
  i++;
  if (i >= audioArray3.length)
    i = 0;
  audioArray3[i].trigger('play');
});
</script>
<audio id="prize1" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Prize_Room_1_ytsj16.wav"></audio>
<audio id="prize2" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Prize_Room_2_ubd4m2.wav"></audio>
<script>
var song1 = $('#prize1');
var song2 = $('#prize2');
var audioArray4 = [song1, song2];
var i = -1;
$("a#prize").click(function() {

  if (i >= 0) {
    audioArray4[i].currentTime = 0;
    audioArray4[i].trigger('pause');
  }
  i++;
  if (i >= audioArray4.length)
    i = 0;

  audioArray4[i].trigger('play');
});
</script>
<audio id="recycle" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629190630/Recycle_Machine_fge5zs.wav"></audio>
<script type="text/javascript">
var song1 = $('#recycle');
var audioArray7 = [song1];
var i = -1;
$("a#recycle1").click(function() {

  if (i >= 0) {
    audioArray7[i].currentTime = 0;
    audioArray7[i].trigger('pause');
  }
  i++;
  if (i >= audioArray7.length)
    i = 0;

  audioArray7[i].trigger('play');
});
</script>
<audio id="doorbottom" src="https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_2_tqsrl3.wav"></audio>
<script type="text/javascript">
var song1 = $('#metaldoorbott');
var audioArray8 = [song1];
var i = -1;
$("a#doorbottom").click(function() {

  if (i >= 0) {
    audioArray8[i].currentTime = 0;
    audioArray8[i].trigger('pause');
  }
  i++;
  if (i >= audioArray8.length)
    i = 0;

  audioArray8[i].trigger('play');
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

<script type="text/javascript">
$("#muteaudio").click(function() {
        var bool = $("audio").prop("muted");
        $("audio").prop("muted",!bool);
});
</script>



<script type="text/javascript">
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
  document.getElementById("sound1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1624298129/NFTea_Main_Day_song_pjpejd.mp3";
}else{
  document.getElementById("sound1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1629018126/NFTea_Main_Nighttime_song_huioam.mp3";
}
</script>

<script>
var date = new Date();
var hour = date.getHours();

var minutes = date.getMinutes();
const el = document.querySelector(".viewport-div");
const al = document.querySelector(".drinkbar");
const door = document.querySelector(".metaldoorbott");

if(hour >=7 && hour < 18) {
console.log(hour)
    	document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/61294ee350d0b77f38663805_NFTEA_homepage_Day_Closed_01.gif";
      	document.getElementById("drinkbar").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_3_x775rz.wav";
	document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
     	document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
     	el.style.backgroundImage =
       "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/60d0476f5b485d3d0ac65254_Tall_Boy_-_NFTEA_LAND_-_cloud_animation-small-export200.gif)";
	door.style.display = "block";
       
} else if (hour >= 18 && hour < 21) {
console.log(hour)

    	document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
	document.getElementById("drinkbar").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_3_x775rz.wav";         
	document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
    	document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
    	el.style.backgroundImage =
      "url(https://res.cloudinary.com/dh2ufbkjp/image/upload/v1628271809/Night_Clouds_seq_02_jpofwh.gif)";
	door.style.display = "block";
} else if ((hour >= 21 && hour <= 21) && (minutes >= 0 && minutes <= 30)) {
console.log(hour)
   document.getElementById("gif").src = "https://res.cloudinary.com/dh2ufbkjp/image/upload/v1631197608/NFTEA_LAND_CLOSED_BarOpen_9to930pm_poywvw.gif";
   el.style.backgroundImage = "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/612f66b141a07b960d68fffa_Starry_Night_V2.2.gif)";
   al.href = "https://discord.gg/eMtc3ABB";
   door.style.display = "none";
} else if ((minutes >= 30 && minutes <= 59) && (hour >= 21 && hour < 5)) {
console.log(hour)
   document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
	document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
	document.getElementById("drinkbar").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_3_x775rz.wav";     
	document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
	el.style.backgroundImage =
  	"url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/612f66b141a07b960d68fffa_Starry_Night_V2.2.gif)";
	door.style.display = "block";
} else if (hour >= 5 && hour < 7) {
console.log(hour)
   document.getElementById("gif").src = "https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif";
	document.getElementById("drinkbar").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_3_x775rz.wav";
	document.getElementById("prize1").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
     document.getElementById("prize2").src = "https://res.cloudinary.com/dh2ufbkjp/video/upload/v1631379553/Metal_Door_Rattle_1_wlxmmh.wav";
	door.style.display = "block";
el.style.backgroundImage =
  "url(https://uploads-ssl.webflow.com/60ae8c4857598e31ccef08c2/613a1412865fc84d51229463_NFTEA_LAND_CLOSED_Night.gif)";

}
</script>
