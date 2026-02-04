pipeline {
    agent any

    tools {
        maven 'maven3'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/simple-java-jenkins.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Run App') {
            steps {
                sh 'java -cp target/hello-jenkins-1.0.jar HelloWorld'
            }
        }
    }
}

