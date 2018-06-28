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
                sh 'scp ./*.* ubuntu@35.154.31.133:~/lexo/'
		sh 'scp -r ./controllers/ ubuntu@35.154.31.133:~/lexo/'
            }
        }
    }
}
