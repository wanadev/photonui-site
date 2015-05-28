module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        shell: {
            hexoClean: {
                command: "hexo clean"
            },
            hexoGenerate: {
                command: "hexo generate"
            }
        },

        copy: {
            yuidoc: {
                files: [
                    {expand: true, src: ["ref/**"], dest: "public/"}
                ]
            }
        },

        git_deploy: {
            ghPages: {
                options: {
                    url: "git@github.com:wanadev/PhotonUI.git"
                },
                src: "public"
            }
        }

    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-git-deploy");

    // Default task(s).
    grunt.registerTask("default", ["shell:hexoClean", "shell:hexoGenerate", "copy:yuidoc"]);
    grunt.registerTask("deploy", ["default", "git_deploy:ghPages"]);

};
