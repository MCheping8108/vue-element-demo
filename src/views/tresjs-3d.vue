<script lang="ts" setup>
</script>
<template>
  <TresCanvas class="canvas" id="app" clearColor="blue">
    <TresPerspectiveCamera
      :position="[3,3,3]"
      :fov="45"
      :look-at="[0, 0, 0]"
    />
    <TresMesh>
      <TresBoxGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
