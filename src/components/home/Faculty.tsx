import { Reveal, SectionHeading } from "../Section";

const faculty = [
  { name: "Prof. Anurag Shrivastava", role: "HOD, Computer Science", photo: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name:"Anil Prajapati", role: "Assistant Professor — Software Engineering", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Santosh Nagar", role: "Professor — Electronics", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Prof. Nitesh Gupta", role: "Professor — Mathematics", photo: "https://randomuser.me/api/portraits/women/52.jpg" },
  { name: "Vaibhav Patel", role: "Professor — Electronics", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Sudhir Sahu", role: "Lagend — Mathematics", photo: "https://randomuser.me/api/portraits/women/52.jpg" },
   { name: "K. K. Patel", role: "Soft Skills Coach — Personality Development", photo: "https://randomuser.me/api/portraits/women/52.jpg" },
];

export function Faculty() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gratitude"
          title="Faculty Appreciation"
          description="To the teachers who turned syllabi into stories — thank you."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="glass flex h-full items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gold/30">
                  <img src={f.photo} alt={f.name} className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-xl text-foreground">{f.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gold">{f.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">"Patience, wisdom, and a great sense of humour."</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
