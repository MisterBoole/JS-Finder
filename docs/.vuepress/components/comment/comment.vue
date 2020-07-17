<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    const commentConfig = {
      clientID: 'bf765c690b5345ced07f',
      clientSecret: 'ef0b442406287f1c2451703c7d0ed2a2e7e2933f',
      repo: 'JS-Finder',
      owner: 'MisterBoole',
      admin: ['MisterBoole']
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>

 