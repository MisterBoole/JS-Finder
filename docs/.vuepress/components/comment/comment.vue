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
    const host = window.location.host;
    let clientObj = {
        clientID: 'c07ee92a8566eeb39de7',
        clientSecret: 'eeafde547b460f250d8a21a2407dd9086bdf1bcd',
      }
    if(host.indexOf('www') > -1) {
      clientObj = {
        clientID: 'c318a7e3e4a5bf46cff6',
        clientSecret: 'b1f422540b257b5d72e6c13a3240d10474ad11af',
      }
    }
    const commentConfig = {
      clientID: clientObj.clientID,
      clientSecret: clientObj.clientSecret,
      repo: 'JS-Finder',
      owner: 'MisterBoole',
      admin: ['MisterBoole']
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>

 