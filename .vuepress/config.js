module.exports = {
    title: 'Xochiapulco',
    description: 'Xochiapulco defensor de la tierra, la libertad y el derecho.',
    base: '/',
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js',
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css',
            },
        ],
    ],
    themeConfig: {
        nav: [
            { text: 'Inicio', link: '/' },
            {
                text: 'Contenido',
                ariaLabel: 'Contenido Menu',
                items: [
                    { text: 'Presentación', link: '/objetivo/' },
                    { text: 'Libro', link: '/apuntes/' },
                    { text: 'Colaboradores', link: '/colaboradores/' },
                ],
            },
        ],
        displayAllHeaders: false,
        sidebar: {
            '/objetivo/': ['', '/apuntes/'],
            '/apuntes/': [
                '',
                'datosgeograficos',
                'epocaprehispanica',
                'glosario',
                '/biografias/',
            ],
            '/colaboradores/': ['', '/objetivo/', '/apuntes/'],
        },
        plugins: [
            '@vuepress/medium-zoom',
            [
                '@vuepress/google-analytics',
                {
                    ga: 'G-0X0PF7FZF2',
                },
            ],
        ],
        smoothScroll: true,
        lastUpdated: 'Última Actualización',
    },
};
