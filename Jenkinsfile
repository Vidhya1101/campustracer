pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Vidhya1101/campustracer.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t campustracer .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop campustracer || true'
                sh 'docker rm campustracer || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name campustracer campustracer'
            }
        }
    }
}
