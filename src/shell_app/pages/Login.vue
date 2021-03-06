<template>
  <div class='login'>

    <md-card>
      <md-card-content>
        <form novalidate @submit.stop.prevent="login">
          <div>
            <md-icon class="login-icon">person</md-icon>
          </div>
          <p class="md-body-1 login-text">Welcome to DiSARM</p>
          <p class="md-body-1 login-text login-error" v-if="error">{{error}}</p>

          <md-input-container>
            <label>Username</label>
            <md-input v-model='username' ref='username' required type="email"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Password</label>
            <md-input v-model="password" required type="password"></md-input>
          </md-input-container>

          <div v-if="ui_edit_api_url">
            <md-input-container>
              <label>API URL</label>
              <md-input v-model="updated_api_url"></md-input>
            </md-input-container>
            <md-button @click="reset_api_url">Reset</md-button>
          </div>

          <md-button class="md-accent md-raised login-button"
                     :disabled="$loading.isLoading('shell:login') || !can_login"
                     type="submit">
            Login
          </md-button>
          <md-button @click="ui_edit_api_url = !ui_edit_api_url" v-if="!ui_edit_api_url">
            Edit API URL
          </md-button>
        </form>

      </md-card-content>
    </md-card>
    <p>
      Version: {{commit_hash}}
      <span
        class='local_personalised_instance_id'
        @click="open_personalised_instance_id"
      >
        <span v-if="local_personalised_instance_id !== 'default'">{{local_personalised_instance_id}}</span>
        <md-icon :class="{'md-warn': local_personalised_instance_id !== 'default'}">local_laundry_service</md-icon>
      </span>
    </p>

    <md-dialog-prompt
      md-title="Generate or enter a personalised instance ID"
      md-content="Please only change this if you know what you're doing, e.g. for training or testing."
      md-ok-text="OK"
      md-cancel-text="Use default"
      @close="close_personalised_instance_id"
      v-model.trim="local_personalised_instance_id"
      ref="local_personalised_instance_id">
    </md-dialog-prompt>


  </div>
</template>

<script>

  import {AuthController} from 'shell_app/models/auth/controller'
  import BUILD_TIME from 'config/build-time'
  import {generate_personalised_instance_id} from 'lib/debug/personalised_instance_id_generator'

  export default {
    data() {
      return {
        error: '',
        username: '',
        password: '',
        updated_api_url: '',
        ui_edit_api_url: false,
        raw_local_personalised_instance_id: 'default',
      }
    },
    computed: {
      api_url() {
        return this.$store.state.api_url
        },
      user() {
        return this.$store.state.user
      },
      can_login() {
        return this.username_valid && this.password_valid
      },
      username_valid() {
        return this.username.length > 0
      },
      password_valid() {
        return this.password.length > 0
      },
      local_personalised_instance_id: {
        get() { return this.raw_local_personalised_instance_id },
        set(value) { this.raw_local_personalised_instance_id = value.replace(/\s/g,'-') },
      },
      commit_hash() {
        return BUILD_TIME.VERSION_COMMIT_HASH_SHORT
      },
    },
    mounted() {
      this.$store.commit('reset_store')
      this.updated_api_url = this.api_url;

      this.$nextTick(() => this.$refs.username.$el.focus())

      if (this.user) {
        this.$router.push({name: 'shell:instance_configs'})
      }

      this.local_personalised_instance_id = this.$store.state.personalised_instance_id
    },
    methods: {
      reset_api_url() {
        this.$store.commit('reset_api_url');
        this.updated_api_url = this.api_url;
      },
      open_personalised_instance_id() {
        if (this.local_personalised_instance_id === 'default') {
          this.local_personalised_instance_id = generate_personalised_instance_id()
        }
        this.$refs.local_personalised_instance_id.open()
      },
      close_personalised_instance_id(type) {
        if (type === 'cancel') {
          this.local_personalised_instance_id = 'default'
        }
      },
      validate_login_request() {
        if (!this.username_valid) {
          this.error = 'Please enter a username'
          return false
        }

        if (!this.password_valid) {
          this.error = 'Please enter a password'
          return false
        }

        return true
      },
      login() {
        if (this.api_url !== this.updated_api_url) {
          this.$store.commit('set_api_url', this.updated_api_url);
        }
        this.$loading.startLoading('shell:login')
        this.error = ''

        if (!this.validate_login_request()) return

        const credentials = {
          username: this.username,
          password: this.password,
          personalised_instance_id: this.local_personalised_instance_id
        }

        AuthController.login(credentials)
          .then((user) => {
            this.$store.commit('set_personalised_instance_id', this.local_personalised_instance_id)
            this.$router.push({name: 'shell:instance_configs'})
            // dimension3 is the dimension we use for the user attribute we send to GA. Could refactor.
            // this.$ga.set('dimension3', `${this.$store.state.meta.user.username}/${this.$store.state.meta.user.name}`)
            this.$loading.endLoading('shell:login')
          })
          .catch(e => {
            this.$loading.endLoading('shell:login')

            // 401 from server
            if (e.response && e.response.status === 401) {
              return this.error = e.response.data
            }

            // Anything with an error property
            if (e.error) {
              return this.error = e.error
            }

            // Some other error, best to log it out and take a look
            console.log(e)
            this.error = 'Sorry, cannot login. Network error. Please retry.'
          })
      },
    }
  }

</script>

<style>
  .login {
    max-width: 500px;
    margin: 1em auto;
    padding: 0 0.5em;
  }

  .login-icon {
    margin: 0 auto;
    display: block;
    height: 50px;
    width: 50px;
    font-size: 50px;
  }

  .login-text {
    padding-top: 0.5em;
    text-align: center;
  }

  .login-error {
    color: red;
  }

  .login-button {
    margin: 0 auto;
    display: block;
  }

  .text-center {
    text-align: center;
  }

  .local_personalised_instance_id {
    float: right;
    color: #d4d4d4;
    cursor: pointer;
  }


</style>
