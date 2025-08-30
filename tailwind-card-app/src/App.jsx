import Card from './Component/Card'
import './App.css'

function App() {
  const cardData = [
    {
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png"
    }
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center text-blue-700 mb-8px color-'>My Card Aplication</h1>

      <div className='flex flex-wrap justify-center'>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

    </div>
  )
}

export default App
