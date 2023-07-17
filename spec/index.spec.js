const LinkedList = require("../src/index.js");

describe("Linked list", function(){

    it("should return an empty object when first called", function(){
        const myList = new LinkedList();
        console.log(myList);
        expect(typeof myList).toEqual('Object');
    });

});
