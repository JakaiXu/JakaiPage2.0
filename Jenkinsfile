pipeline {
    agent any
    tools {
        maven 'maven-3.9'
    }
    environment {
        DOCKER_BUILDKIT = '1'
    }
    stages {
        stage('Build JAR') {
            steps {
                script {
                    sh 'mvn clean package'
                    sh 'ls ./target/'  // This is to check if the JAR file is indeed created
                }
            }
        }
        stage('Test Docker') {
            steps {
                script {
                    sh 'docker info'  
                }
            }
        }
        stage('build image'){
            steps {
                script {
                    echo "building the docker image"
                    withCredentials([usernamePassword(credentialsId:'jenkins-jakai', passwordVariable:'PWD', usernameVariable:'USER')]){
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
