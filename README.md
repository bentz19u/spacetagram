Spacetagram is a website which shares photos from NASA's Astronomy Picture of the Day (APOD) image API.

It was build for practice purpose using Next.js.

## Getting Started

Get a free API key for [NASA's Open API](https://api.nasa.gov/). 
Clone the repo, and set the key as an environment variable named API_KEY or use .env.test example to create a .env file in the root of the project with the following content:

```
API_KEY=<Your API key>
```

## Locally

Then, build the project with:
```
npm install
npm run build
```
You can run the development server with:
```
npm run dev
```

## Using docker

Or you can use docker
```
docker build . -t spacetagram
docker run -p 3000:3000 spacetagram   
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.