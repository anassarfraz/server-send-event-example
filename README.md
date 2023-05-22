# server-send-event-example
# Event-Driven Application Example

This is an example event-driven application that demonstrates real-time event updates from the backend to the frontend using Server-Sent Events (SSE).

## Prerequisites

- Node.js
- Postman

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/anassarfraz/server-send-event-example.git

Install dependencies:

2. Open the terminal and navigate to the "backend" folder:
    npm install
3. Start the backend server:
    npm start
4. Open the `frontend/index.html` file in your web browser to view the frontend.

## Testing the API Endpoints
You can use Postman to test the API endpoints and observe the real-time event updates in the frontend.

Import the provided Postman collection file (docs/SSE test endpoints.postman_collection.json) into Postman.

Run the following requests to test the API endpoints:

- POST / - Add a user to trigger the 'userAdded' event.
- DELETE / - Delete a user to trigger the 'userDeleted' event.
- Observe the real-time event updates in the frontend as the events occur.

