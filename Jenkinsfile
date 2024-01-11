CODE_CHANGES = getGitChanges()

pipeline {
    agent any
    tools {
        maven "maven-3.9"
    }
    parameters { 
        choice(name:"VERSION", choices:['1.1.0','1.2.0','1.3.0'],description:'')
        booleanParam(name:'executeTests', defaultValue:true, description:'')
    }
    environment { 
        NEW_VERSION = '1.3.0'
        SERVER_CREDENTIALS = credentials("server-credentials")
    }
    stages {
        stage('build') {
            steps {
                echo 'building the application...'
                echo "building version ${NEW_VERSION}"
            }
        }
        
        stage('test') {
            when {
                expression { params.executeTests}
            }
        }
        
        stage('deploy') {
            steps {
                echo 'deploying the application...'
                // echo "deploying with ${SERVER_CREDENTIALS}"
                // sh "${SERVER_CREDENTIALS}"
                // withCredentials([usernamePassword(credentials:'server-credentials',usernameVariable:USER, passwordVariable:PWD)]){
                //   sh 'some script ${USER} ${PWD}'  
                echo "deploying version ${params.VERSION}"
                }
            }
        }
    }
}

