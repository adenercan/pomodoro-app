# Pomodoro App

A customizable **Pomodoro timer application** built with **React** and **Tailwind CSS** to improve focus and productivity using the Pomodoro Technique.

🔗 Live demo: https://adenercan-pomodoro-app.netlify.app/

This project demonstrates practical **React fundamentals**, state management, UI customization, and time-based logic in a real, production-ready application.

## 🚀 Features

- Pomodoro, short break, and long break modes
- **Start / Pause / Restart / Reset** timer controls
- **Settings panel** to customize session durations
- Adjustable work, short break, and long break times
- **3 different color themes**
- **3 different font options**
- Sound notification (**bell rings when the timer ends**)
- Real-time timer updates
- Responsive design for all screen sizes
- Clean and minimal UI built with Tailwind CSS

## 🛠️ Technologies Used

- **React** (functional components)
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **React Hooks** (`useState`, `useEffect`)
- **Netlify** (deployment)

## 🎨 UI & Customization

- Built with **Tailwind CSS utility classes**
- Settings panel allows users to:
  - Adjust Pomodoro and break durations
  - Switch between **3 color themes**
  - Choose from **3 different font styles**
- Theme and font changes are applied instantly
- Focus on accessibility, consistency, and scalability

## 🎯 What I Focused On

- Building a complete **React + Tailwind** application
- Managing complex UI state (timer, settings, theme, font)
- Implementing countdown logic with `useEffect`
- Handling **restart vs reset** logic correctly
- Using Tailwind for rapid and consistent UI development
- Delivering a polished user experience (sound, settings, responsiveness)

## 🧠 How It Works

1. User selects a timer mode (work / break)
2. Timer durations are configured via **Settings**
3. React state controls remaining time
4. `useEffect` handles the countdown logic
5. When the timer reaches zero:
   - A **bell sound plays**
6. Restart resets the current session and starts it again  
7. Reset clears the timer and returns it to its initial state

This project highlights **state-driven UI**, **side effects**, and **design systems using Tailwind CSS**.
