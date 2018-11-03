<template>
  <div>
    <dl>
        <dt>id1</dt><dd>{{ id1 }}</dd>
        <dt>id2</dt><dd>{{ id2 }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    const id1 = this.$route.params.id1;
    const id2 = this.$route.params.id2;

    return {
      id1,
      id2,
    }
  }
}
</script>