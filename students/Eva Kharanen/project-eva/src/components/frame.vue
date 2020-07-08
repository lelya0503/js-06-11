<template>
    <div class="frame">
        <slot>This is the default content if nothing gets specified to go here</slot>
    </div>
</template>
<script>
    export default {
        name: 'Pause'
    }

</script>
<style>
    .frame {
        color: #0b5bb8;
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>