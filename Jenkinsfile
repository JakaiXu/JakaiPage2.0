CODE_CHANGES = getGitChanges()
def gv
pipeline {
    agent any
    // tools {
    //     maven "maven-3.9"
    // }
    parameters { 
        choice(name: "VERSION", choices:['1.1.0','1.2.0','1.3.0'],description:'')
        booleanParam(name:'executeTests', defaultValue:true, description:'')
    }
    // environment { 
    //     NEW_VERSION = '1.3.0'
    //     SERVER_CREDENTIALS = credentials("server-credentials")
    // }
    stages {
        stage('init'){
            steps{
                script {
                    gv = load "script.groovy"
            }
        }
        }
        stage('build') {
            steps {
                script{
                   gv.buildApp() 
                }
                // echo 'building the application...'
                // echo "building version ${NEW_VERSION}"
            }
        }
        
        stage('test') {
            when {
                expression { params.executeTests}
            }
            steps {
                scripit {
                    gv.testApp()
                }
            }
        }
        
        stage('deploy') {
            input {
                message "Seclect the environment to deploy to"
                ok "Done"
                parameters {
                    choice(name: "ONE", choices:['dev','staging','prod'], description:'')
                    choice(name: "TWO", choices:['dev','staging','prod'], description:'')
                }
            }
            steps {
                // echo 'deploying the application...'
                // echo "deploying with ${SERVER_CREDENTIALS}"
                // sh "${SERVER_CREDENTIALS}"
                // withCredentials([usernamePassword(credentials:'server-credentials',usernameVariable:USER, passwordVariable:PWD)]){
                //   sh 'some script ${USER} ${PWD}'  
                // echo "deploying version ${params.VERSION}"
                script{
                    gv.deployApp()
                    echo "Deploying to ${ONE}"
                    echo "Deploying to ${TWO}"
                }
                
            }
        }
    }
}

