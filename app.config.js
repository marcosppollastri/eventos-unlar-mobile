import 'dotenv/config'
export default {
  "expo": {
    "name": "blank",
    "slug": "blank",
    "version": "1.0.0",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
      "android": {
        "package": "com.diamondsoftware.eventosunlar"
      },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    }
  }
}
