var size = 0;
var placement = 'point';

var style_NumberofincomingErasmusstudentsbycountry_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("saapuvat_opiskelijat");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 40.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40.000000 && value <= 95.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(209,226,243,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 95.000000 && value <= 163.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(154,200,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 163.000000 && value <= 289.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(82,157,204,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 289.000000 && value <= 537.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(29,108,177,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 537.000000 && value <= 1778.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.646}),fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
