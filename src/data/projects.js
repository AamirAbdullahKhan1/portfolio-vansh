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
    tags: ["Unreal Engine 5", "C++", "Systems", "Blueprints"],
    tools: ["UE5", "C++", "Blueprints"],
    category: "Unreal Engine",
    year: "2026",
    featured: true,
    date: "Oct 24, 2024",
    readTime: "12 min read",
    author: "Vansh Jain",
    timeline: [
      {
        date: "Oct 20, 2024",
        title: "Initial Research & Architecture",
        description: "Deep dive into modular puzzle systems and reusable C++ classes. Evaluated event-driven interactions."
      },
      {
        date: "Oct 15, 2024",
        title: "Prototype Trigger Systems",
        description: "Successfully built synchronized trigger systems. Handled overlap detection and simultaneous interactions."
      },
      {
        date: "Oct 10, 2024",
        title: "Character Framework Setup",
        description: "Developed the responsive first-person controller with interaction tracing."
      }
    ],
    github: "https://github.com/VanshJain609/DungeonEscape",
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
    id: "project-shadowstrike",
    title: "Project Shadow Strike",
    tagline: "A third-person shooter prototype developed in Unreal Engine 5 focused on AI-driven combat systems, responsive gameplay mechanics, and advanced C++ architecture.",
    description: `Shadow Strike is a third-person shooter prototype developed in Unreal Engine 5 using C++ gameplay systems and Unreal Engine's AI framework. The project focuses on creating responsive combat mechanics, intelligent enemy behavior, and immersive survival-based gameplay within a hostile arena environment.`,

    longDescription: `Project Shadow Strike is a third-person shooter prototype developed in Unreal Engine 5 using C++ gameplay systems and Unreal Engine's AI framework. The project focuses on creating responsive combat mechanics, intelligent enemy behavior, and immersive survival-based gameplay within a hostile arena environment.

### Gameplay Systems :

### AI Combat Framework : 

Developed an advanced enemy AI system using Behavior Trees, Blackboard Keys, and Navigation Mesh pathfinding. Enemies are capable of environmental patrolling, player detection, pursuit behavior, and contextual combat decision-making to create more dynamic encounters.

### Third-Person Combat Mechanics : 

Implemented responsive third-person shooter gameplay including player movement, aiming systems, projectile-based shooting, hit detection, and combat feedback systems designed to create smooth and reactive gameplay interactions.

### Health & Survival Systems : 

Built a modular health and damage management system for both player and enemy characters, handling combat states, real-time damage processing, elimination logic, and survival flow during encounters.

### Technical Highlights : 

--> Integrated Unreal Engine AI systems including Behavior Trees and Blackboard architecture

--> Designed scalable combat and health management systems using C++

--> Refined AI responsiveness, movement handling, and combat timing for smoother gameplay

--> Developed gameplay systems with a focus on modularity, maintainability, and performance consistency

### Development Reflection :

This project served as a deep exploration into shooter gameplay programming and Unreal Engine 5's AI ecosystem. A significant portion of development involved refining enemy behavior, improving navigation accuracy, and creating reliable combat interactions between multiple AI agents and the player simultaneously.

Through Shadow Strike, I strengthened my understanding of gameplay architecture, AI-driven combat systems, and performance-conscious C++ development within modern game environments.
`,
    video: "/images/Shootervdo.mp4",
    image: "https://live.staticflickr.com/65535/55287154867_601b3cf94e_b.jpg",
    tags: ["Unreal Engine 5", "Blueprints", "C++"],
    tools: ["UE5", "Lumen", "Nanite", "Substance Painter"],
    category: "Unreal Engine",
    year: "2023",
    featured: false,
    date: "Sep 28, 2024",
    readTime: "8 min read",
    author: "Vansh Jain",
    timeline: [
      {
        date: "Sep 25, 2024",
        title: "AI Combat Framework Initiation",
        description: "Started developing enemy AI system using Behavior Trees and Navigation Mesh."
      },
      {
        date: "Sep 20, 2024",
        title: "Third-Person Mechanics Prototyping",
        description: "Implemented core movement and aiming systems for responsive gameplay."
      },
      {
        date: "Sep 15, 2024",
        title: "Health & Survival Systems Integration",
        description: "Built modular health and damage management processing."
      }
    ],
    github: "https://github.com/AamirAbdullahKhan1/portfolio-vansh",
    stats: {
      polygonCount: "2B+ Triangles",
      lighting: "Real-time GI",
      resolution: "4K Native support"
    },
    gallery: [
      "https://live.staticflickr.com/65535/55288072461_29448cacbe_b.jpg",
      "https://live.staticflickr.com/65535/55288303814_8297f89c37_b.jpg"
    ]
  },
  
];
