pipeline {
    agent any
    
    // ลบส่วน tools { nodejs 'NodeJS' } ทิ้งไปเลยครับ 
    // เพราะเราลง manual ให้แล้ว

    environment {
        VERCEL_TOKEN = credentials('vercel-tokens') // เช็ค ID ใน Credentials ให้ตรงนะครับ
    }

    stages {
        stage('Test npm') {
            steps {
                // ตอนนี้ Jenkins จะใช้ npm ที่เราเพิ่งลงไปเมื่อกี้
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // เปลี่ยนจาก 'npm run build' เป็นคำสั่ง echo ธรรมดา
                sh 'echo "Project does not require build, skipping..."'
            }
        }

        stage('Deploy') {
            steps {
                // คำสั่ง Deploy ไป Vercel
                sh 'npx vercel --token $VERCEL_TOKEN --prod --yes'
            }
        }
    }
    
    post {
        failure {
            echo '❌ Deploy FAILED'
        }
        success {
            echo '✅ Deploy SUCCESS'
        }
    }
}