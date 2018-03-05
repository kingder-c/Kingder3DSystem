/**
 * 更换地图源 2018.1.10 JefferyChang
 * @param {any} Source
 */
function ChangeMap(Source) {
    viewer.imageryProvider = Source;
}

function ChangeLineTo3D(){
    var redTube = viewer.entities.add({
    name : 'Red tube with rounded corners',
    polylineVolume : {
        positions : Cesium.Cartesian3.fromDegreesArray([-85.0, 32.0,
                                                        -85.0, 36.0,
                                                        -89.0, 36.0]),
        shape : computeCircle(60000.0),
        material : Cesium.Color.RED
    }
    });
}