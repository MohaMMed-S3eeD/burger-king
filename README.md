# 🍔 Burger King Restaurant Website

A modern, responsive website for Burger King restaurant built with Next.js 15, featuring a beautiful UI, menu display, and contact functionality.

## ✨ Features

- **Modern Design**: Clean and attractive UI with Burger King branding
- **Responsive Layout**: Fully responsive design that works on all devices
- **Menu Display**: Interactive menu with product cards and detailed views
- **About Page**: Company story and values presentation
- **Contact System**: Contact form and location map integration
- **Performance Optimized**: Image optimization, lazy loading, and performance enhancements
- **SEO Friendly**: Optimized metadata and semantic HTML structure
- **Custom Fonts**: Burger King's signature Flame Bold font
- **Smooth Animations**: Hover effects and transitions throughout the site

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization + Cloudinary
- **UI Components**: Custom components with Radix UI primitives
- **Code Quality**: ESLint with Next.js configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd burger-king
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your database URL and other required environment variables.

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Home Page
- Hero section with Burger King branding
- Featured products and best sellers
- Main offers and promotional content

### Menu Page
- Browse all available products
- Filter by categories
- View detailed product information
- Add items to cart (UI ready)

### About Page
- Company history and story
- Core values and mission
- Call-to-action sections

### Contact Page
- Contact form for customer inquiries
- Restaurant location with Google Maps integration
- Business hours and contact information

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for consistent theming
- **Burger King brand colors**: Primary yellow (#FFC400) and black
- **Custom font**: Flame Bold for headings and branding
- **Responsive design** with mobile-first approach

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
```
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-auth-secret"
```

### Database Schema
The project uses Prisma with schema defined in `prisma/schema.prisma` for managing:
- Products
- Categories
- Orders (future implementation)
- Users (future implementation)

## 📈 Performance Features

- **Image Optimization**: Next.js Image component with Cloudinary integration
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Implemented on product images and components
- **Font Optimization**: Local font loading with `next/font`
- **Bundle Analysis**: Optimized package imports for smaller bundles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Burger King for brand inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons

---

**Made with ❤️ for Burger King Restaurant**
