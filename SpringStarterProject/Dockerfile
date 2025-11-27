FROM bellsoft/liberica-runtime-container:jre-21-cds-slim-musl

WORKDIR /app
COPY target/*.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]