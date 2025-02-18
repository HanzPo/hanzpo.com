import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/opengraph-image.png" alt="Opengraph preview image" width={1200} height={630} />
      <div className="min-h-screen flex items-center">
        <div className="w-full px-4 md:px-0 md:ml-[10%] lg:ml-[20%] mt-8 md:-mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-crimson-pro mb-4 text-center md:text-left">
            hey, i&apos;m hanz.
          </h1>
          
          <p className="text-lg md:text-xl font-crimson-pro mb-8 text-stone-300 text-center md:text-left max-w-lg">
            i&apos;m a computer science student at the university of waterloo with an interest in data science and machine learning. i also enjoy learning about finance, economics, urban planning, and history in my spare time.
          </p>
          
          <h2 className="text-xl md:text-2xl font-crimson-pro mb-3 text-stone-200 text-center md:text-left">
            current roles:
          </h2>
          
          <div className="space-y-2 w-full md:w-[400px] lg:w-[500px] mx-auto md:mx-0 font-lora">
            {/* Work Experience Card 1 */}
            <div className="p-2 md:p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                  <Image 
                    src="/images/shopify_glyph.svg" 
                    alt="Shopify logo" 
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">Shopify</h3>
                  <p className="text-stone-400 text-sm md:text-base">Engineering Intern</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">Incoming S25</div>
            </div>

            {/* Work Experience Card 2 */}
            <div className="p-2 md:p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                  <Image 
                    src="/images/cohere_logo.svg" 
                    alt="Cohere logo" 
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">Cohere</h3>
                  <p className="text-stone-400 text-sm md:text-base">Senior Data Quality Specialist</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">Sept. 2024 - Present</div>
            </div>

            <div className="p-2 md:p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-lg mr-2 md:mr-3 p-2 md:p-2.5 flex items-center justify-center">
                  <Image 
                    src="/images/uw_logo.svg" 
                    alt="University of Waterloo logo" 
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base text-stone-200">University of Waterloo</h3>
                  <p className="text-stone-400 text-sm md:text-base">Bachelor of Computer Science</p>
                </div>
              </div>
              <div className="hidden md:block text-stone-400 text-sm md:text-base whitespace-nowrap">Sept. 2024 - Apr. 2029</div>
            </div>
          </div>

          <a href="#next" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center group">
            <p className="text-stone-400 text-sm mb-2 group-hover:text-stone-200 transition-colors">
              <span className="md:hidden">swipe to see more</span>
              <span className="hidden md:inline">scroll to see more</span>
            </p>
            <svg 
              className="w-6 h-6 mx-auto text-stone-400 group-hover:text-stone-200 transition-colors animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div id="next" className="min-h-screen flex items-center justify-center p-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl text-stone-200 font-crimson-pro mb-6">
            find me here:
          </h2>
          <div className="space-y-3 font-lora">
            <a 
              href="/files/Resume___January_2025_V6.pdf" 
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a 
              href="https://www.github.com/HanzPo" 
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a 
              href="https://www.linkedin.com/in/hanznathanpo/" 
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/hanznathanpo" 
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://www.instagram.com/hanznathanpo" 
              className="block text-stone-400 text-lg md:text-xl hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
