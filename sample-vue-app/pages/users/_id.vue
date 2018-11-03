<template>
  <section class="container">
    <div>
      <h3>{{ user.id }}</h3>
      <img :src="user.profile_image_url" alt="" width="120">
      <p>{{ user.description || 'No Description'}}</p>
      <p>
        <nuxt-link to="/">
          <small><b>トップへ戻る</b></small>
        </nuxt-link>
      </p>
      <h3>{{ user.id }} さんの投稿一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{ item.title }}</span>
          </h4>
          <div>{{ item.body.slice(0, 130) }} ...</div>
          <p><a :href="item.url" target="_blank">{{ item.url }}</a></p>
        </li>
      </ul>
    </div>
  </section>
  <!-- /.container -->
</template>

<script>
export default {
  head() {
    return {
      title: this.userId,
    };
  },

  async asyncData({ route, app }) {
    const userId = route.params.id;

    const [user, items] = await Promise.all([
      app.$axios.$get(`https://qiita.com/api/v2/users/${userId}`),
      app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${userId}`),
    ]);

    consle.log(user);

    return {
      userId,
      user,
      items,
    }
  }
}
</script>