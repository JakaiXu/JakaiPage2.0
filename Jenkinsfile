
pipeline {
    agent any
    tools {
        maven 'maven-3.9'
    }
  
    stages {
        stage('Test Docker') {
            steps {
                script {
                    sh 'docker --version'  
                }
            }
        }
        stage('build jar'){
          steps {
              script {
                echo "building the application"
                sh 'mvn clean install'
                sh 'mvn package'
                // dir('subdirectory') {  
                // sh 'mvn clean install'  
               
                // } 
              }
          }
        }
        stage('build image'){
          steps {
              script {
                echo "building the docker image"
                withCredentials([usernamePassword(credentialsId:'jenkins-jakai',passwordVariable:'PWD', usernameVariable:'USER')]){
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

