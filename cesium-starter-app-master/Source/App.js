var viewer = new Cesium.Viewer('cesiumContainer');

var point = viewer.entities;
    point.add({
    position : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684), point : {
    pixelSize : 10,
    color : Cesium.Color.YELLOW }
});

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684, 15000.0)});