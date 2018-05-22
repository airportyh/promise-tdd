import * as _ from "lodash";
import * as angular from "angular";
angular.module("shared-services", []);

class FilterService {
    filter(objects: object[], query: object): object[] {
        const key = _.keys(query)[0];
        return _.filter(objects, (obj) => {
            return obj[key] === query[key];
        });
    }
}

angular.module("shared-services")
    .service("filterService", FilterService);