import linkedList from '../src/index.js'
import Node from '../src/index.js'


describe("Linked list", function(){

    it("should return an empty object when first called", function(){
        const myList = linkedList();
        expect(typeof myList.getList()).toEqual('object');
    });

    it("should add a single value to the list using append", function(){
        const myList = linkedList();
        myList.append("My value");
        expect(myList.head().value).toEqual("My value");
        expect(myList.head().nextNode).toEqual(null);
    });

    it("should append two values", function(){
        const myList = linkedList();
        myList.append("My value");
        myList.append("My second value");
        expect(myList.size()).toEqual(2);
        expect(myList.tail().value).toEqual("My second value");
        expect(myList.head().value).toEqual("My value");
    });

    it("should add a value to the beginning of the list using prepend", function(){
        const myList = linkedList();
        myList.append("My value");
        myList.append("My second value");
        myList.prepend("My third value");
        expect(myList.size()).toEqual(3);
        expect(myList.head().value).toEqual("My third value");
        expect(myList.tail().value).toEqual("My second value");
    });

});
