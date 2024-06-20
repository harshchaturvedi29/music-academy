'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Shreya Ghoshal',
      designation: 'Vocal Coach',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWCwR7DAmL3aSnGB-quEBoTkAbzuogugYEPLMzOsojQ&s',
    },
    {
      id: 2,
      name: 'Bhuvan Bam',
      designation: 'Guitar Instructor',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UXgOtxqLrDqE7k9qc2dHlzChQgCsbOI-xHSIfvdBwA&s',
    },
    {
      id: 3,
      name: 'Sunidhi Chauhan',
      designation: 'Piano Teacher',
      image:
        'https://m.media-amazon.com/images/M/MV5BODE2NDJjNWQtMzkxYi00OTVjLTk2MTktMjk1NWVhN2VjNWE1XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 4,
      name: 'King',
      designation: 'Drumming Expert',
      image:
        'https://iansportalimages.s3.amazonaws.com/thumbnails/cats_bDAso3V.jpg',
    },
  ];
  
function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
        </div>
    </WavyBackground>
</div>
  )
}

export default Instructors