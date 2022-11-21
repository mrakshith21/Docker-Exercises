FROM openjdk

RUN mkdir app
COPY ./Sum.java app
WORKDIR /app
RUN javac Sum.java
CMD ["java", "Sum"]

