FROM openjdk

RUN mkdir app
COPY ./HelloWorld.java app
WORKDIR /app
RUN javac HelloWorld.java
CMD ["java", "HelloWorld"]

