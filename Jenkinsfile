pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'git@github.com:veda-jpg/simple-java-jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f node-app-container || true
                docker run -d -p 8098:3000 --name node-app-container node-app
                '''
            }
        }
    }
}

