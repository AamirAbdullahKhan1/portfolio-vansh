export const blogs = [
  {
    id: "dungeon-escape-journey",
    title: "Dungeon Escape — My Journey Building a Puzzle Survival Game in Unreal Engine 5",
    category: "GAMEPLAY MECHANICS",
    date: "Oct 24, 2026",
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
    readTime: "5 min read",
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
    id: "optimizing-compute-shaders",
    title: "Optimizing Compute Shaders for Procedural Foliage",
    category: "GRAPHICS",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    description: "Reducing GPU stall times by 15% using asynchronous compute queues and better thread group tiling.",
    contentBlocks: [
      { type: 'text', value: 'Rendering vast landscapes of foliage presents a unique challenge in modern game development. As we push for higher density and more dynamic interactivity, traditional CPU-side instancing often becomes the bottleneck. In this article, we dive deep into offloading the heavy lifting of placement, culling, and animation to GPU Compute Shaders.' },
      { type: 'heading', value: 'The Power of Direct3D 12 & Vulkan Compute' },
      { type: 'text', value: 'By utilizing modern graphics APIs, we can perform thousands of collision checks and terrain-following calculations in a single frame. This approach allows for truly infinite-feeling ecosystems that react to player movement with zero CPU overhead.' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', caption: 'Fig 1.1 Data Flow from Terrain Texture to GPU Indirect Draw Arguments.' },
      { type: 'heading', value: 'Kernel Implementation' },
      { type: 'text', value: 'The core of our optimization lies in the dispatch architecture. We organize our grass blades into \'clusters\' to maximize wave occupancy and minimize thread divergence during visibility tests.' },
      { type: 'code', language: 'hlsl', value: '[numthreads(64, 1, 1)]\nvoid ComputeKernel(uint3 id : SV_DispatchThreadID) {\n    uint instanceIdx = id.x;\n    if (instanceIdx >= _TotalInstances) return;\n\n    // Output Buffer Data\n    float3 pos = GetInstancePosition(instanceIdx);\n    float3 normal = SampleTerrainNormal(pos.xz);\n\n    // Frustum Culling\n    if (!IsVisible(pos)) return;\n\n    // Append to DrawBuffer\n    uint drawIndex;\n    _VisibleBuffer.InterlockedAdd(0, 1, drawIndex);\n    _VisibleBuffer[drawIndex] = BuildInstanceData(pos, normal);\n}' }
    ],
    timeline: [
      {
        date: "Oct 10, 2024",
        title: "Initial Research & D3D12/Vulkan Analysis",
        description: "Deep dive into modern compute capabilities across different APIs. Evaluated memory barriers and resource transitions for optimal foliage dispatching."
      },
      {
        date: "Oct 15, 2024",
        title: "Prototype Kernel for Frustum Culling",
        description: "Successfully moved visibility testing from CPU to GPU. Implemented a hierarchical Z-buffer approach to minimize overdraw in dense forest clusters."
      },
      {
        date: "Oct 18, 2024",
        title: "Scene Graph Integration",
        description: "Connected the compute pipeline to the existing scene management system. Focused on seamless data handoff between the engine's main pass and our custom foliage kernels."
      }
    ],
    readTime: "8 min read",
    author: "Vansh Jain",
    stats: {
      focus: "Graphics Programming",
      framework: "HLSL / Compute Shaders",
      engine: "Custom Engine"
    },
    tools: ["HLSL", "RenderDoc", "C++"],
    tags: ["Graphics", "Optimization", "GPU"],
    featured: false
  }, 
];
