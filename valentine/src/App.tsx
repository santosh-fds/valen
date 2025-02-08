import  { useEffect, useRef, useState } from 'react';
import { Heart, X } from 'lucide-react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    playAudio();
  }, []);
  
  const yesButtonSize = noCount * 20 + 16; // Increases size with each "no"
  
  const getNoButtonText = () => {
    const phrases = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely sure?',
      'This could be a mistake!',
      'Have a heart!',
      'Don\'t be so cold!',
      'Change of heart?',
      'Wouldn\'t you reconsider?',
      'Is that your final answer?',
      'You\'re breaking my heart ;(',
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <img 
           src="./src/asset/m_h.jpeg"
            alt="Placeholder" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500 shadow-lg object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate-bounce">
          Hey <span className='line-through'>Mahreen</span> Bacchii..!  💖
        </h1>
        <audio ref={audioRef} src="./src/asset/Perfect - 320Kbps-(Mr-Jat.in).mp3"  loop ></audio>
        <p className="text-lg text-pink-700 mb-8 italic">
          "Every time I see you, my heart skips a beat... ❤️"
        </p>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8 transform hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Will you be my Valentine?
          </h2>
          
          <div className="flex flex-col gap-4">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes 😊
            </button>
            
            {!yesPressed && (
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                onClick={handleNoClick}
                style={{
                  fontSize: `${Math.max(16 - noCount, 8)}px`,
                  opacity: Math.max(1 - noCount * 0.1, 0.3),
                  transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 20 - 10}px)`,
                }}
              >
                {getNoButtonText()}
              </button>
            )}
          </div>
        </div>

        {yesPressed && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setYesPressed(false);
              }
            }}
          >
            <div className="bg-white rounded-lg p-8 max-w-md w-full animate-in fade-in duration-300">
              <div className="relative">
                <button
                  onClick={() => setYesPressed(false)}
                  className="absolute -right-2 -top-2 bg-pink-500 text-white rounded-full p-1 hover:bg-pink-600 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex justify-center mb-4">
                  <Heart className="w-16 h-16 text-pink-500 fill-current" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Yayyy! 🎉</h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    I knew you would say yes! You've made me the happiest person ever! ❤️
                  </p>
                  <p className="italic text-pink-600">
                    "Your smile lights up my world like nothing else..."
                  </p>
                  <p>
                    Thank you for being the most amazing girlfriend. You make every day special! 🌹
                  </p>
                  <div className="pt-4">
                    <button
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors w-full"
                      onClick={() => setYesPressed(false)}
                    >
                      Close with Love ❤️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;