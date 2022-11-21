FROM python:3

RUN mkdir app
COPY file.html app
WORKDIR /app
CMD ["python3", "-m", "http.server", "8000"]
