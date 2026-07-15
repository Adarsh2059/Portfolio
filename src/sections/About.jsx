import { BrainCircuit, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Building efficient solutions through strong data structures, algorithms, and logical thinking.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Development",
    description:
      "Developing scalable web applications with modern frontend and backend technologies.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Exploring AI-powered systems and integrating intelligent features into real-world applications.",
  },
  {
    icon: Lightbulb,
    title: "Real-World Solutions",
    description:
      "Transforming practical problems into technology-driven solutions using available resources effectively.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Solving problems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                building meaningful solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science and Engineering student at VIT Bhopal
                University with a strong interest in software development,
                problem solving, and building technology-driven solutions for
                real-world challenges.
              </p>

              <p>
                I work across full-stack development using technologies such as
                React, Node.js, Express, and MongoDB. Alongside web development,
                I'm exploring artificial intelligence and its integration into
                practical software systems.
              </p>

              <p>
                My projects focus on solving meaningful problems, from
                AI-powered recruitment platforms to smart attendance systems
                and intelligent browser-based applications. I continuously
                strengthen my problem-solving skills through data structures,
                algorithms, and hands-on development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to solve real-world problems through technology,
                write efficient code, and use available resources effectively
                to build solutions that create meaningful impact."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};