FROM gcc

RUN mkdir app
COPY ./helloworld.c app
WORKDIR /app
RUN gcc helloworld.c -o helloworld 
CMD ["./helloworld"]

