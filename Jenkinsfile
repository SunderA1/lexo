pipeline {
    agent any
    stages {
        stage('Installing') {
            steps {
                sh 'npm install'
            }
        }
        stage('pm2') {
            steps {
                sh 'pm2 restart all'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}