pipeline {
    agent any

    stages {
        stage('Copy files to local machine') {
            steps {
                sh 'whoami'
                // Copy files to mounted volume
                script {
                    sh 'cp -r /var/www/html/test'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline successfully executed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
