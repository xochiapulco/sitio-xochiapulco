module.exports = {
    title: 'Xochiapulco',
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
                    { text: 'Libro', link: '/apuntes/' },
                    { text: 'Colaboradores', link: '/colaboradores/' },
                    { text: 'Contacto', link: '/contacto/'}
                ],
            },
        ],
        displayAllHeaders: false,
        sidebar: {
            '/objetivo/': [
                '',
                '/apuntes/'
            ],
            '/apuntes/': [
                '',
                'datosgeograficos',
                'epocaprehispanica',
                'dominacionespanola',
                'tribusteteltipan',
                'epocaindependencia',
                'fundacionxochiapulco',
                'represalias',
                'apoyogobiernoliberal',
                'asesinatojuanmanuellucas',
                'glosario',
                '/biografias/',
            ],
            '/colaboradores/': [
                '',
                '/objetivo/',
                '/apuntes/'
            ]
        },
        plugins: [
            '@vuepress/medium-zoom',
            [
              '@vuepress/google-analytics',
              {
                'ga': 'G-0X0PF7FZF2'
              }
            ]
        ],        
        smoothScroll: true,
        lastUpdated: 'Última Actualización',
    },
};
