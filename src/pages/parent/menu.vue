<template>
<div data-sticky-container>
  <div class="top-bar" data-sticky data-options="marginTop:0;" style="width:100%">
    <div class="top-bar-left">
        <ul class="menu" data-dropdown-menu>
          <router-link tag="li" :to="{ name: 'index'}" active-class="active" exact>
            <a>صفحه اصلی</a>
          </router-link>
        </ul>
    </div>
    <div class="top-bar-right"><!-- Content --></div>
  </div>
</div>
    
</template>
