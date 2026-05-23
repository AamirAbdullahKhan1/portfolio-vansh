export const projects = [
  {
    id: "dungeon-escape",
    title: "Dungeon Escape",
    tagline: "Gameplay Systems & Technical Case Study",
    description: `Dungeon Escape is a first-person puzzle adventure game I developed in Unreal Engine 5 with a strong focus on gameplay programming, environmental interaction, and modular system design using C++.`,
    longDescription: `The idea behind the project was simple at first: create a dungeon that feels alive through interaction. Instead of relying purely on visuals, I wanted the environment itself to become the core gameplay mechanic. Players explore interconnected dungeon spaces, search for hidden keys and collectible artifacts, activate pressure plates, and solve environmental puzzles in order to unlock new areas and eventually escape the dungeon by retrieving a sacred statue artifact.

### Gameplay Systems :

###Interactive Puzzle Architecture :

I designed the puzzle systems to be modular and reusable rather than hardcoded for a single level. Keys, trigger platforms, locked doors, and pressure plates were all built using reusable C++ actor classes and event-driven interactions. This allowed me to expand or modify puzzle mechanics without rewriting major parts of the system each time.

One of my goals during development was to make every interaction feel connected. Opening a door or activating a mechanism needed to provide immediate gameplay feedback so players could clearly understand the consequences of their actions.

### Dynamic Trigger & Door Systems :

A large part of the project revolved around synchronized trigger systems. I implemented pressure plate mechanics that could activate doors and environmental events in real time while handling overlap detection, timing logic, and collision accuracy.

I spent a lot of time refining how these systems responded under different gameplay situations, especially when multiple objects or actors interacted with the same trigger simultaneously. Getting those interactions to feel smooth and reliable was one of the more rewarding technical challenges in the project.

### First-Person Character Framework :

I developed a responsive first-person controller that included interaction tracing, object pickup mechanics, and contextual gameplay prompts to improve immersion and usability.

The interaction system was designed to keep the experience intuitive while still encouraging exploration. Rather than overwhelming the player with UI elements, I focused on subtle interaction feedback and environmental communication.

### Technical Highlights :

### Frame-Independent Gameplay Using Delta Time :

One of the key technical areas I focused on was maintaining gameplay consistency across different frame rates. I implemented Delta Seconds-based calculations for movement, trigger timing, and interaction systems to ensure stable and smooth gameplay regardless of FPS fluctuations.

This helped maintain reliable puzzle behavior and prevented timing inconsistencies that could otherwise break gameplay flow on lower or higher-end hardware.

### Precision Trigger Timing Systems :

I engineered trigger systems capable of handling delayed activations, simultaneous overlaps, and synchronized environmental responses without causing inconsistent gameplay states. A lot of iteration went into refining collision handling and event timing because even small delays or inaccuracies could negatively impact puzzle responsiveness.

### Modular C++ Gameplay Architecture :

Throughout development, I structured gameplay systems using reusable and maintainable C++ classes. My focus was not just on making mechanics work, but on building systems that could scale cleanly as the project evolved.

This project became a strong hands-on exploration of gameplay programming practices in Unreal Engine 5, especially in event-driven architecture, interaction systems, and performance-aware gameplay development.

### Development Reflection :

Dungeon Escape was more than just a puzzle game project for me. It became a practical deep dive into how gameplay systems are designed, connected, and optimized inside a modern game engine.

A significant part of development involved iteration. I continuously refined trigger responsiveness, collision behavior, and player interactions to make the gameplay feel polished and reliable. Through this process, I gained valuable experience in building scalable gameplay systems, debugging complex interactions, and balancing technical implementation with player experience.

More than anything, the project strengthened my understanding of how thoughtful gameplay programming can shape immersion and create engaging player-driven experiences inside a confined environment.`,
    video: "/images/Dungeon_video.mp4",
    image: "https://live.staticflickr.com/65535/55286971909_182946cd63_b.jpg",
    tags: ["Unreal Engine 5", "C++", "Systems"],
    tools: ["UE5", "C++", "Blueprints"],
    category: "Unreal Engine",
    year: "2023",
    featured: true,
    stats: {
      focus: "Gameplay Programming",
      framework: "C++ Modular Systems",
      engine: "Unreal Engine 5"
    },
    gallery: [
      "https://live.staticflickr.com/65535/55285815312_feb793a7fe_b.jpg",
      "https://live.staticflickr.com/65535/55287144725_9553d305ed_b.jpg"
    ]
  },
  {
    id: "project-nova",
    title: "Project Nova",
    tagline: "A first-person exploration prototype utilizing Nanite and Lumen to render highly detailed environments.",
    description: "An experimental exploration prototype developed in Unreal Engine 5 to push the boundaries of real-time lighting and micro-polygon geometry. Focuses on level design, environmental storytelling, and immersive ambient audio systems.",
    longDescription: `Project Nova was developed as a technical benchmark to explore the capabilities of Unreal Engine 5's Nanite and Lumen systems in a dense, atmospheric sci-fi setting.

### Key Highlights
- **Dynamic Lighting**: Fully realized dynamic day/night cycles using Lumen global illumination and reflections.
- **Micro-Polygon Geometry**: Managed asset pipelines for high-fidelity scanned models containing over 2 billion polygons, rendering at a stable 60 FPS.
- **Environmental Narrative**: Designed an interactive exploration system where players decode glyphs, manipulate machinery, and reconstruct holographic memories.`,
    image: "/images/nova.png",
    tags: ["Unreal Engine 5", "Blueprints"],
    tools: ["UE5", "Lumen", "Nanite", "Substance Painter"],
    category: "Unreal Engine",
    year: "2023",
    featured: false,
    stats: {
      polygonCount: "2B+ Triangles",
      lighting: "Real-time GI",
      resolution: "4K Native support"
    },
    gallery: [
      "/images/nova.png"
    ]
  },
  {
    id: "voxel-engine",
    title: "Voxel Rendering Engine",
    tagline: "A custom rendering engine built from scratch using C++ and OpenGL.",
    description: "A sandbox voxel engine featuring chunk-based meshing, infinite procedural terrain generation, ambient occlusion, dynamic day-night lighting, and physics-based collision detection.",
    longDescription: `Built as a personal quest to master low-level graphics programming. This engine bypasses modern game builders and communicates directly with the GPU via OpenGL.

### Technical Breakdown
1. **Chunk-Based Greedy Meshing**: Minimizes draw calls and GPU memory by combining adjacent voxel faces of the same type into single large quads, reducing vertex counts by up to 85%.
2. **Procedural Generation**: Utilizes multi-octave Perlin and Simplex noise to generate realistic terrain contours, cave networks, and biome transitions in real-time.
3. **GPU-Accelerated Ambient Occlusion**: Computes vertex-level lighting to shade inner corners and crevices, adding volumetric depth to the voxel world.`,
    image: "/images/voxel.png",
    tags: ["C++", "OpenGL", "GLSL"],
    tools: ["C++", "CMake", "GLFW", "OpenGL 4.6", "GLSL"],
    category: "Prototypes",
    year: "2023",
    featured: false,
    stats: {
      renderDistance: "32 Chunks",
      meshingTime: "<2ms per chunk",
      api: "OpenGL 4.6"
    },
    gallery: [
      "/images/voxel.png"
    ]
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    tagline: "A fast-paced arcade racing game featuring synthwave aesthetics and tight drifting mechanics.",
    description: "An arcade racing game built with the Godot Engine. Features responsive arcade vehicle physics, drifting point multipliers, dynamic neon tail tracks, and a pumping electronic soundtrack.",
    longDescription: `Neon Drift is a retro-futuristic drift racer that prioritizes immediate, satisfying controls. Built to test game feel and juice in a rapid prototyping environment.

### Features
- **Arcade Vehicle Controller**: Custom-tuned Raycast suspension physics that blend realistic tire friction with exaggerated drift slides.
- **Dynamic Juice**: Screen shake, field-of-view shifting, motion blur, and particle-burst exhausts that react dynamically to speed.
- **Score System**: A multiplier system that scales with drift angle, speed, and near-misses of obstacles.`,
    image: "/images/neondrift.png",
    tags: ["Godot", "GDScript"],
    tools: ["Godot Engine", "GDScript", "Blender", "Audacity"],
    category: "Prototypes",
    year: "2022",
    featured: false,
    stats: {
      physicsHz: "60 FPS Fixed Update",
      tracks: "3 Playable Loops",
      audioTracks: "5 Custom Themes"
    },
    gallery: [
      "/images/neondrift.png"
    ]
  },
  {
    id: "neon-genesis",
    title: "Neon Genesis",
    tagline: "A fast-paced cyberpunk platformer with gravity-defying mechanics.",
    description: "Control gravity vectors to guide an agile runner through a neon-drenched metropolis. Speedrun optimization, fluid character movements, and complex obstacle design.",
    longDescription: `Neon Genesis is a platformer where gravity is a variable. By flipping gravity or running along walls, players bypass traditional hazards.

### Core Achievements
- **Vector Gravity Controller**: Rewrote standard physics behavior to support multidirectional gravity, allowing players to run on walls, ceilings, and curved tracks seamlessly.
- **Speedrun Integrations**: Integrated timer splits, ghost data saves, and global leaderboards.
- **Level Choreography**: Designed 15 levels requiring high-precision timing, utilizing visual cues to guide player flow.`,
    image: "/images/neongenesis.png",
    tags: ["Unity", "C#"],
    tools: ["Unity", "C#", "Figma", "Photoshop"],
    category: "Unity3D",
    year: "2023",
    featured: true,
    stats: {
      levels: "15 Campaign Maps",
      mechanic: "360° Wall Running",
      audio: "Dynamic Music Triggers"
    },
    gallery: [
      "/images/neongenesis.png"
    ]
  }
];
