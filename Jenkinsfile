pipeline {
    agent any

    tools {
        maven 'maven3'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/veda-jpg/simple-java-jenkins.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
       }

        stage('Check jar') {
            steps {
                sh 'ls -l target'
                sh 'jar tf target/hello-jenkins-1.0.jar'
            }
        }   

    }
}

