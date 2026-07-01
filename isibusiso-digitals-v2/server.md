Client Request (browser, API call, etc.)
|
v
+-----------------------------+
| Express App (app)           |
+-----------------------------+
|
v
[ Body Parsers ]
- express.json() → parses JSON bodies
- express.urlencoded() → parses form data
  |
  v
  [ Logging Middleware ]
- logMiddleware → logs details of each request
  |
  v
  [ Routes ]
- registerRoutes(httpServer, app)
- Handles specific endpoints (e.g., /api/contact)
  |
  v
  [ Error Handler ]
- errorHandler → catches errors from routes/middleware
  |
  v
  [ Static File Serving ]
- Production: serveStatic(app) → serves built assets
- Development: setupVite(httpServer, app) → enables hot reload
  |
  v
  [ Response Sent Back ]
- Success → JSON, HTML, or static file
- Error → formatted error response
