export default function Testimonial() {
  return (
    <div>
      <span className="text-xs tracking-widest text-accent">CLIENT TESTIMONIAL</span>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3 mb-6">What Clients Say</h2>

      <div className="glass rounded-xl p-6 hover:shadow-glow transition-shadow">
        <div className="flex gap-4">
          <span className="text-5xl leading-none font-display text-purple-soft">“</span>
          {/* Placeholder testimonial — replace with a real quote */}
          <p className="text-ink/90 text-sm leading-relaxed pt-2">
            Shayan delivered our project on time with excellent code quality. His communication and
            problem-solving skills are top-notch. Highly recommended!
          </p>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-display font-semibold text-sm" aria-hidden>PC</div>
          <div>
            <p className="text-sm font-medium">Project Collaborator</p>
            <p className="text-xs text-muted">FYP Teammate</p>
          </div>
          <div className="ml-auto text-yellow-400 text-sm" role="img" aria-label="5 out of 5 stars">★★★★★</div>
        </div>
      </div>
    </div>
  )
}
