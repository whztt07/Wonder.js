describe("GrassInstanceGeometry", function() {
    var sandbox = null;
    var geo = null;
    var entityObject = null;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        sandbox.stub(wd.DeviceManager.getInstance(), "gl", testTool.buildFakeGl(sandbox));

        geo = wd.GrassInstanceGeometry.create();
    });
    afterEach(function () {
        testTool.clearInstance(sandbox);
        sandbox.restore();
    });

    describe("clone", function(){
        beforeEach(function(){
        });

        it("clone data", function(){
            var bladeCount = 33,
                offsetRadius = 11;

            cloneTool.extend(geo, {
                bladeCount:bladeCount,
                offsetRadius:offsetRadius
            })

            var result = geo.clone();

            expect(result.bladeCount).toEqual(bladeCount);
            expect(result.offsetRadius).toEqual(offsetRadius);
        });
    });
});