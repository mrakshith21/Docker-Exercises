docker build -t static-web-app .

docker run -p 8000:8000 static-web-app

go to localhost:8000/file.html