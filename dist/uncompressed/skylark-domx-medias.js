/**
 * skylark-domx-medias - The skylark html media library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-domx-medias/medias',[
    "skylark-langx/skylark",
    "skylark-langx/langx",
    "skylark-domx-data"
], function(skylark,langx,datax) {
      /*
        var TEST_VID  = (function () {
            const video = document.createElement('video');
            const track = document.createElement('track');
            track.kind = 'captions';
            track.srclang = 'en';
            track.label = 'English';
            video.appendChild(track);
            return video;
          })();

        medias.isSupported = function () {
            try {
                TEST_VID.volume = 0.5;
            } catch (e) {
                return false;
            }
            return !!TEST_VID && TEST_VID.canPlayType);
        };

        medias.canPlayType = function (type) {
            return TEST_VID.canPlayType(type);
        };

        medias.canControlVolume = function () {
            try {
                const volume = TEST_VID.volume;
                TEST_VID.volume = volume / 2 + 0.1;
                return volume !== TEST_VID.volume;
            } catch (e) {
                return false;
            }
        };

        medias.canMuteVolume = function () {
            try {
                const muted = TEST_VID.muted;
                TEST_VID.muted = !muted;
                if TEST_VID.muted) {
                    Dom.setAttributeTEST_VID, 'muted', 'muted');
                } else {
                    Dom.removeAttributeTEST_VID, 'muted', 'muted');
                }
                return muted !== TEST_VID.muted;
            } catch (e) {
                return false;
            }
        };
        
        medias.canControlPlaybackRate = function () {
            if (browser.IS_ANDROID && browser.IS_CHROME && browser.CHROME_VERSION < 58) {
                return false;
            }
            try {
                const playbackRate = TEST_VID.playbackRate;
                TEST_VID.playbackRate = playbackRate / 2 + 0.1;
                return playbackRate !== TEST_VID.playbackRate;
            } catch (e) {
                return false;
            }
        };
        medias.canOverrideAttributes = function () {
            try {
                const noop = () => {
                };
                Object.defineProperty(document.createElement('video'), 'src', {
                    get: noop,
                    set: noop
                });
                Object.defineProperty(document.createElement('audio'), 'src', {
                    get: noop,
                    set: noop
                });
                Object.defineProperty(document.createElement('video'), 'innerHTML', {
                    get: noop,
                    set: noop
                });
                Object.defineProperty(document.createElement('audio'), 'innerHTML', {
                    get: noop,
                    set: noop
                });
            } catch (e) {
                return false;
            }
            return true;
        };
        medias.supportsNativeTextTracks = function () {
            return browser.IS_ANY_SAFARI || browser.IS_IOS && browser.IS_CHROME;
        };
        medias.supportsNativeVideoTracks = function () {
            return !!TEST_VID && TEST_VID.videoTracks;
        };
        medias.supportsNativeAudioTracks = function () {
            return !!TEST_VID && TEST_VID.audioTracks;
        };


        Html5.resetMediaElement = function (el) {
            if (!el) {
                return;
            }
            const sources = el.querySelectorAll('source');
            let i = sources.length;
            while (i--) {
                el.removeChild(sources[i]);
            }
            el.removeAttribute('src');
            if (typeof el.load === 'function') {
                (function () {
                    try {
                        el.load();
                    } catch (e) {
                    }
                }());
            }
        };

      */
            function medias() {
         return medias;
      }
      //events:play,pause,loadedmetadata,timeupdate,volumechange,
     langx.mixin(medias,{
        controls : function(media,v) {
            if (v === undefined) {
                return media.controls;
            } else {
                media.controls = v;
            }
        },
        currentTime : function(media,t) {
            if (t === undefined) {
                return media.currentTime;
            } else {
                media.currentTime = t;
            }
        },

        duration : function(media) {
            return media.duration;
        },

        ended : function(media) {
            return media.ended;
        },

        muted : function(media) {
            return media.muted;
        },

        paused : function(media) {
            return media.paused;
        },

        played : function(media) {
            return media.played;
        },

        volume : function(media,v) {
            if (v === undefined) {
                return media.volume;
            } else {
                media.volume = v;
            }
        },


        load : function(media,src) {
            if (src) {
                media.src = src;
            }
            return media.load();
        },

        play : function(media) {
          return media.play();
        },

        stop : function(media) {
          return media.stop();
        },

        pause : function(media) {
          this._video.pause();      
        }


     });


      return skylark.attach("domx.medias" , medias);
  
});

define('skylark-domx-medias/main',[
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
define('skylark-domx-medias', ['skylark-domx-medias/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-domx-medias.js.map
