<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h4>
          <span>{{ item.title }}</span>
          <nuxt-link :to="`/users/${item.user.id}`">
            {{ item.user.id }}
          </nuxt-link>
        </h4>
        <div>{{ item.body.slice(0, 130) }} ...</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     items: [],
  //   }
  // },

  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js');

    console.log(items);

    return {
      items,
    };
  }
}
</script>

<style>
h4 {
  border-bottom: 1px solid #999;
}
</style>

