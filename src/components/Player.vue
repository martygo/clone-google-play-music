<template>
  <div class="container">
    <Playlist
      v-for="song in songs"
      :key="song.albumId"
      :song="song"
      @click="controls.play(song)"
    />
  </div>

  <div class="player">
    <div class="thumbnail">
      <div class="cover">
        <img
          :src="
            'https://api.napster.com/imageserver/v2/albums/' +
              playCurrent.albumId +
              '/images/500x500.jpg'
          "
          :alt="playCurrent.albumId"
        />
        <div class="details">
          <h3>{{ playCurrent.name }}</h3>
          <p>{{ playCurrent.artistName }}</p>
        </div>
      </div>
      <div class="audio-player">
        <div class="prev-control">
          <i class="fa fa-step-backward" @click="controls.prev"></i>
        </div>

        <div class="play-pause-control">
          <i class="fa fa-play" v-if="!isPlay" @click="controls.play"></i>
          <i class="fa fa-pause" v-else @click="controls.pause"></i>
        </div>

        <div class="next-control">
          <i class="fa fa-step-forward" @click="controls.next"></i>
        </div>
      </div>

      <div class="sound-controls">
        <i
          class="fa fa-volume-up"
          v-if="currentVolume"
          @click="controls.mutedOn"
        ></i>
        <i class="fa fa-volume-off" v-else @click="controls.mutedOff"></i>
        <i class="fa fa-cog"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import api from "@/services/index.js";
import Playlist from "@/components/Playlist.vue";

export default {
  components: {
    Playlist
  },

  setup() {
    const playCurrent = ref([]);
    const index = ref(0);
    const isPlay = ref(false);
    const currentVolume = ref(true);

    const songs = ref([]);

    const player = new Audio();

    onMounted(() => {
      getTracks();
    });

    const getTracks = async () => {
      try {
        const res = await api.get("tracks/top");
        const tracks = res.data.tracks;

        songs.value = tracks;
        playCurrent.value = tracks[index.value];

        player.src = playCurrent.value.previewURL;
      } catch (err) {
        console.log(err);
      }
    };

    const controls = {
      play(song) {
        if (typeof song.previewURL != "undefined") {
          playCurrent.value = song;
          player.src = playCurrent.value.previewURL;
        }

        player.play();
        isPlay.value = true;
      },

      pause() {
        player.pause();
        isPlay.value = false;
      },

      prev() {
        index.value--;

        if (index.value < songs.value.length - 1) {
          index.value = 0;
        }

        playCurrent.value = songs.value[index.value];
        controls.play(playCurrent.value);
      },

      next() {
        index.value++;

        if (index.value > songs.value.length - 1) {
          index.value = 0;
        }

        playCurrent.value = songs.value[index.value];
        controls.play(playCurrent.value);
      },

      mutedOn() {
        currentVolume.value = false;
        player.volume = 0;
      },

      mutedOff() {
        currentVolume.value = true;
        player.volume = 1.0;
      }
    };

    return {
      playCurrent,
      index,
      isPlay,
      currentVolume,
      songs,
      player,
      getTracks,
      controls
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 30px 0 30px;
}

.browser-songs {
  width: 175px;
  height: 260px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid rgb(163, 163, 163);
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.song-cover img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.song-items {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.song-items span#song-album {
  font-weight: bold;
}

.player {
  position: fixed;
  bottom: 0;
  clear: both;
  width: 100%;
  background: #f9f8f7;
  border-bottom: 3px solid #f08125;
}

.thumbnail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.cover {
  display: flex;
  align-items: center;
  align-content: center;
}

.cover img {
  width: 80px;
  object-fit: cover;
}

.details {
  margin-left: 10px;
}

.details h1 {
  font-weight: Medium;
  font-family: "Noto Sans JP", sans-serif;
}

.audio-player {
  display: flex;
}

.play-pause-control {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #ef6c00;
}

.prev-control i {
  font-size: 15px;
  margin: 10px 30px 0 0;
}

.next-control i {
  font-size: 15px;
  margin: 10px 0 0 30px;
}

.play-pause-control i {
  margin: 10px 10px 0 15px;
  color: white;
}

.sound-controls {
  margin-right: 40px;
}

.sound-controls i.fa-volume-up {
  margin-right: 10px;
}

.sound-controls i.fa-volume-off {
  margin-right: 10px;
}
</style>
