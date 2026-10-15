# FitTrack — Cross-Platform Mobile Wellness App

An Expo + React Native starter for iOS and Android featuring a wellness dashboard, habit check-ins, Firebase Cloud Messaging setup, Sentry error monitoring, and a Detox E2E test scaffold.

> This is a demo starter, not a medical device or clinical wellness service. The user counts, ratings, session counts, and performance figures in the project brief are supplied claims and are not verified by this code.

## Requirements
- Node.js 20+
- Expo Go or iOS Simulator / Android Emulator
- Firebase project for push notifications (optional)
- Sentry project (optional)
- Detox native build environment for E2E tests

## Setup
1. Copy `.env.example` to `.env` and configure optional public app identifiers.
2. Run `npm install`
3. Run `npx expo start`
4. Scan the QR code with Expo Go or open in a simulator.

## Included
- Expo Router tab navigation
- Daily wellness overview and check-in actions
- Notification registration helper using Expo Notifications
- Sentry initialization
- GitHub Actions validation workflow
- Jest unit tests and Detox configuration starter

## Note
Expo push notifications and Firebase Cloud Messaging setup differ by platform and Expo SDK. Configure credentials in EAS/Firebase before expecting real push delivery. Detox tests require native builds and are not runnable in Expo Go.
