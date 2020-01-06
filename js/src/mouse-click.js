var a_idx = 0;

var a = new Array();
var f_colors = new Array();
var scripts = document.getElementsByTagName("script");
for (var i=0; i< scripts.length;i++) {
    var script = scripts[i];
    if (script && script.getAttribute("src") && script.getAttribute("src").indexOf("mouse-click.js")>-1 && script.getAttribute("content")) {
        a = JSON.parse(script.getAttribute("content"));
        f_colors = JSON.parse(script.getAttribute("color"));
    }
}

jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("🌱","just do it","🌾","🍀","don''t give up","🍂","🌻","try it again","🍃","never say die","🌵","🌿","🌴");
        f_colors = new Array("rgb(121,93,179)","rgb(76,180,231)"
          ,"rgb(184,90,154)"
          ,"rgb(157,211,250)"
          ,"rgb(255,0,0)"
          ,"rgb(242,153,29)"
          ,"rgb(23,204,16)"
          ,"rgb(222,0,0)"
          ,"rgb(22,36,92)"
          ,"rgb(127,24,116)"
          ,"rgb(119,195,79)"
          ,"rgb(4,77,34)"
          ,"rgb(122,2,60)");
		var $i = $("<span/>").text(a[a_idx]);
        
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,y = e.pageY;
        $i.css({
            "z-index": 100000000,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": f_colors[a_idx]});

        $("body").append($i);
        
        $i.animate({
            "top": y - 180,
            "opacity": 0},1500,function() {$i.remove();});
    });
});