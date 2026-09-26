# Star Wars Characters

React Native app that lists Star Wars characters from SWAPI, the Star Wars API, after a welcome screen. Built in October 2023 as a learning project.

## Features

- A welcome screen with a Star Wars background that opens the home screen after 2.5 seconds.
- The home screen loads the first page of characters from SWAPI, with a loading indicator and an error message if the request fails.
- Tapping a character opens the character screen, which has a button back to the home screen.
- The status bar switches between light and dark content with the system color scheme.

## Tech stack

- **Framework:** React Native 0.72 (React Native CLI), TypeScript 4
- **State:** React Context for the loaded characters
- **Data:** Axios 1 against SWAPI, react-native-dotenv for the API URL
- **Routing:** React Navigation 6 (native stack)
- **UI:** react-native-vector-icons 10
- **Styling:** NativeWind 2 with Tailwind CSS 3 classes
- **Tooling:** Metro, Babel with module-resolver for the `@/` alias, ESLint 8 with the Airbnb and typescript-eslint configs, Prettier 3

## Getting started

You need Node.js 18 and the React Native 0.72 environment: Xcode with Ruby and Bundler for iOS, Android Studio with an emulator or a device for Android.

```bash
git clone https://github.com/androfficial/react-native-star-wars.git
cd react-native-star-wars
yarn install
```

Create a `.env` file in the project root:

| Variable | Purpose |
| --- | --- |
| `API_URL` | Base URL of SWAPI; the app requests `/people` from it |

For iOS, install the CocoaPods dependencies:

```bash
bundle install
cd ios
bundle exec pod install
cd ..
```

Start Metro with `yarn start`, then run `yarn android` or `yarn ios` in a second terminal.

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the Metro bundler |
| `yarn android` | Builds the app and runs it on an Android emulator or device |
| `yarn ios` | Builds the app and runs it in the iOS simulator |
| `yarn lint` | Runs ESLint |

## Project structure

```text
src/
  api/          Axios instance and SWAPI people requests
  assets/       welcome screen background
  context/      characters context
  data/         fan counter definitions
  hooks/        context and color scheme hooks
  navigation/   native stack navigator, its settings and types
  screens/      Welcome, Home and CharacterInfo
  types/        SWAPI types, screen names and module declarations
```

## Notes

- Work in progress: the fan counters, search, the Clear Fans button, pagination and the character details screen are not implemented yet.
- `API_URL` is compiled into the bundle by react-native-dotenv (`import { API_URL } from '@env'`), so after changing `.env` restart Metro with `yarn start --reset-cache`.
