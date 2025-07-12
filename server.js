const express = require('express');
const cors = require('cors');
const resortRoutes = require('./routes/resorts');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/resorts', resortRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
