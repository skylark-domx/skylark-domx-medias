/**
 * skylark-domx-medias - The skylark html media library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-data"],function(n,e,u){function t(){return t}return e.mixin(t,{currentTime:function(n,e){if(void 0!==e)return n.currentTime;n.currentTime=e},duration:function(n){return n.duration},ended:function(n){return n.ended},muted:function(n){return n.muted},paused:function(n){return n.paused},played:function(n){return n.played},volume:function(n,e){if(void 0!==e)return n.volume;n.volume=e},load:function(n,e){return e&&(n.src=e),n.load()},play:function(){return media.play()},stop:function(){return media.stop()},pause:function(){this._video.pause()}}),n.attach("domx.medias",t)});
//# sourceMappingURL=sourcemaps/medias.js.map
