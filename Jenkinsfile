def gv 

pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    // environment {
    //     NEW_VERSION = '1.3.0'
    //     SERVER_CREDENTIALS = credentials('jenkins-jakai')
    // }
    stages {
        stage("init"){
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev' && CODE_CHANGES == true
            //     }
            // }
            steps {
                script{
                   gv.buildApp() 
                }

            }
        }
        stage("test") {
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps {
                script{ 
                    gv.testApp()
                }
               
                // withCredentials([usernamePassword(credentialsId: 'jakai', usernameVariable: 'USER', passwordVariable: 'PWD')]) {
                //     // Assuming you have some steps here that use USER and PWD variables
                // }
            }
        }
        stage("deploy") {
            steps {
               script{
                   gv.deployApp()
               }
            }
        }
    }
}
