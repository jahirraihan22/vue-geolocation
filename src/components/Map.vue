<template>
  <div>
    <div style="display: flex; align-items:center; justify-content: center">
      <div>
        <h1>Your coordinates</h1>
        <p>
          {{ myCoordinates.lat }} latitude, {{ myCoordinates.lng }} longitude
        </p>
      </div>
    </div>

    <GmapMap
      :center="myCoordinates"
      :zoom="7"
      style="width: 640px; height: 360px;margin:32px auto"
    >
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      mapCoordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((myCoordinates) => {
        this.myCoordinates = myCoordinates;
      })
      .catch((error) => {
        alert(error);
      });
  },
};
</script>
