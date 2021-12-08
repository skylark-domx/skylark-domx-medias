define([
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

        muted : function(media,v) {
            if (v === undefined) {
                return media.muted;
            } else {
                media.muted = v;
            }
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
          media.pause();      
        }


     });


      return skylark.attach("domx.medias" , medias);
  
});
