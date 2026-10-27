/* ============================================================================
   SCENES — the only file you need to edit.

   Each entry is one item in the left sidebar. Each entry has one or more
   `versions`, shown as tabs above the stage (e.g. "Baseline" vs "Redesign").

   versions[].type
     "html"  → a self-contained .html scene (three.js, Babylon, etc.), shown in an iframe
     "model" → a .glb / .gltf file, shown with <model-viewer> (orbit, zoom, auto-rotate)

   versions[].file    path relative to index.html (e.g. "scenes/castle.glb") or a full URL
   versions[].notes   optional markdown, opens in the "Notes" modal
   versions[].marks   one value per question, in order:
                        true = ✓   false = ✗   null = – (not scored)
                        a number 1–5 for questions marked `rating: true`
   versions[].comments  optional, one string (or null) per question: the evaluator's reason.
                        A failed rubric shows its comment under the criterion in the table.
   versions[].trajectory  optional path/URL to the trajectory file (e.g. "trajectories/castle.jsonl")
                          for the "Download trajectory" button under the rubric. Can also be set
                          once on the scene itself; a version's own value takes priority.
   Model-only options: autoRotate (default true), environment, skybox, poster.

   Scores (sidebar, tabs, roll-up rows) are computed from marks automatically.
   Serve the folder over http to load models:  python3 -m http.server 8000
   ========================================================================== */

// Generated from exported_tasks_227.jsonl (assets) and exported_tasks_228.jsonl (primitives).
window.SCENES = [
  {
    "nav": "Camper Van",
    "title": "Evening at the Beach — Camper Van",
    "description": "I'd like to see a live 3D simulation of a camper van parked at a beach in the evening. The door should be open, with a small table set up outside holding a lamp, and the ground should have both sand and grass.",
    "category": "3D → OTS 3D Dev",
    "source": "exported_tasks_228 (primitives) · exported_tasks_227 (assets)",
    "questions": [
      {
        "tier": "Functionality",
        "q": "**builds** — A visible camper van renders"
      },
      {
        "tier": "Functionality",
        "q": "**interactivity** — Dragging on the canvas changes the camera angle on the scene"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The van's side door stands open, angled away from the body rather than sitting flush with the body panels"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The open door is a separate leaf joined to the van along one vertical edge, with a visible gap between its free edge and the doorway"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A table stands on the ground outside the van rather than inside its body"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A lamp sits on the table's top surface rather than on the ground"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A pale sand coloured ground surface extends around the van"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — At least three separate clumps or tufts of grass rise from the ground"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The scene reads as evening rather than midday, with warm or dim low light and a darkened sky region rather than bright neutral daylight"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The table's top is smaller in footprint than the van's open doorway, reading as a small table"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The van reads as a camper van, having a tall boxy living body sitting above at least four wheels"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The van is assembled from several distinguishable forms such as body, wheels and window openings rather than one plain box"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The lamp is built as a raised form, having a shade or bulb held above a base or stem, rather than a single block"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The area around the lamp on the tabletop is brighter than ground several table widths away from it"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The camper van stays distinguishable from the sky and ground behind it despite the evening light"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The van's body shows a brighter face and a darker adjacent face rather than uniform flat shading across all sides"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The van casts a shadow onto the sand beneath or beside it"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The van's painted body reflects light more sharply than the matte sand surface"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The van's windows read as darker or more reflective than the surrounding body panels"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The grass differs in colour from the sand rather than sharing the same hue"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — All of the table's legs meet the sand surface, none hovering above it"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The side of the van carrying the open door faces the camera, so the table and lamp are visible rather than hidden behind the van"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — After rotating the camera, a side of the van that the opening view does not show becomes visible"
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — No overlay panel or text block covers the camper van in the opening view"
      }
    ],
    "versions": [
      {
        "label": "Argon Primitive",
        "type": "html",
        "file": "scenes/camper-van/argon-primitive/index.html",
        "trajectory": "trajectories/camper-van-argon-primitive.json",
        "marks": [
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          false
        ],
        "comments": [
          "A camper van is initially displayed, but a dark square quickly overpowers the scene, making it difficult to see the whole.",
          "OrbitControls are enabled and dragging changes the camera angle from the initial view seen on mobile to the rear-side angle seen in after-drag.",
          "In the after-zoom screenshot, the van's side door stands swung wide open and angled away from the body panels.",
          "The open door in after-zoom is a distinct hinged leaf joined along its vertical edge with a clear gap opening into the lit interior.",
          "A folding camp table stands on the sandy ground outside the van.",
          "A glowing lantern-style lamp sits on top of the table surface.",
          "A warm sand-colored ground surface extends beneath and around the camper van and campsite.",
          "Numerous separate tufts and blades of coastal grass rise from the ground around the campsite and dunes.",
          "The scene reads clearly as evening, with a darkened purple-amber twilight sky, stars, and warm localized light sources.",
          "The small camp tabletop has a noticeably smaller footprint than the van's open doorway.",
          "The vehicle reads as a camper van with a tall boxy living body, pop-top roof, awning, and four road wheels.",
          "The van is built from distinct parts, including lower and upper body panels, framed windows, wheels with hubcaps, bumpers, taillights, and an awning. But a floating step sits near the open doors, and an overlapping box sits over the rear tire.",
          "The lamp is modeled as a raised lantern with a base fount, a glowing mantle inside a glass globe, and a conical top hood.",
          "The tabletop and ground immediately around the lamp are brightly illuminated compared to the darker sand several table widths away.",
          "The camper van remains clearly distinguishable against the twilight sky and sandy ground.",
          "In after-zoom and after-click, the illuminated passenger side of the van is noticeably brighter than the darker adjacent rear face.",
          "A dark shadow is cast onto the sand directly beneath the van body and between its wheels.",
          "The van's lower painted panels show sharper specular highlights from the warm lights than the matte sand surface.",
          "The windows read as dark-tinted, transparent material, but not as reflective as glass (as expected). Also, there's a gap between the glass and the window frames, which makes it look like it's floating.",
          "The grass blades are olive and dark green, differing clearly in hue from the warm tan sand.",
          "All four ends of the table's folding X-legs reach down to meet the sand surface.",
          "The passenger side of the van with the open door faces toward the camera so the doorway, table, and lamp are visible in front of the van.",
          "Rotating the camera reveals the rear face of the van with its spare wheel and red taillights, which faces away from the initial camera position.",
          "The initial desktop screenshot timed out, and in the mobile opening view as well as all desktop post-interaction screenshots, the top-left UI panel overlaps the camper van."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/camper-van/primitive/index.html",
        "trajectory": "trajectories/camper-van-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A visible camper van renders: the van group sits in the scene with 46 visible meshes (two-tone body boxes, roof, pop-top, bumpers, windows, wheels, door) and every corner of its 4.3 m painted body falls inside the opening camera view.\n",
          "Dragging on the canvas changes the camera angle: OrbitControls from Three.js 0.170 is attached to the renderer canvas, and a single 220 px left-button drag turns the view by 1.12 rad around the camp.\n",
          "The side door stands open: the leaf is swung 100 degrees out from the body side, so its face sits about 80 degrees off the side panel and its free edge reaches about z 2.0, a metre out from the skin at z 0.95.\n",
          "The open door is its own leaf mesh, a child of a hinge group on the rear jamb of a doorway cut into the body (x -0.3 to 0.8), turning about the vertical only; its free edge stands about 1.7 m from the front jamb, leaving the doorway open onto the cabin.\n",
          "A slatted folding table stands on the sand outside the van: its box starts at z 1.85, 0.9 m out from the side skin at z 0.95, does not intersect the body, and its feet press 3 mm into the sand.\n",
          "An iron storm lantern stands on the table top: its base sits exactly on the slat tops at y 0.4494, near the middle of the 0.53 by 0.548 m top, 0.45 m above the sand.\n",
          "A pale sand coloured ground surface extends around the van: a 600 m beach surface is shaded per pixel in sand tones between (0.72, 0.58, 0.40) and (0.86, 0.74, 0.55), with fine grain near the eye and wind ripples, level around the camp and sloping into the bay about 21 m out; lit sand reads around rgb(160, 119, 90).\n",
          "Thirteen separate clumps of dune grass rise from the sand round the camp and towards the back dune, each 150 curved blades on a sunflower spiral, tall in the middle and splayed at the rim, up to about 0.9 m high; the nearest clumps stand metres apart.\n",
          "The scene reads as evening rather than midday: the key light is a warm #ff9e58 sun only 3 degrees above the horizon, the sky shader runs from a warm orange horizon by the sun to a dark blue zenith (luminance 0.049), and tone-mapped exposure 0.95 keeps the light dim and low.\n",
          "The table's top is 0.62 m by 0.42 m, smaller than the 1.1 m wide by 1.27 m tall doorway cut into the van side.\n",
          "The van reads as a camper van: a tall boxy living body 4.6 m long, 1.56 m tall and 1.9 m wide, with 25 cm rounded edges and a bowed nose, sits above four wheels at its corners (axles at x 1.335 and -1.451, track 0.79).\n",
          "The van is assembled from many distinguishable forms rather than one box: a rounded body shell with cut-in windows, windscreen, wheel arches and doorway, a separate hinged door, four wheels with rims and hubcaps, chrome bumpers with over-riders, headlights, indicators, mirrors, a badge and wipers, a pop-top roof with a rack and two rolls, and a fitted cabin visible through the doorway.\n",
          "The lamp is a raised form: an iron base and fount hold a glass globe whose centre is 12 cm above the base, ringed by guard wires and capped with a chimney and a carrying bail; the globe glows at emissive intensity 1.6 round a small bright flame.\n",
          "The lantern's own point light (2.6 cd, physical falloff) lights the tabletop round it to about luminance 221, while sand a few metres away reads about 27 to 53.\n",
          "The camper van stays distinguishable from the sky and ground: its teal and cream body and dark windows stand out against the violet sky and pale sand.\n",
          "The van body shows a brighter face and a darker adjacent face: with the sun low on one side, the door-side panels read lighter than the darker front face.\n",
          "The van casts a shadow onto the sand: shadow mapping is on with soft PCF shadows, the low sun casts a 4096 px shadow map whose 26 m camera covers the whole van, the van body casts shadows and the sand plane receives them, so a long shadow stretches from the van across the sand.\n",
          "The van's painted body reflects light more sharply than the matte sand: the paint is a clear-coat physical material (clearcoat 1, clearcoat roughness 0.06, base roughness 0.3) that shows sharp highlights of the sun and lamp, while the dry sand is roughness 0.95 and metalness 0.\n",
          "The van's windows read darker than the body panels: the glass is #1e2c38 with metalness 0.85 and roughness 0.05 against cream and teal panels.\n",
          "The grass differs in colour from the sand: the tufts are green blades (hue about 58 degrees, rgb(43, 42, 10)) against orange-beige sand (hue about 25 degrees, rgb(160, 119, 90)).\n",
          "All four table legs, two crossed pairs, reach the sand: each leg's lowest corner sits 3 mm into the sand surface, neither hovering nor buried.\n",
          "The open-door side faces the opening view: from the doorway centre the camera lies about 0.67 along the door side's outward normal, and the table and lamp both project well inside the frame.\n",
          "After rotating the camera, a hidden side becomes visible: orbiting is unrestricted in azimuth, so dragging brings the far side and the rear of the van into view.\n",
          "No overlay panel covers the camper van in the opening view: the title plate sits top left, the conditions card bottom right, the button dock bottom centre and the drag tip bottom left, all clear of the van at 1440 by 900; a sweep of window widths from 1920 down to 300 px finds no panel over the van or the camp table, as the drag tip and conditions card drop out below 1200 and 1000 px.\n"
        ]
      },
      {
        "label": "Argon Assets",
        "type": "html",
        "file": "scenes/camper-van/argon-assets/index.html",
        "trajectory": "trajectories/camper-van-argon-assets.json",
        "marks": [
          true,
          true,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          true
        ],
        "comments": [
          "A two-tone teal and cream camper van with a pop-top roof, wheels, and interior details clearly renders in the center of the scene.",
          "The camera can be moved freely by dragging on the scene.",
          "Both leaves of the van's side door stand wide open, angled inward and overlapping the van's interior elements.",
          "The open doors look connected to the van's body, with no gap between them.",
          "Although a table is visible in the scene, it's rendered as a white 3D model and overlaps a chair and a bench (both also white), so making the scene look odd.",
          "A glowing hurricane lantern sits directly on the top surface of the table.",
          "The custom terrain shader failed to compile due to a perturbNormal2Arb overload error, so the sand terrain mesh is invisible and only the dark ocean water plane and a small rug appear beneath the van.",
          "Because the terrain failed to render and the Poly Haven grass tuft textures returned HTTP 404, the grass meshes appear as untextured white fragments floating over water rather than grass clumps rising from the ground.",
          "The default lighting setting as late afternoon, with a golden hour setting, warm light from the sun and twilight sky.",
          "The outdoor table has a compact tabletop with a smaller footprint than the wide open camper doorway behind it.",
          "The van is identifiable, but with modeling issues, such as the tires overlapping the body.",
          "Although a van model is visible, it has modeling issues, including tires overlapping the body, no windows, a cropped surfboard on top, and floating over water, making it look unfinished.",
          "The hurricane lantern on the table is a detailed raised 3D model with a base, frame, and upper glass globe holding the light source.",
          "The tabletop and rug immediately around the lamp are brightly illuminated compared to the darker areas several table widths away.",
          "The teal and cream camper van is well-lit by warm interior and awning lights and stands out clearly against the dusk sky and water behind it.",
          "The side of the van facing the lamp and awning lights is much brighter and warmer than the darker adjacent front nose panel.",
          "Because the sand terrain mesh failed to compile and did not render, no shadow is cast onto sand beneath or beside the van.",
          "Because the sand terrain mesh is missing due to the shader compilation error, there is no matte sand surface visible to compare with the van's glossy body.",
          "There doesn't seem to be any material rendered on the windshield and door window openings.",
          "With the terrain shader failing to compile and the grass model textures failing with HTTP 404s, neither coloured sand nor green grass renders properly.",
          "The sand surface did not render due to the terrain shader error, so the table and surrounding furniture do not rest on a visible sand ground.",
          "The side of the van with the open doorway faces the camera in the opening view, keeping the outdoor table and lamp clearly visible in front.",
          "A 360-degree view of the van is possible in the scene by rotating the camera around it.",
          "The HUD panels are placed cleanly along the top corners and bottom edge in the opening view, leaving the camper van completely uncovered."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/camper-van/assets/index.html",
        "trajectory": "trajectories/camper-van-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A visible camper van renders: the designer's 597,296-triangle camper van model loads from its wrapped GLB and stands in the opening view, 4.93 m long, 2.15 m wide and 2.44 m tall, with no console errors.\n",
          "Dragging on the canvas changes the camera angle on the scene: OrbitControls with damping turn the camera about the point (0, 1, 0.6) beside the van, between 5.5 and 18 m away and from 0.2 to 1.52 rad off vertical.\n",
          "The van's side door stands open, angled away from the body rather than flush: the door leaf hangs from its hinge turned 100 degrees, so its width runs 80 degrees off the body side and its free edge stands 0.99 m out from the panels.\n",
          "The open door is a separate leaf joined to the van along one vertical edge with a gap at its free edge: the leaf is its own mesh on a hinge node, its 1.25 m hinge edge meets the doorway jamb (the page scales both door groups 1.012 and lifts them 33 mm, so each leaf spans 0.600 to 1.865 m and fills the 0.595 to 1.870 m doorway), and its free edge stands well clear of the 1.06 m by 1.26 m doorway.\n",
          "A table stands on the ground outside the van rather than inside its body: the folding table's footprint starts at z 1.86 m, 0.78 m beyond the van's door side at 1.09 m, and its feet rest on the sand.\n",
          "A lamp sits on the table's top surface rather than on the ground: the brass lantern's base is at 0.44 m, the height of the tabletop, centred within the top's footprint.\n",
          "A pale sand coloured ground surface extends around the van: the dunes and beach carry the photographic beach-sand texture graded warm, with lighter and darker drifts, footprints and tyre tracks by the camp and damp sand towards the sea; in the opening view the sunlit sand reads as rgb(182, 139, 111) against the render's (178, 131, 100), the sand darkens softly under and beside the van, the grass and the props from a contact term read off a top-down depth map of the camp, and a 16 km apron carries the same sand to the horizon.\n",
          "At least three separate clumps of grass rise from the ground: 286 grass tufts are placed as 13 separate clumps on the sand, the tallest standing 0.95 m above it.\n",
          "The scene reads as evening rather than midday: the sky dome shows the HDRI's clouds tinted orange at the horizon and deep blue overhead, darkening to 36 percent towards the zenith, the only sunlight is a deep orange sun three degrees above the sea throwing long shadows, and the frame is finished with the source's AgX Medium High Contrast look and a darkened vignette.\n",
          "The table's top is smaller in footprint than the van's open doorway: the top measures 0.53 by 0.50 m against a doorway 1.06 m wide and 1.26 m tall.\n",
          "The van reads as a camper van with a tall boxy living body above four wheels: the body is 2.44 m tall on a 2.15 m width, keeps its full width up to 1.5 m, stands on four tyres, one in each corner, and its front bumper is joined to the nose by a chrome stay and pad on each side, like the rear one.\n",
          "The van is assembled from distinguishable forms: the model has a pop-top roof with a roof rack, an open doorway into a fitted interior, modelled wheels with hubs, bumpers, headlights and painted window openings.\n",
          "The lamp is built as a raised form: the lantern's glass globe and flame are held 6 to 13 cm above its base on a brass frame topped by a handle.\n",
          "The area around the lamp on the tabletop is brighter than ground several table widths away: a 60 W-equivalent warm point light sits in the lantern's flame, in the opening view the tabletop's median luma is 190 against 127 to 129 on the sand about 2 m (four table widths) away, and a shadow-only plate under the top keeps the rug beneath it evenly shaded instead of barred by light through the slats.\n",
          "The camper van stays distinguishable from the sky and ground behind it: its cream and teal body and dark windows stand against an orange and blue sunset sky and light ground, lit by the sky environment and outlined by the low sun.\n",
          "The van's body shows a brighter face and a darker adjacent face: the sun-facing panels and the faces turned to the warm fill light are bright, while the faces turned away fall to the dimmer sky light.\n",
          "The van casts a shadow onto the sand: the van's meshes cast into a 4096 by 1024 sun shadow map and its long shadow runs across the sand towards the camera, and a contact shadow darkens the sand under the body and beside each wheel, so the van sits on the sand from every angle.\n",
          "The van's painted body reflects light more sharply than the matte sand: the paint has roughness 0.18 under a clear coat of strength 0.8 and coat roughness 0.06 that mirrors the sunset sky, while the dry sand's roughness map has a median of 0.61 with a rippled normal map and no coat.\n",
          "The van's windows read as darker than the surrounding body panels: on the door side the window band's base colour has a median luma of 10 against 227 for the cream panels above and 103 for the teal panels below.\n",
          "The grass differs in colour from the sand: in the opening view the grass clumps read olive green at hue 37 to 39 degrees against the orange sand around them at hue 22 degrees.\n",
          "All of the table's legs meet the sand surface: each of the four feet's lowest point sits 2 mm into the sand, none above it.\n",
          "The side of the van carrying the open door faces the camera: the opening view stands at (7, 2.35, 7.2) on the door side, and the table and lantern are in frame with nothing of the van between them and the camera.\n",
          "After rotating the camera, a side of the van the opening view does not show becomes visible: orbiting carries the camera round to the far side and the back of the van.\n",
          "No overlay panel or text block covers the camper van in the opening view: the page frames the van into the space the panels leave free, stepping the camera back and shifting the frame when a panel would reach it, and projecting the van's vertices into the opening frame none falls under any panel at 1920 x 1080, 1440 x 900, 1366 x 768, 1280 x 720, 920 x 640, 880 x 640, 920 x 500 or 390 x 844, nor at any of 328 sizes from 1920 down to 300 px wide reached by resizing a live page; under 860 px the conditions panel folds to a pill under the title panel, in the band above the van, and opens as a dropdown only when tapped.\n"
        ]
      }
    ]
  },
  {
    "nav": "Treehouse",
    "title": "The Old Oak — Treehouse Builder",
    "description": "I'm looking for a 3D simulation of a treehouse built around a single main trunk. I think it should have 3 platforms with different heights, which I can orbit around and drag up or down. Connect the 3 platforms with rope bridges and ladders.",
    "category": "3D → OTS 3D Dev",
    "source": "exported_tasks_228 (primitives) · exported_tasks_227 (assets)",
    "questions": [
      {
        "tier": "Functionality",
        "q": "**builds** — A visible treehouse with a central trunk renders"
      },
      {
        "tier": "Functionality",
        "q": "**interactivity** — Dragging on the canvas rotates the view of the treehouse"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A single vertical trunk runs through the scene as the central support, with no second trunk of comparable thickness"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Exactly three platforms are attached to the trunk"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The three platforms sit at three different heights along the trunk, with no two at the same level"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A rope bridge spanning between two platforms is visible"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A ladder joining two platforms is visible"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A ladder is built as two side rails with at least three separate rungs between them rather than a single flat slab"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Each platform reads as a separate body meeting the trunk at a visible join rather than being one continuous shape with the trunk"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The rope bridge's support cables or ropes between the anchor platforms display a curved sag, with the lowest point at the span's center rather than forming straight lines"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The rope bridge's walkway hangs lower at mid span than at the two platforms it connects rather than running flat and level"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The rope bridge's deck is made of multiple separate slats or segments along its span rather than one unbroken board"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The trunk carries at least one branch or foliage mass rather than reading as a bare cylindrical pole"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — All three platforms are distinguishable from the trunk and from the background in the opening view"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The trunk shows a brighter side and a darker side consistent with a directional light rather than uniform flat fill"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — At least one platform casts a shadow onto the trunk, the ground, or a platform below it"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The trunk surface and the platform decking differ in shade or roughness, not only in shape"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The bridge ropes are a distinctly different colour from the platform decking so the ropes stay readable against the boards"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — Each platform deck shows separate plank or board divisions rather than reading as one unbroken flat surface"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The three platforms are offset to different sides of the trunk rather than stacked in one vertical column on the same side"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The base of the trunk meets a visible ground or terrain surface rather than ending in empty space"
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — Any on-screen instruction briefly describes the drag-to-rotate camera control, such as the words \"Drag to rotate\""
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — Any on-screen panel or label sits clear of the trunk and the three platforms rather than covering them"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — After rotating the camera, a side of a platform or of the trunk becomes visible that the opening view does not show"
      }
    ],
    "versions": [
      {
        "label": "Argon Primitive",
        "type": "html",
        "file": "scenes/treehouse/argon-primitive/index.html",
        "trajectory": "trajectories/treehouse-argon-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A three-platform treehouse built around a large central oak trunk renders clearly in the scene.",
          "Comparing the load and after-drag screenshots shows that dragging on the canvas orbits the camera around the treehouse.",
          "A single massive vertical trunk serves as the central support, with only small distant pines in the background.",
          "Exactly three platforms (Homestead Cabin, Artisan Tea Deck, and Sky Observatory) are attached to the central trunk.",
          "The three platforms sit at three distinct elevations along the trunk (7.0 m, 12.5 m, and 18.0 m).",
          "Suspension rope bridges spanning between the platforms are clearly visible in all views.",
          "There's one ladder connecting the two platforms in the scene, but it doesn't behave as expected; it bends and curves because it's made of wooden beams.",
          "Each ladder is constructed from two parallel side rails with multiple separate cylindrical rungs between them.",
          "Each platform has an octagonal deck cantilevered out from a distinct timber-and-iron collar ring and diagonal knee braces meeting the trunk.",
          "The suspension bridge handrail and under-deck ropes display a curved catenary sag across their spans rather than straight lines.",
          "The rope bridge walkways follow a parabolic catenary curve that sags downward across the span rather than running straight and flat.",
          "Each rope bridge deck is built from 22 separate wooden plank meshes with visible gaps between them.",
          "The upper trunk branches out into multiple boughs covered with green foliage clusters and hanging vines.",
          "All three platforms are clearly distinguishable from the dark trunk and the sunset sky in the opening view.",
          "The trunk exhibits directional shading across its circumference and bark ridges from the directional sunlight.",
          "The platforms, ladders, and trunk cast distinct shadows onto the terrain below.",
          "The trunk uses a dark, rough, vertically furrowed bark material while the platform decks and structures use warmer, lighter timber plank textures.",
          "The bridge ropes use a light golden-tan hemp texture that contrasts against the darker brown timber decks and posts.",
          "The platform decks and structures use a procedural wood plank texture with dark seam lines and nail heads.",
          "The three platforms are spaced 120 degrees apart around the trunk rather than stacked on the same side.",
          "The flared roots at the base of the trunk rest on a sculpted green forest floor with rocks, ferns, and a stream.",
          "The bottom legend bar explicitly states 'Left-Drag Background: Orbit Camera' alongside platform drag and zoom instructions.",
          "In the desktop views, the HUD header, bottom bar, and right control panel sit at the screen margins completely clear of the trunk and all three platforms.",
          "Rotating the camera in after-drag reveals the copper dome and drum wall of the Sky Observatory and the opposite side of the trunk that were hidden in the opening view."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/treehouse/primitive/index.html",
        "trajectory": "trajectories/treehouse-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "The treehouse renders with one central oak trunk, three plank decks, a cabin, a rope bridge and two ladders on a grassy hill.",
          "Dragging on the canvas orbits the camera around the trunk.",
          "The trunk is the only thick support (0.56 m at mid height); the four branches taper from 0.25 m to 0.09 m.",
          "Exactly three platforms are attached: Low deck, Bridge deck and Lookout cabin.",
          "The platforms sit at 2.20 m, 2.65 m and 5.90 m, and dragging keeps them at least 0.40 m apart.",
          "The rope bridge spans from the Low deck to the Bridge deck in open air, at least 2.62 m from the trunk's centre.",
          "One ladder joins the Bridge deck to the Lookout deck, and another climbs from the ground to the Low deck.",
          "Each ladder has two side rails with separate rungs: 9 on the upper ladder, 6 on the lower.",
          "Each platform is its own deck meeting the trunk at visible beams, braces and three rope lashings.",
          "The bridge ropes hang in curves up to 0.23 m below a straight line, with the lowest point inside the span.",
          "The rope bridge's walkway dips to 2.03 m between landings at 2.20 m and 2.65 m.",
          "The rope bridge's deck is 17 separate slats with gaps between them.",
          "The trunk carries four branches and a full leafy crown.",
          "All three platforms' light planks stand out against the dark bark, grass and sky in the opening view.",
          "The trunk's sunlit side measures about 60 brightness against about 25 on its shaded side.",
          "The platforms cast shadows on the trunk and ground; switching them off brightens 532 screen areas.",
          "The trunk's dark grooved bark (brightness 40) differs clearly from the lighter deck planks (82).",
          "The bridge ropes are pale hemp, readable against the darker slats and boards.",
          "Each platform deck is built from separate boards with gaps (23, 23 and 18 boards).",
          "The three platforms point to different sides of the trunk (225°, 340° and 75°).",
          "The trunk's base flares into roots on a grassy hill.",
          "The card says \"Drag to rotate the view\" and the hint pill repeats \"Drag to rotate\".",
          "The card and hint pill cover no trunk or platform pixels at any of 37 screen sizes.",
          "Rotating the camera reveals the back of the cabin and the far sides of the decks."
        ]
      },
      {
        "label": "Argon Assets",
        "type": "html",
        "file": "scenes/treehouse/argon-assets/index.html",
        "trajectory": "trajectories/treehouse-argon-assets.json",
        "marks": [
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A 3D treehouse with three platforms is displayed in the scene, but many random white objects are scattered across all platforms, and white bushes litter the ground, detracting from the scene.",
          "Comparing the load and after-drag screenshots shows that dragging on the canvas rotates the camera view around the treehouse.",
          "A single massive vertical trunk acts as the central support, with only small pine trees in the distant background.",
          "Exactly three platforms (Lower Hoist Deck, Main Cabin Deck, and Stargazer Nest) are attached to the central trunk.",
          "The three platforms sit at three distinct heights along the trunk (6.0m, 11.2m, and 16.5m).",
          "Two rope bridges spanning between the platforms are clearly visible in the scene.",
          "A rope ladder joining the lower platform (Platform 1) to the upper platform (Platform 3) is clearly visible on the right side of the trunk, along with a trunk ladder and a ground ladder.",
          "Each ladder has two side rails and multiple separate cylindrical rungs between them, but there is also a flat set of stairs that doesn't behave as expected; it bends and curves even though it is made of wooden beams and has guardrails.",
          "Each platform reads as a separate circular timber structure offset from the trunk and joined to it via wooden collars and diagonal struts.",
          "The rope bridges don't display the expected sag in the middle; instead, they display a convex curve.",
          "The rope bridges don't display the expected sag in the middle; instead, they display a convex curve.",
          "The rope bridge decks are made of 22 to 24 separate wooden planks with visible gaps along their spans.",
          "The trunk carries upper branches and green foliage clusters visible at the top of the frame rather than ending as a bare pole.",
          "All three platforms are clearly distinguishable from the central trunk and the background in the opening view.",
          "The trunk displays a warmly lit right side and a shadowed left side consistent with directional sunlight.",
          "The platforms and their structures cast visible shadows onto the trunk and onto the decks below.",
          "The trunk uses a rough furrowed willow bark texture while the platform decks use a smoother, warmer wood plank material.",
          "The golden-tan braided bridge ropes contrast clearly against the darker brown timber rims, posts, and background.",
          "Each platform deck is built from individual plank meshes with spacing and wood plank textures rather than a single unbroken flat surface.",
          "The three platforms are offset around different sides of the trunk (SE, NW/SW, and NE) rather than stacked in one vertical column.",
          "The base of the trunk flares into buttress roots resting on a visible forest floor terrain surface.",
          "The bottom hint bar includes clear instructions for camera rotation ('Left-Drag Sky/Tree: Orbit').",
          "The panels and instructions are placed in the top corners and at the bottom of the screen, leaving the center available for the treehouse.",
          "After rotating the camera in after-drag and after-zoom, previously hidden sides of the trunk, the cabin on Platform 2, and the upper rope bridge become visible."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/treehouse/assets/index.html",
        "trajectory": "trajectories/treehouse-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "Opening index.html shows the treehouse built from the designer's package: the Meshy trunk with its roots and branches at the centre, the leafy crown, three wooden platforms with railings, the cabin on the top platform, the rope bridge and two ladders, on a grassy meadow under the partly cloudy HDRI sky. The page opens by double-click (file://) with no error or warning in the console, and on this machine the scene is ready in under 3 s.",
          "A left-button drag, or one finger on a touch screen, orbits the camera round the tree with OrbitControls and no azimuth limit. Checked with real mouse events: a drag across the sky turned the view 44 degrees round the tree and 8 degrees in tilt while the distance (23.6 m) and the pivot stayed the same. The right button, and Shift or Ctrl with a left drag, do nothing (pan is off); the wheel zooms from 9 to 44 m; a drag that starts on a platform and goes sideways still orbits.",
          "The trunk is the designer's Meshy trunk, one mesh standing on the vertical axis and rising 10.9 m from its roots to the top of its branches, and the three platforms are fixed to it. Nothing else in the scene is a second trunk: the only meshes taller than 3 m with more than 30 cm of girth are the crown's leaves and the ground, and the stump (0.34 m high) and the fallen log lying in the grass (0.65 m) are small props.",
          "There are exactly three platforms, P0, P1 and P2. Each is a deck whose inner edge runs into the bark (0.24 to 0.36 m from the axis, where the bark is 0.49 m out or more) and is cut to the trunk's real outline, so each one sits against the trunk with no gap; each is held there by a ledger, knee braces and rope lashings. The bridge landings belong to P0 and P1, and the cabin stands on P2.",
          "The platforms stand at 2.20 m (P0), 2.65 m (P1) and 5.90 m (P2), as in the designer's layout and the reference video. While a platform is dragged the page keeps their order, at least 0.30 m between P0 and P1 and at least 1.60 m between P1 and P2 (so the upper ladder can still be climbed), so no two platforms ever share a level; a saved layout that breaks these rules is ignored at load.",
          "A rope bridge spans 3.05 m from a landing on platform P0 to a landing on platform P1: 17 wooden slats on two foot ropes, two hand ropes tied to the landing posts and 10 vertical ropes joining them. In the opening view it crosses in front of the trunk between the two lower platforms (2,286 pixels of slats and 2,330 of rope at 1920 x 1080), and it is rebuilt to follow whenever either platform is dragged.",
          "A ladder joins platform P1 to the cabin platform P2: its foot stands on P1's boards, it rises 3.32 m at 78 degrees, and its rails rest on P2's side rim at floor level, arriving where P2's railing leaves the side open between the trunk and the cabin; the rails go on 0.45 m above the floor as handholds. A second ladder climbs from the ground to P0. Both are in the opening view and both are rebuilt when a platform is dragged.",
          "Both ladders are two round side rails with separate round rungs between them, 30 cm apart along the rails: the upper ladder (P1 to P2) has 10 rungs between rails 40 cm apart, the lower one (ground to P0) has 7 rungs between rails 50 cm apart. Across the whole drag range the upper ladder keeps 5 to 14 rungs and the lower one 6 to 10.",
          "Each platform is its own frame of boards on joists with a rim and a railing, in its own object, and moves alone when dragged. It meets the trunk at visible joints: a ledger beam under the deck against the bark, two knee braces running down into the bark, and three turns of rope lashed round the trunk just under (or, for P1, just over) the deck. The boards are cut along the bark's real outline, so the deck reads as planks butting against the trunk, not as one shape with it.",
          "Both foot ropes and both hand ropes hang in a curve, never in straight lines: at mid-span the foot ropes are 0.34 m and the hand ropes 0.23 m below the straight line between their ends, and that depth is greatest exactly at the middle of the span. Because the two platforms stand at different heights (2.20 and 2.65 m), the absolute lowest point of each rope sits a little towards the lower platform (a third and a quarter of the way along), which is how a rope hangs between unequal anchors and how the reference video shows it.",
          "The walkway sags between its landings: at the design heights the middle slat is at 2.04 m, against 2.14 m at the P0 end and 2.55 m at the P1 end, so mid-span hangs 16 cm below the lower platform (2.20 m) and 61 cm below the higher one (2.65 m). The sag is worked out again whenever a platform is dragged.",
          "The bridge deck is 17 separate wooden slats, each 64 cm across and 12 cm along the span, laid 18 cm apart (6 cm gaps) on the foot ropes; each slat tilts with the curve of the ropes, so the gaps stay open along the whole span.",
          "The trunk carries the designer's crown: the Meshy trunk's own branches spread under a mass of leaf cards (about 129,000 leaf triangles round a darker inner core) that reaches 13.1 m, more than 7 m above the cabin platform, as in the reference video.",
          "In the opening view (1920 x 1080) all three platforms show clearly: their warm oak boards average a luminance of 128 (P0), 119 (P1) and 100 (P2) against 46 for the bark, a CIE76 colour difference of 36 to 46 from the trunk and of 21 to 24 from what lies right around each of them (ground, ropes, bark, leaves, the cabin and props). None is hidden behind the trunk or under a panel.",
          "The sun is a directional light 38 degrees above the horizon with shadows, and the trunk is a lit physical material with its own normal map. Measured on the opening view with a world-normal mask, the bark facing the sun is 1.28 times as bright as the bark facing away, and 1.70 times at the foot of the trunk below the decks; the reference video's first frame, read with the same mask, gives 1.31 and 1.79. Higher up, the crown's shadow falls across the sunny side, as it does in the video.",
          "The platforms cast the sun's shadows. Measured on the opening view by switching the platforms' shadow casting off and on: their shadows cover 24,874 ground pixels and 9,629 trunk pixels (plus grass, beams and the cabin), and the shaded ground drops from a luminance of 117 to 80. The shadows follow a platform when it is dragged.",
          "The trunk and the decking differ clearly in shade: in the opening view the bark averages a luminance of 46 (dark grey-brown, rough Meshy bark with its own normal map) and the deck boards 100 to 128 (warm oak veneer), and the decking's colour map is 1.65 times as bright as the bark's.",
          "The bridge ropes are a greyish tan rope, darker and much less saturated than the warm orange oak of the slats and decks. In the opening view the ropes average sRGB (97, 83, 64) against (163, 121, 84) for the slats, a CIE76 colour difference of 24 (26 in a close view of the bridge), with a luminance of 85 against 127, so the ropes stay readable against the boards.",
          "Each deck is laid as separate boards: 23 on P0, 23 on P1 and 18 on P2, each 15.5 cm wide with a 1.6 cm gap to the next, slightly uneven ends and its own grain offset, so the planks read one by one in the opening view.",
          "The platforms reach out from three different sides of the trunk: P0 towards 225 degrees, P1 towards 340 degrees and P2, the cabin platform, towards 75 degrees, so they are 115, 95 and 150 degrees apart round the trunk, as in the designer's layout. In the opening view P0 and P1 spread to either side of the trunk and P2 stands out to the right, higher up.",
          "The trunk's root flares spread on the grassy ground and its base goes 0.52 m below the ground's surface at the axis, with fallen leaves round its foot; the ground, a meadow with hills, spreads about 88 m in every direction, so the trunk never ends in empty space.",
          "The title card reads \"Drag to rotate the view. Grab any platform and pull it up or down along the trunk...\", and the hint line at the bottom reads \"Drag to rotate • Scroll to zoom • Drag platforms vertically\" (\"Pinch to zoom\" on touch screens). Both describe the left-drag orbit the page has, and neither mentions panning.",
          "Measured at 10 window sizes (1920 x 1080, 2560 x 1080, 1366 x 768, 1280 x 720, 1024 x 768, 844 x 390, 768 x 1024, 390 x 844, 360 x 640 and 320 x 568): no vertex of the trunk, the platforms, the bridge, the ladders, the cabin or the crown falls under the title card or the hint line. On narrower windows the page measures the tree's outline and places it beside or below the card, backing the camera off just enough; only a few meadow bushes pass under the hint on small screens.",
          "The view can be dragged all the way round the tree. In the opening view the visible bark faces the directions from 260 through 0 to 130 degrees; after half a turn round the tree the bark facing 140 to 250 degrees comes into view, and the cabin and the three platforms are seen from their other side, none of which the opening view shows."
        ]
      }
    ]
  },
  {
    "nav": "Biplane Crop Duster",
    "title": "Biplane Crop Duster — Interactive 3D",
    "description": "Build me a live 3D scene of a biplane crop duster, fully interactive with a free camera.\nWhat I'm looking for:\n- upper and lower wings with a staggered arrangement\n- bracing wires running between the struts\n- a fixed tailwheel landing gear\n- chunky low-pressure tyres on the wheels\n- spray booms mounted directly beneath the lower wing\n- a blue paint job with chipped wear\n- dark oil streaks trailing back from the engine cowling\n- an interactive control that switches the spray system on and off\n- boom nozzles that visibly open as the spray begins\nI want to be able to orbit the entire aircraft while the spray is running.",
    "category": "3D → OTS 3D Dev",
    "source": "exported_tasks_228 (primitives) · exported_tasks_227 (assets)",
    "questions": [
      {
        "tier": "Functionality",
        "q": "**builds** — A visible running biplane crop duster renders"
      },
      {
        "tier": "Functionality",
        "q": "**interactivity** — The free camera can be repositioned to view the biplane from another angle"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Upper and lower wings show a staggered offset, horizontally shifted relative to each other, rather than being stacked directly one above the other."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Wire bracing lines are visible running between the interplane struts on at least one side of the biplane."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A single fixed tailwheel sits under the rear of the fuselage rather than a modern tricycle or retractable undercarriage."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The main wheels use noticeably fat, wide tyres rather than thin standard aircraft tyres."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Spray booms run beneath the lower wing, physically slung under it rather than mounted on the fuselage or upper wing."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The airframe is painted blue with visible chipped patches showing a different colour or bare material underneath."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Dark oil streaks run aft along the fuselage from the base of the engine cowling."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Visible spray, such as mist or particle trails, streams from the boom nozzles beneath the lower wing."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — As the scene runs, the boom nozzle apertures stay open and continue emitting visible spray across multiple frames, rather than the openings appearing sealed shut."
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — After rotating the camera, the spray trail beneath the boom is still visible, confirming the effect persists while the camera moves."
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — A labelled toggle control for the spray system is visible in the interface."
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The main wheels and the tailwheel each visibly touch the ground plane rather than floating above it."
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — As the scene runs, the propeller shows a change in rotational position or a motion blur compared to the opening view, consistent with the engine running."
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The engine cowling reads as a distinct rounded form separate from the flat wing surfaces, giving the oil streaks a surface to run down."
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The oil streaks appear as a darker, duller finish than the surrounding blue paint rather than a same-toned decal."
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The tyres show a flattened bulge where they meet the ground rather than a perfectly circular cross-section."
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — Wire bracing crosses diagonally between the struts in an X-like pattern rather than running as a single straight vertical line."
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The biplane casts a shadow on the ground that aligns with its wheels' contact points."
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The spray booms span most of the width of the lower wing rather than appearing as a single short stub."
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The chipped paint patches concentrate on edges and high-wear areas such as the cowling and wing leading edges rather than being spread uniformly across flat panels."
      }
    ],
    "versions": [
      {
        "label": "Argon Primitive",
        "type": "html",
        "file": "scenes/biplane-crop-duster/argon-primitive/index.html",
        "trajectory": "trajectories/biplane-crop-duster-argon-primitive.json",
        "marks": [
          false,
          true,
          true,
          true,
          true,
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          false,
          false,
          true,
          false,
          true,
          false
        ],
        "comments": [
          "A detailed 3D biplane crop duster is visible in the scene, but its main body is transparent from different camera angles, making the plane look broken.",
          "The camera orbits and zooms freely around the aircraft across the interaction screenshots.",
          "The upper wing is visibly staggered forward relative to the lower wing, with forward-slanted interplane struts.",
          "Metallic bracing wires with brass turnbuckles are clearly visible running between the struts on both sides of the wings.",
          "A single fixed tailwheel assembly is mounted beneath the rear of the fuselage.",
          "Although wheels are visible in the scene, their surfaces are transparent.",
          "The pressurized spray booms are slung on drop brackets directly beneath the lower wing panels.",
          "Although the fuselage appears blue, its surface appears transparent depending on the camera angle.",
          "The dark oil streaks aren't clearly visible because the fuselage appears transparent depending on the camera angle.",
          "Mist cones and dense particle spray trails stream continuously from the 16 nozzles beneath the lower wing.",
          "The articulated nozzle deflector jaws stay open with glowing sight rings and active spray plumes across all captured frames.",
          "In the after-drag and after-zoom screenshots, the spray cones and trailing mist plume remain clearly visible while orbiting.",
          "A clearly labelled 'Boom Spray Master' toggle button is prominently displayed in the top-right control panel.",
          "Wait—in all screenshots the aircraft defaults to Low Pass Flight mode, so the main wheels and tailwheel float high above the ground plane rather than touching it.",
          "The propeller blades change angle across frames and include a translucent motion-blur disc indicating the engine is running.",
          "The radial engine cowling is modeled as a distinct rounded cylinder at the nose, providing a curved surface that leads into the oil-streaked fuselage.",
          "The oil streaks look much darker than the blue fuselage paint, but their texture and shine are very similar to the paint.",
          "The tyres are built as symmetric cylindrical lathes that rotate in the air without a flattened contact bulge at the bottom.",
          "The rigging wires cross diagonally in a clear X-pattern between both the cabane/interplane struts and the N-struts.",
          "Because the aircraft is airborne in Low Pass Flight mode, its cast shadow on the ground is separated from the wheels rather than aligning with wheel contact points.",
          "The under-wing spray booms extend across nearly the entire span of both lower wing panels.",
          "The chipped paint wear isn't clearly visible because a significant portion of the fuselage is transparent from different camera angles."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/biplane-crop-duster/primitive/index.html",
        "trajectory": "trajectories/biplane-crop-duster-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "On render the page successfully renders a visible crop duster biplane.",
          "The camera can be moved to view the biplane from different angles.",
          "The upper and lower wings are horizontally offset rather than stacked directly above each other.",
          "Visible bracing wires connect the interplane struts on at least one side.",
          "A single fixed tailwheel is mounted beneath the rear fuselage, with no tricycle or retractable landing gear.",
          "The main wheels use visibly fat, wide tyres rather than thin standard aircraft tyres.",
          "The spray booms are suspended beneath the lower wing.",
          "The airframe is painted blue with visible chipped areas exposing a contrasting underlying material.",
          "Dark oil streaks extend aft along the fuselage from the base of the engine cowling.",
          "Visible spray streams from the boom nozzles below the lower wing.",
          "The nozzle openings remain open and continuously emit visible spray as the scene runs.",
          "The spray remains visible beneath the boom while the camera rotates.",
          "The interface includes a visible, labelled spray-system toggle.",
          "Both main wheels and the tailwheel visibly contact the ground.",
          "The propeller visibly rotates or shows motion blur, indicating that the engine is running.",
          "The engine cowling has a distinct rounded shape, separate from the flat wings.",
          "The oil streaks have a visibly darker, duller finish than the surrounding blue paint.",
          "The main tyres show visible flattening and bulging where they contact the ground.",
          "The bracing wires cross diagonally between the struts in an X-like pattern.",
          "The aircraft casts a ground shadow aligned with the wheels’ contact points.",
          "The spray booms extend across most of the lower wing’s width.",
          "Paint chipping is concentrated around high-wear areas such as the cowling and wing leading edges rather than distributed evenly across flat surfaces."
        ]
      },
      {
        "label": "Argon Assets",
        "type": "html",
        "file": "scenes/biplane-crop-duster/argon-assets/index.html",
        "trajectory": "trajectories/biplane-crop-duster-argon-assets.json",
        "marks": [
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          false,
          false,
          true,
          false,
          true,
          true
        ],
        "comments": [
          "A detailed blue bimotor plane is displayed in the scene, but that's not all. In the left corner, a white box, a white piece of luggage,e, and a white bench are displayed floating in the scene.",
          "The camera orbits smoothly from the port side in the initial view to the starboard side after dragging and zooms in on the aircraft.",
          "The upper wing is visibly positioned forward of the lower wing in a classic positive stagger configuration, with angled interplane struts connecting them.",
          "Metallic bracing wires with brass turnbuckles are clearly visible running between the interplane struts on both sides of the aircraft.",
          "A single fixed tailwheel on a yellow fork is mounted beneath the rear of the fuselage.",
          "The main landing gear features wide, chunky low-pressure bush tyres with deep shoulder lugs.",
          "Stainless-steel spray booms are suspended on hanger brackets directly beneath both lower wing panels.",
          "The fuselage and wings are painted cobalt blue with chipped patches exposing bare silver aluminum and olive-yellow primer.",
          "Dark black and brown oil streaks trail aft along the fuselage sides from the engine cowling.",
          "Translucent spray cones and volumetric mist particles visibly stream from the nozzles beneath the lower wings.",
          "Across all captured frames, the boom nozzle jaws remain spread open with green valve levers and continuous spray emission.",
          "The spray cones and mist plumes remain clearly visible beneath the wings after orbiting and zooming the camera.",
          "A prominent 'SPRAY SYSTEM' toggle button with an 'ACTIVE · ON' status indicator is visible in the top-right control panel.",
          "Because the scene starts in 'Low Pass' flight mode with the aircraft elevated at y = 1.42, both the main wheels and tailwheel float in the air above the ground plane.",
          "The propeller blades change rotational angle between frames and feature a translucent motion-blur disc indicating a running engine.",
          "The engine cowling and forward fuselage form a distinct rounded barrel cylinder separate from the flat wings, providing a curved surface for the oil streaks.",
          "The oil streaks are visibly darker than the blue paint, but they have the same shine and reflectivity as the paint.",
          "The tyres are built from a circular lathe revolution and are airborne in the default low-pass mode, showing no flattened contact bulge at the bottom.",
          "The bracing wires cross diagonally in an X-pattern between the inner and outer interplane struts.",
          "Because the aircraft is hovering above the field in low-pass mode, its ground shadow is offset below the airborne wheels rather than meeting at wheel contact points.",
          "The under-wing spray booms with 22 nozzles span nearly the full width of both lower wing panels.",
          "The chipped paint patches are concentrated along the forward cowling, fuselage panel seams, and wing leading and trailing edges while leaving the mid-chord wing bays mostly intact."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/biplane-crop-duster/assets/index.html",
        "trajectory": "trajectories/biplane-crop-duster-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "Yes, it's render even if using primitives.",
          "Yes, the camera can be repositioned from another angle to view the biplane",
          "Yes, upper and lower wings show a staggered offset, horizontally shifted relative to each other, rather than being stacked directly one above the other.",
          "Yes, Wire bracing lines are visible running between the interplane struts on both side of the biplane.",
          "Yes, a single fixed tailwheel sits under the rear of the fuselage rather than a modern tricycle or retractable undercarriage. but it's floating.",
          "Yes. Main wheels use noticeably fat, wide tyres rather than thin standard aircraft tyres.",
          "Yes, spray booms run beneath the lower wing, physically slung under it rather than mounted on the fuselage or upper wing.",
          "Yes, the airframe is painted blue with visible chipped patches showing a different colour or bare material underneath.",
          "Yes, there's Dark oil streaks run along the fuselage at the engine cowling",
          "Yes, the spray already visible now but still it's more like particle trails, I think it would be better if add some mist effect later.",
          "Yes, as the scene runs, the boom nozzle apertures stay open and continue emitting visible spray across multiple frames, rather than the openings appearing sealed shut.",
          "Yes. the spray trail still visible beneath the boom even camera moves.",
          "Yes, labelled toggle control for the spray system is visible in the interface.",
          "Yes, the bottom tailwheel is connected and not floating.",
          "Yes, as the scene runs, the propeller shows a change in rotational position or a motion blur compared to the opening view, consistent with the engine running.",
          "Yes the engine cowling reads a distinct rounded form separated from the flat wing surface.",
          "Yes, the oils areas appear darker and duller compared to other paint",
          "Yes, the tyres show a flattened bulge where they meet the ground rather than a perfectly circular cross-section.",
          "Yes, its bracing crosses diagonally between the struts in an X-like pattern rather than running as a single straight vertical line.",
          "Yes, biplane casts a shadow on the ground that aligns with its wheels' contact points.",
          "yes the spray booms spans most of the width of lower wing",
          "Yes, the chipped paint concerate on edges and high-wear areas"
        ]
      }
    ]
  },
  {
    "nav": "Cheese Board",
    "title": "Artisan Cheese Board — Interactive 3D",
    "description": "I'd love an interactive 3D cheese board presented on an oiled olive wood slab. On it I'd like a hard, crumbly wedge; a bloomy soft round; a blue cheese with cut veining; and a goat log. Scatter some walnuts around, add glossy grapes, and give the cheeses matte rinds. When I click the knife, it should lift up and work like in the real world, thanks.",
    "category": "3D → OTS 3D Dev",
    "source": "exported_tasks_228 (primitives) · exported_tasks_227 (assets)",
    "questions": [
      {
        "tier": "Functionality",
        "q": "**builds** — A visible cheese board scene renders"
      },
      {
        "tier": "Functionality",
        "q": "**interactivity** — Dragging the pointer across the canvas changes the viewing angle of the board"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A flat wood-toned slab serves as the board beneath the food items"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Four separate cheese pieces are present, each with a different overall shape from the other three"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — One cheese is a wedge with a triangular profile, being wider at one end and tapering to a point"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — One cheese is a low round with a visibly white or pale outer surface, appearing distinctly lighter in tone than the darker cheeses surrounding it"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — One cheese shows a cut face carrying darker blue or grey-green vein markings across it rather than a single uniform colour"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — One cheese is a slender cylindrical log that is clearly longer than it is thick"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — At least three walnut forms are present, spaced apart from one another rather than fused into a single mass"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A cluster of small spheres reading as grapes sits on the board"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — Loose rind pieces are present as separate objects from the four whole cheeses"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A knife is present whose blade and handle are distinguishable as two differently coloured parts"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The scene reads as a cheese board without needing the prompt, being a slab carrying several distinct food items on its upper surface"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The walnut forms have a lumpy or lobed surface rather than being smooth plain spheres"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — After rotating the camera, the soft round shows a side wall with visible height rather than reading as a flat disc"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — All four cheeses are bright enough at load to be told apart from the board they sit on"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The cheeses display visible shading and tonal variation on their surfaces, indicating three-dimensional form and volume rather than flat appearance"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The board's surface is brighter on one side than the other rather than being an even flat fill of one tone"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The board's wood surface carries a visible sheen or highlight consistent with being oiled rather than reading as flat matte colour"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The grapes show a tighter, brighter specular highlight than the cheese rind pieces"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The knife blade shows a brighter reflective highlight than its handle"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The crumbly wedge's broken or cut face shows irregular relief or loose crumb pieces rather than a perfectly smooth flat plane"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — All four cheeses are visible in the opening view, none completely hidden behind another item"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — Each cheese piece is in contact with the board's top surface rather than floating above it"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — No cheese piece passes through another cheese piece"
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — Any on-screen text or panel leaves the board and its cheeses unobscured"
      }
    ],
    "versions": [
      {
        "label": "Argon Primitive",
        "type": "html",
        "file": "scenes/cheese-board/argon-primitive/index.html",
        "trajectory": "trajectories/cheese-board-argon-primitive.json",
        "marks": [
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          true
        ],
        "comments": [
          "A visible wooden cheese board features 4 cheese pieces and 2 bunches of grapes. The cheese pieces are broken, with incomplete surfaces and disconnected edges. The grape bunches are floating.",
          "Comparing the load and after-drag screenshots shows that dragging across the canvas rotates the viewing angle around the board.",
          "A flat, live-edge wood-toned slab with swirling olive wood grain serves as the board beneath all the food items.",
          "Four distinct cheeses sit on the board: a hard, crumbly wedge; a low, circular bloomy round; a tall, veined blue-cheese wedge with a cut slab; and a cylindrical goat log. The cheeses are broken, with uneven or nonexistent surfaces and disconnected edges.",
          "Both the aged hard cheese and the blue cheese are wedges with a triangular profile, wider at the outer heel and tapering to a point. But the cheeses are broken, with disconnected edges and missing surfaces.",
          "The low, round cheese is broken, with missing surfaces that make it invisible from certain camera angles.",
          "The Roquefort cheese is visible in the scene, but missing surfaces make it invisible from certain camera angles. The cheese slice overlaps the larger cheese block.",
          "The ash-coated goat cheese in the foreground is a slender cylindrical log that is clearly longer than it is thick.",
          "Roughly a dozen whole walnuts and walnut halves are scattered individually across the board rather than fused into a single mass.",
          "Both the green and red grape bunches in the scene display individual grapes floating, not conforming to the laws of physics.",
          "While the cheeses have matte rinds and separate cut slices or crumbs beside them, there are no loose rind pieces placed as separate objects on the board.",
          "A cheese knife is visible in the scene, with two distinct colored parts, but its blade overlaps the goat cheese slices, which appear broken.",
          "The arrangement of cheeses, grape clusters, walnuts, herbs, and a cheese knife on a wooden slab immediately reads as a cheese board. But the inconsistent surfaces, disconnected edges, and floating elements make the scene look broken.",
          "The whole walnuts feature ridged, bumpy shells and the walnut halves show distinct double-lobed cerebral surfaces rather than plain smooth spheres.",
          "In the after-drag and after-zoom screenshots, the white soft round clearly displays a vertical cylindrical side wall with substantial thickness.",
          "All four cheeses are well-illuminated at load and stand out clearly against the darker olive wood grain, but missing surfaces make it invisible from certain camera angles.",
          "The cheeses display inconsistent shading and tonal variation on their surfaces, as missing surfaces make them invisible from certain camera angles.",
          "The board surface exhibits clear tonal and lighting variation, with brighter specular reflections on the right side and shadowed areas beneath the food items.",
          "The olive wood slab uses a clearcoat physical material that produces a visible satin sheen across the top surface and bevels, consistent with oiled wood.",
          "Both the red and green grapes display tight, bright specular highlights, contrasting with the diffuse matte surfaces of the cheese rinds.",
          "In the opening view, the metallic knife blade reflects a brighter highlight than its wooden handle, but it overlaps the cheese slices, so the blade isn't clearly visible.",
          "The hard wedge shows crumb chunks, but its edges are disconnected, making the scene look broken.",
          "All four cheeses are clearly arranged and unobscured in the initial camera view, but missing surfaces make it invisible from certain camera angles.",
          "Every cheese piece sits directly on the top surface of the olive wood slab rather than floating above it, but their missing surfaces make them invisible from certain camera angles, and the scene looks broken.",
          "The four cheeses are spaced apart on the slab, but some slices overlap with the bigger cheese blocks.",
          "The header, control buttons, and bottom tasting card are positioned around the perimeter of the viewport, leaving the board and cheeses unobscured."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/cheese-board/primitive/index.html",
        "trajectory": "trajectories/cheese-board-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A visible cheese board scene renders successfully.",
          "Dragging across the canvas changes the viewing angle of the board.",
          "A flat wood-toned slab forms the board beneath the food items.",
          "Four distinct cheese pieces are visible, and each has a different overall shape.",
          "One cheese forms a clear triangular wedge that is wider at one end and narrows to a point.",
          "One cheese is a low round with a pale outer surface that appears noticeably lighter than the surrounding cheeses.",
          "One cheese has a visible cut face with darker blue or grey-green veining across the surface.",
          "One cheese is a slender cylindrical log that is clearly longer than it is thick.",
          "At least three separate walnut forms are present and spaced apart on the board.",
          "A cluster of small spherical forms reading as grapes sits on the board.",
          "Separate loose rind pieces are visible apart from the four whole cheeses.",
          "A knife is present with visually distinct blade and handle sections.",
          "The scene presents a board-like slab carrying several distinct food items on its upper surface.",
          "The walnut forms have visibly uneven, lumpy surfaces rather than smooth spherical shapes.",
          "After the camera is rotated, the soft round shows a visible side wall and clear thickness rather than appearing flat.",
          "All four cheese objects are bright enough at load to remain distinguishable from the board beneath them.",
          "The cheese objects show visible shading and tonal variation that gives their forms three-dimensional volume.",
          "The board shows a visible brightness difference across its surface rather than a completely uniform flat tone.",
          "The board’s wood surface shows a visible sheen or highlight consistent with an oiled finish rather than a flat matte surface.",
          "The grapes show a tighter and brighter specular highlight than the rind pieces.",
          "The knife blade has a noticeably brighter reflective highlight than the handle.",
          "The crumbly wedge has an uneven broken or cut surface with visible relief and loose crumb pieces rather than a perfectly flat face.",
          "All four cheese pieces are visible in the opening view without any being completely hidden behind another item.",
          "Each cheese piece is positioned in contact with the top surface of the board.",
          "All cheeses remain realistic without intersecting its surfaces by passing through tehm.",
          "The on-screen interface leaves the board and cheese objects unobscured."
        ]
      },
      {
        "label": "Argon Assets",
        "type": "html",
        "file": "scenes/cheese-board/argon-assets/index.html",
        "trajectory": "trajectories/cheese-board-argon-assets.json",
        "marks": [
          false,
          true,
          true,
          false,
          true,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          false,
          false
        ],
        "comments": [
          "The scene depicts a cheese board with four cheeses, grapes, walnuts, and a knife. It sits on a table with a wine glass, fruit, and a croissant. But elements overlap (such as cheese slices, the knife, and walnuts), the hard cheese has disconnected edges, and it looks like a wooden slab over the hard cheese, with items across it.",
          "Comparing the load and after-drag screenshots shows that dragging the pointer rotates the viewing angle around the board.",
          "A flat, wood-toned olive wood slab with a bark edge serves as the board beneath all the food items.",
          "Four separate cheese groupings are on the board: a long, stepped wedge; a flat, wheel; a shorter, veined wedge with side slices; and a cylindrical log. But some cheese slices overlap the larger cheese blocks.",
          "The hard cheese on the back-left (as well as the blue cheese body) has a triangular wedge profile tapering from a wide back end to a point.",
          "The front-left cheese is a low, cylindrical round with a chalk-white surface that is distinctly lighter than the surrounding cheeses and wood. But there's an inconsistency on the top and bottom surfaces of the cheese, revealing a hollow interior and making the element look broken.",
          "The back-right cheese displays pale cut faces marked with dark blue-green veining. But the cheese has a thick wooden slab on top of it and across the wider part of the block. The cheese slices also overlap other cheese blocks and the knife, which makes the scene look broken.",
          "The front-right cheese is a slender, grey-ashed cylindrical log, clearly longer than it is thick. But a wooden skewer runs across the cheese.",
          "Multiple individual whole and halved walnuts are scattered and spaced apart across the surface of the board.",
          "Two clusters of small spheres reading as dark ruby and green grapes sit on the board. But part of the dark ruby bunch is floating in the scene.",
          "There are no loose rind pieces present as separate objects from the four cheeses on the board.",
          "A knife sits on top of the board with a silver metallic blade and brown wood and brass handle. But the knife is overlapping with cheese slices and walnuts.",
          "The scene reads as an artisanal cheese board, but some broken elements, such as overlapping elements and disconnected edges on the cheeses, detract from the scene's quality and realism.",
          "The walnut pieces are modeled as two-lobed halves and ridged shells with bark normal mapping rather than smooth plain spheres.",
          "In the after-drag and after-zoom screenshots, the soft white round clearly shows a vertical side wall with substantial thickness.",
          "All four cheeses are brightly lit at load and stand out clearly against the darker olive wood slab.",
          "Visible directional shading and tonal gradients across the top and side faces of the cheeses convey three-dimensional volume. Still, the round cheese's inconsistent surface, which shows a hole, and the hard cheese's inconsistent edges compromise this aspect of the scene.",
          "The board's surface exhibits clear lighting variation, cast shadows, and directional highlights rather than an even flat fill.",
          "The olive wood board uses a clearcoat material that produces a visible satin sheen, especially prominent in the after-zoom view.",
          "Both the red and green grapes show tight, bright specular highlights while the cheese rinds remain completely matte.",
          "The metallic knife blade reflects a brighter silver-white highlight than its darker wooden handle.",
          "The hard crumbly wedge features a bumpy, speckled surface relief and loose crumb pieces scattered on the board beside it.",
          "All four cheeses are clearly visible, but some cheese slices and overlapping with bigger cheese blocks.",
          "All four cheeses sit flush on the top surface of the wooden slab with grounded contact shadows, but their missing surfaces make holes visible from certain camera angles (and also disconnected edges), and the scene looks broken.",
          "In both the load and after-drag views, the front-most angled slices of the blue cheese interpenetrate the side of the grey goat log.",
          "In the mobile view, the large top UI cards cover the upper half of the cheese board and obscure several cheeses, and on desktop the floating cursor prompt covers the cheeses when zoomed in."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/cheese-board/assets/index.html",
        "trajectory": "trajectories/cheese-board-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "The cheese board setup is clearly visible in the rendered scene.",
          "Pointer dragging produces a noticeably different perspective of the board.",
          "A broad wooden slab is clearly visible underneath the food.",
          "Four distinct cheese pieces are visible with clearly different shapes.",
          "One cheese has a tapered triangular wedge form.",
          "A short pale round cheese stands out clearly from the darker cheeses.",
          "A cheese cut surface contains visible blue or grey-green veining.",
          "One cheese forms a narrow elongated cylinder with greater length than thickness.",
          "At least three individual walnuts are visible with space between them.",
          "A group of small round grape forms is clearly visible on the board.",
          "Separate rind fragments are visible alongside the whole cheeses.",
          "The knife has a clearly contrasting blade and handle.",
          "The arrangement immediately reads as a food-serving cheese board.",
          "The walnuts have visibly irregular lobed surfaces rather than smooth round shapes.",
          "Camera rotation reveals vertical thickness along the side of the round cheese.",
          "Each cheese remains visibly separated from the board by sufficient brightness or contrast.",
          "Light and shadow variations across the cheeses make their forms visibly three-dimensional.",
          "The board has noticeable lighting variation across its surface from one side to the other.",
          "A visible surface sheen gives the wood the appearance of an oiled finish.",
          "The grapes have sharper, brighter highlights than the rind fragments.",
          "The blade produces a stronger reflective highlight than the knife handle.",
          "The wedge's cut or broken face has uneven depth and visible crumb detail.",
          "All four cheeses can be seen clearly in the opening view.",
          "Each cheese visibly rests directly on the board surface.",
          "The four cheeses occupy separate positions without intersecting each other.",
          "On-screen text or panels remain positioned away from the board and cheese display."
        ]
      }
    ]
  },
  {
    "nav": "Houseboat",
    "title": "The Willow — Houseboat Holiday Let",
    "description": "This is going on a holiday rental listing so potential guests can look around the property ahead of booking - it should be an interactive 3D simulation visitors can click and drag to explore. Aim for a welcoming, cozy-vacation feel rather than anything technical. I'd like a live 3D model of a wide, flat-bottomed houseboat. Since guests will be curious about outdoor seating, give it a roof terrace with railings plus a small deck at the bow. Add windows along both sides so people can picture the views out. It should run smoothly in a browser, letting anyone on the listing rotate the boat and check out every outdoor area.",
    "category": "3D → OTS 3D Dev",
    "source": "exported_tasks_228 (primitives) · exported_tasks_227 (assets)",
    "questions": [
      {
        "tier": "Functionality",
        "q": "**builds** — A visible houseboat renders"
      },
      {
        "tier": "Functionality",
        "q": "**interactivity** — Dragging on the canvas changes the viewing angle of the houseboat"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The hull is wide relative to its length, reading as a broad barge rather than a narrow slender boat"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The bottom of the hull is flat across its width rather than tapering to a V shaped or rounded keel"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A terrace surface sits on top of the cabin roof"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The roof terrace is bounded by a railing made of separate uprights and horizontal rails rather than a solid parapet wall"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — A flat deck area sits ahead of the cabin's forward wall at the bow"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The bow deck's footprint is smaller than the roof terrace's footprint"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — At least three windows are spaced along the length of the cabin side facing the camera"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — After rotating the camera, windows are visible on the cabin side that the opening view does not show"
      },
      {
        "tier": "Instruction following",
        "q": "**prompt-adherence** — The houseboat's paintwork uses warm inviting tones such as timber brown, cream or soft pastel rather than grey industrial metal"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The silhouette reads as a houseboat, being a low flat hull topped by a house shaped cabin, rather than a yacht with a pointed raised prow"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The houseboat is assembled from distinguishable parts such as hull, cabin box, roof terrace and railing rather than one undivided block"
      },
      {
        "tier": "Visual design",
        "q": "**scene-fidelity** — The cabin sits inboard of the hull's outer edges, leaving a walkable strip of deck visible along the side facing the camera"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The cabin walls and the roof terrace railing are distinguishable from the background rather than lost in darkness"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The light falling on the houseboat reads warm, such as cream or golden highlights on the cabin walls, rather than cold blue grey"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The roof terrace railing uprights show a lighter face and a shaded face rather than reading as flat uniform colour"
      },
      {
        "tier": "Visual design",
        "q": "**lighting** — The area directly beneath the roof overhang or inside the window openings is darker than the sunlit cabin wall"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The window glass differs from the cabin wall in reflectivity or tint rather than being the same flat colour as the wall it sits in"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The hull differs in colour or shade from the cabin wall above it rather than the two reading as one continuous surface"
      },
      {
        "tier": "Visual design",
        "q": "**materials** — The railing differs in shade from the terrace floor it stands on rather than sharing an identical flat colour"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — Both the bow deck and the roof terrace are visible in the opening view rather than one being hidden behind the cabin"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The cabin sits toward the stern end so that the bow deck extends clear in front of it, rather than the cabin being centred with matching decks at both ends"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The railing uprights meet the terrace floor at their base rather than floating above it or sinking through it"
      },
      {
        "tier": "Visual design",
        "q": "**composition** — The opening view shows one long side of the houseboat together with one end, rather than a perfectly flat side on profile"
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — No overlay panel or text block covers the cabin or the roof terrace in the opening view"
      },
      {
        "tier": "Visual design",
        "q": "**ui-design** — Any on-screen instruction or label text sits in a deliberately styled container such as a tinted or rounded panel rather than appearing as unstyled text directly on the canvas"
      }
    ],
    "versions": [
      {
        "label": "Argon Primitive",
        "type": "html",
        "file": "scenes/houseboat/argon-primitive/index.html",
        "trajectory": "trajectories/houseboat-argon-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A detailed 3D houseboat renders clearly on the water in all screenshots.",
          "Dragging on the canvas rotates the camera around the houseboat, as shown between the load and after-drag screenshots.",
          "The hull has a wide beam relative to its length, reading clearly as a broad barge.",
          "The hull is extruded vertically from a flat 2D footprint, giving it a flat bottom across its entire width.",
          "A full teak terrace deck sits on top of the cabin roof with outdoor lounge and dining furniture.",
          "The roof terrace is enclosed by a railing made of separate stainless steel uprights, horizontal rails, and glass panels rather than a solid wall.",
          "A flat teak deck area sits ahead of the cabin's forward wall at the bow, furnished with two lounge chairs and a small table.",
          "The bow deck's footprint is noticeably smaller than the full-length roof terrace above the cabin.",
          "Four large rectangular panoramic windows are spaced along the length of the cabin side facing the camera.",
          "Rotating the camera in after-drag and after-zoom reveals the stern windows and glass doors hidden in the opening view, as well as the opposite side's windows visible through the cabin.",
          "The houseboat uses warm cedar and teak timber browns, cream trim, and terracotta/sage accents rather than grey industrial metal.",
          "The silhouette clearly reads as a low, flat-bottomed barge hull topped by a rectangular house-shaped cabin.",
          "The boat is built from distinct components, including the dark hull, teak deck, cedar cabin box, cream roof slab, railings, and pergola, but the scene feels incomplete due to some floating elements (such as handrails and buoys) and overlapping barrels.",
          "The cabin walls are set inboard of the hull's outer edges, leaving a visible walkable strip of teak deck along the side.",
          "The warm cabin walls and rooftop railings contrast clearly against the water and sky background.",
          "The golden-hour directional and hemisphere lighting casts warm amber and cream highlights across the houseboat.",
          "The 3D cylindrical railing posts and timber top rails show distinct lit and shaded faces under the directional sunlight.",
          "Areas directly under the roof overhang and inside the window frames appear darker and shaded compared to the sunlit cabin walls.",
          "The window glass uses a transparent, reflective physical material that clearly differs from the surrounding cedar wall.",
          "The dark navy hull with its cream accent stripe contrasts clearly with the warm brown cedar cabin wall above it.",
          "The stainless steel posts, glass panels, and solid teak handrail differ in shade and finish from the planked terrace floor.",
          "Both the forward bow deck and the upper roof terrace are clearly visible in the opening three-quarter view.",
          "The cabin and its rear staircase sit toward the stern so that the rounded bow deck extends clear in front of the forward wall.",
          "The railing uprights sit flush on the roof terrace floor at their base without floating or sinking through.",
          "The opening view is an angled three-quarter perspective showing both the long port side and the bow end of the houseboat.",
          "In the opening view, all UI cards and button bars sit near the screen edges and do not cover the cabin or roof terrace.",
          "All on-screen labels, controls, and interaction hints are housed inside styled rounded pill and card containers."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/houseboat/primitive/index.html",
        "trajectory": "trajectories/houseboat-primitive.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A named houseboat group of real meshes sits in the scene and is large enough to see from the opening camera.\n",
          "OrbitControls is bound to the canvas, so dragging orbits the camera around the boat.\n",
          "The hull is 10 long and 4.6 wide, so the beam is broad rather than a slender hull.\n",
          "The hull body is a box, so the bottom is a flat plane across the full width.\n",
          "A separate terrace slab is placed on top of the cabin roof.\n",
          "The terrace edge is built from separate posts and two horizontal rails, not a solid wall.\n",
          "A flat bow-deck slab starts just ahead of the cabin's forward wall.\n",
          "The bow deck is about 3.1 by 3.6, smaller than the roof terrace at about 6.0 by 3.7.\n",
          "Four windows are spaced along the cabin side that faces the opening camera.\n",
          "The far cabin side has its own row of windows, hidden in the opening view and revealed by orbiting.\n",
          "The hull is timber brown and the cabin is cream, not grey industrial metal.\n",
          "The form is a low flat hull with a box cabin on top, and the bow is not a raised yacht prow.\n",
          "Hull, cabin, terrace, and railing are separate meshes, not one solid block.\n",
          "The cabin is narrower than the hull, leaving a deck strip along the side facing the camera.\n",
          "The cream cabin and pale railing stand out against the grey-blue sky and water.\n",
          "The key light is a warm golden sun, so the cabin walls pick up cream and gold rather than cold blue-grey.\n",
          "The uprights use a lit standard material under a directional sun, so one face is lighter and the opposite face is shaded.\n",
          "A dark strip sits under the roof overhang and a dark panel sits inside each window, darker than the cream wall.\n",
          "The glass is blue-tinted and much more reflective than the matte cream cabin wall.\n",
          "The timber-brown hull is a different colour from the cream cabin above it.\n",
          "The pale railing isn't a different shade from the teak terrace floor.\n",
          "The elevated three-quarter camera sees the bow deck in front of the cabin and the terrace on the roof.\n",
          "The cabin sits aft, with the open deck extending in front and no matching deck behind it.\n",
          "Each upright is placed so its base sits on the terrace floor.\n",
          "The opening camera sits off a corner, so one long side and the bow end are both in view.\n",
          "The label and hint sit in the corner and along the bottom, leaving the cabin and terrace clear.\n",
          "The title and the drag hint both sit in tinted, rounded panels.\n"
        ]
      },
      {
        "label": "Argon Assets",
        "type": "html",
        "file": "scenes/houseboat/argon-assets/index.html",
        "trajectory": "trajectories/houseboat-argon-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "The code constructs the houseboat synchronously from Three.js geometries and materials, adds lighting, and renders it in the animation loop.",
          "OrbitControls is attached to the renderer canvas and updated each frame, enabling click-and-drag camera rotation around the boat.",
          "The hull measures 4.4 units wide by 10.6 units long with a rectangular planform, giving it the proportions of a wide-beam barge.",
          "The hull is created by extruding a flat-bottomed side profile uniformly across its entire 4.4-unit width with no V-shaped or rounded keel.",
          "A roof slab and teak terrace deck sit at y = 3.06 to 3.15 directly on top of the cabin walls.",
          "The roof terrace perimeter uses `createRailingSegment`, which builds separate vertical posts, a wooden top handrail, and three horizontal stainless steel cables.",
          "The main deck planking extends forward from the cabin's front wall at x = 3.16 to the bow at x = 6.1, creating a flat bow deck.",
          "The bow deck ahead of the cabin is roughly 2.9m by 4.38m, which is less than half the footprint of the 6.56m by 3.64m roof terrace.",
          "Four framed glass windows are spaced along the port side of the cabin facing the initial camera position.",
          "The cabin wall construction loop creates the same four framed windows on both the port (z = 1.70) and starboard (z = -1.70) sides.",
          "The houseboat uses warm cedar siding, cream window trim, teak decking, and a terracotta hull stripe rather than industrial grey metal.",
          "The geometry combines a low flat-bottomed barge hull with a rectangular box cabin and flat roof terrace rather than a pointed yacht prow.",
          "The model is built from separate meshes for the hull, rub-rail, main deck, cabin walls, window frames, roof slab, railings, stairs, and pergola.",
          "The cabin walls are placed at z = ±1.70 inside the 4.38-unit-wide hull and main deck, leaving walkable side decks along both sides.",
          "The scene is illuminated by a hemisphere light, a directional sun light, an HDRI environment, and multiple point lights against the darker water and sky.",
          "Although the \"golden hour\" preset is selected, the scene's lighting is neutral and flat.",
          "The scene uses flat lighting and doesn't cast any shadows.",
          "Because there are no screenshots and bright point lights are placed inside the cabin and under the bow overhang, it cannot be verified from code alone that those areas appear darker than the sunlit wall.",
          "The windows use a transparent material, but they look as matte as the other elements in the scene and don't resemble real glass.",
          "The hull uses a dark green-charcoal material with a terracotta stripe, contrasting with the warm cedar siding and cream trim of the cabin above.",
          "The dark iron uprights, metallic cables, and dark timber handrail contrast in shade with the lighter teak terrace deck beneath them.",
          "The opening camera at (16.5, 8.2, 17.5) looks down from ahead of the bow and off the port side, making both the bow deck and roof terrace simultaneously visible.",
          "The cabin is positioned closer to the stern (leaving a ~2.0m stern deck) so a longer ~3.0m bow deck extends clear in front of it.",
          "The roof railing posts have their base at y = 3.17, matching the top surface of the roof teak deck at y = 3.175.",
          "Positioned at (16.5, 8.2, 17.5) looking at the origin, the opening camera views the houseboat at an oblique three-quarter angle showing both the port side and the bow end.",
          "The boathouse is visible even with the UI being displayed.",
          "All UI cards, navigation bars, hints, and hotspot labels are styled inside rounded or pill-shaped containers with translucent backgrounds and borders."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/houseboat/assets/index.html",
        "trajectory": "trajectories/houseboat-assets.json",
        "marks": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "index.html opens by double-click with no error in the console and draws the houseboat from the designer's package in one WebGL canvas: the plank hull, the cream cabin with its windows and door, the roof terrace with its railing, table and chairs, the bow deck, the jetty, the lake and the tree-lined shore. The .blend's meshes load from assets/TheWillow_houseboat_asset.glb through its data-only wrapper, and the scene is up 1.4 to 1.6 s after opening.",
          "A left drag (or one finger) orbits the camera round the boat with OrbitControls. There is no azimuth limit, so a drag can take the camera all the way round, and the tilt runs from 11 to 84 degrees off the vertical; the wheel or a pinch zooms from 9.5 to 48 m. In a check with real mouse events the right button left the camera's position and distance unchanged: it has no action and pan is off, so every drag turns the view instead of sliding the boat off screen. Swept over every place the camera can reach (1.2 million positions: 9.5 to 48 m away, the whole tilt range, all the way round), the lens never comes closer than 2.35 m to any surface and never goes under the ground or into the shore's trees and shrubs.",
          "The hull is 12.0 m long and 5.0 m wide, a beam of 0.42 of its length, and the deck on it is as wide as the hull. A slender boat of that length would be under a quarter as wide as it is long.",
          "The hull's underside is one flat face at y -0.40 m, 4.84 m wide across the 5.0 m beam (0.97 of it), with the sides rising from its edges to the top at 0.85 m. Nothing hangs below it: no keel, no V and no curve.",
          "The cabin walls rise to 3.11 m, the roof slab caps them up to 3.25 m and the terrace floor, a 5 cm plank surface, lies on the slab from 3.25 to 3.30 m. It covers the whole roof, 7.0 by 4.3 m over a 6.6 by 3.8 m cabin, and carries a table, two chairs, potted plants and a lantern.",
          "The terrace is fenced by separate uprights (5 cm thick, 1 m tall) and 15 separate horizontal bars: on each run a top rail and two intermediate rails at three heights, with open gaps between them. 27 uprights stand round the terrace: the model has 31 posts because the two runs that meet at each of the four corners each bring a post in exactly the same place, and the page draws that shared corner post once. No wall stands at the terrace edge, and the lake and the shore show through the railing.",
          "The cabin's forward wall stands at x 1.60 m. Ahead of it the deck, a flat 6 cm plank surface at 0.91 m, runs on to the bow at x 5.98 across its full 4.88 m width: a clear deck 4.4 by 4.9 m with a bench, a coil of rope, a lantern and two cleats.",
          "The bow deck, from the cabin's forward wall to the bow across the 4.88 m deck, covers 21.4 m²; the roof terrace floor, 7.01 by 4.26 m, covers 29.9 m². The bow deck is about 28 % smaller.",
          "The opening camera stands on the starboard side, and that side of the cabin has four glazed windows with frames and sills, spread along the wall from x -4.63 to 1.33 m, 1.6 to 1.7 m apart. All four are in the opening view.",
          "The port side, hidden in the opening view, has its own four windows along the same stretch of wall. The orbit has no azimuth limit, so dragging the camera round to the port side brings that wall and its four windows into view.",
          "The boat's surfaces are the design's timber and plaster textures. In the opening view the sunlit cabin wall is cream (average sRGB 179, 165, 137 between the windows), the hull is brown timber planks (68, 54, 48), the bow deck and terrace floor are red-brown planks (94, 71, 69 and 100, 79, 80), and the window frames, door and roof edge are dark wood. Grey metal shows only in the slim railing and small fittings; none of the boat's large surfaces is grey.",
          "The hull is low and flat, 1.25 m deep for 12 m long, and its top edge is level at 0.85 m from the stern to a square bow as wide as the boat: no raised or pointed prow. On it stands a box-shaped cabin with upright walls, 6.6 by 3.8 m and 2.2 m tall, with a flat roof terrace on top: a house on a barge.",
          "The houseboat is built from separate parts, each its own mesh with its own material and maps: the plank hull (hb_hull), the deck (hb_deck), the plastered cabin walls (hb_cabin), the dark wood roof slab and trim (hb_trim), the terrace floor (hb_deck) and the metal railing (hb_rail), plus window frames and panes, the door, furniture, plants and lanterns. On screen they read as hull, cabin box, roof terrace and railing.",
          "The cabin's starboard wall (the side the opening camera sees) stands at z 1.90 m and the deck runs on to z 2.44 m: a 0.54 m strip of deck along the whole cabin. Only wall trim reaches into it, the window sills by 12 cm at most, so at least 0.42 m stays clear from stern to bow, and the strip shows in the opening view between the cabin wall and the hull's edge.",
          "Nothing on the boat is lost in darkness. In the opening view (1920 × 1080) the sunlit cream wall averages sRGB 179, 165, 137 (luminance 166), brighter and warmer than what surrounds it: the lake beside the boat (95, 126, 148, luminance 121), the grass on the shore behind (120, 114, 81, luminance 113) and the hull below (68, 54, 48, luminance 56). The railing's pale silver uprights peak at luminance 165 to 198, against the blue-grey water seen through them (about 142) and the red-brown terrace floor (84).",
          "All the light is warm. The .blend's sun, colour 1.0, 0.86, 0.68 at strength 3.6, comes in low (16.6 degrees) from the stern and casts the shadows; the sky's own clipped sun is red; the cabin's 90 W light and the three 25 W lanterns are 1.0, 0.72, 0.40 to 0.45, and each lantern's light comes from the centre of its own glass, so the warm pool it throws on the deck, the terrace or the jetty is centred on the lantern. The sunlit cabin wall reads cream, 179, 165, 137 in the opening view, with no blue-grey cast.",
          "The uprights are round, polished metal tubes (metalness 1, roughness 0.22) lit by the low sun, so each one shows a bright side and a shaded side. In a close view of the terrace (camera at 3.5, 6.8, 5.2), the luminance across a front upright falls from 173 on its sunlit side to 69 on its shaded side, and across another from 222 to 112.",
          "The roof slab overhangs the walls by 0.20 to 0.25 m on every side and casts the sun's shadow under the eaves, and inside the cabin the walls let in only 8 % of the sky light. In the opening view the four starboard window openings average luminance 55 to 82, against 165 to 167 on the sunlit wall between them.",
          "The panes are a smooth, see-through glass with its own tint (roughness 0.02, 16 % opaque, its own tint map), so they mirror the sky and show the warm-lit room behind them; the wall around them is opaque, rough cream plaster. In the opening view the windows average luminance 55 to 82 in warm browns, against 165 to 167 on the wall.",
          "The hull is brown timber planks (hb_hull) and the cabin wall above it cream plaster (hb_cabin). In the opening view the hull side averages sRGB 68, 54, 48 (luminance 56) and the wall 179, 165, 137 (luminance 166), about three times as bright.",
          "The railing is silver metal (hb_rail) and the terrace floor red-brown planks (hb_deck). In the opening view the floor averages sRGB 100, 79, 80 (luminance 84), while the uprights peak at luminance 165 to 198.",
          "The opening camera (the designer's own: eye 15.5, 6.6, 14.0 looking at 0.2, 1.9, -0.3, 40 degree lens) stands above the terrace and off the bow, so it looks down onto the roof terrace and onto the bow deck in front of the cabin, and every corner of both falls inside the 16:9 picture. On narrower windows the camera backs off along the same line, and the whole boat stays in frame at all 12 window sizes measured.",
          "The cabin runs from x -5.00 to 1.60 m on a deck from -5.98 to 5.98 m: it is pushed 1.7 m towards the stern, with about 1 m of deck behind it and 4.4 m of clear bow deck ahead.",
          "All 31 posts of the model start on the terrace floor's top face at 3.30 m, within 2 mm, and every foot lies inside the floor's outline: none floats above the floor or sinks through it. Four of them are corner posts the model has twice in the same place; the page draws each of those once, so 27 uprights show.",
          "The opening camera looks at the boat from 43 degrees off its long axis, from the starboard and bow side, so the picture shows the starboard long side with its four windows together with the bow end and its deck, in three-quarter view rather than a flat side-on profile. On narrow windows it backs off along the same line, keeping that angle.",
          "The only panels are the title card in the top left corner and the how-to pill at the bottom centre, and the camera frames the boat between them. At 12 window sizes from 1920 × 1080 down to 360 × 740 (phone landscape included), in the light and the dark theme, neither panel overlaps the boat's on-screen box in any of the 24 cases, and the page never scrolls. The loading card fades out as soon as the scene is ready.",
          "All the text on screen sits in styled cards: the title card in the top left (\"The Willow\", \"Houseboat holiday let · sleeps 4\" and a short invitation to look around) and the \"Drag to look around · Scroll to zoom\" line (\"Pinch to zoom\" on touch screens) in a pill at the bottom. Each card has a tinted, translucent background with a blur behind it, a thin border, a soft shadow and rounded corners (14 px for the title, a full pill for the hint), and its colours follow the OS light or dark theme."
        ]
      }
    ]
  }
];
