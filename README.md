# Atlas Racing - Official Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Welcome to the official website repository for **Atlas Racing** - a student-led Racing Club at Heriot-Watt University, Dubai.

🔗 **Live Website**: [https://atlasracing.ae](https://atlasracing.ae)

---

## 📖 About the Project

This is the official website for Atlas Racing, showcasing our teams and their achievements in competitive motorsport. Our club consists of multiple divisions:

- **Driverless** - Autonomous racing vehicle development
- **Concept Class** - Innovative vehicle concepts and design
- **GT** - Grand Touring division

All our teams participate in **Formula Student UK**, where we compete against universities from around the world. This website serves as a platform to:

- Showcase our teams and their achievements
- Highlight team members and their contributions
- Display our sponsors and partners
- Share media coverage and gallery
- Provide information about our various divisions

---

## 🚀 Tech Stack

This website is built with modern web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) (with App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Other Libraries**:
  - [Typed.js](https://github.com/mattboldt/typed.js/) - Dynamic typing effects
  - [CountUp](https://www.npmjs.com/package/react-countup) - Animated statistics counters
  - [React Scroll Area](https://www.radix-ui.com/docs/primitives/components/scroll-area) - Custom scrollable areas

---

## 🗂️ Website Structure

The website consists of the following main pages:

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with team introduction, typing effects, and statistics |
| **About** | `/about` | Team members showcase, sponsors, and media coverage |
| **Gallery** | `/gallery` | Photo gallery of our events and achievements |
| **Driverless** | `/driverless` | Driverless division overview and performance stats |
| **Driverless Planning** | `/driverless/planning` | Details about the planning subsystem |
| **GT** | `/gt` | GT division information and details |

---

## 📁 Project Structure

```
Website/
├── app/                    # Next.js app directory (pages and routes)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── driverless/        # Driverless division pages
│   │   ├── control/      # Control subsystem
│   │   ├── perception/   # Perception subsystem
│   │   └── planning/     # Planning subsystem
│   ├── gallery/          # Gallery page
│   ├── gt/               # GT division page
│   ├── sponsors/         # Sponsors page
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.jsx        # Navigation header
│   ├── Social.jsx        # Social media links
│   ├── Stats.jsx         # Statistics counter
│   └── ...               # Other components
├── public/                # Static assets
│   ├── assets/           # Images and media
│   └── logo/             # Logo files
│   └── models/           # 3D Model of the car
├── lib/                   # Utility functions
│   └── utils.js          # Helper utilities
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Project dependencies
```

---

## 🛠️ Getting Started

Follow these instructions to set up the project locally:

### Prerequisites

- Node.js 18 or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Atlas-Racing/Website.git

# Navigate to project directory
cd Website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at [http://localhost:3000](http://localhost:3000).

---

## ✨ Key Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Page transitions and element animations using Framer Motion
- **Dynamic Content** - Typing effects and animated statistics counters
- **Team Showcase** - Interactive tabs for team member displays
- **Modern UI** - Clean, professional design with shadcn/ui components
- **Social Media Integration** - Quick links to all social platforms
- **Sponsor Sections** - Dedicated areas for partner and sponsor recognition
- **Media Coverage** - Showcase of press and media appearances
- **Performance Optimized** - Built with Next.js for optimal loading speeds

---

## 🧩 Components

Key components in the `/components` directory:

### Core Components
- **Header.jsx** - Main navigation header with mobile support
- **Nav.jsx** - Desktop navigation menu
- **MobileNav.jsx** - Mobile navigation menu
- **Photo.jsx** - Image display component with styling
- **Social.jsx** - Social media links component
- **Stats.jsx** - Animated statistics counter for home page
- **StatsDriverless.jsx** - Specialized stats for driverless division
- **PageTransition.jsx** - Smooth page transition effects
- **StairTransition.jsx** - Animated stair transition effect

### UI Components (shadcn/ui)
- **button.jsx** - Customizable button component
- **tabs.jsx** - Tab navigation for team members
- **scroll-area.jsx** - Custom scrollable areas
- **input.jsx** - Form input fields
- **select.jsx** - Dropdown select menus
- **sheet.jsx** - Mobile drawer/sheet component
- **tooltip.jsx** - Hover tooltips

---

## 🤝 Contributing

We welcome contributions from Atlas Racing team members! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/YourFeature`)
3. **Make your changes** and test thoroughly
4. **Commit your changes** (`git commit -m 'Add some feature'`)
5. **Push to the branch** (`git push origin feature/YourFeature`)
6. **Open a Pull Request**

### Code Style
- Follow the existing code structure and naming conventions
- Use meaningful variable and function names
- Keep components modular and reusable
- Test your changes on different screen sizes
- Run `npm run lint` before committing

### Reporting Issues
If you find a bug or have a suggestion:
- Check if the issue already exists
- Create a new issue with a clear title and description
- Include screenshots if applicable

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Website**: [https://atlasracing.ae](https://atlasracing.ae)
- **Instagram**: [@atlasracinghwud](https://www.instagram.com/atlasracinghwud/)
- **LinkedIn**: [Atlas Racing](https://linkedin.com/company/atlas-racing)

For any inquiries, please visit our website or reach out through our social media channels.

---

<p align="center">Made with ❤️ by Atlas Racing Team</p>