define([
    "skylark-langx/skylark",
    "skylark-langx/langx",
    "skylark-domx-data"
], function(skylark,langx,datax) {
      function medias() {
         return medias;
      }

     langx.mixin(medias,{

        muted : function(media) {
            return media.muted;
        },

        paused : function(media) {
            return media.paused;
        },

        played : function(media) {
            return media.played;
        },

        load : function(media) {
          return media.load();
        },

        play : function() {
          return media.play();
        },

        stop : function() {
          return media.stop();
        },

        pause : function() {
          this._video.pause();      
        }


     });


      return skylark.attach("domx.medias" , medias);
  
});
