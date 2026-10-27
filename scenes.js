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
        "file": "scenes/cheese-board/argon.html",
        "trajectory": "trajectories/cheese-board-argon-primitive.json",
        "marks": [
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
          true,
          false,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "The board, cheeses, nuts, grapes and knife all render on load against a dark table with no blank or error state.",
          "Dragging swings the camera to a lower, rotated angle showing the far side of the board.",
          "A flat oval slab in warm honey-brown wood, complete with grain and a hanging loop at the narrow end, carries every food item.",
          "Only three shapes are on offer: a round drum, a long log, and then two triangular wedges that read as the same form, one merely taller than the other.",
          "The upright cheese at the back right is a clean triangular wedge, thick at its base edge and tapering to a thin point.",
          "The squat round at the back left is the whitest object on the board, reading brighter than the creamier wedges beside it.",
          "The tall wedge's cut face carries thin dark scribbled veins wandering across it rather than one flat tone.",
          "A pale cylinder lies on its side at the left, running about twice as long as it is wide.",
          "Four brown nuts sit scattered around the board with clear board showing between them.",
          "A tight bunch of dark purple spheres with a curved stem stands at the centre back and reads immediately as grapes.",
          "Several loose pale fragments lie on the board apart from the four whole cheeses, near the crumbly wedge.",
          "The knife reads clearly as a bright steel blade joined to a warm brown wooden handle.",
          "A wooden slab loaded with cheeses, nuts, grapes and a knife: the subject is unmistakable at a glance.",
          "The nuts have dented, irregular outlines with a shallow seam rather than reading as plain balls.",
          "After rotating the camera the round shows a tall curved side wall under its flat top, clearly a drum and not a disc.",
          "Every cheese sits pale and bright against the mid-brown wood, each with its own contact shadow separating it from the surface.",
          "The round and the log both fall off from a lit top into a shaded flank, and the wedges show each face at a different brightness.",
          "The board is lit strongly from one side, the near half glowing warm while the far end drops away into shadow.",
          "A broad soft gloss sweeps across the wood beside the log, giving the slab the look of an oiled surface rather than a flat painted one.",
          "Each grape carries a small hard white spot of reflected light, while the loose pale fragments beside them stay completely matte.",
          "The blade reads as polished steel with a bright hot streak along it; the handle stays dull warm wood.",
          "The crumbly wedge's cut face is a dead-flat clean plane, and the fragments meant to be crumbs have blown up into flat plates nearly as big as the cheese itself, scattered through the board surface.",
          "Every cheese can be picked out at load; the crumbly wedge is crowded by the oversized fragments around it but is still not fully covered.",
          "All four cheeses rest flush on the wood, each with a shadow tucked in at its base, none hovering.",
          "The four cheeses stand clearly apart with wood visible between them; none is embedded in a neighbour.",
          "The title block, the side index and the bottom hint pill all sit clear of the slab, leaving the food fully readable at load."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/cheese-board/primitive/index.html",
        "notes": "# Redesign Primitive\n\n## Developer notes\n\nEverything is built from basic shapes. The olive wood, cheeses, walnuts and grapes get their look from noise patterns in the shader, with no image files. I put the board on a farmhouse table in a small room so the cheeses read at real size, with warm light coming from one side. When you click the knife, it lifts, saws a slice off the goat log and the slice tips over. It also does this by itself every few seconds.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 80.1% similarity (color=69.4%, chroma=99.9%, lighting=69.5%, texture=100.0%).\n\n## Turns (43)\n\n1. **agent** · 13/26 pass — The cheese wedge sides disappear when looked from certain angles, please fix that. This should be a fast focused fix, I expect your completion in no time.\n1. **agent** · 13/26 pass — Update index.html so the page chrome feels like a polished evening cheese board while leaving the Three.js scene, camera, lights, materials, scene graph, and knife lift timing untouched. Change the document title to The \n1. **agent** · 13/26 pass — Update the rendering setup in index.html so the scene uses a modern Three.js color and lighting pipeline. Keep the actual composition and interaction unchanged: do not alter the HUD, camera position, orbit behavior, ligh\n1. **agent** · 13/26 pass — I got this error pls fix: TypeError: Failed to resolve module specifier \"three\". Relative references must start with either \"/\", \"./\", or \"../\". Fix that module-loading failure first so the Three.js scene can start norma\n1. **agent** · 13/26 pass — Please make one focused correction to the sun placement in index.html. In the fixed-sun block, find the statement that copies the aim point (0, 0.7665, 0.05) into sun.position and then calls addScaledVector(sunDir, -4). \n1. **agent** · 13/26 pass — Please make a single focused pass in index.html to bring the olive board and its four cheeses down to realistic meter-scale dimensions. Leave the renderer pipeline, lighting, HUD, knife-lift timing, grapes, walnuts, and \n1. **agent** · 13/26 pass — Please make one focused pass in index.html to seat the food correctly on its parent board and reframe the camera for the new meter-scale scene. Leave the lights, HUD, board footprint and construction, cheese meshes, knif\n1. **agent** · 13/26 pass — Please clean up the scale of the cheese knife and place it naturally on the board. Leave the renderer, lighting, camera, HUD, board, cheeses, grapes, and walnuts alone. The existing 2.6-second lift motion can stay; it ju\n1. **agent** · 13/26 pass — Please replace the oversized walnuts with six realistically sized nuts resting on the board. Leave the renderer, lighting, camera, HUD, board, cheeses, knife, and grapes exactly as they are. Each walnut should have a rou\n1. **agent** · 13/26 pass — The previous grape change did not land, so please replace that old oversized prop now. Leave the renderer, lighting, camera, HUD, board, cheeses, knife, and walnuts alone. Remove the whole existing grape section, includi\n1. **agent** · 13/26 pass — Please turn the knife’s placeholder lift into a real goat-log cutting animation. Leave the renderer, lighting, camera, HUD layout, board, other cheeses, walnuts, grapes, and table unchanged. The two cuttable goat slices \n1. **agent** · 13/26 pass — Please give the scene a subtle cinematic finish without changing any of its objects, lighting, camera pose, HUD, or interactions. Add the standard Three.js post-processing imports for EffectComposer, RenderPass, BokehPas\n1. **agent** · 13/26 pass — Please tone down the film grain and give the table a simple room around it. Leave the camera, lighting, HUD, board, food, knife animation, table, and the rest of the post-processing look unchanged. The grain is currently\n1. **agent** · 13/26 pass — The giant round pedestal has come back, so please replace it with the painted trestle again. Keep the new floor, walls, baseboards, camera, lighting, HUD, board, food, knife animation, and post-processing exactly as they\n1. **agent** · 13/26 pass — Please add two simple painted dining chairs around the trestle table. Leave the room, table, camera, lighting, HUD, board, food, knife animation, and post-processing unchanged. Use one flat material colored 0x8f9796 with\n1. **agent** · 13/26 pass — Please add a painted hutch against the back wall. Leave the chairs, table, room, camera, lighting, HUD, board, food, knife animation, and post-processing alone. For now, build only the cabinet and open shelves—do not add\n1. **agent** · 13/26 pass — Please dress the table with a wine bottle, two brass goblets, and a folded napkin. Leave the hutch, chairs, room, table, board, food, knife animation, camera, lighting, HUD, and post-processing alone. Skip the candlestic\n1. **agent** · 13/26 pass — Please add a small wooden candlestick with a living flame at world position (0.46, 0.7665, -0.2). Leave the other table props, hutch, chairs, room, board, food, knife animation, and post-processing unchanged. Use warm wo\n1. **agent** · 13/26 pass — Please add a small live-edge walnut bowl at world position (-0.44, 0.7665, 0.12). Leave the candlestick, bottle, goblets, napkin, hutch, chairs, room, cheese board, knife animation, and post-processing unchanged. Use war\n1. **agent** · 13/26 pass — Please fix the walnut bowl’s material setup and add a carved plate with three pears. Leave the candlestick, bottle, goblets, napkin, hutch, chairs, room, cheese board, knife animation, and post-processing unchanged. The \n1. **agent** · 13/26 pass — Please add a few crumbs around the hard cheese and subtle contact shadows beneath the loose walnuts and pears. Leave the plate, bowl, candlestick, cheeses, grapes, knife animation, room, and post-processing unchanged. Sc\n1. **agent** · 13/26 pass — Please soften the exposed rind edges on the cheeses and make the small crumbs a little less angular. Leave all placements, contact shadows, table props, room, knife animation, and post-processing unchanged. Raise the che\n1. **agent** · 13/26 pass — The last pass added flat rind strips instead of soft rolled edges. Please replace only those flat edge strips with rounded torus lips, leaving the existing top bands, crumbs, contact shadows, table props, room, knife ani\n1. **agent** · 13/26 pass — Please clean up the final image so the scene has the same neutral, natural color treatment throughout. Right now the edges have a noticeable magenta and cyan double outline, especially around the furniture and tabletop, \n1. **agent** · 13/26 pass — Please dress the empty blue hutch so it matches the background of the finished scene. Leave the hutch itself and everything on the table alone for this turn. Place three pale tan plates upright across the lower open shel\n1. **agent** · 13/26 pass — Please move the wine bottle behind and to the left of the small bowl so the bowl is clearly visible in front of it. Keep the bottle at x = -0.36 and table height, and move it back to z = -0.22. The board and the rest of \n1. **human** · 13/26 pass — Refined the interface so the cheese board presentation reads more clearly at a glance. The branding, cheese legend, knife instruction, and orbit hint were redrawn and simplified so the controls better communicate what th\n1. **agent** · 13/26 pass — Only update the jug glaze decoration in this pass. Leave the jug body, dome, spout, handle, placement, rotation, and the rest of the scene unchanged. Replace the existing jug glaze, accent, and leaf materials with a sing\n1. **agent** · 13/26 pass — The pitcher is not even visible now please investigate and fix\n1. **human** · 13/26 pass — Reworked the jug construction into a consistent local coordinate space while preserving its overall form and decorative glaze material. The body, dome, spout, and handle are now built and transformed together, which keep\n1. **agent** · 18/26 pass — For this pass, only rebuild the scene’s material system. Leave all geometry, cheese sector construction, jug orientation, knife animation, lighting, camera behavior, and post-processing unchanged. Create one shared proce\n1. **agent** · 21/26 pass — The evening borad title in the modal is repeated pls fix that on mobile make the click the knife toast be centered on mobile make the top modal be less tll by like 30% you may need to adjust inner margins and whatnot als\n1. **human** · 21/26 pass — Consolidated the scene around a shared procedural material system so surfaces no longer rely on isolated material recipes. The new setup gives each material type its own color range, roughness, surface variation, reflect\n1. **agent** · 21/26 pass — In our index file, do one big rewrite pass aimed at refactrotingas much of the script as possible, while the evening board scene keeps the same look, feel, and behaviour. Same cheeses, board, bottle label, napkin, pear p\n1. **agent** · 25/26 pass — In our index file, do one rewrite pass on the shared surface and shading stack. Make the code read as freshly written: new names, clearer structure, different line breaks, helpers split or joined however you like. Keep t\n1. **human** · 26/26 pass — Fixed the shared paint shader so the painted table and hutch can compile correctly. A shader variable that conflicted with a reserved GLSL term was renamed consistently everywhere it was used.\n1. **agent** · 26/26 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, a visible cheese board scene renders, please write a test that validates this correct behaviour. -Curre\n1. **agent** · 26/26 pass — Sorry i interrupted you, finish completing the objectives of the previous prompt\n1. **agent** · 26/26 pass — The rim of the pear plate does not match the circumference of the plate itself, please fix that. (the rim is an oval while the plate is round)\n1. **agent** · 26/26 pass — the grapes are colliding with the round cheese please move it so it is n ot colliding with the grapes there is a weirs z index fight in the front edge of the board please fix that as well\n1. **agent** · 26/26 pass — The blade of the knif is not touching the handle please make sur eit touches so it looks like one pices rathern a floating blade above the handle also when it cuts the cheese on the animation, the cut is just slightly of\n1. **human** · 26/26 pass — Refined several small presentation details so the interface and scene read more cleanly. The orbit hint was simplified to a lightweight stroke-only icon, while the key light shadow settings were retuned to reduce distrac\n1. **agent** · 26/26 pass — Extend the side wall and floor towards the black void by 1 meter (this should be quick an easy, in and out edit) I am not talking about the wall that the self is leaned against to, I am talking about the wall on its side",
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
        "file": "scenes/cheese-board/argon.html",
        "trajectory": "trajectories/cheese-board-argon-assets.json",
        "marks": [
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
          true,
          false,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "The board, cheeses, nuts, grapes and knife all render on load against a dark table with no blank or error state.",
          "Dragging swings the camera to a lower, rotated angle showing the far side of the board.",
          "A flat oval slab in warm honey-brown wood, complete with grain and a hanging loop at the narrow end, carries every food item.",
          "Only three shapes are on offer: a round drum, a long log, and then two triangular wedges that read as the same form, one merely taller than the other.",
          "The upright cheese at the back right is a clean triangular wedge, thick at its base edge and tapering to a thin point.",
          "The squat round at the back left is the whitest object on the board, reading brighter than the creamier wedges beside it.",
          "The tall wedge's cut face carries thin dark scribbled veins wandering across it rather than one flat tone.",
          "A pale cylinder lies on its side at the left, running about twice as long as it is wide.",
          "Four brown nuts sit scattered around the board with clear board showing between them.",
          "A tight bunch of dark purple spheres with a curved stem stands at the centre back and reads immediately as grapes.",
          "Several loose pale fragments lie on the board apart from the four whole cheeses, near the crumbly wedge.",
          "The knife reads clearly as a bright steel blade joined to a warm brown wooden handle.",
          "A wooden slab loaded with cheeses, nuts, grapes and a knife: the subject is unmistakable at a glance.",
          "The nuts have dented, irregular outlines with a shallow seam rather than reading as plain balls.",
          "After rotating the camera the round shows a tall curved side wall under its flat top, clearly a drum and not a disc.",
          "Every cheese sits pale and bright against the mid-brown wood, each with its own contact shadow separating it from the surface.",
          "The round and the log both fall off from a lit top into a shaded flank, and the wedges show each face at a different brightness.",
          "The board is lit strongly from one side, the near half glowing warm while the far end drops away into shadow.",
          "A broad soft gloss sweeps across the wood beside the log, giving the slab the look of an oiled surface rather than a flat painted one.",
          "Each grape carries a small hard white spot of reflected light, while the loose pale fragments beside them stay completely matte.",
          "The blade reads as polished steel with a bright hot streak along it; the handle stays dull warm wood.",
          "The crumbly wedge's cut face is a dead-flat clean plane, and the fragments meant to be crumbs have blown up into flat plates nearly as big as the cheese itself, scattered through the board surface.",
          "Every cheese can be picked out at load; the crumbly wedge is crowded by the oversized fragments around it but is still not fully covered.",
          "All four cheeses rest flush on the wood, each with a shadow tucked in at its base, none hovering.",
          "The four cheeses stand clearly apart with wood visible between them; none is embedded in a neighbour.",
          "The title block, the side index and the bottom hint pill all sit clear of the slab, leaving the food fully readable at load."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/cheese-board/assets/index.html",
        "notes": "# Redesign Assets\n\n## Developer notes\n\nSame camera, same layout and same colors as the primitive, just with real models and textures. The wedge, goat log and grapes are Meshy models. The brie, blue cheese and walnuts were sculpted in Blender. The furniture and table props come from Poly Haven.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (12)\n\n1. **agent** · 26/26 pass — ok i want you to remove all the primitve shapes in the index.html and repalce them with the glb asssets adn the hdri to make the 3D scene better relasitce look and the resule mut look exacly like the evening_board_assets\n1. **agent** · 26/26 pass — ok now i want you to move the light sources downadn to left littile bit to get little longer shadows. ok don't use any palyright or other thing and make sure this update finishes withn 2 min\n1. **agent** · 26/26 pass — ok i want you to analy the glb for the anaimation of the knife curring the chease so that when i click on the butoon on the UI or touch the kinfe on the table it will lift up and go to the cyildrical chease then cutt it \n1. **agent** · 26/26 pass — ok i want you to analy the win bottole b/c the white leble stikers is flickering when the camer mooves so fix this issue.\n1. **agent** · 26/26 pass — ok now i want you to update the camera movement to be limited when the camera reach to solde object jave bounder for all objects byt let the camer get closee but not pass thing it for both rotationa and draging of the ca\n1. **agent** · 26/26 pass — ok now i want you to base64 encode bot the assets that are used in the indexhtml and put it in js file with same name like this evening_board_asset.glb.js and put the string in global variable and load it in the html fil\n1. **agent** · 26/26 pass — i want you to write test for the following rubsirce make sure the test checks what the rubrices is about 1. A visible cheese board scene renders 2. Dragging the pointer across the canvas changes the viewing angle of the \n1. **agent** · 26/26 pass — i want you to write test for the following rubsirce make sure the test checks what the rubrices is about 11. Loose rind pieces are present as separate objects from the four whole cheeses 12. A knife is present whose blad\n1. **agent** · 26/26 pass — ok i want you to fix this problem on index.js that is used disallowed CND so premove it use other netive tool that does not need importing this is the message What to fix: External CDNs / URLs Rule: Only Three.js, font, \n1. **agent** · 26/26 pass — So i got the following updates so fix it. by ding this 1. fix the fist issue by update the UI elemt to look exaly like it is on the refance image. 2. you can fix the secode rotation proble by limit the camer moveet from \n1. **agent** · 26/26 pass — ok fix the folloing thing Cups: Add the reflections and mirroring shown in the design reference when the knife passes in front of them. Knife: Fix the delayed/unresponsive interaction. The cutting action should start rig\n1. **agent** · 26/26 pass — ok i want you to run npm test to see if all test pass if not update them to pass",
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
        "file": "scenes/biplane-crop-duster/argon.html",
        "trajectory": "trajectories/biplane-crop-duster-argon-primitive.json",
        "marks": [
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
          false,
          false,
          true,
          false,
          false,
          true,
          false,
          true,
          false
        ],
        "comments": [
          "The yellow AG-1 biplane crop duster with spray booms and landing gear displays fully as visible geometry against the green striped field and sky.",
          "Repositioning the free camera around the biplane shows it from different angles: low side-front view, mid-level rotation, and elevated high-angle side profile.",
          "The top wing sits clearly further forward than the bottom one, giving the cellule a proper staggered look rather than two wings stacked in line.",
          "Thin dark bracing lines are strung across the gap between the wing struts on the near side, reading as rigging rather than bare posts.",
          "A small non-retracting wheel hangs under the tail, with only the two main wheels forward, so the stance reads as a classic taildragger.",
          "The main wheels are chunky and wide, closer to farm-strip balloon tyres than the thin discs of a light plane.",
          "A long pipe hangs on short drop links below the bottom wing, well clear of the fuselage and the top wing, exactly where a duster boom belongs.",
          "The airframe is bright yellow and carries grey-brown flecking and scuffing over the paint, though the marks are fine enough to read as grain more than chips.",
          "No oil staining shows on the fuselage sides behind the engine; the flanks read as clean yellow paint, so the grubby working-aircraft look is missing.",
          "Nothing comes out of the boom; the readouts show the system on standby with zero flow, so the scene never shows the crop duster actually dusting.",
          "Throughout the run the nozzles stay folded back under the boom with their caps shut and no mist at any tip.",
          "After the camera swings round, the area under the boom is still empty; there is no trail to follow because spraying never begins.",
          "A clearly labelled spray system switch sits in the panel along the bottom of the screen, with a status readout beside it.",
          "The aeroplane is flying above the crop rows with a big gap under every wheel, so nothing is in contact with the field.",
          "The nose points away from the viewer in the loading view and the propeller is too small there to show either a turning blade or a blurred disc.",
          "The nose is a clear barrel-shaped cowl with a dark ring at the front, standing out from the thin flat wing panels behind it.",
          "Since no staining is visible on the fuselage, there is no darker, greasier finish to contrast with the yellow paint.",
          "The wheels hang in the air well clear of the field, so no contact patch or squashed bulge can form under them.",
          "The bracing between the wing struts runs as crossing diagonals rather than a single upright line, giving the bay the expected X.",
          "The shadow lies far away across the crop rows, detached from the aircraft, so it never meets the wheels at all.",
          "The spray pipe stretches almost tip to tip beneath the bottom wing with nozzles all along it, not a short stub near the middle.",
          "The paint wear is spread evenly over the whole airframe as fine speckle; nothing gathers on the cowling or the wing leading edges the way real chipping does."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/biplane-crop-duster/primitive/index.html",
        "notes": "# Redesign Primitive\n\n## Developer notes\n\nWe kept the AI scene's layout and fixed what failed: the plane now sits on the grass strip with flattened tyres and a real shadow, the spray is running from the first frame, and the nozzle flaps swing open when it starts. The prop spins inside a blur disc with a yellow tip ring so the engine reads as running. Paint wear, chips, oil streaks and the ground are all procedural noise in the shaders, no image textures. If you add nozzles, keep an eye on the particle count, and keep the camera clamp so nobody orbits under the field.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 65.0% similarity (color=50.9%, chroma=87.2%, lighting=51.4%, texture=100.0%).\n\n## Turns (43)\n\n1. **agent** · 14/22 pass — Change the title of our html app to AG-1 Bluejacket Crop Duster\n1. **agent** · 14/22 pass — Please update only the ground field texture colors and the crop rows in index. Leave the plane, sky, fog, camera, aircraft, spray, and HUD alone. For the field texture, keep its current construction the same. It should s\n1. **agent** · 14/22 pass — The ground colors and crop row spacing are already correct. Only fix the direction of the crop rows. Keep the existing crop color, the 40 rows on each side, the first offset of 7.56, the 0.76 spacing, and the row height \n1. **agent** · 14/22 pass — Good, now only add a dirt clear lane through the middle of the ground. Leave the field texture, crop rows, sky, fog, aircraft, spray, and HUD unchanged. Place the lane directly on top of the existing ground. Make it 400 \n1. **agent** · 14/22 pass — Only adjust the page background, scene background, and fog color. Leave the ground planes, dirt lane, crop rows, aircraft, spray, and HUD unchanged. Change the page background to #c9d8e4. Use the matching 0xc9d8e4 color \n1. **agent** · 14/22 pass — Rebuild the ground as one large procedural surface and add a surrounding ring of distant hills. Leave the aircraft, spray, lights, camera, HUD, page background, scene background, and fog unchanged. Remove the current fie\n1. **human** · 14/22 pass — I removed the field colors and vertex-color bake, replacing them with procedural ground shading in the material. This moves the ground appearance into the shader, where the noise, field layout, crop spacing, wet areas, o\n1. **agent** · 14/22 pass — Adjust the scene lighting, atmosphere, and main aircraft paint in one focused pass. Leave the ground, hills, camera, spray, HUD, and the duller companion aircraft material unchanged. Keep the renderer using sRGB output, \n1. **agent** · 14/22 pass — Update the interface, camera controls, and spray system together in one pass. Leave the sky, bloom, and the main aircraft rebuild alone for now. Give the interface a light paper instrument look instead of the current dar\n1. **agent** · 14/22 pass — Add a lightweight post-processing finish to the scene without changing the existing geometry, camera behavior, lighting setup, or interface. Load the Three.js post-processing pieces needed for an effect composer, render \n1. **agent** · 14/22 pass — Refine the finishing effect, metal colors, leading edge wear, and landing gear attachment without changing the rest of the scene. Update the finishing shader so the chromatic separation comes from the distance to the cen\n1. **agent** · 14/22 pass — Refine the finishing effect, add a small ground equipment area near the aircraft, and make the wet ground respond smoothly to the spray state. Leave the rest of the scene unchanged. Rebuild the finishing shader as one co\n1. **agent** · 14/22 pass — Refine the aircraft proportions and finishing effect while leaving the rest of the scene unchanged. Keep the finishing shader as one continuous fragment string. Center the effect around the middle of the screen, use the \n1. **agent** · 14/22 pass — Refine the finishing effect and rebuild the sky so the scene gets its atmosphere from a real sky dome instead of the current flat background and extra fill lights. Leave the aircraft, ground, spray, camera controls, HUD,\n1. **agent** · 14/22 pass — Tighten the finishing effect and sky rendering without changing anything else in the scene. Keep the finishing shader as one continuous single line string. Center it around the middle of the screen, use the squared radia\n1. **agent** · 16/22 pass — Add procedural crop rows and grass tufts around the field while keeping the existing ground, aircraft, apron props, sky, lighting, spray, camera, and interface unchanged. Use a seeded random stream starting at 77 so the \n1. **agent** · 16/22 pass — Replace the current box shaped wings with proper airfoil shaped wings while keeping the rest of the aircraft and scene unchanged. Build each wing from a Clark Y style cross section instead of a rectangular box. Use a cho\n1. **agent** · 16/22 pass — Add a little more visible cloud variation to the existing sky while keeping its current colors, sun glow, and noise based cloud structure intact. Leave the rest of the scene unchanged. Give the sky a cloud strength value\n1. **agent** · 16/22 pass — Add subtle wear directly into the aircraft paint and replace the current belly piece with a smoother shaped underside. Leave the rest of the aircraft and scene unchanged. Apply a shared wear treatment to both blue aircra\n1. **agent** · 16/22 pass — Add visible 3D spray fans to all 26 nozzles while keeping the wings, finishing effect, belly shape, paint wear, vegetation, and the rest of the scene unchanged. Load the geometry merging utility from the same Three.js r1\n1. **agent** · 16/22 pass — I get this: Uncaught TypeError: cone.applyQuaternion is not a function at index.html:880:14 at index.html:1163:3 Please fix that and at the end of the prompt job please run the necessary checks to avoid not catching this\n1. **agent** · 16/22 pass — DO THIS ONLY PLEASE: this pass is only the finish post on finishShader: one fragment string with chroma d*r2*0.010, vignette r2*1.6, grain fract(uTime)*97.0 inside dot(vUv*uRes + …). Do not touch wings, spray fans, belly\n1. **agent** · 18/22 pass — Only update the main fuselage shape and add the new cowl and hopper in this pass. Leave the finishing effect, wings, spray fans, belly, wear, vegetation, and the rest of the scene unchanged. Replace the current cylindric\n1. **agent** · 18/22 pass — In index.html, drop the extra nose cowling cylinder and cowlNose sphere so only the lathe cowl reads at the engine; keep the intake torus if it is still there. Do not touch finish, wings, fans, wear, or veg. Confirm the \n1. **human** · 18/22 pass — Refined the responsive UI so the branding, camera controls, spray panel, and readouts stay usable on smaller screens without covering the 3D scene. The mobile layout was tightened and simplified rather than creating a se\n1. **agent** · 18/22 pass — Replace the entire overlay interface so it uses a clean paper-style control system while leaving the 3D scene and spray behavior otherwise unchanged. Use a warm paper palette with paper at #f3eee3, secondary paper at #eb\n1. **agent** · 18/22 pass — Fix the overly white airframe lighting, make the propeller motion deterministic, smooth out the spray system timing, add more detail to the apron props, and introduce separate exhaust smoke. Leave the existing wings, fin\n1. **agent** · 18/22 pass — Fix the black-looking shaded parts of the aircraft and metal surfaces by improving the scene fill lighting and making the environment map actually affect the materials. Leave the rest of the scene behavior unchanged. Add\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, a visible running biplane crop duster renders, please write a test that validates this correct behaviou\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, spray booms run beneath the lower wing and are physically slung under it rather than mounted on the fus\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, the airframe is painted blue with visible chipped patches showing a different colour or bare material u\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, the free camera can be repositioned to view the biplane from another angle, please write a test that va\n1. **human** · 22/22 pass — Added stronger camera boundaries by keeping the camera and orbit target above the ground and building collision bounds from the aircraft meshes. This prevents free orbiting from passing underneath the field or through so\n1. **agent** · 22/22 pass — Did a bunch of changes, probaly brok a lot of tests, do this: run suite ONCE check all the error logs and make a list of them iterate over each error and adress it so it passes with the new state of the index file withot\n1. **human** · 22/22 pass — Modernized the scene’s rendering foundation by moving from the older Three.js setup to the newer module-based version and rebuilding the renderer, controls, post-processing, and supporting utilities around it. This provi\n1. **agent** · 22/22 pass — In index.html, make only one change to the propeller animation and leave everything else untouched. Keep the solid propeller spinning at vibT times -24, keep the three translucent ghost blades at their existing opacities\n1. **agent** · 22/22 pass — I made a bunch of changes probably broke a bunch of tests, please fix them so they pass, keep it simple, keep it fast.\n1. **agent** · 22/22 pass — The app is too slow, optimize it for speed without sacrificing any of the look (hard constraint)\n1. **agent** · 22/22 pass — Bring the fog back to how it was, should be an easy and FAST change\n1. **agent** · 22/22 pass — Last changes, you should not be able to go all the way out of bounds by panning. Please, do not entirely remove the pan feature; just limit the range and be sure it's not clipping anything. The rear wheel's middle part i\n1. **agent** · 22/22 pass — Nice, modify the pan by drag bound limits to so you cannot pan to drag past the end of the crops area. The crops area might be bigger than the actual area of the planted crops, I am refering to the area that has crops pl\n1. **agent** · 22/22 pass — This should be fast For some reason i am still able to pan to drag past the crops, I should not be able by any means to be able to pan to drag past the last row of crops on any side exit\n1. **agent** · 22/22 pass — Make three fixes in index.html: thin the fog so the scene stops looking smoky when zoomed out, close the sunlit gap between the apron props and their shadows, and stop the camera from passing through the biplane and the ",
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
        "file": "scenes/biplane-crop-duster/argon.html",
        "trajectory": "trajectories/biplane-crop-duster-argon-assets.json",
        "marks": [
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
          false,
          false,
          true,
          false,
          false,
          true,
          false,
          true,
          false
        ],
        "comments": [
          "The yellow AG-1 biplane crop duster with spray booms and landing gear displays fully as visible geometry against the green striped field and sky.",
          "Repositioning the free camera around the biplane shows it from different angles: low side-front view, mid-level rotation, and elevated high-angle side profile.",
          "The top wing sits clearly further forward than the bottom one, giving the cellule a proper staggered look rather than two wings stacked in line.",
          "Thin dark bracing lines are strung across the gap between the wing struts on the near side, reading as rigging rather than bare posts.",
          "A small non-retracting wheel hangs under the tail, with only the two main wheels forward, so the stance reads as a classic taildragger.",
          "The main wheels are chunky and wide, closer to farm-strip balloon tyres than the thin discs of a light plane.",
          "A long pipe hangs on short drop links below the bottom wing, well clear of the fuselage and the top wing, exactly where a duster boom belongs.",
          "The airframe is bright yellow and carries grey-brown flecking and scuffing over the paint, though the marks are fine enough to read as grain more than chips.",
          "No oil staining shows on the fuselage sides behind the engine; the flanks read as clean yellow paint, so the grubby working-aircraft look is missing.",
          "Nothing comes out of the boom; the readouts show the system on standby with zero flow, so the scene never shows the crop duster actually dusting.",
          "Throughout the run the nozzles stay folded back under the boom with their caps shut and no mist at any tip.",
          "After the camera swings round, the area under the boom is still empty; there is no trail to follow because spraying never begins.",
          "A clearly labelled spray system switch sits in the panel along the bottom of the screen, with a status readout beside it.",
          "The aeroplane is flying above the crop rows with a big gap under every wheel, so nothing is in contact with the field.",
          "The nose points away from the viewer in the loading view and the propeller is too small there to show either a turning blade or a blurred disc.",
          "The nose is a clear barrel-shaped cowl with a dark ring at the front, standing out from the thin flat wing panels behind it.",
          "Since no staining is visible on the fuselage, there is no darker, greasier finish to contrast with the yellow paint.",
          "The wheels hang in the air well clear of the field, so no contact patch or squashed bulge can form under them.",
          "The bracing between the wing struts runs as crossing diagonals rather than a single upright line, giving the bay the expected X.",
          "The shadow lies far away across the crop rows, detached from the aircraft, so it never meets the wheels at all.",
          "The spray pipe stretches almost tip to tip beneath the bottom wing with nozzles all along it, not a short stub near the middle.",
          "The paint wear is spread evenly over the whole airframe as fine speckle; nothing gathers on the cowling or the wing leading edges the way real chipping does."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/biplane-crop-duster/assets/index.html",
        "notes": "# Redesign Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive; the airframe becomes a Meshy asset and the strip, props, trees and sky come from Poly Haven, all CC0. The spray is volumetric in Cycles with droplet particles, while booms, nozzles, wires and prop stay procedural so they can animate. The nozzle empties drive the spray, so if you swap the aircraft keep the BIPLANE pivot and the NOZ_xx empties where they are.\n\n## Review — minor_edits\n\n> Great job, looking good!\n\n## Turns (39)\n\n1. **agent** · 17/22 pass — I have assets under assets/ folder that 'll break due to CORS if I drag the index.html file to browser (that's the requirement). Your job is to convert those models to base64, instead of using export use window function.\n1. **agent** · 15/22 pass — Edit only index.html. Keep the existing window.resolveAsset function and the three.js r128 CDN tags. 1. Add script tags for assets/meshy/meshy_Meshy_AI_Blue_Biplane_1001000228_texture.glb.js and assets/hdri/hdri_farm_fie\n1. **agent** · 15/22 pass — Edit only index.html. 1. Add script tags for assets/models/polyhaven/Barrel_01/models_polyhaven_Barrel_01_Barrel_01_2k.gltf.js and the leafy_grass diff_2k and nor_gl_2k jpg.js files (assets/textures/polyhaven/leafy_grass\n1. **agent** · 15/22 pass — Edit only index.html. The Barrel_01 glb is already loaded (buildWorld takes GROUND and HILLS out of it). Now use the rest of it. 1. After GROUND and HILLS are removed, add everything left in gltf.scene to the scene insid\n1. **agent** · 15/22 pass — Edit only index.html (three.js r128). The ground has to follow the Blender material GROUND_STRIP_FIELD. Do not paint the ground with one texture. Textures (assets/textures/polyhaven/<folder>/..._2k.jpg.js, add script tag\n1. **agent** · 15/22 pass — 1. I've got wrong color of the grass it seems The grass diffuse texture is made with diffTex.clone(). A cloned texture is never uploaded to the GPU until you set needsUpdate = true on it, so it samples black. Set needsUp\n1. **agent** · 16/22 pass — Edit only index.html. The grass GLB (assets/models/polyhaven/grass_medium_01/..._grass_medium_01_2k.gltf.js, asset name models_polyhaven_grass_medium_01_grass_medium_01_2k) is loaded. Do NOT pick crop positions with Math\n1. **agent** · 16/22 pass — Edit only index.html. The grass GLB is loaded and Crop_Placeholder is already used for crops. Now do the weeds. Do NOT choose positions from a hand written rectangle. 1. Find the mesh named exactly Grass_Placeholder. Rea\n1. **agent** · 16/22 pass — Edit only index.html. 1. State object: spray = { on: true, amount: 0, fans: [], flaps: [], noz: [], fanMat: null }. After assets load, for i in 0..25 with a 2 digit id: push nodes['SPRAY_FAN_'+id] to fans, nodes['NOZ_'+i\n1. **agent** · 19/22 pass — NOZ_#_Flap animation should be to the other direction (the rotation should be 118 at x axis) Edit only index.html. Remove all the spray_fan_# mesh. The water is a particle simulation. Keep: the S key, the panel switch (s\n1. **agent** · 19/22 pass — Edit only index.html. Spray state already exists as spray = { on, amount, ... } and setSpray(on). CSS tokens: card #f0eadf, border #d9d1c1, ink #1d2833, label #837f75, blue #2b5db2, orange #e9631b, off grey #9a968c. Font\n1. **agent** · 22/22 pass — Edit only index.html. The water spray we already apply looks like fireworks:Real spray seen from this distance is a soft translucent veil that widens below each nozzle. Change ONLY these values in the spray code and keep\n1. **agent** · 22/22 pass — Edit only index.html. The plane paint material is the one on the mesh nodes.AVIAO_MESHY (Material_0). Add dark oil streaks that start at the base of the engine cowling and run aft along both sides of the fuselage. Do not\n1. **agent** · 22/22 pass — Edit only index.html. Spray currently applied is one soft veil. The target is one distinct white cone under each nozzle: narrow at the nozzle, wide where it reaches the ground. Change ONLY these values in the droplet cod\n1. **agent** · 22/22 pass — Edit only index.html. Replace the droplet particle spray with one soft cone per nozzle, drawn by a shader. The target look: a smooth, translucent white cone with a fine grainy surface, narrow at the nozzle and wide at th\n1. **agent** · 22/22 pass — the crop material uv map seems not applied correctly by the designer. Change the diffuse / base color to the same green as the texture instead. also apply alpha cut off for all object with grass_medium_01_alpha_2k materi\n1. **agent** · 22/22 pass — Two small deletions. Do not add anything. 1. Crops. Find the lines that build plantMat from cropMesh.material.clone(). Keep plantMat.side = THREE.DoubleSide. DELETE the line plantMat.map = null; and DELETE the line plant\n1. **agent** · 22/22 pass — Change this and nothing else's: 1. camera.position.set(9.1, 2.8, -9.5) (was 8.4, 2.8, -9.8) 2. controls.target.set(-0.19, 1.1, -0.19) (was 0, 1.3, 0.4) 3. In the HERO button handler use the same two values: tweenCamera([\n1. **agent** · 22/22 pass — Add automated Playwright tests for index.html without changing any visual behavior. Do not edit anything else in index.html except adding a window.__dbg hook, set once at the end of the main script, exposing { scene, cam\n1. **agent** · 22/22 pass — Fix only tests/02_camera_repositions.test.js and tests/15_propeller_spins.test.js. Do not change index.html or any other file. Do not measure time in either test. Keep the rubric comment on the first line of each file an\n1. **agent** · 22/22 pass — At Grass_Placeholder reduce it's size to 90% also populate the grass so the field looks much fuller (est 70% of area covered). please follow the grass distribution ratio as following (name strictly follows, just check th\n1. **agent** · 22/22 pass — The crop material uv map seems not applied correctly by the designer. Remove the available texture and then set the diffuse / base color of crop mesh to #466101 instead. Then, apply alpha cut off for all object with gras\n1. **agent** · 22/22 pass — Crops must stand in the brown furrow soil, not on the green stripes. In the crop placement loop, change var az = 7.56 + 0.76 * stripeK; to var az = 7.18 + 0.76 * stripeK;. The ground shader paints green stripes centred a\n1. **agent** · 22/22 pass — I'm trying to slim down the project by compressing some assets, please regenerate all the new assets to base64 .js like previous turn. Please preserve the name and imports. - assets/meshy/Meshy_AI_Blue_Biplane_1001000228\n1. **agent** · 22/22 pass — We have to do it again because SOMEHOW it is NOT updated. I'm trying to slim down the project by compressing some assets, please regenerate all the new assets to base64 .js like previous turn. Please preserve the name an\n1. **agent** · 22/22 pass — PUMP_FAN Should have same rotation animation as Prop_Spin Somewhat we also need it run on mobile. Fix the mobile UI, avoid overlapping between element. Do whatever you like without blocking 50% of the screen including us\n1. **agent** · 22/22 pass — Modify the existing spread of the mist, make it lower, and then increase the particle size to keep it lighter but thicken the mist. Also make PUMP_FAN animation 70% slower. Since we are modifying UI, please makes fix > 1\n1. **agent** · 22/22 pass — - Set sun.shadow.bias = 0; - Add ambience occlusion shadow for the crops so it can have fake shadow but keep it lightweight. - And make the shadow appear more realistic and soft but keep it lightweight.\n1. **agent** · 22/22 pass — Make the sky, mountains and horizon look realistic. Use the snippets below as they are, then tune only the numbers named in \"If it looks wrong\". - The Barrel_01 gltf is one scene holding HILLS, GROUND and all props. Remo\n1. **agent** · 22/22 pass — Remove macroField completely. Instead, smoothly blend the distant area into the existing main crop/green farmland color using distance-based smoothstep. Keep the procedural texture, and multiply with the crop texture the\n1. **agent** · 22/22 pass — We are about to remove every visible foliage boundary when the camera is zoomed out, keep it lightweight, and make the lane weeds denser. Do all of it in one pass. 1. FAR CROPS (continue the field past the placeholder po\n1. **human** · 22/22 pass — Key areas exceeded the limit, which was expected, so I’ll implement the remaining changes myself. The remaining work is mainly adding water droplets, repositioning the mist, and fixing the missing shadows from the crops.\n1. **human** · 22/22 pass — I think the spray is too narrow instead of widening on the bottom and I afraid it will trigger another redo again, so I had to fix it. I basically just adjust the scale to cone.scale.set(0.65, 1, 1.15); and position to c\n1. **agent** · 22/22 pass — Let's do some fixes 1. SPRAY (white dots must go; spray should read as one soft plume) Keep the droplet simulation (it spawns ground mist) but stop drawing it: dropPoints.visible = false; streaks.visible = false; Cone fr\n1. **agent** · 22/22 pass — in the mist code. The mist must come from a tiny emitter point on the ground under each nozzle and spread into a wedge (a cone seen from the side): backward, widening and rising a little with distance. also Mist puffs ap\n1. **human** · 22/22 pass — - Adding a line to remove shadow from blur effect so there's no weird shadow from the plane: biplaneGltf.scene.traverse(function (o) { if (o.name) nodes[o.name] = o; if (o.isMesh) { o.castShadow = true; o.receiveShadow =\n1. **agent** · 22/22 pass — ok i want you to make the following updates. make sure to not take more than 5 min 1. For all 26 nozzles, hide the original primitive flap discs, increase the hinge rotation factor in updateSpray from 1.18 to 1.32, retar\n1. **agent** · 22/22 pass — ok i want you repostion the sune to (10,-18,5) to get better and more realstice showing and then make sure the bush on the run way have nore tahn 20000 bush.\n1. **agent** · 22/22 pass — ok i want you to run the test npm test to see if all test pass if not update the faling test.",
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
        "file": "scenes/houseboat/argon.html",
        "trajectory": "trajectories/houseboat-argon-primitive.json",
        "marks": [
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
          false,
          true
        ],
        "comments": [
          "The houseboat sits centred on the water, fully built, with hull, cabin, roof terrace and furniture all drawn.",
          "After dragging, the camera swings round to a lower, more head-on view of the boat, so the angle clearly responds to input.",
          "The hull is a broad, blunt barge with room for two sun loungers side by side on the roof, not a slim yacht shape.",
          "The hull disappears into the water at the waterline, so the underside is never shown and the flatness of the bottom cannot be judged.",
          "A planked terrace deck covers the whole cabin roof, furnished with loungers, a sofa, tables and a parasol.",
          "The terrace is enclosed by an open railing with a top rail, a lower rail and regular vertical posts, not a solid wall.",
          "A planked open deck sits in front of the cabin at the bow, carrying two chairs, a small table and a coiled rope.",
          "The bow deck is a short area at the front, clearly a fraction of the full-length terrace running over the cabin roof.",
          "Five evenly spaced windows run along the cabin side facing the viewer.",
          "After rotating the camera the same long side is still the one facing the viewer, only flatter on; no previously hidden side of the cabin comes into view.",
          "Cream cabin walls, timber decks and trim, and a deep green hull give a warm, homely palette with no grey metal anywhere.",
          "A long low hull carries a house-shaped box with windows and a roof deck, reading unmistakably as a floating home rather than a yacht.",
          "Hull, cream cabin box, timber terrace slab and railings all read as separate elements with their own colours and edges.",
          "The side railing stands clear of the cabin wall with deck showing between them, forming a narrow walkway that widens onto the bow deck.",
          "The cream walls stand out brightly against the water and the dark railings read clearly against the pale sky.",
          "A golden late-day light washes the boat, with cream and amber tones on the walls and warm reflections on the water.",
          "The terrace railing posts are so thin they read as flat dark hairlines with no lit side at all, so the railing looks drawn rather than modelled.",
          "The window openings read as deep brown recesses well darker than the bright cream wall around them, and the roof edge casts a shadow line onto the wall top.",
          "The glazed openings are a dark warm brown with a glossier inner panel, plainly a different material from the matte cream wall.",
          "The deep green hull with its cream boot stripe contrasts strongly with the pale cabin above, so the two never read as one surface.",
          "Dark green railings and posts sit clearly against the light honey-toned planking of the terrace floor.",
          "The opening view shows the furnished roof terrace and the bow deck with its chairs and table at the same time.",
          "The cabin is pushed back so a generous open deck runs ahead of it, while only a short stern platform remains behind.",
          "Every terrace post lands cleanly on the planked floor, with no gap underneath and none sunk through the deck.",
          "The boat is seen three-quarter on, showing the windowed flank together with the bow end, so the form reads in depth.",
          "The \"Sunny windows\" marker and its label sit right on the cabin, hiding a piece of the upper wall and roof edge, and the \"Bow deck\" label lands on the boat too.",
          "Every piece of text sits in a deliberate container: rounded cream pills for the brand and markers, a dark pill for the tour badge, and a soft card for the listing."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/houseboat/primitive/index.html",
        "notes": "# Redesign Primitive\n\n## Developer notes\n\nA wide, flat-bottomed houseboat made only from basic shapes, with a roof terrace, a small bow deck and four windows on each side. Every surface gets a procedural noise texture and the sky is a gradient with soft clouds, so it doesn't feel flat. It slowly spins on its own, and the buttons jump to the terrace, the bow and the windows.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 85.0% similarity (color=79.1%, chroma=91.0%, lighting=84.7%, texture=99.6%).\n\n## Turns (10)\n\n1. **agent** · 24/27 pass — Leave the houseboat itself alone for now and just fix the world around it: swap the flat peach sky and close fog for a big sky dome with a pale grey-blue horizon, softer blue overhead, a low warm sun and a few thin cloud\n1. **agent** · 27/27 pass — Rebuild the houseboat and the pier that leads to it, and leave the lake, sky, and shore as they are. Make the hull a low flat-bottomed barge in dark brown planks, a bit narrower at the bottom, with a dark rub rail and a \n1. **agent** · 27/27 pass — The two ropes between the hull and the pier are hanging in open air. Tie each one from the cleat on the boat to the nearest vertical wooden pile, so it actually meets the post. The posts and beams along the side of the p\n1. **agent** · 27/27 pass — eplace the dark booking card with a light cream panel in the top left: a small boat mark beside the title \"The Willow\", the line \"Houseboat · sleeps 4\" under it, and the sentence \"Take a look around before you book. Spin\n1. **agent** · 27/27 pass — Add five Jest tests, one per file, for the next five checks. Leave tests/visible-houseboat.test.js as it is, and do not change the scene, the menus, or the lighting. tests/drag-view.test.js: dragging on the canvas change\n1. **agent** · 27/27 pass — Add six Jest tests, one per file, for the next six checks. Leave the existing tests as they are, and do not edit index.html. tests/bow-deck.test.js: a flat deck area sits ahead of the cabin's forward wall at the bow. tes\n1. **agent** · 27/27 pass — Add six Jest tests, one per file, for the next six checks. Leave the existing tests as they are, and do not edit index.html. tests/separate-parts.test.js: the houseboat is assembled from distinguishable parts such as a h\n1. **agent** · 27/27 pass — Add nine Jest tests, one per file, for the checks that still have no test. Leave the existing tests as they are, and do not edit index.html. tests/window-glass.test.js: the window glass differs from the cabin wall in ref\n1. **agent** · 27/27 pass — The edge where the lake meets the beach is flickering. The sand, the grass, and the water are sitting on top of each other there. Make that bank one continuous surface, sand along the water and grass starting where the s\n1. **agent** · 27/27 pass — Fix only these three things in index.html. Leave the shore strips, water discard, boat, doors, rails, trees, shadows, and window.__WILLOW__ as they are. Do not edit tests. 1. Pier tip. The walkway ends at wl_walkEnd = 31",
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
        "file": "scenes/houseboat/argon.html",
        "trajectory": "trajectories/houseboat-argon-assets.json",
        "marks": [
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
          false,
          true
        ],
        "comments": [
          "The houseboat sits centred on the water, fully built, with hull, cabin, roof terrace and furniture all drawn.",
          "After dragging, the camera swings round to a lower, more head-on view of the boat, so the angle clearly responds to input.",
          "The hull is a broad, blunt barge with room for two sun loungers side by side on the roof, not a slim yacht shape.",
          "The hull disappears into the water at the waterline, so the underside is never shown and the flatness of the bottom cannot be judged.",
          "A planked terrace deck covers the whole cabin roof, furnished with loungers, a sofa, tables and a parasol.",
          "The terrace is enclosed by an open railing with a top rail, a lower rail and regular vertical posts, not a solid wall.",
          "A planked open deck sits in front of the cabin at the bow, carrying two chairs, a small table and a coiled rope.",
          "The bow deck is a short area at the front, clearly a fraction of the full-length terrace running over the cabin roof.",
          "Five evenly spaced windows run along the cabin side facing the viewer.",
          "After rotating the camera the same long side is still the one facing the viewer, only flatter on; no previously hidden side of the cabin comes into view.",
          "Cream cabin walls, timber decks and trim, and a deep green hull give a warm, homely palette with no grey metal anywhere.",
          "A long low hull carries a house-shaped box with windows and a roof deck, reading unmistakably as a floating home rather than a yacht.",
          "Hull, cream cabin box, timber terrace slab and railings all read as separate elements with their own colours and edges.",
          "The side railing stands clear of the cabin wall with deck showing between them, forming a narrow walkway that widens onto the bow deck.",
          "The cream walls stand out brightly against the water and the dark railings read clearly against the pale sky.",
          "A golden late-day light washes the boat, with cream and amber tones on the walls and warm reflections on the water.",
          "The terrace railing posts are so thin they read as flat dark hairlines with no lit side at all, so the railing looks drawn rather than modelled.",
          "The window openings read as deep brown recesses well darker than the bright cream wall around them, and the roof edge casts a shadow line onto the wall top.",
          "The glazed openings are a dark warm brown with a glossier inner panel, plainly a different material from the matte cream wall.",
          "The deep green hull with its cream boot stripe contrasts strongly with the pale cabin above, so the two never read as one surface.",
          "Dark green railings and posts sit clearly against the light honey-toned planking of the terrace floor.",
          "The opening view shows the furnished roof terrace and the bow deck with its chairs and table at the same time.",
          "The cabin is pushed back so a generous open deck runs ahead of it, while only a short stern platform remains behind.",
          "Every terrace post lands cleanly on the planked floor, with no gap underneath and none sunk through the deck.",
          "The boat is seen three-quarter on, showing the windowed flank together with the bow end, so the form reads in depth.",
          "The \"Sunny windows\" marker and its label sit right on the cabin, hiding a piece of the upper wall and roof edge, and the \"Bow deck\" label lands on the boat too.",
          "Every piece of text sits in a deliberate container: rounded cream pills for the brand and markers, a dark pill for the tour badge, and a soft card for the listing."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/houseboat/assets/index.html",
        "notes": "# Redesign Assets\n\n## Developer notes\n\nSame boat, same camera and same layout as the primitive, now with real Poly Haven textures, furniture, lanterns, plants and trees. Materials only use Image Texture, Normal Map and Principled BSDF, and everything is packed in the .blend. The trees are thinned to keep the file light.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (10)\n\n1. **agent** · 0/27 pass — The Willow, turn 1: switch off camera panning in index.html. Two new lines, nothing else changes. Right now OrbitControls keeps its default mouse map, so a right-button drag slides the camera and its pivot sideways inste\n1. **agent** · 0/27 pass — The Willow, turn 2: take the sun symbol out of the title in index.html. One small edit, nothing else changes. The title card opens with a ☀ in front of \"The Willow\". .rl-gym/AGENTS.md says \"No emojis as icons\", and that \n1. **agent** · 0/27 pass — The Willow, turn 3: keep the camera above the water in index.html. One line changes, nothing else. controls.maxPolarAngle is Math.PI * 0.52, a little past level, so the camera is allowed to drop below the height of its p\n1. **human** · 0/27 pass — After turns 1 to 3 the model's page handled better (no pan, no emoji in the title, the camera kept above the water), but it still used none of the designer's package: the houseboat was built from plain coloured boxes and\n1. **agent** · 27/27 pass — The Willow, turn 5 (the last one): one comment in index.html, then run the test suite. No code changes. The scene, assets/, package.json, the Dockerfile and the 21 tests are in place from turn 4. This turn writes down th\n1. **human** · 27/27 pass — The review asked for three things: reflections that make physical sense, lantern light that comes from the lanterns themselves, and a pass over the whole scene for smaller technical flaws. This turn changes index.html on\n1. **human** · 27/27 pass — The review asked for three small fixes: a slight flicker on the horizon when the camera moves, and a small notch where the ladder meets the railing and where the railing's rails meet. This turn changes index.html only; a\n1. **human** · 27/27 pass — The review pointed out that the cabin's two doors, the bow door on the forward wall and the stern door on the aft wall, had nothing to open them by, and asked for a subtle doorknob or a pull on both. This turn changes in\n1. **human** · 27/27 pass — The review raised two things. The reflections in the water and the shrubs on the far shore flickered while the camera moved, and from inside the cabin neither door could be seen: the room showed plain plaster where each \n1. **human** · 27/27 pass — The review raised two things: the reflections of the trees in the water still flickered while the camera moved, and a bright light lay in the middle of the lake with nothing in the scene above it to explain it. This turn",
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
  },
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
        "file": "scenes/camper-van/argon.html",
        "trajectory": "trajectories/camper-van-argon-primitive.json",
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
          false,
          false,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A two-tone camper van sits centre frame on the beach, fully drawn and lit, with awning, table and chair beside it.",
          "After dragging, the view swings around to the far end of the van and the whole composition is seen from a new angle.",
          "The door leaf stands swung out beside the doorway, clearly angled off the body line rather than lying flat against the panels, with the lit interior showing through the opening.",
          "The leaf is joined at one upright edge near the cab and its free edge stands well clear of the opening, leaving an obvious gap you can see the cabin through.",
          "The folding table stands on the sand under the awning, outside the van body, next to the camp chair and rug.",
          "The lit lantern rests on the tabletop, its glow spilling down onto the table and the sand below rather than sitting at ground level.",
          "A continuous sandy beach surface runs around the van and off toward the shoreline, warm tan where the light reaches it.",
          "Tufts of dune grass rise in several separate patches, on the dune at the left, across the foreground and along the right of the beach.",
          "A low sun sits just over the water with an orange-to-violet sky, long raking shadows and lit lanterns, unmistakably dusk rather than midday.",
          "The table reads clearly as a small folding camp table, its top no broader than the van's door opening and dwarfed by the vehicle beside it.",
          "A tall boxy living body sits raised on dark wheels at front and rear, with a cab and windscreen at one end, reading immediately as a camper.",
          "Body, roof cap, cream upper band, window openings, bumpers and wheels all read as separate parts, plus an awning and string lights.",
          "The lantern stands as an upright lit body raised above a small foot on the table, not a flat block.",
          "A warm pool of light surrounds the lantern and washes the table and the sand beneath it, while the ground further out falls into deep shadow.",
          "The green and cream body separates cleanly from both the orange sky and the dark sand, with lit windows reinforcing its silhouette.",
          "The side panel facing the camp light is noticeably lighter than the front end turned away from it, giving the box real form.",
          "A long shadow runs from the van across the sand toward the lower left, anchoring it to the ground.",
          "The body panels look as chalky and flat as the sand around them, with no glint or sheen anywhere on the paint, so the van reads as unpainted matte rather than a lacquered vehicle.",
          "The windows glow warm yellow and read brighter than the cream and green panels around them, rather than as dark glass or as reflective surfaces.",
          "The blades are olive-green with paler tips, clearly separate in hue from the warm brown sand they stand in.",
          "The table's thin legs run down to the sand inside the lit pool, none of them floating.",
          "The opening view looks straight at the open door side, so the table, lantern and chair are all in clear view in front of the van.",
          "After rotating the camera the rear end with its tail lights comes into view, a side the opening view never showed.",
          "Title, weather card, button bar and hint all sit clear at the edges, leaving the van and camp unobstructed in the middle of the frame."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/camper-van/primitive/index.html",
        "notes": "# Redesign Primitive\n\n## Developer notes\n\nThe AI scene had the camp right, but the paint looked chalky and the windows glowed brighter than the panels. I rebuilt it from primitives with clear coat on the two tone paint so it catches the sunset and the lantern, and put dark tinted glass in recessed rubber frames. Sand, sea, sky and grass are procedural noise shaders with ripples, a wet band, foam, tyre tracks and footprints, lit by a low sun behind the bay. Keep the HDR clamp before the bloom pass, because it stops clear coat highlights from blowing out.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 91.0% similarity (color=86.3%, chroma=99.6%, lighting=86.7%, texture=99.9%).\n\n## Turns (12)\n\n1. **agent** · 22/24 pass — Move index.html onto ES modules with Three.js 0.170.0 and set up a Jest test project around it, leaving the scene itself as it is. index.html is 431 lines: work by targeted edits and do not rewrite or reproduce the file,\n1. **agent** · 22/24 pass — Rebuild the camera, the sky, the lighting and the post-processing in index.html for a low evening sun over the bay. Leave the van, sand, sea, table, lamp and grass as they are for now: only the parts named here change. i\n1. **agent** · 22/24 pass — Replace the flat sand, the dune humps, the sea plane, the glint and the foam strip in index.html with a shaped beach that runs down into a bay: a terrain height function, a sand surface shaded per pixel, a sea whose colo\n1. **agent** · 22/24 pass — Replace the old boxy van body in index.html with a rounded bus body: - a shell shrink-wrapped onto a rounded shape with a bowed nose - the side windows, split windscreen and wheel arches cut into it - recessed glazing in\n1. **agent** · 24/24 pass — Cut the side door into the van body, hang a real door leaf on a hinge at its rear edge, fit out the cabin behind it, and give the van its nose fittings, bumpers and pop-top roof, then remove the old door, doorway box and\n1. **agent** · 24/24 pass — Replace the old table and lamp with a furnished camp beside the open door: a striped rug, a slatted folding table with crossed legs seated on the sand, an iron storm lantern with a glowing globe and its own light, a ther\n1. **agent** · 24/24 pass — Replace the old grass tufts with instanced dune grass clumps, paint tyre tracks, footprints and soft contact shade onto the sand, and scatter three piles of lumpy stones round the camp. index.html is 1,784 lines: work by\n1. **agent** · 24/24 pass — Hang a festoon of warm bulbs from the van's gutter out to a driftwood pole, add the doorway, cabin and festoon lights, make the lantern flicker, and replace the old heading box and hint line with the finished page chrome\n1. **agent** · 24/24 pass — Keep the camera out of the sand and out of every solid object, gliding round them rather than stopping, and fit the opening view so the van and camp stay clear of the page panels at any window size. That fitted view is a\n1. **agent** · 24/24 pass — Fix six things on the van and the camera: dusty tyres, a hole in the van's sun shadow, wheels with nothing holding them to the body, a door step and rear bumper that hang in the air, and panning that can wander off forev\n1. **agent** · 24/24 pass — Fix five things: the table's foot rails hang in the air, the driftwood has two sharp spikes sticking out of it, the rear bumper and the other rounded parts come out larger than their sizes say, the sand pattern runs in l\n1. **agent** · 24/24 pass — Close the side windows completely. Right now each pane of glass is smaller than its opening, so there is a gap all the way round between the glass and the rubber reveal. The lit cabin shows through it as thin bright seam",
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
        "file": "scenes/camper-van/argon.html",
        "trajectory": "trajectories/camper-van-argon-assets.json",
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
          false,
          false,
          true,
          true,
          true,
          true,
          true
        ],
        "comments": [
          "A two-tone camper van sits centre frame on the beach, fully drawn and lit, with awning, table and chair beside it.",
          "After dragging, the view swings around to the far end of the van and the whole composition is seen from a new angle.",
          "The door leaf stands swung out beside the doorway, clearly angled off the body line rather than lying flat against the panels, with the lit interior showing through the opening.",
          "The leaf is joined at one upright edge near the cab and its free edge stands well clear of the opening, leaving an obvious gap you can see the cabin through.",
          "The folding table stands on the sand under the awning, outside the van body, next to the camp chair and rug.",
          "The lit lantern rests on the tabletop, its glow spilling down onto the table and the sand below rather than sitting at ground level.",
          "A continuous sandy beach surface runs around the van and off toward the shoreline, warm tan where the light reaches it.",
          "Tufts of dune grass rise in several separate patches, on the dune at the left, across the foreground and along the right of the beach.",
          "A low sun sits just over the water with an orange-to-violet sky, long raking shadows and lit lanterns, unmistakably dusk rather than midday.",
          "The table reads clearly as a small folding camp table, its top no broader than the van's door opening and dwarfed by the vehicle beside it.",
          "A tall boxy living body sits raised on dark wheels at front and rear, with a cab and windscreen at one end, reading immediately as a camper.",
          "Body, roof cap, cream upper band, window openings, bumpers and wheels all read as separate parts, plus an awning and string lights.",
          "The lantern stands as an upright lit body raised above a small foot on the table, not a flat block.",
          "A warm pool of light surrounds the lantern and washes the table and the sand beneath it, while the ground further out falls into deep shadow.",
          "The green and cream body separates cleanly from both the orange sky and the dark sand, with lit windows reinforcing its silhouette.",
          "The side panel facing the camp light is noticeably lighter than the front end turned away from it, giving the box real form.",
          "A long shadow runs from the van across the sand toward the lower left, anchoring it to the ground.",
          "The body panels look as chalky and flat as the sand around them, with no glint or sheen anywhere on the paint, so the van reads as unpainted matte rather than a lacquered vehicle.",
          "The windows glow warm yellow and read brighter than the cream and green panels around them, rather than as dark glass or as reflective surfaces.",
          "The blades are olive-green with paler tips, clearly separate in hue from the warm brown sand they stand in.",
          "The table's thin legs run down to the sand inside the lit pool, none of them floating.",
          "The opening view looks straight at the open door side, so the table, lantern and chair are all in clear view in front of the van.",
          "After rotating the camera the rear end with its tail lights comes into view, a side the opening view never showed.",
          "Title, weather card, button bar and hint all sit clear at the edges, leaving the van and camp unobstructed in the middle of the frame."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/camper-van/assets/index.html",
        "notes": "# Redesign Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive. What goes up is the van (Meshy mesh, not decimated, with the door leaf rebuilt at the same 100 degree swing), real rippled sand with a wet edge, an HDRI sky with real clouds, a sea with two animated normal layers and shore foam, and Poly Haven props for the lantern, table, thermos, driftwood, bucket, shell, rocks and grass. The van is about 2M triangles and its far side has a texture artifact, so keep viewport samples low and the camera on the door side. All assets are CC0 (Poly Haven, ambientCG).\n\n## Review — minor_edits\n\n> Very good task! Congrats\n\n## Turns (15)\n\n1. **agent** · 21/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Set up the project and replace the beach page's primitive scene with the two prepared models: the camper van and the camp scene \n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach scene its real sky and evening lighting: an HDRI sky dome, an image-based lighting environment built from the sam\n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach scene its colour pipeline and its painted surfaces: the frame is rendered in linear light, glows round its bright\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach its sand: a material for the dunes and the beach that blends dry rippled sand into damp sand towards the sea, lay\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the scene its sea, give the page a height lookup for the sand, and start the test suite with a support module and the two d\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the page its interface: a title panel, a hint, a dock of three buttons, a conditions panel and a loading screen, in warm da\n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Wire up the camera and the dock: fit the lens to the window, frame the van so no panel covers it, keep the eye above the dunes, \n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Fix two bugs in the van framing, then extend the test support module and add four tests. index.html is 1,312 lines and tests/sup\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Add the last two helpers to the test support module and the last four tests. tests/support/scene.js is 383 lines; work by target\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Mirror the headland in the sea so the mountain and the water join naturally: at the moment the headland stops at the waterline i\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Paint both van doors the body's green, open the far door as well as the near one, and make both leaves fill the doorway. index.h\n1. **agent** · 24/24 pass — Make the change as one small file edit. The sea's reflection of the headland is drawn into reflTarget, a WebGLRenderTarget created in the headland reflection section with the option samples set to 4, a multisampled targe\n1. **agent** · 24/24 pass — Make the change as a few small file edits inside the sea shader's seaSurface() in SEA_FRAG_HEAD, and nothing else. The water's reflections slide sideways as one sheet, and far out the surface shows large two-tone patches\n1. **agent** · 24/24 pass — Make the changes as a set of small file edits in index.html: two lines in the sea shader, a contact-shadow term for the sand, and a fold-away conditions panel for narrow screens. index.html is 1,427 lines; work by target\n1. **agent** · 24/24 pass — Make the change as three small edits in index.html: a block inside the campReady callback, one added replace in gradeVan's fragment hook, and a shadow-only plate after the lantern light. The front bumper hangs in the air",
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
        "file": "scenes/treehouse/argon.html",
        "trajectory": "trajectories/treehouse-argon-primitive.json",
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
          false,
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
          true
        ],
        "comments": [
          "A treehouse with three stacked wooden decks stands around a prominent dark central trunk extending through all levels.",
          "Successive frames show the treehouse viewed from different angles, confirming that dragging the canvas rotates the view of the structure.",
          "One thick tapering trunk rises through the whole scene as the only support; nothing else of similar girth stands anywhere in the shot.",
          "Three round decks wrap the trunk, no more and no fewer, each clearly fixed to it.",
          "The decks sit at low, middle and high stations with generous gaps, none level with another.",
          "A planked, rope-sided bridge runs between the lower and middle decks and is easy to pick out at load.",
          "A ladder climbs from the middle deck to the top deck on the left of the trunk.",
          "The ladder is built from two long side rails with a series of separate rungs between them, not a flat ramp.",
          "Each pale plank deck stops against the dark bark with a clean join line, and angled braces are visible underneath.",
          "The edge and hand ropes bow visibly downward between their anchors instead of running as taut straight lines.",
          "The bridge runs as a steep gangway down from the middle deck to the lower one, so its middle stays well above the deck it lands on instead of dipping below both ends.",
          "The bridge floor is a run of many short separate boards, each catching light slightly differently.",
          "A full green canopy crowns the trunk, and a side branch carries a hanging swing.",
          "The warm timber of all three decks separates cleanly from the dark bark and the green field behind.",
          "The trunk is clearly lit from one side, with the opposite edge and the root flare dropping into shadow.",
          "Deck and ladder shadows fall across the grass beside the trunk, including a striped ladder shadow.",
          "The bark is dark, ridged and matte while the decks are lighter, smoother sawn timber.",
          "The ropes and hand lines are a pale sandy tone that stays readable against the redder brown boards.",
          "Each deck is laid out as boards radiating from the trunk, with the seams visible across the surface.",
          "All three decks are full rings centred on the trunk, so they stack as one concentric column with nothing leaning to one side or another.",
          "The trunk flares into roots that plant firmly on the grassy ground plane.",
          "The header panel shows a \"drag to orbit\" hint alongside the other control chips.",
          "Both panels hug the left and right edges, leaving the whole tree and all three decks unobstructed.",
          "After rotating the camera the tree turns to show the swing and the far edge of the bridge that the opening view hides."
        ]
      },
      {
        "label": "Redesign Primitive",
        "type": "html",
        "file": "scenes/treehouse/primitive/index.html",
        "notes": "# Redesign Primitive\n\n## Developer notes\n\nI kept the idea of the AI scene but rebuilt it so it works like a real treehouse: one oak trunk, three decks at different heights on different sides, a sagging slat bridge with landings, and ladders that rest on the deck edges. Everything is primitives with procedural noise, voronoi and wave shaders, no image files at all. In the HTML each deck drags up or down and the bridge and ladders rebuild live, with limits so nothing collides. If you change deck heights, keep the drag limits and the bridge rebuild in sync.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • env_probe — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 92.9% similarity (color=87.3%, chroma=100.0%, lighting=95.1%, texture=99.9%).\n\n## Turns (7)\n\n1. **agent** · 18/24 pass — Get rid of the need for any build step, extra files or internet connection for the index.html to function. Update Three.js to r159, apply the same lighting to the objects, add some thickness to the ground, and remove the\n1. **agent** · 19/24 pass — Reduce the middle deck to just above the low deck and adjust the drag limits and rebuild of bridge to reflect this. Display the bridge clearly between the decks without touching the trunk; the handrails are made of thick\n1. **agent** · 20/24 pass — Let's light the trunk up right. Right now, it's flat and brown, and reads like cardboard tube. In the first view, the sunlight should shine onto the trunk with a distinct bright side and a shaded side, and the platforms \n1. **agent** · 21/24 pass — Restyle the top left panel as a warm cream card with the icon of a green leaf, \"Single trunk treehouse\" text label, large serif text \"The Old Oak\" title, short drag instructions and drag live heights with coloured dots f\n1. **human** · 24/24 pass — Re-made index.html in my own code with the concept's treehouse: the oak, three decks on different sides, the slatted bridge between two lower decks, the ladders and the cabin and meadow. Renamed the bridge to a new locat\n1. **agent** · 24/24 pass — The overall style should remain the same, here's what you need to do: add “full” camera exploration (drag/pan in all directions, with the tree as pivot, no clipping through objects or ground, sensible camera bounds, and \n1. **human** · 24/24 pass — The two swing rope loops were smaller than the branch and were vertical on a sloping branch, part of each loop and the ends of the rope were inside the bark. Each loop square to the branch and slightly wider so that it r",
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
        "file": "scenes/treehouse/argon.html",
        "trajectory": "trajectories/treehouse-argon-assets.json",
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
          false,
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
          true
        ],
        "comments": [
          "A treehouse with three stacked wooden decks stands around a prominent dark central trunk extending through all levels.",
          "Successive frames show the treehouse viewed from different angles, confirming that dragging the canvas rotates the view of the structure.",
          "One thick tapering trunk rises through the whole scene as the only support; nothing else of similar girth stands anywhere in the shot.",
          "Three round decks wrap the trunk, no more and no fewer, each clearly fixed to it.",
          "The decks sit at low, middle and high stations with generous gaps, none level with another.",
          "A planked, rope-sided bridge runs between the lower and middle decks and is easy to pick out at load.",
          "A ladder climbs from the middle deck to the top deck on the left of the trunk.",
          "The ladder is built from two long side rails with a series of separate rungs between them, not a flat ramp.",
          "Each pale plank deck stops against the dark bark with a clean join line, and angled braces are visible underneath.",
          "The edge and hand ropes bow visibly downward between their anchors instead of running as taut straight lines.",
          "The bridge runs as a steep gangway down from the middle deck to the lower one, so its middle stays well above the deck it lands on instead of dipping below both ends.",
          "The bridge floor is a run of many short separate boards, each catching light slightly differently.",
          "A full green canopy crowns the trunk, and a side branch carries a hanging swing.",
          "The warm timber of all three decks separates cleanly from the dark bark and the green field behind.",
          "The trunk is clearly lit from one side, with the opposite edge and the root flare dropping into shadow.",
          "Deck and ladder shadows fall across the grass beside the trunk, including a striped ladder shadow.",
          "The bark is dark, ridged and matte while the decks are lighter, smoother sawn timber.",
          "The ropes and hand lines are a pale sandy tone that stays readable against the redder brown boards.",
          "Each deck is laid out as boards radiating from the trunk, with the seams visible across the surface.",
          "All three decks are full rings centred on the trunk, so they stack as one concentric column with nothing leaning to one side or another.",
          "The trunk flares into roots that plant firmly on the grassy ground plane.",
          "The header panel shows a \"drag to orbit\" hint alongside the other control chips.",
          "Both panels hug the left and right edges, leaving the whole tree and all three decks unobstructed.",
          "After rotating the camera the tree turns to show the swing and the far edge of the bridge that the opening view hides."
        ]
      },
      {
        "label": "Redesign Assets",
        "type": "html",
        "file": "scenes/treehouse/assets/index.html",
        "notes": "# Redesign Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive, nothing added or removed. What went up: Meshy trunk and cabin, Poly Haven wood, bark, rope, linen, grass, flowers, rocks, stump, log, bucket and crate, plus a partly cloudy HDRI sky. Deck boards, ledgers and braces are cut to the real bark shape and the lashings sit on the bark, so nothing sinks into the trunk. Keep the grass alpha maps linked and the HDRI sun extraction off, or the grass turns into dark cards and the canopy gets a second shadow. All assets are CC0 (Poly Haven, ambientCG).\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (5)\n\n1. **agent** · 0/24 pass — The Old Oak, turn 1: switch off camera panning in index.html, and start the test suite: package.json, a Dockerfile and the first five tests. Right now OrbitControls keeps its default mouse map, so a right-button drag sli\n1. **agent** · 0/24 pass — The Old Oak, turn 2: take the tree emoji out of the title in index.html, and add the five tests about the platforms. The title card opens with a tree emoji in front of \"The Old Oak\". .rl-gym/AGENTS.md says \"No emojis as \n1. **agent** · 0/24 pass — The Old Oak, turn 3: keep the camera above the ground in index.html, and add the six tests about the rope bridge and the ladders. controls.maxPolarAngle is Math.PI * 0.55, past level, so the camera may drop below the hei\n1. **agent** · 24/24 pass — The Old Oak, turn 4: the last five tests of the suite. Only new files; index.html doesn't change. The suite from turns 1 to 3 covers the scene, the camera, the trunk, the platforms, the bridge and the ladders. These five\n1. **human** · 24/24 pass — After turns 1 to 4 the model's page handled better (no pan, no emoji in the title, the camera kept above the ground) and the test suite was in place, but the page still used none of the designer's package: the tree was a",
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
  }
];
