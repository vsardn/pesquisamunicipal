var wms_layers = [];

var format_mun_0 = new ol.format.GeoJSON();
var features_mun_0 = format_mun_0.readFeatures(json_mun_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_0.addFeatures(features_mun_0);
var lyr_mun_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mun_0, 
                style: style_mun_0,
                popuplayertitle: 'mun',
                interactive: false,
    title: 'mun<br />\
    <img src="styles/legend/mun_0_0.png" /> 0<br />\
    <img src="styles/legend/mun_0_1.png" /> 1<br />' });
var format_nar_1 = new ol.format.GeoJSON();
var features_nar_1 = format_nar_1.readFeatures(json_nar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nar_1.addFeatures(features_nar_1);
var lyr_nar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nar_1, 
                style: style_nar_1,
                popuplayertitle: 'nar',
                interactive: true,
                title: '<img src="styles/legend/nar_1.png" /> nar'
            });

lyr_mun_0.setVisible(true);lyr_nar_1.setVisible(true);
var layersList = [lyr_mun_0,lyr_nar_1];
lyr_mun_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'NUM_NAR': 'NUM_NAR', 'SITUACAO': 'SITUACAO', });
lyr_nar_1.set('fieldAliases', {'NUM_NAR': 'NUM_NAR', 'NM_NAR': 'NM_NAR', 'SITUACAO': 'SITUACAO', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_mun_0.set('fieldImages', {'CD_MUN': 'Range', 'NM_MUN': 'TextEdit', 'NUM_NAR': 'Range', 'SITUACAO': 'TextEdit', });
lyr_nar_1.set('fieldImages', {'NUM_NAR': 'Range', 'NM_NAR': 'TextEdit', 'SITUACAO': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_mun_0.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'NUM_NAR': 'no label', 'SITUACAO': 'no label', });
lyr_nar_1.set('fieldLabels', {'NUM_NAR': 'hidden field', 'NM_NAR': 'header label - always visible', 'SITUACAO': 'inline label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_nar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});