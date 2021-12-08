define([
    "skylark-domx-velm",
    "skylark-domx-query",
	"./medias"
],function(velm,$,medias){

   // from ./medias
    velm.delegate([
        "controls",
        "currentTime",
        "duration",
        "ended",
        "muted",
        "paused",
        "played",
        "volume",
        "load",
        "play", 
        "stop",
        "pause",
    ], medias,{
    });

	return medias;
});