namespace project2.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('project2').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('project2').service('myService', MyService);
    }
