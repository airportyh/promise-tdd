import "../filter.service";
import * as angular from "angular";

describe("filter service", () => {

    beforeEach(angular.mock.module("shared-services"));
    let filterService;
    beforeEach(angular.mock.inject(function(_filterService_) {
        filterService = _filterService_;
    }));

    it("takes objects and returns only one matching object", () => {
        const objects = [
            { name: "Romeo" },
            { name: "Juliet" }
        ];
        const result1 = filterService.filter(objects, 
            { name: "Juliet" });
        expect(result1).toEqual([
            { name: "Juliet" }
        ]);
        const result2 = filterService.filter(objects, 
            { name: "Romeo" });
        expect(result2).toEqual([
            { name: "Romeo" }
        ]);
    });

    it("takes objects and filters by differnt key then 'name'", () => {
        const objects = [
            { name: "Romeo", age: 5 },
            { name: "Juliet", age: 7 }
        ];
        const result = filterService.filter(objects, 
            { age: 5 });
        expect(result).toEqual([
            { name: "Romeo", age: 5 }
        ]);
    });

    it("should return no results if no match", () => {
        const objects = [
            { name: "Romeo", age: 5 },
            { name: "Juliet", age: 7 }
        ];
        const result = filterService.filter(objects, 
            { age: 9 });
        expect(result).toEqual([]);
    });

    it("returns multiple results if multiple matched", () => {
        const objects = [
            { name: "Romeo", age: 5 },
            { name: "Juliet", age: 7 },
            { name: "Igor", age: 7 }
        ];
        const result = filterService.filter(objects, 
            { age: 7 });
        expect(result).toEqual([
            { name: "Juliet", age: 7 },
            { name: "Igor", age: 7 }
        ]);
    });

    it("requires matching multiple key/value pairs of query object", () => {
        const objects = [
            { name: "Romeo", age: 5 },
            { name: "Juliet", age: 7 },
            { name: "Igor", age: 7 }
        ];
        const result = filterService.filter(objects, 
            { age: 7, name: "Igor" });
        expect(result).toEqual([
            { name: "Igor", age: 7 }
        ]);
    });

});