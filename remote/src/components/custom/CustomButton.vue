<script>
export default {
  name: "VueButton",
  props: {
    vueNav: String,
    onNavChange: {
      type: Function,
      required: false,
    },
  },

  data() {
    return {
      currentPath: this.vueNav || "home",

    };
  },
  watch: {
    currentPath: {
      handler: function (val, oldVal) {
       // call it in the context of your component object
        if(this?.onNavChange)
        this?.onNavChange(val)
      },
      deep: true,
    },
  },
  methods: {
    changePath(path) {
 
      this.currentPath =path;
    },
  },
};
</script>
<template>
  <div style="width: 100%;height: 10vh;display: flex; background-color:darkslategrey ; align-items: center;justify-content: space-between;padding:0 5px">
    <div  style="cursor: pointer;">Menu</div>
    This is a header from vue remote and path is {{ currentPath }}
    <div>
      <ul style="display: flex; text-decoration:none; list-style: none; gap: 5px;">
        <li style="cursor: pointer;" @click="changePath('home')">Home</li>
 
        <li style="cursor: pointer;" @click="changePath('About')">About</li>
        <li style="cursor: pointer;" @click="changePath('Profile')">Profile</li>
 
      </ul>
    </div>
  </div>
</template>
