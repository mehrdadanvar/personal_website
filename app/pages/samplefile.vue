<template>
    <DashNav />
</template>

<script setup>
let response = await $fetch("/api/summary");
</script>
