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
    id: "shooter-don",
    title: "Shooter Don",
    tagline: "A third-person shooter prototype developed in Unreal Engine 5 focused on AI-driven combat systems, responsive gameplay mechanics, and advanced C++ architecture.",
    description: `Shooter Don is a third-person shooter prototype developed in Unreal Engine 5 using C++ gameplay systems and Unreal Engine's AI framework. The project focuses on creating responsive combat mechanics, intelligent enemy behavior, and immersive survival-based gameplay within a hostile arena environment.`,

    longDescription: `The core gameplay centers around tactical third-person combat in a hostile arena environment, where players must eliminate AI-controlled enemies, survive active encounters, and maintain control of the battlefield through movement, aiming precision, and positioning.

### Gameplay Systems :

### AI Combat Framework : 

Developed an enemy AI system using Unreal Engine's Behavior Trees, Blackboard Keys, and Navigation Mesh pathfinding to create responsive combat behavior. Enemies are capable of patrolling designated areas, detecting player presence, chasing targets, and engaging in combat based on real-time decision-making logic.

### Third-Person Combat Mechanics : 

Implemented responsive third-person shooter gameplay including movement handling, projectile-based combat interactions, targeting systems, and hit detection. Combat flow was designed to feel smooth and reactive while supporting multiple active encounters.

### Health & Survival Systems : 

Built a modular health management system for both player and enemy characters, handling damage calculation, combat feedback, elimination states, and survival conditions throughout gameplay.

### Technical Highlights : 

--> Integrated Unreal Engine AI systems including Behavior Trees and Blackboard architecture

--> Designed scalable combat and health management systems using C++

--> Refined AI responsiveness, movement handling, and combat timing for smoother gameplay

--> Developed gameplay systems with a focus on modularity, maintainability, and performance consistency

### Combat State Management : 

Designed gameplay systems responsible for health tracking, damage processing, elimination logic, and encounter flow management between player and enemy entities.

### Performance & Responsiveness : 

Focused on improving gameplay responsiveness through movement refinement, AI reaction timing, navigation reliability, and smoother combat interactions to maintain consistent gameplay performance.

### Development Reflection :

The goal of Shooter DOn was to deepen my understanding of shooter gameplay systems and Unreal Engine 5's AI architecture through hands-on implementation. A major part of development involved learning Unreal's Behavior Tree workflow, designing believable enemy behavior, and building gameplay systems capable of supporting multiple simultaneous AI encounters.

One of the most valuable parts of the project was solving gameplay interaction challenges between the player and multiple AI enemies while keeping combat responsive and reliable. The project strengthened my practical experience in gameplay programming, AI system design, combat mechanics, and C++ development in Unreal Engine 5.
`,
    video: "/images/Shootervdo.mp4",
    image: "https://live.staticflickr.com/65535/55287154867_601b3cf94e_b.jpg",
    tags: ["UE 5", "C++", "Blueprints"],
    tools: ["UE5", "Git", "NavMesh"],
    category: "Unreal Engine",
    year: "2025-26",
    featured: false,
    date: "Sep 28, 2024",
    readTime: "8 min read",
    author: "Vansh Jain",
    github: "https://github.com/VanshJain609/ShooterDon",
    stats: {
      "Game Mode": "Arena Shooter",
      "Combat Style": "Tactical Shooting",
      "Perspective": "Third Person"
    },
    gallery: [
      "https://live.staticflickr.com/65535/55288072461_29448cacbe_b.jpg",
      "https://live.staticflickr.com/65535/55288303814_8297f89c37_b.jpg"
    ]
  },
  {
    id: "gun-survivors",
    title: "Gun Survivors",
    tagline: "A 2D endless survival shooter developed in Unreal Engine 5 featuring dynamic enemy spawning, score-driven progression, and fast-paced gameplay systems built with C++ and Blueprints.",
    description: `Gun Survivors is a 2D endless survival shooter developed in Unreal Engine 5 using both C++ and Blueprint scripting. The project focuses on building fast-paced survival gameplay through scalable enemy spawning systems, score-based progression, and increasing difficulty over time.`,

    longDescription: `The core gameplay loop is centered around surviving as long as possible while defeating waves of enemies in an arena-style environment. Players must continuously move, avoid enemy collisions, and eliminate incoming threats to increase their score and stay alive as the challenge intensifies.

### Gameplay Systems :

### Endless Survival Loop : 

Designed and implemented an endless gameplay loop focused on player survival and continuous progression. The experience is built to become more intense over time, encouraging players to react quickly and adapt as enemy pressure increases.

### Dynamic Enemy Spawning : 

Developed a timed enemy spawning system where enemies appear continuously throughout gameplay. Spawn frequency gradually increases based on the player’s score, creating natural difficulty scaling and a progressively more demanding combat experience.

### Score & Progression System : 

Implemented a score system that rewards players for every enemy eliminated. The score directly influences gameplay pacing by increasing enemy spawn rates, creating a simple but effective progression loop tied to player performance.

### 2D Combat & Collision Handling : 

Built sprite-based player, enemy, and weapon systems using Unreal Engine’s 2D workflow. Implemented collision detection for combat interactions, enemy elimination, and game-over conditions to maintain responsive gameplay.

### Technical Highlights : 

--> Developed gameplay systems using C++ and Blueprint scripting

--> Implemented dynamic enemy spawning with score-based difficulty scaling

--> Designed a responsive score progression and endless survival loop

--> Built 2D sprite-based player, enemy, and weapon interactions

--> Integrated collision handling and game-over state management

### Development Reflection :

Gun Survivors was a focused exploration into building arcade-style survival gameplay inside Unreal Engine 5. The project helped strengthen my understanding of gameplay loop design, real-time difficulty balancing, and combining C++ with Blueprints to build scalable systems quickly.

A major focus during development was making the progression feel consistently engaging by balancing spawn timing, score pacing, and collision responsiveness while keeping the gameplay loop simple and replayable.
`,
    video: "/images/Gun_Survivors.mp4",
    image: "https://live.staticflickr.com/65535/55293180437_8cb4626229_b.jpg",
    tags: ["UE 5", "C++", "Blueprints", "Sprites"],
    tools: ["UE5", "Rider", "Game Art 2D"],
    category: "Unreal Engine 5",
    year: "2025",
    featured: false,
    date: "Sep 28, 2024",
    readTime: "8 min read",
    author: "Vansh Jain",
    github: "https://github.com/VanshJain609/ThiefChac",
    stats: {
      "Enemy Waves": "Infinite Spawn System",
      "Progression": "Score-Based Scaling",
      "Player View": "Top-down Perspective"
    },
    gallery: [
      "https://live.staticflickr.com/65535/55294500500_2e0a32687b_b.jpg",
      "https://live.staticflickr.com/65535/55293180442_c179cb76fd_b.jpg"
    ]
  },
  
];
