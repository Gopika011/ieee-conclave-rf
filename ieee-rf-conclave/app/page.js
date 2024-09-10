import Forms from "./components/Forms";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className='w-screen h-screen flex'>
      <Hero />
      <Forms />
    </div>
  )
}
