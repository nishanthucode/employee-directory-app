# Employee Directory App

A React Native application built with Expo that retrieves employee data from a REST API and displays it with city-based filtering. The selected filter is remembered even after closing the app.



---

## Project Structure

```
employee-directory-app/
├── App.js                        # Root component, loads fonts
├── app.json                      # Expo configuration
├── package.json
└── src/
    ├── components/
    │   ├── AppHeader.js          # Blue navigation bar with hamburger
    │   ├── HeaderBanner.js       # Top image banner
    │   ├── CityFilter.js         # Horizontal scrollable city chips
    │   ├── UserCard.js           # Single employee row with divider
    │   ├── DrawerMenu.js         # Slide-in side navigation
    │   ├── LoadingScreen.js      # Shown while data is being fetched
    │   └── ErrorScreen.js        # Shown when API call fails
    ├── screens/
    │   └── HomeScreen.js         # Main screen — ties all components
    ├── hooks/
    │   └── useUsers.js           # Fetching, filtering, persistence logic
    ├── services/
    │   └── api.js                # API call to JSONPlaceholder
    └── utils/
        ├── storage.js            # AsyncStorage read/write helpers
        └── theme.js              # App-wide colors, fonts, spacing
```


### Requirements

- Node.js 18 or above
- Expo Go installed on your Android or iOS device

### Setup

# Clone the repository
git clone https://github.com/YOUR_USERNAME/employee-directory-app.git
cd employee-directory-app

# Install packages
npm install

# Launch the development server
npx expo start --tunnel
```

Scan the QR code displayed in the terminal using the Expo Go app on your phone.Make sure your phone and PC are on the same Wi-Fi network

### Platform-specific Commands

```bash
npx expo start --android    # Opens on Android emulator
npx expo start --ios        # Opens on iOS simulator (Mac only)
npx expo start --web        # Opens in browser
```



## API Reference

**Endpoint used:**
```
GET https://jsonplaceholder.typicode.com/users
```

