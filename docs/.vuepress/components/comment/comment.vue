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
      clientID: 'f420fbfb810fb71b3bbc',
      clientSecret: '2cab139253003739f7253c5ee5378ff192e1b097',
      repo: 'JS-Finder',
      owner: 'MisterBoole',
      admin: ['MisterBoole']
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>

 