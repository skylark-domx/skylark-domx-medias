/**
 * skylark-domx-medias - The skylark html media library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-data"],function(n,t,r){function u(){return u}return t.mixin(u,{controls:function(n,t){if(void 0===t)return n.controls;n.controls=t},currentTime:function(n,t){if(void 0===t)return n.currentTime;n.currentTime=t},duration:function(n){return n.duration},ended:function(n){return n.ended},muted:function(n,t){if(void 0===t)return n.muted;n.muted=t},paused:function(n){return n.paused},played:function(n){return n.played},volume:function(n,t){if(void 0===t)return n.volume;n.volume=t},load:function(n,t){return t&&(n.src=t),n.load()},play:function(n){return n.play()},stop:function(n){return n.stop()},pause:function(n){n.pause()}}),n.attach("domx.medias",u)});
//# sourceMappingURL=sourcemaps/medias.js.map
