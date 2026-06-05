ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([265642.531250, 6632288.000000, 475008.687500, 6746389.500000]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FSObservationsbyMunicipality_1 = new ol.format.GeoJSON();
var features_FSObservationsbyMunicipality_1 = format_FSObservationsbyMunicipality_1.readFeatures(json_FSObservationsbyMunicipality_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FSObservationsbyMunicipality_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSObservationsbyMunicipality_1.addFeatures(features_FSObservationsbyMunicipality_1);
var lyr_FSObservationsbyMunicipality_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FSObservationsbyMunicipality_1, 
                style: style_FSObservationsbyMunicipality_1,
                popuplayertitle: 'FS Observations by Municipality',
                interactive: true,
    title: 'FS Observations by Municipality<br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_0.png" /> 0 <br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_1.png" /> 1 - 10<br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_2.png" /> 11 - 50<br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_3.png" /> 51 - 200<br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_4.png" /> 201 - 500<br />\
    <img src="styles/legend/FSObservationsbyMunicipality_1_5.png" /> 501 - 2839<br />' });
var format_FSObservation_2 = new ol.format.GeoJSON();
var features_FSObservation_2 = format_FSObservation_2.readFeatures(json_FSObservation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FSObservation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSObservation_2.addFeatures(features_FSObservation_2);
var lyr_FSObservation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FSObservation_2, 
                style: style_FSObservation_2,
                popuplayertitle: 'FS Observation',
                interactive: true,
                title: '<img src="styles/legend/FSObservation_2.png" /> FS Observation'
            });

lyr_OSMStandard_0.setVisible(true);lyr_FSObservationsbyMunicipality_1.setVisible(true);lyr_FSObservation_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FSObservationsbyMunicipality_1,lyr_FSObservation_2];
lyr_FSObservationsbyMunicipality_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'kunta': 'kunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', 'NUMPOINTS': 'NUMPOINTS', 'Observations': 'Observations', });
lyr_FSObservation_2.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', 'Yeardate': 'Yeardate', 'kunta': 'kunta', 'nimi': 'nimi', 'Observation count': 'Observation count', 'date': 'date', });
lyr_FSObservationsbyMunicipality_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'Range', 'kunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'Observations': 'Range', });
lyr_FSObservation_2.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', 'Yeardate': 'Range', 'kunta': 'TextEdit', 'nimi': 'TextEdit', 'Observation count': 'TextEdit', 'date': 'TextEdit', });
lyr_FSObservationsbyMunicipality_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'id': 'hidden field', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'hidden field', 'namn': 'hidden field', 'NUMPOINTS': 'hidden field', 'Observations': 'inline label - always visible', });
lyr_FSObservation_2.set('fieldLabels', {'fid': 'hidden field', 'taxonomic_order': 'hidden field', 'formatted_taxon_name': 'hidden field', 'abundance_verbatim': 'hidden field', 'formatted_date_time': 'hidden field', 'country': 'hidden field', 'bio_province_interpreted': 'hidden field', 'locality': 'inline label - always visible', 'collection_name': 'inline label - always visible', 'team': 'inline label - always visible', 'year': 'hidden field', 'Yeardate': 'hidden field', 'kunta': 'hidden field', 'nimi': 'hidden field', 'Observation count': 'hidden field', 'date': 'inline label - always visible', });
lyr_FSObservation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});