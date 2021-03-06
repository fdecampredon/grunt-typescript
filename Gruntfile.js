module.exports = function (grunt) {
    "use strict";

    var fs = require("fs"),
        path = require("path");

    grunt.initConfig({
        clean:{
            test:[
                "test/fixtures/**/*.js",
                "test/fixtures/**/*.js.map",
                "test/fixtures/**/*.d.ts",
                "test/temp/**/*.*",
                "test/temp"
            ],
            expect: "test/expected"
        },
        typescript:{
            simple:{
                src: ["test/fixtures/simple.ts"],
                options:{
                }
            },
            declaration:{
                src:"test/fixtures/declaration.ts",
                options:{
                    declaration:true
                }
            },
            sourcemap:{
                src:"test/fixtures/sourcemap.ts",
                dest:"test/fixtures/sourcemap/",
                options:{
                    base_path: "test/fixtures/",
                    sourcemap:true
                }
            },
            dest:{
                src:"test/fixtures/dest.ts",
                dest: "test/temp/dest",
                options:{
                    sourcemap: true,
                    declaration: true,
                    base_path: "test/fixtures"
                }
            },
            single:{
                src:"test/fixtures/single/**/*.ts",
                dest: "test/temp/single.js"
            },
            es5:{
                src:"test/fixtures/es5.ts",
                options:{
                    target:"ES5"
                }
            },
            amd:{
                src:"test/fixtures/amd.ts",
                options:{
                    module:"amd"
                }
            },
            commonjs:{
                src:"test/fixtures/commonjs.ts",
                options:{
                    module:"commonjs"
                }
            },
            "single-sourcemap":{
                src:"test/fixtures/single/**/*.ts",
                dest: "test/temp/single-sourcemap.js",
                options:{
                    sourcemap: true
                }
            },
            multi:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/multi"
            },
            basePath:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/basePath",
                options: {
                    base_path: "test/fixtures/multi"
                }
            },
            "utf8-with-bom":{
                src:"test/fixtures/utf8-with-bom.ts"
            },
            "no-output":{
                //存在しないファイル
                src:"text/fixtures/no-output.ts",
                dest:"test/temp/no-output.js"
            },
            comments:{
                src:"test/fixtures/comments.ts",
                options:{
                    comments:true
                }
            },
            noImplicitAny:{
                src:"test/fixtures/noImplicitAny.ts",
                options:{
                    //ignoreTypeCheck: false,
                    noImplicitAny: true

                }
            },
            newline_lf: {
                src:"test/fixtures/newline.ts",
                dest: "test/fixtures/newline_lf.js",
                options:{
                    //ignoreTypeCheck: false,
                    newLine: "lf"
                }
            },
            newline_crlf: {
                src:"test/fixtures/newline.ts",
                dest: "test/fixtures/newline_crlf.js",
                options:{
                    //ignoreTypeCheck: false,
                    newLine: "crlf"
                }
            },
            newline_auto: {
                src:"test/fixtures/newline.ts",
                dest: "test/fixtures/newline_auto.js",
                options:{
                    //ignoreTypeCheck: false,
                    newLine: "auto"
                }
            }
            , errortypecheck: {
                src: "test/fixtures/error-typecheck.ts",
                options: {
                    //ignoreTypeCheck: false
                }
            }
//            , errorsyntax:{
//                src: "test/fixtures/error-syntax.ts"
//            }
        },
        nodeunit:{
            tests:["test/test.js"]
        },
        exec:{
            build:{
                command: function(){
                    var files = fs.readdirSync("src").filter(function(file){
                        file = "src/" + file;
                        return fs.statSync(file).isFile() && /.*\.ts$/.test(file); //絞り込み
                    }).map(function(file){
                        return "src" + path.sep + file;
                    }).join(" ");
                    return ["node_modules", ".bin", "tsc " + files + " --out tasks", "typescript.js"].join(path.sep);
                }
            }
        }
    });

    grunt.loadTasks("tasks");
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("build", ["exec:build"]);
    grunt.registerTask("test", ["clean:test", "typescript", "nodeunit"]);
    grunt.registerTask("default", ["test"]);

};
