<template>
  <div>
    <header>
      <h1 class="title">
        トレログ！
      </h1>
      <address>
        developed by <a href="https://github.com/wizardry/notitle1" target="_blank">@wiz_rein</a>
      </address>
    </header>
    <div class="page-container">
      <nav class="global-nav">
        <ul>
          <li><nuxt-link to="/"><img src="~/assets/images/nav_dashboard.svg" alt=""></nuxt-link></li>
          <li><nuxt-link to="/users"><img src="~/assets/images/nav_users.svg" alt=""></nuxt-link></li>
          <li><nuxt-link to="/trainings"><img src="~/assets/images/nav_trainings.svg" alt=""></nuxt-link></li>
          <li><nuxt-link to="/help"><img src="~/assets/images/nav_help.svg" alt=""></nuxt-link></li>
        </ul>
      </nav>
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">

@import "~/assets/scss/variables.scss";

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.title {
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #324252;
  border-bottom: 1px solid #324252;
}

.page-container {
  display: flex;
}

.global-nav {
  padding: 8px;
  width: 42px;
  box-shadow: 0 1px 1px #ccc; 
  
  li {
    margin-top: 8px;
  }

  a {
    display: block;
  }

  img {
    width: 100%;
  }
}
</style>
