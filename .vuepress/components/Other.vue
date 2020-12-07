<template>
    <div class="hero is-fullheight is-bold">
        <div>
            <img
                src="/img/sobrevivientes-color.jpg"
                alt="Últimos Sobrevivientes"
            />
            <div class="has-text-grey has-text-centered ">
                <div class="has-text-left">
                    Entre las banderas, aparecen de izquierda a derecha, Juan
                    José Naranjo y Juan José Miranda, ultimos sobrevivientes de
                    la batalla del 5 de Mayo de 1862.
                </div>
                <div class="has-text-left">
                    Fotografía tomada en 1937 en el Kiosko de Xochiapulco de
                    donde fueron originarios. Donada por el profr. Octavio
                    Manzno Díaz
                </div>
            </div>
        </div>
        <div class="title is-1 mt-2">
            Xochiapulco
        </div>
        <div class="title is-4 has-text-grey-light has-text-centered  mt-2">
            Homenaje a los defensores de la tierra, la libertad y el derecho.
        </div>
        <div class=" mt-2">
            <a href="#" class="has-text-white start-button">Comenzar</a>
        </div>
        <div class="columns  mt-3">
            <div class="column">
                <div class="title is-3">Finalidad de este trabajo</div>
                <div class="has-text-grey-dark has-text-left">
                    Dar a conocer a las generaciones presentes y futuras las
                    grandezas históricas de los hombres y mujeres que forjaron
                    el desarrollo del municipio de Xochiapulco.
                </div>
            </div>
            <div class="column">
                <div class="title is-3">Alcance</div>
                <div class="has-text-grey-dark has-text-left">
                    Está publicación contempla la Época Prehispánica, la
                    Conquista, la Independencia de México, el gobierno de Santa
                    Anna, la Guerra de Reforma, la consolidación de Xochiapulco
                    como Municipio, la intervención francesa, el Porfiriato, la
                    Revolución Mexicana y la historia de la educación en
                    Xochiapulco.
                </div>
            </div>
            <div class="column">
                <div class="title is-3">Créditos</div>
                <div class="has-text-grey-dark has-text-left">
                    Este trabajo fue creado por el Profr. Sergio Oscar Gutiérrez
                    Peralta, basado en las memorias del Profr. Sergio A.
                    Gutiérrez Español (1889-1976) y la recopilación de
                    información de diferentes documentos.
                </div>
            </div>
        </div>
        <Licence />
    </div>
</template>

<script>
import Licence from './Licence.vue';

export default {
    components: [Licence],
};
</script>

<style lang="css" scoped>
.start-button {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #f60;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #e65c00;
}
</style>
