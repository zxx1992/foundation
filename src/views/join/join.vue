<template>
    <div style="background-color: #fff;">
      <a class="th">
        <img src="/src/assets/bac.jpg" width="400" height="300"/>
      </a>
      <!-- 公司介绍 -->
      <ComInfo></ComInfo>
      <!-- 我们的核心价值观 -->
      <Core></Core>
      <!-- 我们的使命 -->
      <Mission></Mission>
      <!-- 招聘 -->
      <Join></Join>
    </div>
  </template>
  <script>
  import Core from "./component/core";
  import ComInfo from "./component/cominfo.vue";
  import Join from "./component/join";
  import Mission from "./component/mission";
  export default {
    components: { Core, ComInfo, Join, Mission }
  };
  </script>
  