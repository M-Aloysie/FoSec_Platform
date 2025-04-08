# FoSec Platform  

## 📌 Description  
**FoSec Platform** (Food Security Platform) is a full-stack web and mobile application addressing food insecurity in Sub-Saharan Africa, impacting over 298 million people, where farmers produce 70-80% of the region’s food yet lack essential support. It connects farmers, buyers, and policymakers to boost productivity and incomes through real-time market data, financial tools, and training. Developed as a Mission Capstone for a Bachelor of Software Engineering at the African Leadership University by Aloysie Murekatete, under the supervision of Litumba Ndinelao.

## 🚀 Features  
- **User-friendly Interface** – Responsive design for seamless navigation.  
- **Real-time Market Data** – Current crop prices and trends for informed decisions.  
- **Financial Tools** – Microloans and crop insurance to support farmers financially.  
- **Data Analytics** – Insights for crop selection and weather forecasts to optimize yields.  

## 🛠️ Tech Stack  
- **Frontend:** React, JavaScript, HTML, CSS  
- **Backend:** Node.js, Express, Python (Django)  
- **Authentication:** JWT, bcrypt  
- **Deployment:** Vercel, Docker, GitHub Actions  
- **Database:** MySQL, MongoDB  
- **Testing:** Jest, Postman  

## 🏗️ Setup and Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/M-Aloysie/FoSec_Platform.git  
cd FoSec_Platform  
```

### 2️⃣ Backend Setup  
```bash
cd server  
npm install  
pip install -r requirements.txt  
cp .env.example .env  # Update environment variables  
npm run dev  # Start backend server  
```

### 3️⃣ Frontend Setup  
```bash
cd client  
npm install  
npm start  # Run frontend application  
```

## 📜 Deployment Plan  
The platform is deployed at [https://fo-sec-platform-six.vercel.app/](https://fo-sec-platform-six.vercel.app/) using Vercel for hosting and Docker for containerization. CI/CD is automated via GitHub Actions, with MySQL and MongoDB databases on managed cloud instances for scalability.

## 🔧 Deployment Steps  
- **Build and push Docker images** to a registry (e.g., Docker Hub).  
- **Deploy backend and frontend containers** using Docker Compose.  
- **Configure Vercel** for frontend hosting and API routing.  
- **Automate deployments** using GitHub Actions CI/CD pipelines.  

---
