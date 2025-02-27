# FlexPay - Mobile Financial Service Frontend

A modern React-based frontend application for the FlexPay mobile financial service system. This application provides a user-friendly interface for managing financial transactions, user accounts, and administrative tasks.

## Features

### User Features

- Secure PIN-based Authentication
- Send Money to Other Users
- Cash Out from Agents
- View Transaction History
- Profile Management

### Agent Features

- Cash In to User Accounts
- Handle Cash Out Requests
- Submit Cash/Withdraw Requests
- View Transaction History
- Agent Dashboard

### Admin Features

- User Management
- Agent Approval System
- Transaction Monitoring
- System Overview Dashboard
- Cash Request Management

## Tech Stack

- React 18
- React Router Dom v6
- TanStack Query (React Query)
- Tailwind CSS
- Axios
- React Hook Form
- React Toastify
- React Helmet
- DaisyUI

## Prerequisites

- Node.js (v14 or higher)
- npm/yarn
- Backend API running (see [Backend Repository](link-to-backend-repo))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/flexpay-frontend.git
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in root directory:

```env
VITE_API_URL=your_backend_api_url
```

4. Start development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── AuthProvider/         # Authentication context and provider
├── Components/          # Reusable UI components
├── CustomHooks/         # Custom React hooks
├── DashBoard/          # Dashboard layouts and components
├── Pages/              # Page components
│   ├── Authentication/  # Login/Register pages
│   ├── SendMoney/      # Money transfer functionality
│   ├── CashOut/        # Cash out management
│   └── ...
├── Routes/             # Route configurations
├── SharedComponents/   # Common UI components
└── main.jsx           # Application entry point
```

## Protected Routes

- `/dash/*` - Main dashboard routes (requires authentication)
- `/dash/sendMoney` - Send money feature (User only)
- `/dash/agent/*` - Agent specific features
- `/dash/admin/*` - Admin dashboard and management

## API Integration

This frontend application integrates with the FlexPay backend API. See the [Backend Documentation](#) for detailed API specifications.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Related Projects

- [FlexPay Backend](link-to-backend) - Backend API repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
