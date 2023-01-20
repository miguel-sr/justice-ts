<template>
  <div>
    <LoadingComponent v-if="!membersIsLoaded || !sponsorsIsloaded" />
    <NavbarComponent />
    <HeroComponent />
    <AboutComponent />
    <MembersComponent @membersLoaded="membersLoaded" />
    <SponsorsComponent @sponsorsLoaded="sponsorsLoaded" />
    <FooterComponent />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>

<style></style>
