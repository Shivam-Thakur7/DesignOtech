[Digitify_README.md](https://github.com/user-attachments/files/21941745/Digitify_README.md)
# Digitify - Handwritten Digit Recognition Web App

Digitify is a web application that recognizes handwritten digits (0-9) using a trained Convolutional Neural Network (CNN).  
Built with **React + Tailwind CSS** for the frontend and **Flask + TensorFlow** for the backend, Digitify bridges AI and user experience seamlessly.
AI model link-[https://drive.google.com/file/d/1EvRkJ5aP7ffDDBv4qxEsPrEkPvfHonNk/view]
---

## 🚀 Features
- Upload or draw handwritten digits directly on the app.
- Predicts numbers in real time using CNN trained on MNIST dataset.
- Modern UI built with **React + Tailwind CSS**.
- Backend powered by **Flask** and connected to TensorFlow model.
- Lightweight and easy to run locally.

---

## 🧠 AI Model
- **Backend Framework**: Flask, NumPy, Pillow (PIL)  
- **Model Training**: TensorFlow + Keras  
- **Architecture**: Convolutional Neural Network (CNN)  
- **Dataset**: MNIST  
  - 60,000 training images  
  - 10,000 test images  
  - Image size: 28×28 pixels (grayscale handwritten digits)

---

## 🛠️ Tech Stack
### Frontend
- React.js
- Tailwind CSS
- axios
- react-canvas-draw

### Backend
- Node.js (Express.js for API handling)
- Flask (Python AI model serving)
- TensorFlow, Keras, NumPy, Pillow

---

## 📂 Folder Structure
```
Digitify/
│── backend/
│   ├── model/
│   │   ├── train_model.py
│   │   ├── digit_model.h5
│   ├── server.js
│   ├── app.py
│── frontend/
│   ├── src/
│   ├── public/
│── README.md
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/digitify.git
cd digitify
```

### 2️⃣ Backend Setup
```bash
cd backend
npm init -y
npm install express multer cors axios body-parser
npm install nodemon --save-dev

pip install tensorflow keras flask numpy pillow
```

#### Train Model
```bash
cd backend/model
python train_model.py
```

#### Start Backend Server
```bash
cd backend
npx nodemon server.js
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install axios react-canvas-draw
npm start
```

---

## 🎯 How It Works
1. User uploads or draws a digit.  
2. Frontend sends the image to the backend.  
3. Backend (Flask + CNN model) processes and predicts the digit.  
4. Prediction is returned and displayed on the UI.

---

## 📌 Future Enhancements
- Support for multi-digit recognition.
- Export predictions as CSV/JSON.  
- Gamified learning mode for kids.  
- Dark/light mode toggle.  
- Deployment on cloud (Heroku, Vercel, AWS).  

---

## 💡 Tagline
**Digitify – Where Handwriting Meets Intelligence.**

