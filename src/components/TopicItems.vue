<template>
  <div id="topic-items">
    <el-card
      class="topic-item"
      :body-style="{ padding: '0px' }"
      v-for="topic in topicList"
      :key="topic.id"
    >
      <a class="avatar">
        <img :src="topic.author.avatar_url" />
      </a>
      <span class="count">{{ topic.reply_count }} / {{ topic.visit_count }}</span>
      <span class="tab">{{ topic.tab }}</span>
      <span class="title">{{ topic.title }}</span>
      <!-- <span class="time">
        {{ topic.create_at }}
      </span>-->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TopicItems",
  data() {
    return {};
  },
  props: ["topicList"]
};
</script>

<style lang="scss" scoped>
.topic-item {
  width: 800px;
  margin: 0 auto;
  height: 50px;
  img {
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    margin: 10px;
  }
  span {
    line-height: 50px;
  }
}
</style>