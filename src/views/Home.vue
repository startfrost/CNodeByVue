<template>
  <div id="home">
    <topic-items :topic-list="topicList"></topic-items>
  </div>
</template>

<script>
import TopicItems from "../components/TopicItems.vue";
import { getTopicItems } from "../utils/apiEncapulation.js";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      tab: "all",
      limit: 20,
      topicList: []
    };
  },
  components: {
    TopicItems
  },
  methods: {
    getTopics() {
      getTopicItems({
        page: this.page,
        tab: this.tab,
        limit: this.limit
      }).then(
        result => {
          this.topicList = result.data.data;
        },
        error => {
          console.log("出错了" + error);
        }
      );
    }
  },
  created() {
    this.getTopics();
  }
};
</script>

<style>
</style>