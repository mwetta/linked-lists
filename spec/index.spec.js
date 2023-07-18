import linkedList from '../src/index.js'
import Node from '../src/index.js'


describe("Linked list", function(){
    let myList;
    beforeEach(function(){
        myList = linkedList();
    })

    it("should return an empty object when first called", function(){
        expect(typeof myList.getList()).toEqual('object');
    });

    it("should add a single value to the list using append", function(){
        myList.append("My value");
        expect(myList.head().value).toEqual("My value");
        expect(myList.head().nextNode).toEqual(null);
    });

    it("should append two values", function(){
        myList.append("My value");
        myList.append("My second value");
        expect(myList.size()).toEqual(2);
        expect(myList.tail().value).toEqual("My second value");
        expect(myList.head().value).toEqual("My value");
    });

    it("should add a value to the beginning of the list using prepend", function(){
        myList.append("My value");
        myList.append("My second value");
        myList.prepend("My third value");
        expect(myList.size()).toEqual(3);
        expect(myList.head().value).toEqual("My third value");
        expect(myList.tail().value).toEqual("My second value");
    });

    it("should return an item at index", function(){
        myList.append("My value");
        myList.append("My second value");
        myList.prepend("My third value");
        myList.prepend("My fourth value");
        myList.append("My fifth value");
        expect(myList.at(4).value).toEqual("My fifth value");
        expect(myList.at(3).value).toEqual("My second value");
        expect(myList.at(2).value).toEqual("My value");
        expect(myList.at(1).value).toEqual("My third value");
        expect(myList.at(0).value).toEqual("My fourth value");
    });

    it("should remove the last item using pop", function(){
        myList.append("My value");
        myList.append("My second value");
        myList.prepend("My third value");
        myList.prepend("My fourth value");
        myList.append("My fifth value");
        myList.pop();
        expect(myList.size()).toEqual(4);
        expect(myList.tail().value).toEqual("My second value");
    });

});
