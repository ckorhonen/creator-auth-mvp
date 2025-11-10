# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev
```

## Project Structure Overview

```
creator-auth-mvp/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── .gitkeep
│   ├── pages/            # Page-level components
│   │   └── .gitkeep
│   ├── hooks/            # Custom React hooks
│   │   └── .gitkeep
│   ├── utils/            # Helper functions and utilities
│   │   └── .gitkeep
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/           # Global styles and CSS
│   │   ├── index.css
│   │   └── App.css
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
│
├── public/               # Static assets (images, icons, etc.)
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── .eslintrc.cjs         # ESLint configuration
└── .gitignore           # Git ignore rules
```

## Development Workflow

### 1. Creating Components

Create new components in `src/components/`:

```typescript
// src/components/VerificationBadge.tsx
interface VerificationBadgeProps {
  verified: boolean;
  level?: 'basic' | 'advanced' | 'premium';
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({ 
  verified, 
  level = 'basic' 
}) => {
  return (
    <div className="inline-flex items-center gap-2">
      {verified && <span>✓</span>}
      <span className="text-sm">{level}</span>
    </div>
  );
};
```

### 2. Creating Pages

Create new pages in `src/pages/`:

```typescript
// src/pages/Dashboard.tsx
export const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {/* Page content */}
    </div>
  );
};
```

### 3. Custom Hooks

Create reusable logic in `src/hooks/`:

```typescript
// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Authentication logic here

  return { user, loading };
};
```

### 4. Type Definitions

Add new types to `src/types/index.ts`:

```typescript
export interface NewType {
  id: string;
  // Add properties
}
```

## Styling Guidelines

### Tailwind CSS

This project uses Tailwind CSS for styling. Use utility classes:

```tsx
<div className="bg-primary-600 text-white px-4 py-2 rounded-lg">
  Button
</div>
```

### Custom Colors

The theme uses a primary color palette defined in `tailwind.config.js`:
- `primary-50` through `primary-900`

### Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Code Quality

### Type Safety

Always use TypeScript types:

```typescript
// Good
const handleSubmit = (data: FormData): void => {
  // Implementation
};

// Avoid
const handleSubmit = (data: any) => {
  // Implementation
};
```

### ESLint

Run linting before committing:

```bash
npm run lint
```

### Type Checking

Verify types without building:

```bash
npm run type-check
```

## Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

The production build will be in the `dist/` directory.

## Whop Integration

### Getting Started with Whop

1. Visit [Whop Developer Portal](https://whop.com/developers)
2. Create a new app
3. Configure OAuth settings
4. Add environment variables to `.env.local`:

```bash
VITE_WHOP_CLIENT_ID=your_client_id
VITE_WHOP_CLIENT_SECRET=your_client_secret
```

### Whop SDK Integration

```typescript
// Example integration (to be implemented)
import { WhopSDK } from '@whop-apps/sdk';

const whop = new WhopSDK({
  clientId: import.meta.env.VITE_WHOP_CLIENT_ID,
});
```

## Next Steps

### Immediate Priorities

1. **Authentication Flow**
   - Implement user registration
   - Add login/logout functionality
   - Integrate Whop OAuth

2. **Verification System**
   - Design verification flow UI
   - Create verification request form
   - Build admin review interface

3. **Badge System**
   - Design verification badges
   - Implement badge display component
   - Create badge sharing functionality

4. **Profile Management**
   - Build creator profile pages
   - Add profile editing
   - Implement settings panel

### Future Enhancements

- Analytics dashboard
- API integration
- Real-time updates
- Mobile app consideration
- Advanced verification methods

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Whop Developer Docs](https://dev.whop.com/)

## Getting Help

- Check existing issues on GitHub
- Review Whop developer documentation
- Consult React and TypeScript communities

---

Happy coding! 🚀
