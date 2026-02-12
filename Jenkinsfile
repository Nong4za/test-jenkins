pipeline {
    agent {
        docker { image 'node:22-alpine' }
    }

    environment {
        VERCEL_TOKEN = credentials('quiz1')
        VERCEL_PROJECT_NAME = 'devops18-quiz1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Node & npm') {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                    npx vercel deploy \
                        --prod \
                        --yes \
                        --name $VERCEL_PROJECT_NAME \
                        --token $VERCEL_TOKEN
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deploy to Vercel SUCCESS'
        }
        failure {
            echo '❌ Deploy FAILED'
        }
    }
}