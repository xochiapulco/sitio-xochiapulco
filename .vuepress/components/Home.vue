<template>
    <main class="home">
        <header class="hero">
            <div>
                <h1 class="main-title">Xochiapulco</h1>
                <p class="description">
                    Homenaje a los defensores de la tierra, la libertad y el
                    derecho.
                </p>
            </div>
            <Carousel />
        </header>
        <div class="start-button-wrapper">
            <a href="/apuntes/" class="nav-link start-button">
                Comenzar →
            </a>
        </div>
        <div class="features">
            <div class="feature">
                <h2>Finalidad de este trabajo.</h2>
                <p>
                    Dar a conocer a las generaciones presentes y futuras las
                    grandezas históricas de los hombres y mujeres que forjaron
                    el desarrollo del municipio de Xochiapulco.
                </p>
            </div>
            <div class="feature">
                <h2>Alcance.</h2>
                <p>
                    Está publicación contempla la Época Prehispánica, la
                    Conquista, la Independencia de México, el gobierno de Santa
                    Anna, la Guerra de Reforma, la consolidación de Xochiapulco
                    como Municipio, la intervención francesa, el Porfiriato, la
                    Revolución Mexicana y la historia de la educación en
                    Xochiapulco.
                </p>
            </div>
            <div class="feature">
                <h2>Créditos</h2>
                <p>
                    Este trabajo fue creado por el Profr. Sergio Oscar Gutiérrez
                    Peralta, basado en las memorias del Profr. Sergio A.
                    Gutiérrez Español (1889-1976) y la recopilación de
                    información de diferentes documentos.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
import Carousel from './Carousel';

export default {
    components: {
        Carousel,
    },
};
</script>

<style scoped>
.home {
    padding-top: 1rem;
}

.start-button-wrapper {
    text-align: center;
}

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
