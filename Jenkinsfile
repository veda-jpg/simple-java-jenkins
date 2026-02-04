pipeline {
    agent any

    tools {
        maven 'maven3'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git remote add origin https://github.com/veda-jpg/simple-java-jenkins.git
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

