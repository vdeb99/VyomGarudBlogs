const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          About Us
        </h1>
      </div>

      <p className="text-lg text-slate-400 leading-relaxed">
        Welcome to our{" "}
        <span className="text-amber-400">UAV & Drone Technology</span> blog —
        your trusted source for everything related to unmanned aerial vehicles,
        defense systems, and autonomous platforms. Our team of experienced
        engineers and defense enthusiasts brings you in-depth insights,
        practical tutorials, and the latest updates from the rapidly evolving
        world of aerial robotics. Whether you're a defense professional
        exploring tactical surveillance solutions, an engineer working on
        autonomous navigation, or simply passionate about drone technology,
        we've got you covered. We believe in making complex technologies
        accessible to everyone. From military-grade reconnaissance drones to
        cutting-edge sensor systems and communication protocols, we break down
        technical concepts into clear, digestible content that empowers our
        readers to stay informed and ahead in this exciting field. Join our
        community and explore the future of flight.
      </p>
    </div>
  );
};

export default About;
