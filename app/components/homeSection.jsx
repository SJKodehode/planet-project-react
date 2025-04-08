import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

export default function HomeSection() {
    return (
        <div className="flex min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-64 border-r border-purple-900/30 bg-black/80 p-6 backdrop-blur-sm">
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
            SATURN
          </h1>
          <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              href="#planet"
              className="group flex items-center space-x-2 rounded-md px-3 py-2 transition-all hover:bg-purple-900/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 transition-all group-hover:opacity-100"></span>
              <span className="font-medium tracking-wider">THE PLANET</span>
            </Link>
          </li>
          <li>
            <Link
              href="#moons"
              className="group flex items-center space-x-2 rounded-md px-3 py-2 transition-all hover:bg-purple-900/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 transition-all group-hover:opacity-100"></span>
              <span className="font-medium tracking-wider">THE MOONS</span>
            </Link>
          </li>
          <li>
            <Link
              href="#rings"
              className="group flex items-center space-x-2 rounded-md px-3 py-2 transition-all hover:bg-purple-900/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 transition-all group-hover:opacity-100"></span>
              <span className="font-medium tracking-wider">THE RINGS</span>
            </Link>
          </li>
        </ul>
        <div className="mt-auto pt-8">
          <div className="rounded-md border border-purple-900/30 bg-purple-900/10 p-4">
            <p className="text-xs text-purple-300">
              Explore the wonders of Saturn, the sixth planet from the Sun and the second-largest in our solar system.
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* The Planet Section */}
        <section id="planet" className="min-h-screen border-b border-purple-900/30 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></div>
              <h2 className="mx-4 text-3xl font-bold tracking-wider text-purple-300">THE PLANET</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-auto overflow-hidden rounded-lg border border-purple-900/30 shadow-lg shadow-purple-900/20">
                <Image
                  src="/images/saturn.png"
                  alt="Saturn"
                  width={800}
                  height={500}
                  className=" w-full "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg leading-relaxed text-gray-300">
                  Saturn, the jewel of our solar system, is a gas giant composed primarily of hydrogen and helium. With
                  a diameter of about 116,460 kilometers, it's the second-largest planet in our solar system. What makes
                  Saturn truly remarkable is its distinctive ring system, which extends up to 282,000 kilometers from
                  the planet, yet is surprisingly thin—only about 10 meters in most places. Saturn's atmosphere features
                  visible bands similar to Jupiter's, though they're more subtle and wider near the equator. The
                  planet's pale yellow hue comes from ammonia crystals in its upper atmosphere, while deeper layers
                  reveal shades of blue and gold from different chemical compositions and atmospheric depths.
                </p>
                <div className="flex space-x-2">
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300">
                    GAS GIANT
                  </span>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300">
                    82 MOONS
                  </span>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300">
                    10.7 HOURS/DAY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Moons Section */}
        <section id="moons" className="min-h-screen border-b border-blue-900/30 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="mx-4 text-3xl font-bold tracking-wider text-blue-300">THE MOONS</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 md:order-1">
                <p className="text-lg leading-relaxed text-gray-300">
                  Saturn boasts an impressive collection of 83 confirmed moons, each with its own unique
                  characteristics. Titan, the largest, is bigger than the planet Mercury and has a thick atmosphere rich
                  in nitrogen—the only moon in our solar system with a substantial atmosphere. Enceladus, though
                  smaller, captivates scientists with its geysers of water vapor erupting from its south pole,
                  suggesting a subsurface ocean that could potentially harbor life. Other notable moons include Mimas
                  with its Death Star-like appearance due to the massive Herschel crater; Iapetus with its two-toned
                  surface of dark and light regions; and Hyperion, which resembles a cosmic sponge due to its unusual
                  porous appearance and chaotic rotation.
                </p>
                <div className="flex space-x-2">
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">TITAN</span>
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">
                    ENCELADUS
                  </span>
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">MIMAS</span>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-blue-900/30 shadow-lg shadow-blue-900/20 md:order-0">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Saturn's Moons"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* The Rings Section */}
        <section id="rings" className="min-h-screen p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50"></div>
              <h2 className="mx-4 text-3xl font-bold tracking-wider text-indigo-300">THE RINGS</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/20">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Saturn's Rings"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg leading-relaxed text-gray-300">
                  Saturn's magnificent rings are its most iconic feature, stretching over 280,000 kilometers from the
                  planet yet measuring only about 10 meters thick in most places—a ratio similar to a sheet of paper
                  spread across a football field. These rings consist primarily of countless ice particles ranging from
                  microscopic dust to chunks several meters across, with traces of rocky material and dust. Scientists
                  have identified seven main rings labeled A through G, with the A, B, and C rings being the most
                  prominent. The rings are not solid but composed of particles orbiting Saturn at different speeds.
                  Recent observations suggest the rings may be relatively young, perhaps only 100 million years old, and
                  could disappear within 300 million years as gravity pulls the particles into Saturn.
                </p>
                <div className="flex space-x-2">
                  <span className="rounded-full bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-300">
                    ICE PARTICLES
                  </span>
                  <span className="rounded-full bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-300">
                    7 MAIN RINGS
                  </span>
                  <span className="rounded-full bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-300">
                    10m THICK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
    }