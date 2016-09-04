var source = {
    "Action extérieure de l’État": 1.38,
    "Administration générale et territoriale de l’État": 0.88,
    "Agriculture, alimentation, forêt et affaires rurales": 1.13,
    "Aide publique au développement": 1.18,
    "Anciens combattants, mémoire et liens avec la nation": 1.18,
    "Conseil et contrôle de l’État": 0.23,
    "Culture": 1.15,
    "Défense": 14.35,
    "Direction de l’action du Gouvernement": 0.55,
    "Écologie, développement et mobilité durables": 2.94,
    "Économie": 0.66,
    "Égalité des territoires et logement": 8.00,
    "Engagements financiers de l’État": 0.34,
    "Enseignement scolaire": 21.71,
    "Gestion des finances publiques et des ressources humaines": 3.72,
    "Immigration, asile et intégration": 0.32,
    "Justice": 2.88,
    "Médias, livre et industries culturelles": 0.27,
    "Outre-mer": 0.91,
    "Politique des territoires": 0.32,
    "Pouvoirs publics": 0.45,
    "Provisions": 0.02,
    "Recherche et enseignement supérieur": 11.59,
    "Régimes sociaux et de retraite": 2.86,
    "Relations avec les collectivités territoriales": 1.34,
    "Santé": 0.57,
    "Sécurités": 5.54,
    "Solidarité, insertion et égalité des chances": 8.16,
    "Sport, jeunesse et vie associative": 0.28,
    "Travail et emploi": 5.09
},
colors = [ '#B0B3B1', '#EB7F2A', '#49A91F', '#295181', '#56D1F9', '#F9D836', '#E22C65', '#000000', '#FDF7F6', '#69F53B', '#AAB2FA', '#E86C69', '#CFC6C8', '#CE3CD4', '#FADC36', '#FFFFFF', '#EA7E42', '#FFFFFF', '#67FAFB', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#882188', '#39793A', '#CB2E34', '#FFFFFF', '#05106B', '#929DF9', '#E97782', '#FFFFFF' ];

var chart = c3.generate({
    data: {
        columns: Object.keys(source).map(function(name) {
            return [ name, source[name] ];
        }),
        type: 'bar',
        groups: [ Object.keys(source) ],
        order: 'asc'
    },
    axis: {
        rotated: true,
        x: { show: false },
        y: { show: false }
    },
    color: {
        pattern: colors
    },
    tooltip: {
        grouped: false,
        position: function (data, tooltipWidth, tooltipHeight, segmentElement) {
            var segmentDimensions = segmentElement.getBoundingClientRect();
            return {
                top: 0,
                left: segmentDimensions.left - tooltipWidth
            };
        },
        contents: function (data) {
            var name  = data[0].id,
                value = String(data[0].value).replace('.', ',') + ' %',
                color = colors[Object.keys(source).indexOf(data[0].id)];

            return  '<dl style="color:' + color + '; border-top: 2px solid ' + color + '">' +
                    '<dt>' + name + '</dt>' +
                    '<dd>' + value + '</dd>' +
                    '</dl>';
        }
    },
    legend: {
        show: false
    }
});
