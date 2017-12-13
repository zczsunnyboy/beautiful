<template lang='html'>
  <div>
    <label>{{defaultname}}</label>
    <p>
      <span v-if="IsPassword">
        <input v-model="content" :name="Typename" :class="{'input': true, 'is-danger': errorJudge }" type="password"
               :placeholder="defaultname">
      </span>
      <span v-else>
        <input v-model="content" :name="Typename" :class="{'input': true, 'is-danger': errorJudge }" type="text"
               :placeholder="defaultname">
      </span>
      <span v-show="errorJudge">{{ errormessage }}</span>
    </p>
  </div>
</template>

<script lang='babel'>
  import { Validator } from 'vee-validate';
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'jsform',
    props: {
      Typename: String,
      defaultname: String,
      rule: String,
      Alias: String,
      IsPassword: Boolean
    },
    data() {
      return {
        content: '',
        errors: null
      };
    },
    watch: {
      content(value) {
        this.validator.validate(this.Typename, value);

        this.actionMessage({
          [this.Typename]: value
        })
      }
    },
    computed: {
      errorJudge(){
        return this.errors.has(this.Typename)
      },
      errormessage(){
        return this.errors.first(this.Typename)
      }
    },
    methods: {
      ...mapActions([
        'actionMessage',
        'actionError'
      ])
  }
  ,
  created()
  {
    this.validator = new Validator();

    this.validator.attach({
      name: this.Typename,
      rules: this.rule,
      alias: this.Alias
    });

    this.$set(this, 'errors', this.validator.errors);

    this.actionError({
      [this.Typename]: this.validator
    });
    this.actionMessage({
      [this.Typename]: this.content
    })
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
