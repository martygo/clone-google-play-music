<template>
  <div class="browser-songs">
    <div class="song-cover">
      <img
        :src="
          'https://api.napster.com/imageserver/v2/albums/' +
            song.albumId +
            '/images/500x500.jpg'
        "
        :alt="song.albumId"
      />
    </div>
    <div class="song-items">
      <span id="song-album">{{ song.name }}</span>
      <span id="song-title">{{ song.artistName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      required: true,
      type: Object
    }
  }
};
</script>
