Chart.defaults.global.defaultFontSize = 16;

Chart.pluginService.register({
    beforeRender: function (chart) {
        if (chart.config.options.tooltips.display == 'always') {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function (dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },

    afterDraw: function (chart, easing) {
        if (chart.config.options.tooltips.display == 'always') {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs at least once
            if (! chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
    }
})


new Chart(document.querySelector('canvas'), {
    type: 'doughnut',
    data: {
        labels: [
            'Action extérieure de l’État',
            'Administration générale et territoriale de l’État',
            'Agriculture, alimentation, forêt et affaires rurales',
            'Aide publique au développement',
            'Anciens combattants, mémoire et liens avec la nation',
            'Conseil et contrôle de l’État',
            'Culture',
            'Défense',
            'Direction de l’action du Gouvernement',
            'Écologie, développement et mobilité durables',
            'Économie',
            'Égalité des territoires et logement',
            'Engagements financiers de l’État',
            'Enseignement scolaire',
            'Gestion des finances publiques et des ressources humaines',
            'Immigration, asile et intégration',
            'Justice',
            'Médias, livre et industries culturelles',
            'Outre-mer',
            'Politique des territoires',
            'Pouvoirs publics',
            'Provisions',
            'Recherche et enseignement supérieur',
            'Régimes sociaux et de retraite',
            'Relations avec les collectivités territoriales',
            'Santé',
            'Sécurités',
            'Solidarité, insertion et égalité des chances',
            'Sport, jeunesse et vie associative',
            'Travail et emploi'
        ],
        datasets: [
            {
                data: [ 1.38, 0.88, 1.13, 1.18, 1.18, 0.23, 1.15, 14.3, 0.55, 2.94, 0.66, 8.00, 0.34, 21.7, 3.72, 0.32, 2.88, 0.27, 0.91, 0.32, 0.45, 0.02, 11.5, 2.86, 1.34, 0.57, 5.54, 8.16, 0.28, 5.09 ],
                backgroundColor: [ '#B0B3B1', '#EB7F2A', '#49A91F', '#295181', '#56D1F9', '#F9D836', '#E22C65', '#000000', '#FDF7F6', '#69F53B', '#AAB2FA', '#E86C69', '#CFC6C8', '#CE3CD4', '#FADC36', '#FFFFFF', '#EA7E42', '#FFFFFF', '#67FAFB', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#882188', '#39793A', '#CB2E34', '#FFFFFF', '#05106B', '#929DF9', '#E97782', '#FFFFFF' ]
            }
        ]
    },
    options: {
        legend: { display: false },
        tooltips: { display: 'always' }
    }
});
