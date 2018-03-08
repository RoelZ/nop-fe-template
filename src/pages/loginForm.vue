<template>
  <div>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <div class="login-panel md-layout md-alignment-center">

    <form novalidate @submit.prevent="validateUser">

      <div class="md-layout-item md-layout md-alignment-center">
        <div class="md-layout-item md-size-50">
          <img src="../assets/media/images/logo-full.png">
        </div>
      </div>

      <md-field :class="getValidationClass('email')">
        <label for="email">Email</label>
        <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
        <span class="md-error" v-if="!$v.form.email.required">Please provide your email address</span>
        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email address</span>
      </md-field>

      <md-field>
        <label for="password">Password</label>
        <md-input type="password" name="password" id="password" v-model="form.password" :disabled="sending" />
        <span class="md-error" v-if="!$v.form.password.required">Please enter your password</span>
        <span class="md-error" v-else-if="!$v.form.password.password">Invalid password</span>
      </md-field>

      <md-checkbox v-model="form.boolean" class="md-primary">Remember login</md-checkbox>

      <md-button type="submit" class="md-raised md-primary" :disabled="sending">Login</md-button>

      <div class="md-layout md-alignment-center-space-around">
        <div class="md-layout-item">
          <router-link to="/dashboard">Forgot your username of password?</router-link>
        </div>
      </div>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was logged in with success!</md-snackbar>

    </form>

    </div>
  </div>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import {
      required,
      email
  } from 'vuelidate/lib/validators'

export default {
  name: 'loginForm',
  mixins: [validationMixin],
  data: () => ({
     form: {
         email: null,
         password: null,
         boolean: false
     },
      userSaved: false,
      sending: false,
      lastUser: null
  }),
  validations: {
    form: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    }
  },
  methods: {
    getValidationClass(fieldName){
      const field = this.$v.form[fieldName]

      if(field){
          return {
              'md-invalid': field.$invalid && field.$dirty
          }
      }
    },
    clearForm(){
        //this.$v.reset()   // returns TypeError: reset() not a function
        this.form.email = null,
        this.form.password = null
    },
    saveUser(){
        this.sending = true

        window.setTimeout(() => {
            this.lastUser = `${this.form.email}`
            this.userSaved = true
            this.sending = false
            this.$router.replace({ name: 'Dashboard' })
            this.clearForm()
        }, 1500)
    },
    validateUser(){
        this.$v.$touch()

        if(!this.$v.$invalid){
            this.saveUser()
        }
    }
  },
  props: {
      "message":
      {
          type: String,
          required: false,
          default: "Current page"
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
md-checkbox {
  display: flex;
}

template > div {
  margin-top:80px;
}
</style>
