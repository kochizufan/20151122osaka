var viewer = /*new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url: 'http://cyberjapandata.gsi.go.jp/xyz/std/', credit: new Cesium.Credit('地理院タイル', '', 'http:// maps.gsi.go.jp/development/ichiran.html')
    }),
    baseLayerPicker: false
});*/ new Cesium.Viewer('cesiumContainer');

var point = viewer.entities;
    point.add({
    position : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684), point : {
    pixelSize : 10,
    color : Cesium.Color.YELLOW }
});

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(135.502101, 34.693684, 15000.0)});

//KMLの追加 
viewer.dataSources.add(Cesium.KmlDataSource.load('http://seabook0303.github.io/20151122osaka/cesium-starter-app-master/foss4gosakakml/foss4gosaka.kml'));