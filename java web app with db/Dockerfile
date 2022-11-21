FROM openjdk:11

RUN mkdir app
COPY ./todo-0.0.1-SNAPSHOT.jar app
WORKDIR /app
EXPOSE 8080
CMD ["java", "-jar", "todo-0.0.1-SNAPSHOT.jar"]

