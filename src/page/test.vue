<template lang='html'>
  <div>
    <jsform Typename="email" defaultname="Email" rule='required|email' Alias="邮箱" :IsPassword="text"></jsform>
    <jsform Typename="phone" defaultname="Phone" rule='required|phone' Alias="手机号" :IsPassword="text"></jsform>
    <jsform Typename="name" defaultname="Name" rule='required|alpha|min:3' Alias="用户名" :IsPassword="text"></jsform>
    <jsform Typename="password" defaultname="Password" rule='required|password|max:11' Alias="密码"
            :IsPassword="password"></jsform>
    <p>
      <button class="button is-primary" @click="validateForm" type="button" name="button">提交</button>
      <button class="button is-danger" @click="clearErrors" type="button" name="button">清除错误</button>
    </p>
  </div>
</template>

<script>
  import jsform from '@/components/jsform'
  import {mapState, mapActions} from 'vuex'
  import _ from '@/fetch/jsform'

  //  _.EnterDefalt('alpha',"只能包含字母");//只能使用部分已有的规则去自定义输出内容
  _.EnterRule('password', '密码必须为11位整数', /^((13|14|15|17|18)[0-9]{1}\d{8})$/, 11);

  export default {
    name: 'test',
    components: {
      jsform
    },
    data () {
      return {
        password: true,
        text: false
      }
    },
    computed: {
      ...mapState([
        'messageObj',
        'errorObj'
      ])
    },
    methods: {
      validateForm() {
        this.errorObj.forEach((obj, index) => {
          for (let key in obj) {
            this.messageObj.forEach((e, i) => {
              for (let k in e) {
                if (key == k) {
                  obj[key].validateAll({
                    [key]: e[k]
                  })
                }
              }
            })
          }
        })
      },
      clearErrors() {
        this.errorObj.forEach((obj, index) => {
          for (let key in obj) {
            obj[key].errors.clear()
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
