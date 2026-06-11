ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3035").setExtent([3642833.128940, 2066640.099033, 6087177.480034, 4876283.144663]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NumberofincomingstudentsbyNUTS2region_1 = new ol.format.GeoJSON();
var features_NumberofincomingstudentsbyNUTS2region_1 = format_NumberofincomingstudentsbyNUTS2region_1.readFeatures(json_NumberofincomingstudentsbyNUTS2region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_NumberofincomingstudentsbyNUTS2region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofincomingstudentsbyNUTS2region_1.addFeatures(features_NumberofincomingstudentsbyNUTS2region_1);
var lyr_NumberofincomingstudentsbyNUTS2region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberofincomingstudentsbyNUTS2region_1, 
                style: style_NumberofincomingstudentsbyNUTS2region_1,
                popuplayertitle: 'Number of incoming students by NUTS2 region',
                interactive: true,
    title: 'Number of incoming students by NUTS2 region<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_1.png" /> 1 - 4<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_2.png" /> 4 - 8<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_3.png" /> 8 - 16<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_4.png" /> 16 - 32,3<br />\
    <img src="styles/legend/NumberofincomingstudentsbyNUTS2region_1_5.png" /> 32,3 - 204<br />' });
var format_NumberofincomingErasmusstudentsbycountry_2 = new ol.format.GeoJSON();
var features_NumberofincomingErasmusstudentsbycountry_2 = format_NumberofincomingErasmusstudentsbycountry_2.readFeatures(json_NumberofincomingErasmusstudentsbycountry_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_NumberofincomingErasmusstudentsbycountry_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofincomingErasmusstudentsbycountry_2.addFeatures(features_NumberofincomingErasmusstudentsbycountry_2);
var lyr_NumberofincomingErasmusstudentsbycountry_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberofincomingErasmusstudentsbycountry_2, 
                style: style_NumberofincomingErasmusstudentsbycountry_2,
                popuplayertitle: 'Number of incoming Erasmus students by country',
                interactive: true,
    title: 'Number of incoming Erasmus students by country<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_0.png" /> 0 - 40<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_1.png" /> 40 - 95<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_2.png" /> 95 - 163<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_3.png" /> 163 - 289<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_4.png" /> 289 - 537<br />\
    <img src="styles/legend/NumberofincomingErasmusstudentsbycountry_2_5.png" /> 537 - 1778<br />' });
var group_Nuoliviivat = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '(Nuoli)viivat'});
var group_Networkbundlededges = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Network - bundled edges'});
var group_Koropleettieurooppa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Koropleetti eurooppa'});
var group_Taustakartat = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Taustakartat'});
var group_KoropleettiNUTS2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Koropleetti NUTS2'});

lyr_OSMStandard_0.setVisible(true);lyr_NumberofincomingstudentsbyNUTS2region_1.setVisible(true);lyr_NumberofincomingErasmusstudentsbycountry_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NumberofincomingstudentsbyNUTS2region_1,lyr_NumberofincomingErasmusstudentsbycountry_2];
lyr_NumberofincomingstudentsbyNUTS2region_1.set('fieldAliases', {'Country': 'Country', 'NUTS2 region': 'NUTS2 region', 'Students': 'Students', 'Total students (country)': 'Total students (country)', });
lyr_NumberofincomingErasmusstudentsbycountry_2.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'country_id': 'country_id', 'saapuvat_opiskelijat': 'saapuvat_opiskelijat', 'Country': 'Country', 'Students': 'Students', 'Joined layer_destination_country': 'Joined layer_destination_country', 'Joined layer_Määrä  / destination_country': 'Joined layer_Määrä  / destination_country', 'Joined layer_fid': 'Joined layer_fid', 'Joined layer_iso_a2': 'Joined layer_iso_a2', 'Joined layer_NAME': 'Joined layer_NAME', 'Joined layer_country_id_2': 'Joined layer_country_id_2', 'Joined layer_opiskelijat maittain tulomaa_destination_country': 'Joined layer_opiskelijat maittain tulomaa_destination_country', 'Joined layer_opiskelijat maittain tulomaa_country_id': 'Joined layer_opiskelijat maittain tulomaa_country_id', });
lyr_NumberofincomingstudentsbyNUTS2region_1.set('fieldImages', {'Country': 'TextEdit', 'NUTS2 region': 'TextEdit', 'Students': 'TextEdit', 'Total students (country)': 'Range', });
lyr_NumberofincomingErasmusstudentsbycountry_2.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'country_id': 'TextEdit', 'saapuvat_opiskelijat': 'Range', 'Country': '', 'Students': '', 'Joined layer_destination_country': 'TextEdit', 'Joined layer_Määrä  / destination_country': 'TextEdit', 'Joined layer_fid': 'TextEdit', 'Joined layer_iso_a2': 'TextEdit', 'Joined layer_NAME': 'TextEdit', 'Joined layer_country_id_2': 'TextEdit', 'Joined layer_opiskelijat maittain tulomaa_destination_country': 'TextEdit', 'Joined layer_opiskelijat maittain tulomaa_country_id': 'TextEdit', });
lyr_NumberofincomingstudentsbyNUTS2region_1.set('fieldLabels', {'Country': 'inline label - always visible', 'NUTS2 region': 'inline label - always visible', 'Students': 'inline label - always visible', 'Total students (country)': 'inline label - always visible', });
lyr_NumberofincomingErasmusstudentsbycountry_2.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'hidden field', 'country_id': 'hidden field', 'saapuvat_opiskelijat': 'hidden field', 'Country': 'inline label - always visible', 'Students': 'inline label - always visible', 'Joined layer_destination_country': 'hidden field', 'Joined layer_Määrä  / destination_country': 'hidden field', 'Joined layer_fid': 'hidden field', 'Joined layer_iso_a2': 'hidden field', 'Joined layer_NAME': 'hidden field', 'Joined layer_country_id_2': 'hidden field', 'Joined layer_opiskelijat maittain tulomaa_destination_country': 'hidden field', 'Joined layer_opiskelijat maittain tulomaa_country_id': 'hidden field', });
lyr_NumberofincomingErasmusstudentsbycountry_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});