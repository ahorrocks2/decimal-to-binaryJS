describe("binaryConverter", function() {
  it("will take a decimal number and return it in binary", function() {
    expect(binaryConverter("2")).to.equal(10);
  }),

  it("will take a decimal number and return it in binary", function() {
    expect(binaryConverter("5")).to.equal(101);
  });
});
