
pipeline {
    agent any
    tools {
        maven 'maven-3.9'
    }
  
    stages {
        stage('build jar'){
          steps {
              script {
                echo "building the application"
               
                dir('subdirectory') {  
                sh 'mvn clean install'  
                sh 'mvn package'
                } 
              }
          }
        }
        stage('build image'){
          steps {
              script {
                echo "building the docker image"
                withCredentials([usernamePassword(credentialsId:'jakai-jenkins',passwordVariable:'PWD', usernameVariable:'USER')]){
                    sh 'docker build -t jakai/jenkins:jakaiweb-1.0.0 .'
                    sh "echo $PWD | docker login -u $USER --password-stdin"
                    sh 'docker push jakai/jenkins:jakaiweb-1.0.0' 
                }
                  
              }
          }
  
        }
        stage('deploy') {
           
               
            steps {
               script{
                   echo "deploying the application..."
               }
                
            }
        }
    }
}

