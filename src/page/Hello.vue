<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template-form rule="required|email" name="邮箱" type="email" placeholder="Email"></template-form>
    <template-form rule="required|phone" name="手机号" type="phone" placeholder="Phone"></template-form>
    <div>
      <button class="button is-primary" @click="validateForm" type="button" name="button">提交</button>
      <router-link tag="button" :to="'/test/'">
        {{item}}
      </router-link>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import templateForm from '@/components/templateform'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'hello',
    components: {
      templateForm
    },
    data () {
      return {
        msg: 'From and Offline test',
        item: 'test'
      }
    },
    methods: {
      validateForm() {

      }
    },
    computed: {
      ...mapState([
        'messageObj',
        'errorObj'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
  @import '../assets/css/common.scss';

</style>
