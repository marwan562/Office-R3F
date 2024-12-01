import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ReactNode, useState } from "react";

interface SectionProps {
  right?: boolean;
  opacity?: number;
  children?: ReactNode;
}

const Section = ({ right, opacity, children }: SectionProps) => (
  <section
    className={`h-screen flex flex-col justify-center p-10 ${
      right ? "items-end" : "items-start"
    }`}
    style={{ opacity }}
  >
    <div className="w-1/2 flex items-center justify-center">
      <div className="max-w-sm w-full">
        <div className="bg-white rounded-lg px-8 py-12">{children}</div>
      </div>
    </div>
  </section>
);

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Marwan Hassan
          </h1>
          <p className="text-gray-500">
            Proficient Full-Stack Developer / Threejs-3D
          </p>
          <p className="mt-3">About Me:</p>
          <ul className="leading-9">
            <li>📌 2+ years of experience with the MERN stack</li>
            <li>📦 Expertise in creating high-performance web applications</li>
            <li>
              🌟 Skilled in solving complex problems and delivering
              client-focused solutions
            </li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Technical Skills 🔥
          </h1>
          <div className="mt-3">
            <b>Frontend 🚀</b>
            <ul className="leading-9">
              <li>Tailwind CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React.js, Redux</li>
              <li>WebGL / Three.js</li>
              <li>Next.js</li>
            </ul>
          </div>
          <hr />
          <div className="mt-3">
            <b>Backend 🔬</b>
            <ul className="leading-9">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>GraphQL/Apollo</li>
              <li>Prisma/Sequelize</li>
            </ul>
          </div>

          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Projects & Contact 🤝
          </h1>
          <div className="mt-3">
            <b>Highlighted Projects</b>
            <ul className="leading-9">
              <li>
                📦 Food Ordering Platform - [
                <a href="https://mern-food-ordering-front-end.vercel.app/">
                  View
                </a>
                ]
              </li>
              <li>
                📊 Professional Admin Dashboard - [
                <a href="https://github.com/marwan562/admin-dashboard">
                  GitHub
                </a>
                ]
              </li>
              <li>
                🛍️ E-Commerce Brand Website - [
                <a href="https://visual-s-code-clone.vercel.app/">View</a>]
              </li>
              <li>
                💻 VS Code Clone - [
                <a href="https://visual-s-code-clone.vercel.app/">View</a>]
              </li>
              <li>
                🏡 Airbnb Clone - [
                <a href="https://airbnb-clone-app-nextjs.vercel.app/">View</a>]
              </li>
            </ul>
          </div>
          <div className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 Contact:{" "}
            <a href="mailto:marwandeveloper33@gmail.com">
              marwandeveloper33@gmail.com
            </a>{" "}
            |<a href="https://github.com/marwan562"> GitHub</a> |
            <a href="https://linkedin.com/in/marwan-asw5na-18901a297/">
              LinkedIn
            </a>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
