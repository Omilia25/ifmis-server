const app = require('./src/app').default;

// Start the development server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
