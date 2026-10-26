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
        "label": "Argon 3D Primitive",
        "type": "html",
        "file": "scenes/cheese-board/argon.html",
        "notes": "# Argon 3D Primitive\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/26)\n\n- **Four separate cheese pieces are present, each with a different overall shape from the other three** — Only three shapes are on offer: a round drum, a long log, and then two triangular wedges that read as the same form, one merely taller than the other.\n- **The crumbly wedge's broken or cut face shows irregular relief or loose crumb pieces rather than a perfectly smooth flat plane** — The crumbly wedge's cut face is a dead-flat clean plane, and the fragments meant to be crumbs have blown up into flat plates nearly as big as the cheese itself, scattered through the board surface.",
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
        ]
      },
      {
        "label": "Redesign 3D Primitive",
        "type": "html",
        "file": "scenes/cheese-board/primitive/index.html",
        "notes": "# Redesign 3D Primitive\n\n## Developer notes\n\nEverything is built from basic shapes. The olive wood, cheeses, walnuts and grapes get their look from noise patterns in the shader, with no image files. I put the board on a farmhouse table in a small room so the cheeses read at real size, with warm light coming from one side. When you click the knife, it lifts, saws a slice off the goat log and the slice tips over. It also does this by itself every few seconds.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 80.1% similarity (color=69.4%, chroma=99.9%, lighting=69.5%, texture=100.0%).\n\n## Turns (43)\n\n1. **agent** · 13/26 pass — The cheese wedge sides disappear when looked from certain angles, please fix that. This should be a fast focused fix, I expect your completion in no time.\n1. **agent** · 13/26 pass — Update index.html so the page chrome feels like a polished evening cheese board while leaving the Three.js scene, camera, lights, materials, scene graph, and knife lift timing untouched. Change the document title to The \n1. **agent** · 13/26 pass — Update the rendering setup in index.html so the scene uses a modern Three.js color and lighting pipeline. Keep the actual composition and interaction unchanged: do not alter the HUD, camera position, orbit behavior, ligh\n1. **agent** · 13/26 pass — I got this error pls fix: TypeError: Failed to resolve module specifier \"three\". Relative references must start with either \"/\", \"./\", or \"../\". Fix that module-loading failure first so the Three.js scene can start norma\n1. **agent** · 13/26 pass — Please make one focused correction to the sun placement in index.html. In the fixed-sun block, find the statement that copies the aim point (0, 0.7665, 0.05) into sun.position and then calls addScaledVector(sunDir, -4). \n1. **agent** · 13/26 pass — Please make a single focused pass in index.html to bring the olive board and its four cheeses down to realistic meter-scale dimensions. Leave the renderer pipeline, lighting, HUD, knife-lift timing, grapes, walnuts, and \n1. **agent** · 13/26 pass — Please make one focused pass in index.html to seat the food correctly on its parent board and reframe the camera for the new meter-scale scene. Leave the lights, HUD, board footprint and construction, cheese meshes, knif\n1. **agent** · 13/26 pass — Please clean up the scale of the cheese knife and place it naturally on the board. Leave the renderer, lighting, camera, HUD, board, cheeses, grapes, and walnuts alone. The existing 2.6-second lift motion can stay; it ju\n1. **agent** · 13/26 pass — Please replace the oversized walnuts with six realistically sized nuts resting on the board. Leave the renderer, lighting, camera, HUD, board, cheeses, knife, and grapes exactly as they are. Each walnut should have a rou\n1. **agent** · 13/26 pass — The previous grape change did not land, so please replace that old oversized prop now. Leave the renderer, lighting, camera, HUD, board, cheeses, knife, and walnuts alone. Remove the whole existing grape section, includi\n1. **agent** · 13/26 pass — Please turn the knife’s placeholder lift into a real goat-log cutting animation. Leave the renderer, lighting, camera, HUD layout, board, other cheeses, walnuts, grapes, and table unchanged. The two cuttable goat slices \n1. **agent** · 13/26 pass — Please give the scene a subtle cinematic finish without changing any of its objects, lighting, camera pose, HUD, or interactions. Add the standard Three.js post-processing imports for EffectComposer, RenderPass, BokehPas\n1. **agent** · 13/26 pass — Please tone down the film grain and give the table a simple room around it. Leave the camera, lighting, HUD, board, food, knife animation, table, and the rest of the post-processing look unchanged. The grain is currently\n1. **agent** · 13/26 pass — The giant round pedestal has come back, so please replace it with the painted trestle again. Keep the new floor, walls, baseboards, camera, lighting, HUD, board, food, knife animation, and post-processing exactly as they\n1. **agent** · 13/26 pass — Please add two simple painted dining chairs around the trestle table. Leave the room, table, camera, lighting, HUD, board, food, knife animation, and post-processing unchanged. Use one flat material colored 0x8f9796 with\n1. **agent** · 13/26 pass — Please add a painted hutch against the back wall. Leave the chairs, table, room, camera, lighting, HUD, board, food, knife animation, and post-processing alone. For now, build only the cabinet and open shelves—do not add\n1. **agent** · 13/26 pass — Please dress the table with a wine bottle, two brass goblets, and a folded napkin. Leave the hutch, chairs, room, table, board, food, knife animation, camera, lighting, HUD, and post-processing alone. Skip the candlestic\n1. **agent** · 13/26 pass — Please add a small wooden candlestick with a living flame at world position (0.46, 0.7665, -0.2). Leave the other table props, hutch, chairs, room, board, food, knife animation, and post-processing unchanged. Use warm wo\n1. **agent** · 13/26 pass — Please add a small live-edge walnut bowl at world position (-0.44, 0.7665, 0.12). Leave the candlestick, bottle, goblets, napkin, hutch, chairs, room, cheese board, knife animation, and post-processing unchanged. Use war\n1. **agent** · 13/26 pass — Please fix the walnut bowl’s material setup and add a carved plate with three pears. Leave the candlestick, bottle, goblets, napkin, hutch, chairs, room, cheese board, knife animation, and post-processing unchanged. The \n1. **agent** · 13/26 pass — Please add a few crumbs around the hard cheese and subtle contact shadows beneath the loose walnuts and pears. Leave the plate, bowl, candlestick, cheeses, grapes, knife animation, room, and post-processing unchanged. Sc\n1. **agent** · 13/26 pass — Please soften the exposed rind edges on the cheeses and make the small crumbs a little less angular. Leave all placements, contact shadows, table props, room, knife animation, and post-processing unchanged. Raise the che\n1. **agent** · 13/26 pass — The last pass added flat rind strips instead of soft rolled edges. Please replace only those flat edge strips with rounded torus lips, leaving the existing top bands, crumbs, contact shadows, table props, room, knife ani\n1. **agent** · 13/26 pass — Please clean up the final image so the scene has the same neutral, natural color treatment throughout. Right now the edges have a noticeable magenta and cyan double outline, especially around the furniture and tabletop, \n1. **agent** · 13/26 pass — Please dress the empty blue hutch so it matches the background of the finished scene. Leave the hutch itself and everything on the table alone for this turn. Place three pale tan plates upright across the lower open shel\n1. **agent** · 13/26 pass — Please move the wine bottle behind and to the left of the small bowl so the bowl is clearly visible in front of it. Keep the bottle at x = -0.36 and table height, and move it back to z = -0.22. The board and the rest of \n1. **human** · 13/26 pass — Refined the interface so the cheese board presentation reads more clearly at a glance. The branding, cheese legend, knife instruction, and orbit hint were redrawn and simplified so the controls better communicate what th\n1. **agent** · 13/26 pass — Only update the jug glaze decoration in this pass. Leave the jug body, dome, spout, handle, placement, rotation, and the rest of the scene unchanged. Replace the existing jug glaze, accent, and leaf materials with a sing\n1. **agent** · 13/26 pass — The pitcher is not even visible now please investigate and fix\n1. **human** · 13/26 pass — Reworked the jug construction into a consistent local coordinate space while preserving its overall form and decorative glaze material. The body, dome, spout, and handle are now built and transformed together, which keep\n1. **agent** · 18/26 pass — For this pass, only rebuild the scene’s material system. Leave all geometry, cheese sector construction, jug orientation, knife animation, lighting, camera behavior, and post-processing unchanged. Create one shared proce\n1. **agent** · 21/26 pass — The evening borad title in the modal is repeated pls fix that on mobile make the click the knife toast be centered on mobile make the top modal be less tll by like 30% you may need to adjust inner margins and whatnot als\n1. **human** · 21/26 pass — Consolidated the scene around a shared procedural material system so surfaces no longer rely on isolated material recipes. The new setup gives each material type its own color range, roughness, surface variation, reflect\n1. **agent** · 21/26 pass — In our index file, do one big rewrite pass aimed at refactrotingas much of the script as possible, while the evening board scene keeps the same look, feel, and behaviour. Same cheeses, board, bottle label, napkin, pear p\n1. **agent** · 25/26 pass — In our index file, do one rewrite pass on the shared surface and shading stack. Make the code read as freshly written: new names, clearer structure, different line breaks, helpers split or joined however you like. Keep t\n1. **human** · 26/26 pass — Fixed the shared paint shader so the painted table and hutch can compile correctly. A shader variable that conflicted with a reserved GLSL term was renamed consistently everywhere it was used.\n1. **agent** · 26/26 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, a visible cheese board scene renders, please write a test that validates this correct behaviour. -Curre\n1. **agent** · 26/26 pass — Sorry i interrupted you, finish completing the objectives of the previous prompt\n1. **agent** · 26/26 pass — The rim of the pear plate does not match the circumference of the plate itself, please fix that. (the rim is an oval while the plate is round)\n1. **agent** · 26/26 pass — the grapes are colliding with the round cheese please move it so it is n ot colliding with the grapes there is a weirs z index fight in the front edge of the board please fix that as well\n1. **agent** · 26/26 pass — The blade of the knif is not touching the handle please make sur eit touches so it looks like one pices rathern a floating blade above the handle also when it cuts the cheese on the animation, the cut is just slightly of\n1. **human** · 26/26 pass — Refined several small presentation details so the interface and scene read more cleanly. The orbit hint was simplified to a lightweight stroke-only icon, while the key light shadow settings were retuned to reduce distrac\n1. **agent** · 26/26 pass — Extend the side wall and floor towards the black void by 1 meter (this should be quick an easy, in and out edit) I am not talking about the wall that the self is leaned against to, I am talking about the wall on its side",
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
        ]
      },
      {
        "label": "Argon 3D Assets",
        "type": "html",
        "file": "scenes/cheese-board/argon.html",
        "notes": "# Argon 3D Assets\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/26)\n\n- **Four separate cheese pieces are present, each with a different overall shape from the other three** — Only three shapes are on offer: a round drum, a long log, and then two triangular wedges that read as the same form, one merely taller than the other.\n- **The crumbly wedge's broken or cut face shows irregular relief or loose crumb pieces rather than a perfectly smooth flat plane** — The crumbly wedge's cut face is a dead-flat clean plane, and the fragments meant to be crumbs have blown up into flat plates nearly as big as the cheese itself, scattered through the board surface.",
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
        ]
      },
      {
        "label": "Redesign 3D Assets",
        "type": "html",
        "file": "scenes/cheese-board/assets/index.html",
        "notes": "# Redesign 3D Assets\n\n## Developer notes\n\nSame camera, same layout and same colors as the primitive, just with real models and textures. The wedge, goat log and grapes are Meshy models. The brie, blue cheese and walnuts were sculpted in Blender. The furniture and table props come from Poly Haven.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (12)\n\n1. **agent** · 26/26 pass — ok i want you to remove all the primitve shapes in the index.html and repalce them with the glb asssets adn the hdri to make the 3D scene better relasitce look and the resule mut look exacly like the evening_board_assets\n1. **agent** · 26/26 pass — ok now i want you to move the light sources downadn to left littile bit to get little longer shadows. ok don't use any palyright or other thing and make sure this update finishes withn 2 min\n1. **agent** · 26/26 pass — ok i want you to analy the glb for the anaimation of the knife curring the chease so that when i click on the butoon on the UI or touch the kinfe on the table it will lift up and go to the cyildrical chease then cutt it \n1. **agent** · 26/26 pass — ok i want you to analy the win bottole b/c the white leble stikers is flickering when the camer mooves so fix this issue.\n1. **agent** · 26/26 pass — ok now i want you to update the camera movement to be limited when the camera reach to solde object jave bounder for all objects byt let the camer get closee but not pass thing it for both rotationa and draging of the ca\n1. **agent** · 26/26 pass — ok now i want you to base64 encode bot the assets that are used in the indexhtml and put it in js file with same name like this evening_board_asset.glb.js and put the string in global variable and load it in the html fil\n1. **agent** · 26/26 pass — i want you to write test for the following rubsirce make sure the test checks what the rubrices is about 1. A visible cheese board scene renders 2. Dragging the pointer across the canvas changes the viewing angle of the \n1. **agent** · 26/26 pass — i want you to write test for the following rubsirce make sure the test checks what the rubrices is about 11. Loose rind pieces are present as separate objects from the four whole cheeses 12. A knife is present whose blad\n1. **agent** · 26/26 pass — ok i want you to fix this problem on index.js that is used disallowed CND so premove it use other netive tool that does not need importing this is the message What to fix: External CDNs / URLs Rule: Only Three.js, font, \n1. **agent** · 26/26 pass — So i got the following updates so fix it. by ding this 1. fix the fist issue by update the UI elemt to look exaly like it is on the refance image. 2. you can fix the secode rotation proble by limit the camer moveet from \n1. **agent** · 26/26 pass — ok fix the folloing thing Cups: Add the reflections and mirroring shown in the design reference when the knife passes in front of them. Knife: Fix the delayed/unresponsive interaction. The cutting action should start rig\n1. **agent** · 26/26 pass — ok i want you to run npm test to see if all test pass if not update them to pass",
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
        "label": "Argon 3D Primitive",
        "type": "html",
        "file": "scenes/biplane-crop-duster/argon.html",
        "notes": "# Argon 3D Primitive\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (10/22)\n\n- **Dark oil streaks run aft along the fuselage from the base of the engine cowling.** — No oil staining shows on the fuselage sides behind the engine; the flanks read as clean yellow paint, so the grubby working-aircraft look is missing.\n- **Visible spray, such as mist or particle trails, streams from the boom nozzles beneath the lower wing.** — Nothing comes out of the boom; the readouts show the system on standby with zero flow, so the scene never shows the crop duster actually dusting.\n- **As the scene runs, the boom nozzle apertures stay open and continue emitting visible spray across multiple frames, rather than the openings appearing sealed shut.** — Throughout the run the nozzles stay folded back under the boom with their caps shut and no mist at any tip.\n- **After rotating the camera, the spray trail beneath the boom is still visible, confirming the effect persists while the camera moves.** — After the camera swings round, the area under the boom is still empty; there is no trail to follow because spraying never begins.\n- **The main wheels and the tailwheel each visibly touch the ground plane rather than floating above it.** — The aeroplane is flying above the crop rows with a big gap under every wheel, so nothing is in contact with the field.\n- **As the scene runs, the propeller shows a change in rotational position or a motion blur compared to the opening view, consistent with the engine running.** — The nose points away from the viewer in the loading view and the propeller is too small there to show either a turning blade or a blurred disc.\n- **The oil streaks appear as a darker, duller finish than the surrounding blue paint rather than a same-toned decal.** — Since no staining is visible on the fuselage, there is no darker, greasier finish to contrast with the yellow paint.\n- **The tyres show a flattened bulge where they meet the ground rather than a perfectly circular cross-section.** — The wheels hang in the air well clear of the field, so no contact patch or squashed bulge can form under them.\n- **The biplane casts a shadow on the ground that aligns with its wheels' contact points.** — The shadow lies far away across the crop rows, detached from the aircraft, so it never meets the wheels at all.\n- **The chipped paint patches concentrate on edges and high-wear areas such as the cowling and wing leading edges rather than being spread uniformly across flat panels.** — The paint wear is spread evenly over the whole airframe as fine speckle; nothing gathers on the cowling or the wing leading edges the way real chipping does.",
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
        ]
      },
      {
        "label": "Redesign 3D Primitive",
        "type": "html",
        "file": "scenes/biplane-crop-duster/primitive/index.html",
        "notes": "# Redesign 3D Primitive\n\n## Developer notes\n\nWe kept the AI scene's layout and fixed what failed: the plane now sits on the grass strip with flattened tyres and a real shadow, the spray is running from the first frame, and the nozzle flaps swing open when it starts. The prop spins inside a blur disc with a yellow tip ring so the engine reads as running. Paint wear, chips, oil streaks and the ground are all procedural noise in the shaders, no image textures. If you add nozzles, keep an eye on the particle count, and keep the camera clamp so nobody orbits under the field.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 65.0% similarity (color=50.9%, chroma=87.2%, lighting=51.4%, texture=100.0%).\n\n## Turns (43)\n\n1. **agent** · 14/22 pass — Change the title of our html app to AG-1 Bluejacket Crop Duster\n1. **agent** · 14/22 pass — Please update only the ground field texture colors and the crop rows in index. Leave the plane, sky, fog, camera, aircraft, spray, and HUD alone. For the field texture, keep its current construction the same. It should s\n1. **agent** · 14/22 pass — The ground colors and crop row spacing are already correct. Only fix the direction of the crop rows. Keep the existing crop color, the 40 rows on each side, the first offset of 7.56, the 0.76 spacing, and the row height \n1. **agent** · 14/22 pass — Good, now only add a dirt clear lane through the middle of the ground. Leave the field texture, crop rows, sky, fog, aircraft, spray, and HUD unchanged. Place the lane directly on top of the existing ground. Make it 400 \n1. **agent** · 14/22 pass — Only adjust the page background, scene background, and fog color. Leave the ground planes, dirt lane, crop rows, aircraft, spray, and HUD unchanged. Change the page background to #c9d8e4. Use the matching 0xc9d8e4 color \n1. **agent** · 14/22 pass — Rebuild the ground as one large procedural surface and add a surrounding ring of distant hills. Leave the aircraft, spray, lights, camera, HUD, page background, scene background, and fog unchanged. Remove the current fie\n1. **human** · 14/22 pass — I removed the field colors and vertex-color bake, replacing them with procedural ground shading in the material. This moves the ground appearance into the shader, where the noise, field layout, crop spacing, wet areas, o\n1. **agent** · 14/22 pass — Adjust the scene lighting, atmosphere, and main aircraft paint in one focused pass. Leave the ground, hills, camera, spray, HUD, and the duller companion aircraft material unchanged. Keep the renderer using sRGB output, \n1. **agent** · 14/22 pass — Update the interface, camera controls, and spray system together in one pass. Leave the sky, bloom, and the main aircraft rebuild alone for now. Give the interface a light paper instrument look instead of the current dar\n1. **agent** · 14/22 pass — Add a lightweight post-processing finish to the scene without changing the existing geometry, camera behavior, lighting setup, or interface. Load the Three.js post-processing pieces needed for an effect composer, render \n1. **agent** · 14/22 pass — Refine the finishing effect, metal colors, leading edge wear, and landing gear attachment without changing the rest of the scene. Update the finishing shader so the chromatic separation comes from the distance to the cen\n1. **agent** · 14/22 pass — Refine the finishing effect, add a small ground equipment area near the aircraft, and make the wet ground respond smoothly to the spray state. Leave the rest of the scene unchanged. Rebuild the finishing shader as one co\n1. **agent** · 14/22 pass — Refine the aircraft proportions and finishing effect while leaving the rest of the scene unchanged. Keep the finishing shader as one continuous fragment string. Center the effect around the middle of the screen, use the \n1. **agent** · 14/22 pass — Refine the finishing effect and rebuild the sky so the scene gets its atmosphere from a real sky dome instead of the current flat background and extra fill lights. Leave the aircraft, ground, spray, camera controls, HUD,\n1. **agent** · 14/22 pass — Tighten the finishing effect and sky rendering without changing anything else in the scene. Keep the finishing shader as one continuous single line string. Center it around the middle of the screen, use the squared radia\n1. **agent** · 16/22 pass — Add procedural crop rows and grass tufts around the field while keeping the existing ground, aircraft, apron props, sky, lighting, spray, camera, and interface unchanged. Use a seeded random stream starting at 77 so the \n1. **agent** · 16/22 pass — Replace the current box shaped wings with proper airfoil shaped wings while keeping the rest of the aircraft and scene unchanged. Build each wing from a Clark Y style cross section instead of a rectangular box. Use a cho\n1. **agent** · 16/22 pass — Add a little more visible cloud variation to the existing sky while keeping its current colors, sun glow, and noise based cloud structure intact. Leave the rest of the scene unchanged. Give the sky a cloud strength value\n1. **agent** · 16/22 pass — Add subtle wear directly into the aircraft paint and replace the current belly piece with a smoother shaped underside. Leave the rest of the aircraft and scene unchanged. Apply a shared wear treatment to both blue aircra\n1. **agent** · 16/22 pass — Add visible 3D spray fans to all 26 nozzles while keeping the wings, finishing effect, belly shape, paint wear, vegetation, and the rest of the scene unchanged. Load the geometry merging utility from the same Three.js r1\n1. **agent** · 16/22 pass — I get this: Uncaught TypeError: cone.applyQuaternion is not a function at index.html:880:14 at index.html:1163:3 Please fix that and at the end of the prompt job please run the necessary checks to avoid not catching this\n1. **agent** · 16/22 pass — DO THIS ONLY PLEASE: this pass is only the finish post on finishShader: one fragment string with chroma d*r2*0.010, vignette r2*1.6, grain fract(uTime)*97.0 inside dot(vUv*uRes + …). Do not touch wings, spray fans, belly\n1. **agent** · 18/22 pass — Only update the main fuselage shape and add the new cowl and hopper in this pass. Leave the finishing effect, wings, spray fans, belly, wear, vegetation, and the rest of the scene unchanged. Replace the current cylindric\n1. **agent** · 18/22 pass — In index.html, drop the extra nose cowling cylinder and cowlNose sphere so only the lathe cowl reads at the engine; keep the intake torus if it is still there. Do not touch finish, wings, fans, wear, or veg. Confirm the \n1. **human** · 18/22 pass — Refined the responsive UI so the branding, camera controls, spray panel, and readouts stay usable on smaller screens without covering the 3D scene. The mobile layout was tightened and simplified rather than creating a se\n1. **agent** · 18/22 pass — Replace the entire overlay interface so it uses a clean paper-style control system while leaving the 3D scene and spray behavior otherwise unchanged. Use a warm paper palette with paper at #f3eee3, secondary paper at #eb\n1. **agent** · 18/22 pass — Fix the overly white airframe lighting, make the propeller motion deterministic, smooth out the spray system timing, add more detail to the apron props, and introduce separate exhaust smoke. Leave the existing wings, fin\n1. **agent** · 18/22 pass — Fix the black-looking shaded parts of the aircraft and metal surfaces by improving the scene fill lighting and making the environment map actually affect the materials. Leave the rest of the scene behavior unchanged. Add\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, a visible running biplane crop duster renders, please write a test that validates this correct behaviou\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, spray booms run beneath the lower wing and are physically slung under it rather than mounted on the fus\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, the airframe is painted blue with visible chipped patches showing a different colour or bare material u\n1. **agent** · 22/22 pass — For this run, we will work on validating already working aspects of our index.html file. Check this out: -Currently, the free camera can be repositioned to view the biplane from another angle, please write a test that va\n1. **human** · 22/22 pass — Added stronger camera boundaries by keeping the camera and orbit target above the ground and building collision bounds from the aircraft meshes. This prevents free orbiting from passing underneath the field or through so\n1. **agent** · 22/22 pass — Did a bunch of changes, probaly brok a lot of tests, do this: run suite ONCE check all the error logs and make a list of them iterate over each error and adress it so it passes with the new state of the index file withot\n1. **human** · 22/22 pass — Modernized the scene’s rendering foundation by moving from the older Three.js setup to the newer module-based version and rebuilding the renderer, controls, post-processing, and supporting utilities around it. This provi\n1. **agent** · 22/22 pass — In index.html, make only one change to the propeller animation and leave everything else untouched. Keep the solid propeller spinning at vibT times -24, keep the three translucent ghost blades at their existing opacities\n1. **agent** · 22/22 pass — I made a bunch of changes probably broke a bunch of tests, please fix them so they pass, keep it simple, keep it fast.\n1. **agent** · 22/22 pass — The app is too slow, optimize it for speed without sacrificing any of the look (hard constraint)\n1. **agent** · 22/22 pass — Bring the fog back to how it was, should be an easy and FAST change\n1. **agent** · 22/22 pass — Last changes, you should not be able to go all the way out of bounds by panning. Please, do not entirely remove the pan feature; just limit the range and be sure it's not clipping anything. The rear wheel's middle part i\n1. **agent** · 22/22 pass — Nice, modify the pan by drag bound limits to so you cannot pan to drag past the end of the crops area. The crops area might be bigger than the actual area of the planted crops, I am refering to the area that has crops pl\n1. **agent** · 22/22 pass — This should be fast For some reason i am still able to pan to drag past the crops, I should not be able by any means to be able to pan to drag past the last row of crops on any side exit\n1. **agent** · 22/22 pass — Make three fixes in index.html: thin the fog so the scene stops looking smoky when zoomed out, close the sunlit gap between the apron props and their shadows, and stop the camera from passing through the biplane and the ",
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
        ]
      },
      {
        "label": "Argon 3D Assets",
        "type": "html",
        "file": "scenes/biplane-crop-duster/argon.html",
        "notes": "# Argon 3D Assets\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (10/22)\n\n- **Dark oil streaks run aft along the fuselage from the base of the engine cowling.** — No oil staining shows on the fuselage sides behind the engine; the flanks read as clean yellow paint, so the grubby working-aircraft look is missing.\n- **Visible spray, such as mist or particle trails, streams from the boom nozzles beneath the lower wing.** — Nothing comes out of the boom; the readouts show the system on standby with zero flow, so the scene never shows the crop duster actually dusting.\n- **As the scene runs, the boom nozzle apertures stay open and continue emitting visible spray across multiple frames, rather than the openings appearing sealed shut.** — Throughout the run the nozzles stay folded back under the boom with their caps shut and no mist at any tip.\n- **After rotating the camera, the spray trail beneath the boom is still visible, confirming the effect persists while the camera moves.** — After the camera swings round, the area under the boom is still empty; there is no trail to follow because spraying never begins.\n- **The main wheels and the tailwheel each visibly touch the ground plane rather than floating above it.** — The aeroplane is flying above the crop rows with a big gap under every wheel, so nothing is in contact with the field.\n- **As the scene runs, the propeller shows a change in rotational position or a motion blur compared to the opening view, consistent with the engine running.** — The nose points away from the viewer in the loading view and the propeller is too small there to show either a turning blade or a blurred disc.\n- **The oil streaks appear as a darker, duller finish than the surrounding blue paint rather than a same-toned decal.** — Since no staining is visible on the fuselage, there is no darker, greasier finish to contrast with the yellow paint.\n- **The tyres show a flattened bulge where they meet the ground rather than a perfectly circular cross-section.** — The wheels hang in the air well clear of the field, so no contact patch or squashed bulge can form under them.\n- **The biplane casts a shadow on the ground that aligns with its wheels' contact points.** — The shadow lies far away across the crop rows, detached from the aircraft, so it never meets the wheels at all.\n- **The chipped paint patches concentrate on edges and high-wear areas such as the cowling and wing leading edges rather than being spread uniformly across flat panels.** — The paint wear is spread evenly over the whole airframe as fine speckle; nothing gathers on the cowling or the wing leading edges the way real chipping does.",
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
        ]
      },
      {
        "label": "Redesign 3D Assets",
        "type": "html",
        "file": "scenes/biplane-crop-duster/assets/index.html",
        "notes": "# Redesign 3D Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive; the airframe becomes a Meshy asset and the strip, props, trees and sky come from Poly Haven, all CC0. The spray is volumetric in Cycles with droplet particles, while booms, nozzles, wires and prop stay procedural so they can animate. The nozzle empties drive the spray, so if you swap the aircraft keep the BIPLANE pivot and the NOZ_xx empties where they are.\n\n## Review — minor_edits\n\n> Great job, looking good!\n\n## Turns (39)\n\n1. **agent** · 17/22 pass — I have assets under assets/ folder that 'll break due to CORS if I drag the index.html file to browser (that's the requirement). Your job is to convert those models to base64, instead of using export use window function.\n1. **agent** · 15/22 pass — Edit only index.html. Keep the existing window.resolveAsset function and the three.js r128 CDN tags. 1. Add script tags for assets/meshy/meshy_Meshy_AI_Blue_Biplane_1001000228_texture.glb.js and assets/hdri/hdri_farm_fie\n1. **agent** · 15/22 pass — Edit only index.html. 1. Add script tags for assets/models/polyhaven/Barrel_01/models_polyhaven_Barrel_01_Barrel_01_2k.gltf.js and the leafy_grass diff_2k and nor_gl_2k jpg.js files (assets/textures/polyhaven/leafy_grass\n1. **agent** · 15/22 pass — Edit only index.html. The Barrel_01 glb is already loaded (buildWorld takes GROUND and HILLS out of it). Now use the rest of it. 1. After GROUND and HILLS are removed, add everything left in gltf.scene to the scene insid\n1. **agent** · 15/22 pass — Edit only index.html (three.js r128). The ground has to follow the Blender material GROUND_STRIP_FIELD. Do not paint the ground with one texture. Textures (assets/textures/polyhaven/<folder>/..._2k.jpg.js, add script tag\n1. **agent** · 15/22 pass — 1. I've got wrong color of the grass it seems The grass diffuse texture is made with diffTex.clone(). A cloned texture is never uploaded to the GPU until you set needsUpdate = true on it, so it samples black. Set needsUp\n1. **agent** · 16/22 pass — Edit only index.html. The grass GLB (assets/models/polyhaven/grass_medium_01/..._grass_medium_01_2k.gltf.js, asset name models_polyhaven_grass_medium_01_grass_medium_01_2k) is loaded. Do NOT pick crop positions with Math\n1. **agent** · 16/22 pass — Edit only index.html. The grass GLB is loaded and Crop_Placeholder is already used for crops. Now do the weeds. Do NOT choose positions from a hand written rectangle. 1. Find the mesh named exactly Grass_Placeholder. Rea\n1. **agent** · 16/22 pass — Edit only index.html. 1. State object: spray = { on: true, amount: 0, fans: [], flaps: [], noz: [], fanMat: null }. After assets load, for i in 0..25 with a 2 digit id: push nodes['SPRAY_FAN_'+id] to fans, nodes['NOZ_'+i\n1. **agent** · 19/22 pass — NOZ_#_Flap animation should be to the other direction (the rotation should be 118 at x axis) Edit only index.html. Remove all the spray_fan_# mesh. The water is a particle simulation. Keep: the S key, the panel switch (s\n1. **agent** · 19/22 pass — Edit only index.html. Spray state already exists as spray = { on, amount, ... } and setSpray(on). CSS tokens: card #f0eadf, border #d9d1c1, ink #1d2833, label #837f75, blue #2b5db2, orange #e9631b, off grey #9a968c. Font\n1. **agent** · 22/22 pass — Edit only index.html. The water spray we already apply looks like fireworks:Real spray seen from this distance is a soft translucent veil that widens below each nozzle. Change ONLY these values in the spray code and keep\n1. **agent** · 22/22 pass — Edit only index.html. The plane paint material is the one on the mesh nodes.AVIAO_MESHY (Material_0). Add dark oil streaks that start at the base of the engine cowling and run aft along both sides of the fuselage. Do not\n1. **agent** · 22/22 pass — Edit only index.html. Spray currently applied is one soft veil. The target is one distinct white cone under each nozzle: narrow at the nozzle, wide where it reaches the ground. Change ONLY these values in the droplet cod\n1. **agent** · 22/22 pass — Edit only index.html. Replace the droplet particle spray with one soft cone per nozzle, drawn by a shader. The target look: a smooth, translucent white cone with a fine grainy surface, narrow at the nozzle and wide at th\n1. **agent** · 22/22 pass — the crop material uv map seems not applied correctly by the designer. Change the diffuse / base color to the same green as the texture instead. also apply alpha cut off for all object with grass_medium_01_alpha_2k materi\n1. **agent** · 22/22 pass — Two small deletions. Do not add anything. 1. Crops. Find the lines that build plantMat from cropMesh.material.clone(). Keep plantMat.side = THREE.DoubleSide. DELETE the line plantMat.map = null; and DELETE the line plant\n1. **agent** · 22/22 pass — Change this and nothing else's: 1. camera.position.set(9.1, 2.8, -9.5) (was 8.4, 2.8, -9.8) 2. controls.target.set(-0.19, 1.1, -0.19) (was 0, 1.3, 0.4) 3. In the HERO button handler use the same two values: tweenCamera([\n1. **agent** · 22/22 pass — Add automated Playwright tests for index.html without changing any visual behavior. Do not edit anything else in index.html except adding a window.__dbg hook, set once at the end of the main script, exposing { scene, cam\n1. **agent** · 22/22 pass — Fix only tests/02_camera_repositions.test.js and tests/15_propeller_spins.test.js. Do not change index.html or any other file. Do not measure time in either test. Keep the rubric comment on the first line of each file an\n1. **agent** · 22/22 pass — At Grass_Placeholder reduce it's size to 90% also populate the grass so the field looks much fuller (est 70% of area covered). please follow the grass distribution ratio as following (name strictly follows, just check th\n1. **agent** · 22/22 pass — The crop material uv map seems not applied correctly by the designer. Remove the available texture and then set the diffuse / base color of crop mesh to #466101 instead. Then, apply alpha cut off for all object with gras\n1. **agent** · 22/22 pass — Crops must stand in the brown furrow soil, not on the green stripes. In the crop placement loop, change var az = 7.56 + 0.76 * stripeK; to var az = 7.18 + 0.76 * stripeK;. The ground shader paints green stripes centred a\n1. **agent** · 22/22 pass — I'm trying to slim down the project by compressing some assets, please regenerate all the new assets to base64 .js like previous turn. Please preserve the name and imports. - assets/meshy/Meshy_AI_Blue_Biplane_1001000228\n1. **agent** · 22/22 pass — We have to do it again because SOMEHOW it is NOT updated. I'm trying to slim down the project by compressing some assets, please regenerate all the new assets to base64 .js like previous turn. Please preserve the name an\n1. **agent** · 22/22 pass — PUMP_FAN Should have same rotation animation as Prop_Spin Somewhat we also need it run on mobile. Fix the mobile UI, avoid overlapping between element. Do whatever you like without blocking 50% of the screen including us\n1. **agent** · 22/22 pass — Modify the existing spread of the mist, make it lower, and then increase the particle size to keep it lighter but thicken the mist. Also make PUMP_FAN animation 70% slower. Since we are modifying UI, please makes fix > 1\n1. **agent** · 22/22 pass — - Set sun.shadow.bias = 0; - Add ambience occlusion shadow for the crops so it can have fake shadow but keep it lightweight. - And make the shadow appear more realistic and soft but keep it lightweight.\n1. **agent** · 22/22 pass — Make the sky, mountains and horizon look realistic. Use the snippets below as they are, then tune only the numbers named in \"If it looks wrong\". - The Barrel_01 gltf is one scene holding HILLS, GROUND and all props. Remo\n1. **agent** · 22/22 pass — Remove macroField completely. Instead, smoothly blend the distant area into the existing main crop/green farmland color using distance-based smoothstep. Keep the procedural texture, and multiply with the crop texture the\n1. **agent** · 22/22 pass — We are about to remove every visible foliage boundary when the camera is zoomed out, keep it lightweight, and make the lane weeds denser. Do all of it in one pass. 1. FAR CROPS (continue the field past the placeholder po\n1. **human** · 22/22 pass — Key areas exceeded the limit, which was expected, so I’ll implement the remaining changes myself. The remaining work is mainly adding water droplets, repositioning the mist, and fixing the missing shadows from the crops.\n1. **human** · 22/22 pass — I think the spray is too narrow instead of widening on the bottom and I afraid it will trigger another redo again, so I had to fix it. I basically just adjust the scale to cone.scale.set(0.65, 1, 1.15); and position to c\n1. **agent** · 22/22 pass — Let's do some fixes 1. SPRAY (white dots must go; spray should read as one soft plume) Keep the droplet simulation (it spawns ground mist) but stop drawing it: dropPoints.visible = false; streaks.visible = false; Cone fr\n1. **agent** · 22/22 pass — in the mist code. The mist must come from a tiny emitter point on the ground under each nozzle and spread into a wedge (a cone seen from the side): backward, widening and rising a little with distance. also Mist puffs ap\n1. **human** · 22/22 pass — - Adding a line to remove shadow from blur effect so there's no weird shadow from the plane: biplaneGltf.scene.traverse(function (o) { if (o.name) nodes[o.name] = o; if (o.isMesh) { o.castShadow = true; o.receiveShadow =\n1. **agent** · 22/22 pass — ok i want you to make the following updates. make sure to not take more than 5 min 1. For all 26 nozzles, hide the original primitive flap discs, increase the hinge rotation factor in updateSpray from 1.18 to 1.32, retar\n1. **agent** · 22/22 pass — ok i want you repostion the sune to (10,-18,5) to get better and more realstice showing and then make sure the bush on the run way have nore tahn 20000 bush.\n1. **agent** · 22/22 pass — ok i want you to run the test npm test to see if all test pass if not update the faling test.",
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
        "label": "Argon 3D Primitive",
        "type": "html",
        "file": "scenes/houseboat/argon.html",
        "notes": "# Argon 3D Primitive\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (4/27)\n\n- **The bottom of the hull is flat across its width rather than tapering to a V shaped or rounded keel** — The hull disappears into the water at the waterline, so the underside is never shown and the flatness of the bottom cannot be judged.\n- **After rotating the camera, windows are visible on the cabin side that the opening view does not show** — After rotating the camera the same long side is still the one facing the viewer, only flatter on; no previously hidden side of the cabin comes into view.\n- **The roof terrace railing uprights show a lighter face and a shaded face rather than reading as flat uniform colour** — The terrace railing posts are so thin they read as flat dark hairlines with no lit side at all, so the railing looks drawn rather than modelled.\n- **No overlay panel or text block covers the cabin or the roof terrace in the opening view** — The \"Sunny windows\" marker and its label sit right on the cabin, hiding a piece of the upper wall and roof edge, and the \"Bow deck\" label lands on the boat too.",
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
        ]
      },
      {
        "label": "Redesign 3D Primitive",
        "type": "html",
        "file": "scenes/houseboat/primitive/index.html",
        "notes": "# Redesign 3D Primitive\n\n## Developer notes\n\nA wide, flat-bottomed houseboat made only from basic shapes, with a roof terrace, a small bow deck and four windows on each side. Every surface gets a procedural noise texture and the sky is a gradient with soft clouds, so it doesn't feel flat. It slowly spins on its own, and the buttons jump to the terrace, the bow and the windows.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 85.0% similarity (color=79.1%, chroma=91.0%, lighting=84.7%, texture=99.6%).\n\n## Turns (10)\n\n1. **agent** · 24/27 pass — Leave the houseboat itself alone for now and just fix the world around it: swap the flat peach sky and close fog for a big sky dome with a pale grey-blue horizon, softer blue overhead, a low warm sun and a few thin cloud\n1. **agent** · 27/27 pass — Rebuild the houseboat and the pier that leads to it, and leave the lake, sky, and shore as they are. Make the hull a low flat-bottomed barge in dark brown planks, a bit narrower at the bottom, with a dark rub rail and a \n1. **agent** · 27/27 pass — The two ropes between the hull and the pier are hanging in open air. Tie each one from the cleat on the boat to the nearest vertical wooden pile, so it actually meets the post. The posts and beams along the side of the p\n1. **agent** · 27/27 pass — eplace the dark booking card with a light cream panel in the top left: a small boat mark beside the title \"The Willow\", the line \"Houseboat · sleeps 4\" under it, and the sentence \"Take a look around before you book. Spin\n1. **agent** · 27/27 pass — Add five Jest tests, one per file, for the next five checks. Leave tests/visible-houseboat.test.js as it is, and do not change the scene, the menus, or the lighting. tests/drag-view.test.js: dragging on the canvas change\n1. **agent** · 27/27 pass — Add six Jest tests, one per file, for the next six checks. Leave the existing tests as they are, and do not edit index.html. tests/bow-deck.test.js: a flat deck area sits ahead of the cabin's forward wall at the bow. tes\n1. **agent** · 27/27 pass — Add six Jest tests, one per file, for the next six checks. Leave the existing tests as they are, and do not edit index.html. tests/separate-parts.test.js: the houseboat is assembled from distinguishable parts such as a h\n1. **agent** · 27/27 pass — Add nine Jest tests, one per file, for the checks that still have no test. Leave the existing tests as they are, and do not edit index.html. tests/window-glass.test.js: the window glass differs from the cabin wall in ref\n1. **agent** · 27/27 pass — The edge where the lake meets the beach is flickering. The sand, the grass, and the water are sitting on top of each other there. Make that bank one continuous surface, sand along the water and grass starting where the s\n1. **agent** · 27/27 pass — Fix only these three things in index.html. Leave the shore strips, water discard, boat, doors, rails, trees, shadows, and window.__WILLOW__ as they are. Do not edit tests. 1. Pier tip. The walkway ends at wl_walkEnd = 31",
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
        ]
      },
      {
        "label": "Argon 3D Assets",
        "type": "html",
        "file": "scenes/houseboat/argon.html",
        "notes": "# Argon 3D Assets\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (4/27)\n\n- **The bottom of the hull is flat across its width rather than tapering to a V shaped or rounded keel** — The hull disappears into the water at the waterline, so the underside is never shown and the flatness of the bottom cannot be judged.\n- **After rotating the camera, windows are visible on the cabin side that the opening view does not show** — After rotating the camera the same long side is still the one facing the viewer, only flatter on; no previously hidden side of the cabin comes into view.\n- **The roof terrace railing uprights show a lighter face and a shaded face rather than reading as flat uniform colour** — The terrace railing posts are so thin they read as flat dark hairlines with no lit side at all, so the railing looks drawn rather than modelled.\n- **No overlay panel or text block covers the cabin or the roof terrace in the opening view** — The \"Sunny windows\" marker and its label sit right on the cabin, hiding a piece of the upper wall and roof edge, and the \"Bow deck\" label lands on the boat too.",
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
        ]
      },
      {
        "label": "Redesign 3D Assets",
        "type": "html",
        "file": "scenes/houseboat/assets/index.html",
        "notes": "# Redesign 3D Assets\n\n## Developer notes\n\nSame boat, same camera and same layout as the primitive, now with real Poly Haven textures, furniture, lanterns, plants and trees. Materials only use Image Texture, Normal Map and Principled BSDF, and everything is packed in the .blend. The trees are thinned to keep the file light.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (10)\n\n1. **agent** · 0/27 pass — The Willow, turn 1: switch off camera panning in index.html. Two new lines, nothing else changes. Right now OrbitControls keeps its default mouse map, so a right-button drag slides the camera and its pivot sideways inste\n1. **agent** · 0/27 pass — The Willow, turn 2: take the sun symbol out of the title in index.html. One small edit, nothing else changes. The title card opens with a ☀ in front of \"The Willow\". .rl-gym/AGENTS.md says \"No emojis as icons\", and that \n1. **agent** · 0/27 pass — The Willow, turn 3: keep the camera above the water in index.html. One line changes, nothing else. controls.maxPolarAngle is Math.PI * 0.52, a little past level, so the camera is allowed to drop below the height of its p\n1. **human** · 0/27 pass — After turns 1 to 3 the model's page handled better (no pan, no emoji in the title, the camera kept above the water), but it still used none of the designer's package: the houseboat was built from plain coloured boxes and\n1. **agent** · 27/27 pass — The Willow, turn 5 (the last one): one comment in index.html, then run the test suite. No code changes. The scene, assets/, package.json, the Dockerfile and the 21 tests are in place from turn 4. This turn writes down th\n1. **human** · 27/27 pass — The review asked for three things: reflections that make physical sense, lantern light that comes from the lanterns themselves, and a pass over the whole scene for smaller technical flaws. This turn changes index.html on\n1. **human** · 27/27 pass — The review asked for three small fixes: a slight flicker on the horizon when the camera moves, and a small notch where the ladder meets the railing and where the railing's rails meet. This turn changes index.html only; a\n1. **human** · 27/27 pass — The review pointed out that the cabin's two doors, the bow door on the forward wall and the stern door on the aft wall, had nothing to open them by, and asked for a subtle doorknob or a pull on both. This turn changes in\n1. **human** · 27/27 pass — The review raised two things. The reflections in the water and the shrubs on the far shore flickered while the camera moved, and from inside the cabin neither door could be seen: the room showed plain plaster where each \n1. **human** · 27/27 pass — The review raised two things: the reflections of the trees in the water still flickered while the camera moved, and a bright light lay in the middle of the lake with nothing in the scene above it to explain it. This turn",
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
        "label": "Argon 3D Primitive",
        "type": "html",
        "file": "scenes/camper-van/argon.html",
        "notes": "# Argon 3D Primitive\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/24)\n\n- **The van's painted body reflects light more sharply than the matte sand surface** — The body panels look as chalky and flat as the sand around them, with no glint or sheen anywhere on the paint, so the van reads as unpainted matte rather than a lacquered vehicle.\n- **The van's windows read as darker or more reflective than the surrounding body panels** — The windows glow warm yellow and read brighter than the cream and green panels around them, rather than as dark glass or as reflective surfaces.",
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
        ]
      },
      {
        "label": "Redesign 3D Primitive",
        "type": "html",
        "file": "scenes/camper-van/primitive/index.html",
        "notes": "# Redesign 3D Primitive\n\n## Developer notes\n\nThe AI scene had the camp right, but the paint looked chalky and the windows glowed brighter than the panels. I rebuilt it from primitives with clear coat on the two tone paint so it catches the sunset and the lantern, and put dark tinted glass in recessed rubber frames. Sand, sea, sky and grass are procedural noise shaders with ripples, a wet band, foam, tyre tracks and footprints, lit by a low sun behind the bay. Keep the HDR clamp before the bloom pass, because it stops clear coat highlights from blowing out.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 91.0% similarity (color=86.3%, chroma=99.6%, lighting=86.7%, texture=99.9%).\n\n## Turns (12)\n\n1. **agent** · 22/24 pass — Move index.html onto ES modules with Three.js 0.170.0 and set up a Jest test project around it, leaving the scene itself as it is. index.html is 431 lines: work by targeted edits and do not rewrite or reproduce the file,\n1. **agent** · 22/24 pass — Rebuild the camera, the sky, the lighting and the post-processing in index.html for a low evening sun over the bay. Leave the van, sand, sea, table, lamp and grass as they are for now: only the parts named here change. i\n1. **agent** · 22/24 pass — Replace the flat sand, the dune humps, the sea plane, the glint and the foam strip in index.html with a shaped beach that runs down into a bay: a terrain height function, a sand surface shaded per pixel, a sea whose colo\n1. **agent** · 22/24 pass — Replace the old boxy van body in index.html with a rounded bus body: - a shell shrink-wrapped onto a rounded shape with a bowed nose - the side windows, split windscreen and wheel arches cut into it - recessed glazing in\n1. **agent** · 24/24 pass — Cut the side door into the van body, hang a real door leaf on a hinge at its rear edge, fit out the cabin behind it, and give the van its nose fittings, bumpers and pop-top roof, then remove the old door, doorway box and\n1. **agent** · 24/24 pass — Replace the old table and lamp with a furnished camp beside the open door: a striped rug, a slatted folding table with crossed legs seated on the sand, an iron storm lantern with a glowing globe and its own light, a ther\n1. **agent** · 24/24 pass — Replace the old grass tufts with instanced dune grass clumps, paint tyre tracks, footprints and soft contact shade onto the sand, and scatter three piles of lumpy stones round the camp. index.html is 1,784 lines: work by\n1. **agent** · 24/24 pass — Hang a festoon of warm bulbs from the van's gutter out to a driftwood pole, add the doorway, cabin and festoon lights, make the lantern flicker, and replace the old heading box and hint line with the finished page chrome\n1. **agent** · 24/24 pass — Keep the camera out of the sand and out of every solid object, gliding round them rather than stopping, and fit the opening view so the van and camp stay clear of the page panels at any window size. That fitted view is a\n1. **agent** · 24/24 pass — Fix six things on the van and the camera: dusty tyres, a hole in the van's sun shadow, wheels with nothing holding them to the body, a door step and rear bumper that hang in the air, and panning that can wander off forev\n1. **agent** · 24/24 pass — Fix five things: the table's foot rails hang in the air, the driftwood has two sharp spikes sticking out of it, the rear bumper and the other rounded parts come out larger than their sizes say, the sand pattern runs in l\n1. **agent** · 24/24 pass — Close the side windows completely. Right now each pane of glass is smaller than its opening, so there is a gap all the way round between the glass and the rubber reveal. The lit cabin shows through it as thin bright seam",
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
        ]
      },
      {
        "label": "Argon 3D Assets",
        "type": "html",
        "file": "scenes/camper-van/argon.html",
        "notes": "# Argon 3D Assets\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/24)\n\n- **The van's painted body reflects light more sharply than the matte sand surface** — The body panels look as chalky and flat as the sand around them, with no glint or sheen anywhere on the paint, so the van reads as unpainted matte rather than a lacquered vehicle.\n- **The van's windows read as darker or more reflective than the surrounding body panels** — The windows glow warm yellow and read brighter than the cream and green panels around them, rather than as dark glass or as reflective surfaces.",
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
        ]
      },
      {
        "label": "Redesign 3D Assets",
        "type": "html",
        "file": "scenes/camper-van/assets/index.html",
        "notes": "# Redesign 3D Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive. What goes up is the van (Meshy mesh, not decimated, with the door leaf rebuilt at the same 100 degree swing), real rippled sand with a wet edge, an HDRI sky with real clouds, a sea with two animated normal layers and shore foam, and Poly Haven props for the lantern, table, thermos, driftwood, bucket, shell, rocks and grass. The van is about 2M triangles and its far side has a texture artifact, so keep viewport samples low and the camera on the door side. All assets are CC0 (Poly Haven, ambientCG).\n\n## Review — minor_edits\n\n> Very good task! Congrats\n\n## Turns (15)\n\n1. **agent** · 21/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Set up the project and replace the beach page's primitive scene with the two prepared models: the camper van and the camp scene \n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach scene its real sky and evening lighting: an HDRI sky dome, an image-based lighting environment built from the sam\n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach scene its colour pipeline and its painted surfaces: the frame is rendered in linear light, glows round its bright\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the beach its sand: a material for the dunes and the beach that blends dry rippled sand into damp sand towards the sea, lay\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the scene its sea, give the page a height lookup for the sand, and start the test suite with a support module and the two d\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Give the page its interface: a title panel, a hint, a dock of three buttons, a conditions panel and a loading screen, in warm da\n1. **agent** · 23/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Wire up the camera and the dock: fit the lens to the window, frame the van so no panel covers it, keep the eye above the dunes, \n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Fix two bugs in the van framing, then extend the test support module and add four tests. index.html is 1,312 lines and tests/sup\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Add the last two helpers to the test support module and the last four tests. tests/support/scene.js is 383 lines; work by target\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Mirror the headland in the sea so the mountain and the water join naturally: at the moment the headland stops at the waterline i\n1. **agent** · 24/24 pass — Make the changes as a sequence of small file edits rather than drafting them in full first. Paint both van doors the body's green, open the far door as well as the near one, and make both leaves fill the doorway. index.h\n1. **agent** · 24/24 pass — Make the change as one small file edit. The sea's reflection of the headland is drawn into reflTarget, a WebGLRenderTarget created in the headland reflection section with the option samples set to 4, a multisampled targe\n1. **agent** · 24/24 pass — Make the change as a few small file edits inside the sea shader's seaSurface() in SEA_FRAG_HEAD, and nothing else. The water's reflections slide sideways as one sheet, and far out the surface shows large two-tone patches\n1. **agent** · 24/24 pass — Make the changes as a set of small file edits in index.html: two lines in the sea shader, a contact-shadow term for the sand, and a fold-away conditions panel for narrow screens. index.html is 1,427 lines; work by target\n1. **agent** · 24/24 pass — Make the change as three small edits in index.html: a block inside the campReady callback, one added replace in gradeVan's fragment hook, and a shadow-only plate after the lantern light. The front bumper hangs in the air",
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
        "label": "Argon 3D Primitive",
        "type": "html",
        "file": "scenes/treehouse/argon.html",
        "notes": "# Argon 3D Primitive\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/24)\n\n- **The rope bridge's walkway hangs lower at mid span than at the two platforms it connects rather than running flat and level** — The bridge runs as a steep gangway down from the middle deck to the lower one, so its middle stays well above the deck it lands on instead of dipping below both ends.\n- **The three platforms are offset to different sides of the trunk rather than stacked in one vertical column on the same side** — All three decks are full rings centred on the trunk, so they stack as one concentric column with nothing leaning to one side or another.",
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
        ]
      },
      {
        "label": "Redesign 3D Primitive",
        "type": "html",
        "file": "scenes/treehouse/primitive/index.html",
        "notes": "# Redesign 3D Primitive\n\n## Developer notes\n\nI kept the idea of the AI scene but rebuilt it so it works like a real treehouse: one oak trunk, three decks at different heights on different sides, a sagging slat bridge with landings, and ladders that rest on the deck edges. Everything is primitives with procedural noise, voronoi and wave shaders, no image files at all. In the HTML each deck drags up or down and the bridge and ladders rebuild live, with limits so nothing collides. If you change deck heights, keep the drag limits and the bridge rebuild in sync.\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Designer HTML reuse — ok\n> • Three.js imports — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • env_probe — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): 92.9% similarity (color=87.3%, chroma=100.0%, lighting=95.1%, texture=99.9%).\n\n## Turns (7)\n\n1. **agent** · 18/24 pass — Get rid of the need for any build step, extra files or internet connection for the index.html to function. Update Three.js to r159, apply the same lighting to the objects, add some thickness to the ground, and remove the\n1. **agent** · 19/24 pass — Reduce the middle deck to just above the low deck and adjust the drag limits and rebuild of bridge to reflect this. Display the bridge clearly between the decks without touching the trunk; the handrails are made of thick\n1. **agent** · 20/24 pass — Let's light the trunk up right. Right now, it's flat and brown, and reads like cardboard tube. In the first view, the sunlight should shine onto the trunk with a distinct bright side and a shaded side, and the platforms \n1. **agent** · 21/24 pass — Restyle the top left panel as a warm cream card with the icon of a green leaf, \"Single trunk treehouse\" text label, large serif text \"The Old Oak\" title, short drag instructions and drag live heights with coloured dots f\n1. **human** · 24/24 pass — Re-made index.html in my own code with the concept's treehouse: the oak, three decks on different sides, the slatted bridge between two lower decks, the ladders and the cabin and meadow. Renamed the bridge to a new locat\n1. **agent** · 24/24 pass — The overall style should remain the same, here's what you need to do: add “full” camera exploration (drag/pan in all directions, with the tree as pivot, no clipping through objects or ground, sensible camera bounds, and \n1. **human** · 24/24 pass — The two swing rope loops were smaller than the branch and were vertical on a sloping branch, part of each loop and the ends of the rope were inside the bark. Each loop square to the branch and slightly wider so that it r",
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
        ]
      },
      {
        "label": "Argon 3D Assets",
        "type": "html",
        "file": "scenes/treehouse/argon.html",
        "notes": "# Argon 3D Assets\n\nSingle-shot model output, before any redesign turns.\n\n## Failed rubrics (2/24)\n\n- **The rope bridge's walkway hangs lower at mid span than at the two platforms it connects rather than running flat and level** — The bridge runs as a steep gangway down from the middle deck to the lower one, so its middle stays well above the deck it lands on instead of dipping below both ends.\n- **The three platforms are offset to different sides of the trunk rather than stacked in one vertical column on the same side** — All three decks are full rings centred on the trunk, so they stack as one concentric column with nothing leaning to one side or another.",
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
        ]
      },
      {
        "label": "Redesign 3D Assets",
        "type": "html",
        "file": "scenes/treehouse/assets/index.html",
        "notes": "# Redesign 3D Assets\n\n## Developer notes\n\nSame camera, layout, palette and UI as the primitive, nothing added or removed. What went up: Meshy trunk and cabin, Poly Haven wood, bark, rope, linen, grass, flowers, rocks, stump, log, bucket and crate, plus a partly cloudy HDRI sky. Deck boards, ledgers and braces are cut to the real bark shape and the lashings sit on the bark, so nothing sinks into the trunk. Keep the grass alpha maps linked and the HDRI sun extraction off, or the grass turns into dark cards and the canopy gets a second shadow. All assets are CC0 (Poly Haven, ambientCG).\n\n## Review — minor_edits\n\n> Result: APPROVED\n> \n> What passed:\n> • Project structure — ok\n> • External CDNs / URLs — ok\n> • Asset files — ok\n> • Rubrics — ok\n> • Number of turns — ok\n> • Test runner — ok\n> • One test per file — ok\n> • App in the browser — ok\n> • Automated tests — ok\n> \n> No blocking issues found.\n> \n> Visual Review (estimate): No screenshot_url from app_runtime (smoke did not produce a screenshot).\n\n## Turns (5)\n\n1. **agent** · 0/24 pass — The Old Oak, turn 1: switch off camera panning in index.html, and start the test suite: package.json, a Dockerfile and the first five tests. Right now OrbitControls keeps its default mouse map, so a right-button drag sli\n1. **agent** · 0/24 pass — The Old Oak, turn 2: take the tree emoji out of the title in index.html, and add the five tests about the platforms. The title card opens with a tree emoji in front of \"The Old Oak\". .rl-gym/AGENTS.md says \"No emojis as \n1. **agent** · 0/24 pass — The Old Oak, turn 3: keep the camera above the ground in index.html, and add the six tests about the rope bridge and the ladders. controls.maxPolarAngle is Math.PI * 0.55, past level, so the camera may drop below the hei\n1. **agent** · 24/24 pass — The Old Oak, turn 4: the last five tests of the suite. Only new files; index.html doesn't change. The suite from turns 1 to 3 covers the scene, the camera, the trunk, the platforms, the bridge and the ladders. These five\n1. **human** · 24/24 pass — After turns 1 to 4 the model's page handled better (no pan, no emoji in the title, the camera kept above the ground) and the test suite was in place, but the page still used none of the designer's package: the tree was a",
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
        ]
      }
    ]
  }
];
