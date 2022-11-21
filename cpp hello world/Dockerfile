FROM gcc

RUN mkdir app
COPY ./helloworld.cpp app
WORKDIR /app
RUN g++ helloworld.cpp -o helloworld 
CMD ["./helloworld"]

