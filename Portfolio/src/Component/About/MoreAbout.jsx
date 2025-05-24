function MoreAbout() {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">More About Me</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Hello! I&apos;m a passionate{" "}
          <span className="font-semibold">Web Developer</span> with experience
          building responsive, accessible, and performance-optimized websites. I
          specialize in modern technologies like React, Tailwind CSS, and
          Node.js. I enjoy solving real-world problems through clean and
          maintainable code.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Key Skills
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React & Redux</li>
            <li>Tailwind CSS & Styled Components</li>
            <li>JavaScript / TypeScript</li>
            <li>Node.js & Express</li>
            <li>MongoDB / Firebase</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <a
          href="/resume.pdf" // Ensure resume.pdf is placed in the /public folder
          download="My_Resume.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default MoreAbout;
