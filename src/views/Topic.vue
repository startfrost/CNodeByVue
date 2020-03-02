<template>
  <div id="topic" v-if="topic.id">
    <div id="title">{{ topic.title }}</div>
    <div id="topic-info">
      <span>作者 {{ topic.author.loginname }}</span>
      <span>{{ topic.visit_count }}次浏览</span>
      <span>来自 {{ topic.tab }}</span>
    </div>
    <div id="content" v-html="topic.content"></div>
    <div id="reply" v-for="reply of topic.replies" :key="reply.id">
      <span>{{ reply.author.loginname }}</span>
      <div v-html="reply.content"></div>
    </div>
  </div>
</template>

<script>
import { getTopic } from "../utils/apiEncapulation.js";

export default {
  name: "Topic",
  data() {
    return {
      topic: {}
    };
  },
  methods: {
    getTopicContent(id) {
      getTopic(id).then(
        result => {
          this.topic = result.data.data;
        },
        error => {
          console.log("出错了" + error);
        }
      );
    }
  },
  created() {
    this.getTopicContent(this.$route.params.id);
  }
};
</script>

<style>
</style>