module.exports = {
    title: 'Xochiapulco y sus historia',
    description: 'Xochiapulco defensor de la tierra, la libertad y el derecho.',
    base: '/',

    themeConfig: {
        nav: [
            { text: 'Inicio', link: '/' },
            {
                text: 'Contenido',
                ariaLabel: 'Contenido Menu',
                items: [
                    { text: 'Presentación', link: '/objetivo/' },
                    { text: 'Apuntes', link: '/apuntes/' },
                    { text: 'Colaboradores', link: '/colaboradores/' },
                ],
            },
        ],
        displayAllHeaders: false,
        sidebar: {
            '/apuntes/': [
                '',
                'datosgeograficos',
                'epocaprehispanica',
                'glosario',
                '/biografias/',
            ],
        },
        smoothScroll: true,
    },
};
