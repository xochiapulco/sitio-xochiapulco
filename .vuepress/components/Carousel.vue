<template>
    <div class="card">
        <img :src="picture[0].img" :alt="picture[0].alt" class="pic" />
        <div class="container">
            <div class="card-title">
                {{ picture[0].header }}
            </div>
            <div class="card-body">
                {{ picture[0].excerpt }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data: () => {
        return {
            picture: [
                {
                    img: '/img/sobrevivientes-color.jpg',
                    alt: 'Últimos sobrevivientes del 5 de mayo de 1862.',
                    header:
                        'Juan José Naranjo y Juan José Miranda (de cotón negro).',
                    excerpt: `Últimos sobrevivientes de la batalla del 5 de Mayo de 1862. 
                        Fotografía tomada en 1937, en el kiosko de Xochiapulco.`,
                    footnote: `
                        En el centro de la imagen, entre las banderas, de cotón
                        negro aparecen los héroes: Juan José Naranjo y Juan José
                        Miranda, últimos sobrevivientesde la batalla del 5 de mayo
                        de 1862 ocurrida en los fuertes de loreto y guadalupe de la
                        ciudad de Puebla, en contra de la intervención francesa.
                        Fotografía tomada en 1937, en el kiosko de Xochiapulco de
                        donde fueron originarios. Donada por el profesor Octavio
                        Manzano Díaz.
                    `,
                },
            ],
        };
    },
};
</script>

<style scoped>
.card {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    background-color: white;
}

.container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    font-size: 14px;
    margin: 5px auto;
    padding: 5px;
    text-align: justify;
    width: 90%;
}
.card-title {
    font-weight: bold;
    color: rgb(21, 21, 21);
    text-align: center;
}

.card-body {
    color: rgb(59, 50, 59);
}

img.pic {
    width: 80%;
    height: auto;
    max-height: 100%;
    margin: 0px auto;
}
</style>
