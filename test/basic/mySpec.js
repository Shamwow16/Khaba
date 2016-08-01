describe("mySuite", function () {
    it("should be true", function () {
        expect(true).toBe(true);
    })

    it("should be false", function () {
        expect(false).not.toBe(true);
    })
    
})

describe("myotherSuite", function () {
    it("should not be equal to 1", function () {
        expect(2).not.toEqual(1);
    })
});