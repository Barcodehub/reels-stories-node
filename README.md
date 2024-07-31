# Story and Reel Management Backend with Cloudinary

This project is a backend built with Node.js, Express and MongoDB for a social media application that handles the creation and management of stories/statuses and reels, using Cloudinary for multimedia file storage.

## Features

- CRUD operations for stories/statuses
- CRUD operations for reels
- Multimedia file storage with Cloudinary

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary
- Multer for file handling

## Prerequisites

- Node.js (version 14.0 or higher)
- MongoDB
- Cloudinary account

## Installation

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:
  ```
PORT=5000
MONGODB_URI=tu_uri_de_mongodb
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
  ```
- Adjust the values according to your setup

## API Endpoints

### Stories

- `POST /api/stories` - Create a new story
- `GET /api/stories` - Get all stories
- `PUT /api/stories/:id` - Update a story
- `DELETE /api/stories/:id` - Delete a story

### Reels

- `POST /api/reels` - Create a new reel
- `GET /api/reels` - Get all reels
- `PUT /api/reels/:id` - Update a reel
- `DELETE /api/reels/:id` - Delete a reel

## File Handling

This project uses Cloudinary for permanent storage of media files. Files are temporarily stored in the `uploads` folder, then immediately uploaded to Cloudinary and deleted from the local server.
