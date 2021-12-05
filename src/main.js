define([
    "skylark-domx-velm",
    "skylark-domx-query",
	"./medias"
],function(velm,$,medias){

   // from ./medias
    velm.delegate([
        "muted",
        "paused",
        "played",
        "load",
        "play", 
        "stop",
        "pause",
        "height",
        "marginExtents",
        "marginRect",
        "marginSize",
        "offsetParent",
        "paddingExtents",
        "pagePosition",
        "pageRect",
        "relativePosition",
        "relativeRect",
        "scrollIntoView",
        "scrollLeft",
        "scrollTop",
        "pageSize",
        "width"
    ], medias,{
    });

	return medias;
});