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
        stage('Deploy to EC2 server') {
            steps {
                sh 'scp ./*.* ubuntu@35.154.31.133:/lexo'
            }
        }
        stage('SSH login EC2 server') {
            steps {
                sh 'ssh ubuntu@35.154.31.133'
            }
        }
        stage('Restart PM2') {
            steps {
                sh 'pm2 restart all'
            }
        }
    }
}
