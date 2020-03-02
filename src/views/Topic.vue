<template>
  <div id="topic">
    <div>{{ content }}</div>
  </div>
</template>

<script>
import { getTopic } from "../utils/apiEncapulation.js";

export default {
  name: "Topic",
  data() {
    return {
      topicId: this.$route.params.id,
      content: ""
    };
  },
  methods: {
    getTopicContent(id) {
      getTopic(id).then(
        result => {
          this.content = result.data.data.content;
        },
        error => {
          console.log("出错了" + error);
        }
      );
    }
  },
  created() {
    this.getTopicContent(this.topicId);
  }
};
</script>

<style>
</style>