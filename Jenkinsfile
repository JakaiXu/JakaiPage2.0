CODE_CHANGES = getGitChanges()

pipeline {
  agent any
  parameters {
  choice(name:‘VERSION’, choices:['1.1.0’, ‘1.2.0’], description:’version to deploy on prod’))
  booleanParam(name:’executeTests’, defaultValue: true, description:’’)
}
  environment {
    NEW_VERSION = '1.3.0'
    SERVER_CREDENTIALS = credentials('jakai')
  }
  stages {
    stage("build"){
      when {
        expression {
          BRANCH_NAME == 'dev' && CODE_CHANGES == true
        }
      }
      steps{
        echo 'building application'
        echo "building version ${NEW_VERSION}"
      }
    }
     stage("test"){
       when {
         expression {
           params.executeTests == true
         }
       }
       
      steps{
        echo 'developing application'
        withCredentials(){
          usernamePassword(credentials:'jakai',usernameVariable: USER, passwordVariable: PWD)
        }
      }
    }
     stage("deploy"){
      steps{
        echo 'developing application'
        echo "deploying version ${params.VERSION}"
      }
    }
  }
}
