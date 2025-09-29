# JobListing - SpringBoot + Vite Application

A full-stack job listing application built with Spring Boot backend and React frontend using Vite as the build tool.

## 🚀 Technologies Used

### Backend
- **Java 21** - Programming language
- **Spring Boot 3.5.6** - Main framework for REST API
- **Spring Data MongoDB** - Database integration
- **MongoDB Atlas** - Cloud database
- **SpringDoc OpenAPI 3** - API documentation (Swagger UI)
- **Maven** - Build tool and dependency management

### Frontend
- **React 19.1.0** - JavaScript library for building user interfaces
- **Vite 6.3.5** - Build tool and development server
- **Axios 1.12.2** - HTTP client for API calls
- **CSS3** - Styling
- **ESLint** - Code linting

## 📁 Project Structure

```
JobListing-SprigbootVite/
├── backend/                 # Spring Boot API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/emilio/joblisting/
│   │   │   │       ├── JoblistingApplication.java
│   │   │   │       ├── Controller/
│   │   │   │       │   └── PostController.java
│   │   │   │       ├── models/
│   │   │   │       │   └── Post.java
│   │   │   │       └── repository/
│   │   │   │           ├── PostRepository.java
│   │   │   │           ├── SearchRepository.java
│   │   │   │           └── SearchRepositoryImplementation.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
└── frontend/               # React + Vite application
    ├── src/
    │   ├── components/
    │   │   ├── PostForm.jsx
    │   │   ├── PostList.jsx
    │   │   └── SearchBar.jsx
    │   ├── App.jsx
    │   ├── api.js
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Java 21** or later
- **Node.js** (version 18 or later)
- **npm** or **yarn**
- **Maven** (or use the included Maven wrapper)
- **MongoDB Atlas account** (for database)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/EmilioYared/JobListing-SprigbootVite.git
cd JobListing-SprigbootVite
```

### 2. Backend Setup

#### Navigate to backend directory
```bash
cd backend
```

#### Configure Database
1. Update `src/main/resources/application.properties` with your MongoDB connection details:
```properties
server.port=3001
spring.application.name=joblisting
spring.data.mongodb.database=your_database_name
spring.data.mongodb.uri=your_mongodb_connection_string
```

#### Install dependencies and run
```bash
# Using Maven wrapper (recommended)
./mvnw clean install
./mvnw spring-boot:run

# Or using Maven directly
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:3001`

### 3. Frontend Setup

#### Navigate to frontend directory
```bash
cd ../frontend
```

#### Install dependencies
```bash
npm install
# or
yarn install
```

#### Start development server
```bash
npm run dev
# or
yarn dev
```

The frontend will start on `http://localhost:5173` (default Vite port)

## 🌐 API Endpoints

### Job Posts
- `GET /posts` - Get all job posts
- `POST /posts` - Create a new job post
- `GET /posts/search/{text}` - Search job posts by text

### API Documentation
Once the backend is running, you can access the Swagger UI documentation at:
`http://localhost:3001/swagger-ui.html`

## 📝 Features

- **Create Job Posts** - Add new job listings with description, experience level, profile, and required technologies
- **View All Posts** - Display all available job listings
- **Search Functionality** - Search through job posts by keywords
- **Responsive Design** - Works on desktop and mobile devices
- **REST API** - Clean RESTful API architecture
- **Real-time Updates** - Frontend updates dynamically when new posts are added

## 🚀 Development

### Backend Development
- The backend runs on port 3001
- Uses Spring Boot DevTools for hot reload during development
- MongoDB collections are automatically created

### Frontend Development
- Vite provides hot module replacement (HMR) for fast development
- ESLint configured for code quality
- Component-based architecture with React

## 📦 Build for Production

### Backend
```bash
cd backend
./mvnw clean package
java -jar target/joblisting-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
npm run build
# Built files will be in the 'dist' directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**EmilioYared**
- GitHub: [@EmilioYared](https://github.com/EmilioYared)

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 3001 (backend) and 5173 (frontend) are available
2. **MongoDB connection**: Verify your MongoDB Atlas connection string and network access
3. **CORS issues**: The backend is configured to handle CORS, but ensure your frontend URL is correct
4. **Java version**: This project requires Java 21. Check your version with `java -version`

### Getting Help

If you encounter any issues:
1. Check the console logs for error messages
2. Verify all prerequisites are installed
3. Ensure MongoDB connection is working
4. Create an issue on GitHub with detailed error information

---

Happy coding! 🚀