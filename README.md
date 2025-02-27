# Chef Claude Recipe Generator

Chef Claude is a React-based web application that helps users generate recipes based on available ingredients. Using the power of Mixtral-8x7B AI model, it suggests creative and practical recipes that make the most of your ingredients.

## Features

- Add multiple ingredients through an intuitive interface
- AI-powered recipe generation using Mixtral-8x7B
- Markdown-formatted recipe output for clear, structured presentation
- Responsive design with smooth scrolling to recipe suggestions
- Loading states and error handling

## Technologies Used

- React 19
- Vite
- Hugging Face Inference API
- React Markdown
- React Icons

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn
- Hugging Face API token

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shreyansh1607/AIchef.git
cd chef-claude
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Hugging Face API token:
```bash
VITE_HF_TOKEN=your_huggingface_token_here
```

4. Start the development server:
```bash
npm run dev
```

## Usage

1. Enter ingredients one at a time using the input field
2. Click "Add ingredient" to add them to your list
3. Once you have at least 4 ingredients, you can generate a recipe
4. Click "Get a recipe" to receive an AI-generated recipe suggestion
5. The recipe will automatically scroll into view when generated

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Powered by Mixtral-8x7B AI model via Hugging Face
- Built with Vite and React
- Styling inspired by modern UI/UX principles
