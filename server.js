const app = require('./src/app');

const PORT = process.env.DEVELOPMENT_PORT;

// Start the development server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
