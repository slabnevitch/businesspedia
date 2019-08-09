 ymaps.ready(init);

 function init(){    
 	var locMap = new ymaps.Map("bp-location", {
            center: [55.725595, 37.449677],
            zoom: 14
        });

	var placemark = new ymaps.Placemark([55.725595, 37.449677], {});

	locMap.geoObjects.add(placemark);
 }