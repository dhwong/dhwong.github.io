angular
	.module('app', [
		"ui.router"
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			//-----home-----//
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			//-----about-----//
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			.state('about.beast', {
				url: "/bloodborne",
               	templateUrl: 'templates/about/beast.html'
            })
            .state('about.dark', {
            	url: "/darksouls",
               	templateUrl: 'templates/about/dark.html'
            })
			.state('about.dark-ii', {
            	url: "/darksouls-ii",
               	templateUrl: 'templates/about/dark-ii.html'
            })
            .state('about.demon', {
            	url: "/demonsouls",
            	templateUrl: 'templates/about/demon.html'
            })
			//-----items-----//
			.state('items', {
				url: '/items',
				templateUrl: 'templates/items.html'
			})
			.state('items.weapons', {
				url: '/weapons',
				templateUrl: 'templates/items/weapons.html'
			})
			.state('items.shields', {
				url: '/shields',
				templateUrl: 'templates/items/shields.html'
			})
			.state('items.armor', {
				url: '/armor',
				templateUrl: 'templates/items/armor.html'
			})
			.state('items.accessories', {
				url: '/accessories',
				templateUrl: 'templates/items/accessories.html'
			})
			.state('items.consumables', {
				url: '/cons',
				templateUrl: 'templates/items/consumables.html'
			})
			.state('items.miscellaneous', {
				url: '/miscellaneous',
				templateUrl: 'templates/items/misc.html'
			})
			//-----gameplay-----//
			.state('gameplay', {
				url: '/gameplay',
				templateUrl: 'templates/gameplay.html'
			})
			.state('gameplay.mechanics', {
				url: '/mechanics',
				templateUrl: 'templates/gameplay/mechanics.html'
			})
			.state('gameplay.covenants', {
				url: '/covenants',
				templateUrl: 'templates/gameplay/covenants.html'
			})
			//-----guides-----//
			.state('guides', {
				url: '/guides',
				templateUrl: 'templates/guides.html'
			})
			.state('guides.beast', {
				url: "/bloodborne",
               	templateUrl: 'templates/guides/beast.html'
            })
			.state('guides.dark-ii', {
            	url: "/darksouls-ii",
               	templateUrl: 'templates/guides/dark-ii.html'
            })
            .state('guides.dark', {
            	url: "/darksouls",
               	templateUrl: 'templates/guides/dark.html'
            })
            .state('guides.demon', {
            	url: "/demonsouls",
            	templateUrl: 'templates/guides/demon.html'
            })
			//-----contact-----//
			.state('contact', {
				url: 'about/us',
				templateUrl: 'templates/about/site.html'
			})
	}])
