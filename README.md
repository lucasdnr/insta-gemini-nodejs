# Node.js Project with Gemini Integration for generation of Image Descriptions

This project is a Node.js application that integrates with the **Gemini** service to generate descriptions for uploaded images. It provides API endpoints for managing posts with images and their corresponding metadata.

## Features

- **Post Management**: Create, retrieve, and update posts.
- **Image Upload**: Handles image uploads and stores them on the server.
- **AI Integration**: Uses the Gemini service to generate descriptive metadata for uploaded images.
- **RESTful API**: Provides endpoints for managing and retrieving post data.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:lucasdnr/insta-gemini-nodejs.git
   cd insta-gemini-nodejs
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the required environment variables:
   ```env
   GEMINI_API_KEY=<your-gemini-api-key>
   DATABASE_URI=<your-database-uri>
   ```

4. **Run the Application**:
   Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### 1. **List All Posts**
   - **Endpoint**: `GET /posts`
   - **Description**: Retrieves a list of all posts.
   - **Response**: JSON array of posts.

### 2. **Create a New Post**
   - **Endpoint**: `POST /posts`
   - **Description**: Adds a new post to the database.
   - **Request Body**:
     ```json
     {
       "description": "Sample Post",
       "img_alt": "A brief alternative text"
     }
     ```
   - **Response**: JSON object of the created post.

### 3. **Upload an Image**
   - **Endpoint**: `POST /upload`
   - **Description**: Uploads an image and creates a post with the image's metadata.
   - **Request**: Multipart/form-data with an image file.
   - **Response**: JSON object of the created post.

### 4. **Get Post by ID**
   - **Endpoint**: `GET /posts/:id`
   - **Description**: Retrieves a specific post by its ID.
   - **Response**: JSON object of the post.

### 5. **Update a Post with Image Metadata**
   - **Endpoint**: `PUT /posts/:id`
   - **Description**: Updates a post's metadata by generating a description for its image using the Gemini service.
   - **Request Body**:
     ```json
     {
       "img_alt": "A brief alternative text"
     }
     ```
   - **Response**: JSON object of the updated post.

## How It Works

1. **Image Upload**:
   - When an image is uploaded via the `POST /posts/image` endpoint, it is stored on the server under the `uploads/` directory.
   - A post entry is created with the image URL.

2. **Generate Image Description**:
   - The `PUT /posts/:id` endpoint uses the Gemini service to analyze the uploaded image and generate a description.
   - The description is stored in the post's database.

3. **Post Retrieval**:
   - Posts can be retrieved via their unique ID or as a list.

## Prerequisites

- Node.js (v14+ recommended)
- A MongoDB database instance
- A valid Gemini API key for image description generation

## Future Improvements

- Add authentication for API endpoints.
- Support multiple image formats.
- Implement image compression for efficient storage.
