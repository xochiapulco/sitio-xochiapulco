<template>
    <div class="custommap">
        <div>
            <iframe
              :src="url"
              :width="w"
              :height="h"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"></iframe>
        </div>
        <div class="caption" >{{ label }}</div>
    </div>
</template>

<script>
    export default {
        props: ['url', 'w', 'h', 'label']
    }
</script>

<style scoped>
    div.custommap {
        text-align: center;
    }

    div.custommap div.caption {
        font-size:12px;
    }
</style>