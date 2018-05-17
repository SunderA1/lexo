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
                sh 'pm2 start app.js'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}