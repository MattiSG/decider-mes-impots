var data = [ {
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
} ];

var n = Object.keys(data[0]).length, // number of layers
    m = data.length, // number of samples per layer
    stack = d3.layout.stack(),
    labels = [ "Budget de l'État" ],

    //go through each layer (pop1, pop2 etc, that's the range(n) part)
    //then go through each object in data and pull out that objects's population data
    //and put it into an array where x is the index and y is the number
    layers = stack(d3.range(n).map(function(d) {
                var a = [];
                for (var key in data[0]) {
                    a[0] = {x: 0, y: data[0][key]};
                }
                return a;
             })),

    //the largest single layer
    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
    //the largest stack
    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

var margin = {top: 40, right: 10, bottom: 20, left: 50},
    width = 677 - margin.left - margin.right,
    height = 533 - margin.top - margin.bottom;

var y = d3.scale.ordinal()
    .domain(d3.range(m))
    .rangeRoundBands([2, height], .08);

var x = d3.scale.linear()
    .domain([0, yStackMax])
    .range([0, width]);

var color = d3.scale.linear()
    .domain([0, n - 1])
    .range(["#aad", "#556"]);

var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var layer = svg.selectAll(".layer")
    .data(layers)
  .enter().append("g")
    .attr("class", "layer")
    .style("fill", function(d, i) { return color(i); });

layer.selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
    .attr("y", function(d) { return y(d.x); })
    .attr("x", function(d) { return x(d.y0); })
    .attr("height", y.rangeBand())
    .attr("width", function(d) { return x(d.y); });

var yAxis = d3.svg.axis()
    .scale(y)
    .tickSize(1)
    .tickPadding(6)
    .tickValues(labels)
    .orient("left");

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
