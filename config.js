module.exports = {
  clarifai: {
    client_id: process.env.CLARIFAI_CLIENT_ID || 'id',
    client_secret: process.env.CLARIFAI_CLIENT_SECRET || 'secret'
  },
  port: process.env.PORT || 8000
};
