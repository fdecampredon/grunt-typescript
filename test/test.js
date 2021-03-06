var grunt = require("grunt");
var fs = require("fs");
var path = require("path");

module.exports.typescript = {
    simple:function (test) {
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/simple.js");
        var expected = grunt.file.read("test/expected/simple.js");
        test.equal(expected, actual);

        test.done();
    },
    declaration:function (test) {
        "use strict";

        test.expect(2);

        var actual = grunt.file.read("test/fixtures/declaration.js");
        var expected = grunt.file.read("test/expected/declaration.js");
        test.equal(expected, actual);

        actual = grunt.file.read("test/fixtures/declaration.d.ts");
        expected = grunt.file.read("test/expected/declaration.d.ts");
        test.equal(expected, actual);

        test.done();
    },
    sourcemap:function(test){
        "use strict";

        test.expect(2);

        var actual = grunt.file.read("test/fixtures/sourcemap/sourcemap.js");
        var expected = grunt.file.read("test/expected/sourcemap/sourcemap.js");

        test.equal(expected, actual, 'incorrect output javascript');

        actual = grunt.file.read("test/fixtures/sourcemap/sourcemap.js.map");
        expected = grunt.file.read("test/expected/sourcemap/sourcemap.js.map");

        test.equal(expected, actual, 'incorrect sourcemap');

        test.done();
    },
    es5:function(test){
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/es5.js");
        var expected = grunt.file.read("test/expected/es5.js");
        test.equal(expected, actual);

        test.done();
    },
//    "no-module":function(test){
//        "use strict";
//
//        test.expect(1);
//
//        var actual = grunt.file.read("test/fixtures/no-module.js");
//        var expected = grunt.file.read("test/expected/no-module.js");
//        test.equal(expected, actual);
//
//        test.done();
//    },
    amd:function(test){
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/amd.js");
        var expected = grunt.file.read("test/expected/amd.js");
        test.equal(expected, actual);

        test.done();
    },
    commonjs:function(test){
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/commonjs.js");
        var expected = grunt.file.read("test/expected/commonjs.js");
        test.equal(expected, actual);

        test.done();
    },
    single:function(test){
        "use strict";

        test.expect(1);
        var actual = grunt.file.read("test/temp/single.js");
        var expected = grunt.file.read("test/expected/single/single.js");

        test.equal(expected, actual);

        test.done();
    },
    "single-sourcemap":function(test){
        "use strict";

        test.expect(2);
        var actual = grunt.file.read("test/temp/single-sourcemap.js");
        var expected = grunt.file.read("test/expected/single/single-sourcemap.js");

        test.equal(expected, actual);

        actual = grunt.file.read("test/temp/single-sourcemap.js.map");
        expected = grunt.file.read("test/expected/single/single-sourcemap.js.map");

        test.equal(expected, actual, 'incorrect sourcemap');

        test.done();
    },
    multi:function(test){
        "use strict";

        test.expect(2);
        var actual = grunt.file.read("test/temp/multi/test/fixtures/multi/multi1.js");
        var expected = grunt.file.read("test/expected/multi/multi1.js");

        test.equal(expected, actual);

        actual = grunt.file.read("test/temp/multi/test/fixtures/multi/dir/multi2.js");
        expected = grunt.file.read("test/expected/multi/dir/multi2.js");

        test.equal(expected, actual);

        test.done();
    },
    basePath: function(test){
        test.expect(2);
        var actual = grunt.file.read("test/temp/basePath/multi1.js");
        var expected = grunt.file.read("test/expected/multi/multi1.js");

        test.equal(expected, actual);

        actual = grunt.file.read("test/temp/basePath/dir/multi2.js");
        expected = grunt.file.read("test/expected/multi/dir/multi2.js");

        test.equal(expected, actual);

        test.done();
    },
    "utf8-with-bom":function(test){
        "use strict";

        test.expect(1);
        var actual = grunt.file.read("test/fixtures/utf8-with-bom.js");
        var expected = grunt.file.read("test/expected/utf8-with-bom.js");

        test.equal(expected, actual);

        test.done();
    },
    comments:function(test){
        "use strict";

        test.expect(1);
        var actual = grunt.file.read("test/fixtures/comments.js");
        var expected = grunt.file.read("test/expected/comments.js");

        test.equal(expected, actual);

        test.done();
    },
    newline_lf:function (test) {
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/newline_lf.js");
        var expected = grunt.file.read("test/expected/newline_lf.js");
        test.equal(expected, actual);

        test.done();
    },
    newline_crlf:function (test) {
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/newline_crlf.js");
        var expected = grunt.file.read("test/expected/newline_crlf.js");
        test.equal(expected, actual);

        test.done();
    },
    auto:function (test) {
        "use strict";

        test.expect(1);

        var actual = grunt.file.read("test/fixtures/newline_auto.js");
        var expected = grunt.file.read("test/expected/newline_auto.js");
        test.equal(expected, actual);

        test.done();
    }
};
