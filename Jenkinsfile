pipeline {
    agent {
        any {
            args '-v /var/www/html/test:/mnt'
        }
    }

    stages {
        stage('Copy files to local machine') {
            steps {
                // Copy files to mounted volume
                script {
                    sh 'cp -r * /mnt'
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
