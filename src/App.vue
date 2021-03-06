<template class="main">
  <header>
    <div class="my-library">
      <a href="">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">My Library</a>
    </div>

    <div class="search-input">
      <div id="icon-search">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <form action="">
        <input type="text" placeholder="Search music" />
      </form>
    </div>

    <div class="user-avatar">
      <div class="img-avatar">
        <img src="./assets/avatar.png" alt="avatar" />
      </div>
    </div>
  </header>

  <div class="sub-menu">
    <div class="category">
      <a href="">PLAYLISTS</a>
      <a href="">STATIONS</a>
      <a href="">ARTISTS</a>
      <a href="">ALBUMS</a>
      <a href="">SONGS</a>
      <a href="">GENRES</a>
    </div>

    <div class="listen-category">
      <a href="">10 albums</a>
      <a href=""> <i class="fa fa-random" aria-hidden="true"></i> SHUFFLE</a>
    </div>
  </div>

  <!-- play -->
  <Player />
</template>

<script>
import Player from "@/components/Player.vue";

export default {
  name: "App",
  components: { Player }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  border: 3px solid #f08125;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ef6c00;
}

.my-library a > i {
  margin-left: 30px;
  margin-right: 10px;
  line-height: 20px;
}

.my-library a {
  color: white;
}

#icon-search {
  position: absolute;
  width: 10px;
  color: white;
  padding-top: 8px;
  padding-left: 12px;
  background-color: #f28328;
}

.search-input input {
  width: 650px;
  color: white;
  appearance: none;
  border: none;
  outline: none;
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 8px;
  background-color: #f28328;
}

input::placeholder {
  color: #fad2ad;
}

input:focus {
  border: none;
  outline: none;
}

.search-input {
  display: flex;
}

.user-avatar {
  color: #fff;
  margin-right: 30px;
}

.img-avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  background-color: yellowgreen;
  border-radius: 30px;
}

.img-avatar img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  object-fit: cover;
}

/* submenu */
.sub-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 55px;
  background-color: #ef6c00;
}

.category {
  margin-left: 50px;
}

.category a {
  color: #fff;
  margin-right: 10px;
}

.listen-category {
  margin-right: 25px;
}

.listen-category a {
  color: #fff;
  margin-right: 15px;
}

/* browser songs */
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
</style>
