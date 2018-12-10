var map = new BMap.Map("allmap");//在百度地图容器中创建一个地图
        var point = new BMap.Point(104.067422,30.582217);//定义一个中心点坐标
        map.centerAndZoom(point,15);//设定地图的中心点和坐标并将地图显示在地图容器中
 map.enableScrollWheelZoom();
 var marker = new BMap.Marker(point);
        map.addOverlay(marker); 