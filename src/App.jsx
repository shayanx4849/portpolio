import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Testimonial from './components/Testimonial.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="border-t border-line">
          <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-10 py-20">
            <Testimonial />
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
