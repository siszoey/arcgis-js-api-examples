// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/sniff"],function(f,g,d){var e={low:{sceneService:{"3dObject":{lodFactor:0.2},point:{lodFactor:1},integratedMesh:{lodFactor:0.6},pointCloud:{lodFactor:0.5}},tiledSurface:{lodBias:-1,angledSplitBias:0.5},antialiasingEnabled:!1},high:{sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1}},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0}};return function(){function a(){}a.isValidProfile=
function(a){return a in e};a.getDefaultProfile=function(){return d("trident")||d("safari")?"low":"high"};a.apply=function(a,b){var c=e[a];b.qualitySettings.sceneService["3dObject"].lodFactor=c.sceneService["3dObject"].lodFactor;b.qualitySettings.sceneService.point.lodFactor=c.sceneService.point.lodFactor;b.qualitySettings.sceneService.integratedMesh.lodFactor=c.sceneService.integratedMesh.lodFactor;b.qualitySettings.sceneService.pointCloud.lodFactor=c.sceneService.pointCloud.lodFactor;b.qualitySettings.tiledSurface.lodBias=
c.tiledSurface.lodBias;b.qualitySettings.tiledSurface.angledSplitBias=c.tiledSurface.angledSplitBias;b.qualitySettings.antialiasingEnabled=c.antialiasingEnabled};return a}()});