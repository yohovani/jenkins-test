pipeline {
    agent any
    stages {
        stage("stage 1"){
            steps {
                scp index.html yoho@DESKTOP-T3B4B99:/var/www/html/test/index.html
            }
        }
        stage("stage 2"){
            steps {
                echo "this is a stage 2"
            }
        }
        stage("stage 3"){
            steps {
                echo "this is a stage 3"
            }
        }
        stage("stage 4"){
            steps {
                echo "this is a stage 4"
            }
        }
        stage("stage 5"){
            steps {
                echo "this is a stage 5"
            }
        }
    }
}
