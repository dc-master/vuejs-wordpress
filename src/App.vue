<template>
  <div id="app">
    <app-menu></app-menu>
    <br>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell larg-9">
                <transition enter-active-class="animated slideInUp">
                <router-view></router-view>
                </transition>
            </div>
            <div class="cell larg-3">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import AppMenu from './pages/parent/menu';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appMenu: AppMenu,
  }
}
</script>

<style>
</style>
