pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'dhanushkapalasa'
        DOCKER_CREDENTIALS_ID = 'docker-jenkins'
        BACKEND_IMAGE = "${DOCKER_REGISTRY}/news-app-backend:${BUILD_NUMBER}"
        FRONTEND_IMAGE = "${DOCKER_REGISTRY}/news-app-frontend:${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm ci'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.build(BACKEND_IMAGE, '-f SpringStarterProject/Dockerfile ./SpringStarterProject')
                    docker.build(FRONTEND_IMAGE, '-f news-app/Dockerfile ./news-app')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS_ID) {
                        docker.image(BACKEND_IMAGE).push()
                        docker.image(FRONTEND_IMAGE).push()
                    }
                }
            }
        }

        stage('Deploy with docker-compose') {
            steps {
                script {
                    bat '''
                        echo Updating docker-compose images...

                        docker pull %BACKEND_IMAGE%
                        docker pull %FRONTEND_IMAGE%

                        docker-compose -f docker-compose.yml down
                        docker-compose -f docker-compose.yml up -d

                        echo Deployment Completed Successfully!
                    '''
                }
            }
        }
    }
}
