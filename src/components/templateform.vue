<template lang='html'>
  <div class="templateForm">
    <input v-model="content" v-validate :data-vv-rules="rule" :data-vv-as="name" :name="type" type="text"
           :placeholder="placeholder" :class="{errorname:error,tempate:right}" @keyup="postmessage">
    <!--<span v-show="error" class="erroricon"></span>-->
    <span v-show="error" class="errorfont">{{ errormessage }}</span>
  </div>
</template>

<script lang='babel'>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'templateForm',
    props: {
      type: String,
      name: String,
      rule: String,
      placeholder: String
    },
    data () {
      return {
        content: "",
        right: true
      }
    },
    methods: {
      postmessage(){
        this.actionMessage({
          [this.type]: this.content
        });
        this.actionError({
          [this.type]: this.errors
        });
      },
      ...mapActions([
        'actionMessage',
        'actionError'
      ])
  }
  ,
  computed:{
    error()
    {
      return this.errors.has(this.type)
    }
  ,
    errormessage()
    {
      return this.errors.first(this.type)
    }
  ,
  ...
    mapState([
      'messageObj',
      'errorObj'
    ])
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .erroricon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../assets/images/error.png") no-repeat;
    vertical-align: text-bottom;
  }

  .errorfont {
    color: #ff3860;
  }

  .tempate {
    width: 300px;
    height: 30px;
    margin-bottom: 10px;
    outline: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #363636;
  }

  .errorname {
    border-color: #ff3860;
  }
</style>
