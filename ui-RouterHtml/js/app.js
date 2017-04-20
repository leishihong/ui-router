var app=angular.module("app",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	//重定向
	$urlRouterProvider.otherwise("homepages")
	$stateProvider
	.state("home",{
		url:'/homepages',
		templateUrl:'page/home.html',
		controller:function($http,$scope){
			var banner=new Swiper(".banners",{
					loop: true,
					pagination:".swiper-pagination",
					autoplay: true,
					speed: 1000,
					autoplayDisableOnInteraction:true
			})
			$http.get("data/data1.json")
			.then(function(data){
				$scope.list=data.data
			})
		}
		/*controller:function($scope,prepare){
			$scope.list=prepare;
			console.log(prepare)
			var banner=new Swiper(".banners",{
					loop: true,
					pagination:".swiper-pagination",
					autoplay: true,
					speed: 1000,
					autoplayDisableOnInteraction:true
			})
		},
		resolve:{
			prepare:function($http,$q){
				var dfd=$q.defer();
				$http.get("data/data1.json")
				.success(function(data){
					dfd.resolve(data)
				})
				
				return  dfd.promise
			}
		}*/
	})
	.state("demo",{
		url:'/demopages',
		templateUrl:'page/demo.html',
		controller:function($http,$scope){
			$http.get("data/data2.json")
			.then(function(data){
				$scope.lists=data.data
			})
		}
		/*controller:function($scope,prepare1){
			$scope.lists=prepare1
			console.log(prepare1)
		},
		resolve:{
			prepare1:function($http,$q){
				var dfd=$q.defer();
				$http.get("data/data2.json")
				.success(function(data){
					dfd.resolve(data)
				})
				
				return  dfd.promise
			}
		}*/
	})
	.state("product",{
		url:"/productpages",
		templateUrl:'page/product.html',
		controller:function($http,$scope){
			$http.get("data/data3.json")
			.then(function(data){
				$scope.list1=data.data
			})
		}
		/*controller:function($scope,prepare2){
			$scope.list1=prepare2
			console.log(prepare2)
		},
		resolve:{
			prepare2:function($http,$q){
				var dfd=$q.defer();
				$http.get("data/data3.json")
				.success(function(data){
					dfd.resolve(data)
				})
				
				return  dfd.promise
			}
		}*/
	})
	.state("info",{
		url:"/infopages",
		templateUrl:'page/info.html'
	})
	
})
