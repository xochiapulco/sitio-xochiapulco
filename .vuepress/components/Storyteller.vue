<template>
    <div class="player">
        <audio controls>
            <source :src="$withBase(file)" type="audio/mpeg" controls controlsList="nodownload">
            Audio no soportado por tu navegador.
        </audio>
    </div>
</template>

<script>
    export default {
        props: ['file']
    }
</script>

<style lang="css" scoped>
    div.player {
        text-align: center;
        padding-bottom: 1.5em;
    }
</style>