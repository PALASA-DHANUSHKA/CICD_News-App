pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'https://registry.hub.docker.com' // Replace with your registry
        DOCKER_CREDENTIALS_ID = 'docker-jenkins'
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
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
                    // Build Backend Image
                    docker.build(BACKEND_IMAGE, '-f SpringStarterProject/Dockerfile ./SpringStarterProject')
                    
                    // Build Frontend Image
                    docker.build(FRONTEND_IMAGE, '-f news-app/Dockerfile ./news-app')
                }
            }
        }
        
        stage('Pubat Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://' + DOCKER_REGISTRY, DOCKER_CREDENTIALS_ID) {
                        docker.image(BACKEND_IMAGE).pubat()
                        docker.image(FRONTEND_IMAGE).pubat()
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    bat '''
                        kubectl apply -f k8s/namespace.yaml
                        kubectl apply -f k8s/ -n news-app
                        
                        # Update images in deployment
                        kubectl set image deployment/backend-deployment news-app-backend=${BACKEND_IMAGE} -n news-app
                        kubectl set image deployment/frontend-deployment news-app-frontend=${FRONTEND_IMAGE} -n news-app
                        
                        # Wait for rollout to complete
                        kubectl rollout status deployment/backend-deployment -n news-app --timeout=300s
                        kubectl rollout status deployment/frontend-deployment -n news-app --timeout=300s
                    '''
                }
            }
        }
    }
}