<template>
  <keep-alive>
    <md-dialog ref="help" class="help">
      <md-dialog-title>Help</md-dialog-title>

      <md-dialog-content>
        <a v-if='support_chat_link' :href="support_chat_link" class="no-underline" target="_blank">
          <md-icon>chat</md-icon>
          Start WhatsApp support chat
        </a>

        <div v-html='markdown_content'></div>

      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="close_help">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </keep-alive>
</template>

<script>
  import {get} from 'lodash'

  const markdown_content = require('html-loader!markdown-loader!../help_articles/help.md')

  export default {
    name: 'help',
    data() {
      return {
        markdown_content,
      }
    },
    computed: {
      support_chat_link() {
        const support_number = get(this.$store, 'state.instance_config.instance.support_number', false)
        if (!support_number) return false
        return `https://wa.me/${support_number}`
      }
    },
    mounted() {
      this.$root.$on('help:show', () => this.$refs.help.open())
    },
    methods: {
      close_help() {
        this.$refs.help.close()
      },
    }
  }
</script>

<style scoped>
  .applet_container {
    padding: 10px;
    width: 100%;
  }

  .help > .md-dialog {
    min-width: 90%;
    height: 90%;
  }

  .md-dialog p {
    margin-bottom: 5px;
  } 

  .no-underline:hover {
    text-decoration: none !important;
  }
</style>
