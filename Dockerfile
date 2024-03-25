# Use the official Maven/Java image to create a build artifact
FROM maven:3.8.4-openjdk-17-slim AS builder

# Copy the Maven wrapper files and POM
COPY ./demo/mvnw /build/demo/mvnw
COPY ./demo/.mvn /build/demo/.mvn
COPY ./demo/pom.xml /build/demo/pom.xml

# Copy the source code
COPY ./demo/src /build/demo/src

# Build the application
WORKDIR /build/demo
RUN mvn clean install

# Stage 2: create a Spring Boot image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the packaged jar file into our container
COPY --from=builder /build/demo/target/*.jar /app/app.jar

# Expose port 8080
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
