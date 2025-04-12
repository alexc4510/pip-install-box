import { Card, CardContent } from "@/components/ui/card";
import Profiles from "@/components/Profiles";

function App() {
  const scrollToProfiles = () => {
    const element = document.getElementById('profiles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Landing Page Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="flex flex-col items-center text-center">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight">
              pip install box
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              Crafting powerful solutions with clean code and creativity.
            </p>
          </CardContent>
        </Card>

        {/* Arrow */}
        <button
          onClick={scrollToProfiles}
          className="absolute bottom-10 cursor-pointer slow-bounce slow-bounce-hover"
          aria-label="Scroll down"
        >

          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </section>

      {/* Profiles Section */}
      <Profiles />

    </div>
  );
}

export default App;
