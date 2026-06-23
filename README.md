# Weather App

A sleek and lightweight mobile application built with React Native and Expo. This app provides a minimal, responsive user interface to check local temperatures and atmospheric conditions, featuring smooth screen-to-screen state navigation and a custom bottom tab bar.

---

## Features

* **Welcome Landing Screen:** Clean entry layout with intuitive call-to-action triggers to instantly jump into weather metrics.
* **Weather Conditions Layout:** Structured display card highlighting location, province data, temperature readings, and clear environmental conditions.
* **Custom Dynamic Navigation:** Fully decoupled bottom tab navigation leveraging localized state management for swift view transitions.
* **Modern UI Styling:** Built with flexible custom Flexbox architectures utilizing a clean palette, custom elevation drop shadows, and sharp responsive layouts.

---

## Tech Stack and Prerequisites

* **Framework:** React Native (Expo SDK)
* **Language:** TypeScript / JavaScript (React Hooks architecture)
* **Runtime Environment:** Node.js (v18+ recommended)

---

## Installation and Setup

Follow these steps to run the development environment locally:

1. **Clone the repository:**
```bash
   git clone [https://github.com/nIgihozo/Weather-App.git](https://github.com/nIgihozo/Weather-App.git)
   cd Weather-App

---

Install dependencies:
Using npm:

```bash
   npm install

---

Or using yarn:

```bash
   yarn install

---

Boot up the Expo local development server:

```bash
   npx expo start

---

**Running the Application**

Once the development server initializes, you have multiple execution vectors:

- Android Emulator: Press a in your terminal layout.

- iOS Simulator: Press i in your terminal layout (requires macOS and Xcode setup).

- Physical Device: Download the Expo Go application on your iOS or Android hardware, then scan the QR code displayed in your terminal or web dashboard.

---

**Core Architecture**

The core view logic handling state boundaries lives cleanly within the primary entry runtime file:

- App.tsx - Processes application structure, view conditionals (Home vs Weather), styling objects, and safe-area boundaries.
