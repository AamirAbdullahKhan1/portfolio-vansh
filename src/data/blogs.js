export const blogs = [
  {
    id: "dungeon-escape-journey",
    title: "Dungeon Escape — My Journey Building a Puzzle Survival Game in Unreal Engine 5",
    category: "GAMEPLAY MECHANICS",
    date: "Jan 20, 2026",
    image: "https://live.staticflickr.com/65535/55286971909_182946cd63_b.jpg",
    description: "Dungeon Escape is a single-player puzzle-survival game I developed in Unreal Engine 5.6 using C++ and Blueprints. The game is focused on exploration, puzzle-solving, and player interaction.",
    contentBlocks: [
      { type: 'text', value: 'Dungeon Escape is a single-player puzzle-survival game I developed in Unreal Engine 5.6 using C++ and Blueprints. The game is focused on exploration, puzzle-solving, and player interaction, where the player has to move around the dungeon, search for keys, solve environmental puzzles, and find a way to escape.' },
      { type: 'text', value: 'For this project, I used assets from the Epic Games Store, while the player character is based on Unreal Engine’s default Third Person Template. My main focus was not on creating custom characters, but on building the gameplay systems and puzzle mechanics that drive the experience.' },
      { type: 'heading', value: 'Interactive Gameplay Systems' },
      { type: 'text', value: 'The game includes multiple interactive systems such as pressure plates, movable objects, and key-based progression. The idea was to create a gameplay flow where players explore the map, figure out how different objects connect, and use them in the right way to unlock new areas.' },
      { type: 'image', value: 'https://live.staticflickr.com/65535/55285815312_feb793a7fe_b.jpg', caption: 'Fig 1.1 Dynamic trigger systems linking pressure plates to movable environment objects.' },
      { type: 'text', value: 'One of the biggest challenges during development was making sure the gameplay felt smooth and consistent across different devices, which helped me understand the importance of frame-independent logic and optimization.' },
      { type: 'heading', value: 'Connecting The Mechanics' },
      { type: 'text', value: 'Another challenge was connecting the gameplay systems together in a way that felt natural. Making pressure plates respond correctly to movable objects, linking keys to the right doors, and designing the correct puzzle flow required a lot of testing, debugging, and iteration.' },
      { type: 'code', language: 'cpp', value: 'void ADungeonTrigger::OnOverlapBegin(UPrimitiveComponent* OverlappedComp, AActor* OtherActor...)\n{\n    if (OtherActor && OtherActor != this && bIsActive)\n    {\n        // Check if the interacting actor has the required puzzle key or mass\n        if (ValidateInteraction(OtherActor))\n        {\n            ActivateLinkedMechanisms();\n        }\n    }\n}' },
      { type: 'text', value: 'I also spent time carefully placing keys and interactive objects around the map to make exploration feel rewarding and the puzzles more challenging. Through Dungeon Escape, I learned a lot about gameplay system design, puzzle logic, player interaction systems, and how to break down a mechanic into smaller parts before implementing it in code. More than anything, this project improved the way I think about building game systems from scratch.' }
    ],
    timeline: [
      {
        date: "Jan 20, 2026",
        title: "Initial Research & Ideation",
        description: "This is when I got the idea of building Dungeon Escape — a puzzle-based game where the player explores the dungeon, finds keys, interacts with objects, and solves puzzles to escape."
      },
      {
        date: "Jan 31, 2026",
        title: "First Prototype Development",
        description: "I built the first playable prototype with the main mechanics like pressure plates, keys, movable objects, and doors. This was where the game started taking shape."
      },
      {
        date: "Feb 9, 2026",
        title: "Finalizing the Game",
        description: "The core game was completed, and I focused on refining the puzzles, improving object placement, and fixing the connections between gameplay systems to make the experience smoother and more challenging."
      }
    ],
    readTime: "10 min read",
    author: "Vansh Jain",
    stats: {
      focus: "Gameplay Programming",
      framework: "C++ & Blueprints",
      engine: "Unreal Engine 5.6"
    },
    tools: ["UE5.6", "C++", "Blueprints"],
    tags: ["Game Dev", "Systems", "Puzzle"],
    featured: true
  },
  {
    id: "devlog-2-obstacle-dodge",
    title: "Devlog #2 — Obstacle Dodge (Rebuild from Scratch)",
    category: "LEARNING PROJECT",
    date: "Jun 24, 2026",
    image: "https://live.staticflickr.com/65535/55286971909_182946cd63_b.jpg",
    description: "Rebuilt the course's 'Obstacle Dodge' game from scratch after first completing it via the course walkthrough. Implemented player movement, obstacle mechanics, projectiles, and a custom health system.",
    contentBlocks: [
      { type: 'text', value: 'Rebuilt the course\'s "Obstacle Dodge" game from scratch after first completing it via the course walkthrough. Implemented player movement, obstacle rotation and movement (dropping from a height), projectile flying, and a custom health system (not part of the original course game — added on my own).' },
      { type: 'heading', value: 'What I Built Myself' },
      { type: 'text', value: 'I designed and built the player movement independently. For the obstacle rotation and movement, I referred to the Unity docs first, then course materials when stuck, but attempted most of it independently.' },
      { type: 'text', value: 'I also designed the Health system architecture: I realized health logic shouldn\'t live on the Obstacle script (it wasn\'t resetting on restart), so I created a separate script with a health value and isAlive bool, attached it to the Player, and used tags to detect obstacle hits. I verified the trigger logic worked using Debug.Log before writing the actual health-reduction logic.' },
      { type: 'code', language: 'csharp', value: 'SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);' },
      { type: 'text', value: 'I found the scene-reset line via the Unity docs. I also debugged a real bug myself: health was only decreasing once per obstacle instead of every hit — traced it to a leftover deduplication check in the Obstacle script that was treating any hit as already-counted. Removed it and confirmed the fix.' },
      { type: 'heading', value: 'Where I Got Stuck / Used Help' },
      { type: 'text', value: 'I used ChatGPT for debugging assistance while building the Health system specifically — used as a "stuck after trying myself" resource, not to generate the system outright. I also referred to the course GitLab repo when docs alone weren\'t enough for obstacle rotation.' },
      { type: 'heading', value: 'What I Learned' },
      { type: 'text', value: 'Architecture lesson: ownership matters — health is player-owned state, not obstacle-owned. Obstacles should only know "I deal damage," not track someone else\'s health. This pattern will repeat constantly (enemies, hazards, pickups).' },
      { type: 'text', value: 'Debugging lesson: verify triggers fire correctly with Debug.Log before writing logic on top of them — isolates whether the bug is in detection or in logic.' },
      { type: 'text', value: 'Unity gotcha: collision/trigger events can fire multiple times for a single "hit" depending on colliders — guards against this need to be precise (per-instance), not global, or you introduce the opposite bug. To verify next time I touch this: confirm one hit = exactly one health decrease, not more (possible risk now that the dedup guard is removed).' },
      { type: 'heading', value: 'Code Quality Note' },
      { type: 'text', value: 'Didn\'t prioritize clean code this round — focus was on getting systems working and understanding why they work. Clean architecture is a deliberate next-pass skill, not a day-1 priority.' }
    ],
    timeline: [
      {
        date: "Jun 24, 2026",
        title: "Rebuild from Scratch",
        description: "Rebuilt the Obstacle Dodge game independently to solidify learning and added custom mechanics like a health system."
      }
    ],
    readTime: "5 min read",
    author: "Vansh Jain",
    stats: {
      focus: "Game Mechanics",
      framework: "C#",
      engine: "Unity3d"
    },
    tools: ["Unity", "C#"],
    tags: ["Game Dev", "Devlog", "Learning"],
    featured: false
  }
];
