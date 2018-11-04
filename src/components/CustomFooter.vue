<template>
  <footer>
    <h2 class="fancy-title">Deli, da bodo jokali še drugi!</h2>
    <div class="social-icons">
      <a target="_blank" :href="links.twitter">
        <svg width="72" height="72" fill="#fff" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258
            146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61
            5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88
            44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236
            102 109-21 205-78-37 115-142 178 93-10 186-50z"
          ></path>
        </svg>
      </a>
      <a target="_blank" :href="links.facebook">
        <svg width="72" height="72" fill="#fff" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39
            296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
          ></path>
        </svg>
      </a>
      <a target="_blank" :href="links.email">
        <svg width="72" height="72" fill="#fff" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101
            87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48
            92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468
            325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54
            -38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78
            41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
          ></path>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  computed: {
    links() {
      const link = encodeURIComponent(document.location.href);
      const title = encodeURIComponent('Stanovanje = Sanje?');
      const text = 'MANJKAAAA!!!';
      const hashtags = '#stanovanjesanje';
      const FACEBOOK_BASE_URL = 'https://www.facebook.com/dialog/feed?app_id=301375193309601';
      const TWITTER_BASE_URL = 'https://twitter.com/intent/tweet';

      return {
        facebook: `${FACEBOOK_BASE_URL}&redirect_uri=${link}&link=${link}&ref=responsive&name=${title}`,
        twitter: `${TWITTER_BASE_URL}?text=${encodeURIComponent(`${text} ${hashtags} ${link}`)}`,
        email: `mailto:?subject=${title}&body=${text} ${link}`,
      };
    },
  },
};
</script>

<style scoped>
footer {
  background: #7371fc;
  height: 345px;
  color: #ffffff;
  text-align: center;
}

.fancy-title {
  border-bottom-color: rgba(234,243,0,0.5);
  margin-top: 68px;
  margin-bottom: 78px;
}

.social-icons a:not(:first-child) {
  margin-left: 72px;
}
</style>
