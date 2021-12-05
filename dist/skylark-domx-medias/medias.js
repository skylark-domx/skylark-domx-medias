/**
 * skylark-domx-medias - The skylark html media library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-data"],function(n,t,a){function u(){return u}return t.mixin(u,{muted:function(n){return n.muted},paused:function(n){return n.paused},played:function(n){return n.played},load:function(n){return n.load()},play:function(){return media.play()},stop:function(){return media.stop()},pause:function(){this._video.pause()}}),n.attach("domx.medias",u)});
//# sourceMappingURL=sourcemaps/medias.js.map
