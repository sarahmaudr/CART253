# Reflective Journal

## 2026-09-11

Making this website with Markdown and Github was a great introductory exercise for this class. Having spent a year studying computer science before starting this program, I was already familiar with some of the basics of Markdown syntax. However, this was my first time including local images and using file paths to link separate pages into a repository.

The Markdown Cheat Sheet made the assignment easier. I liked how well everything was explained and that everything I needed was on a single page. I will definitely be using it again as a reference.

Although I have used VS Code in the past, I did not know we could view a live preview of our Markdown files directly inside the editor. It made checking my formatting so much easier before going to the next step.

The main challenge was using the correct file path to link my banner image. I wasn't sure how to structure the link even with the cheat sheet, but I eventually figured it out, and now that I know how, it is pretty easy.
I hope the future audience for my work will think my website is well-organized and clear. As I move forward in this course, I look forward to exploring creative web prototyping and using new tools.

![Website Preview](images/Screenshot%202026-09-11.png)

## 2026-09-19

Working on these three prototypes was a really cool way to explore different design concepts. I ended up making a dragonfly for my representative piece, a geometric 'mirror' design for my abstract one and a transforming flower for the weird concept. It was a great way to see how interactive elements can completely change a project. 

What surprised me the most was how much 'mouvement' you can get out of simple geometry. For my abstract prototype, I drew multiple triangles that all meet in the center of the page. I coded each triangle to change to a different color as the mouse moves, which ended up creating some kind of 'mirror effect' that looks like it's reflecting lights.

The coolest part of this project was working on the weird prototype. I started with a normal flower, but as you move the cursor down the page, its eyes turn red and vampire teeth appear. It was really fun to play with the element of surprise.

The main challenge was the math behind the abstract piece and making sure all the triangle were alligned.

I hope people who look at my prototypes enjoy enteracting with them and find the transitions unexpected. As I move forward, I would love to develop the abstract mirror prototype further, maybe by turning it 3D.

![Website Preview](images/Mirrors.png)

## 2026-09-26
With the 3 prototypes, I explored visual motion and user interactivity.
What surprised me most in my 'My head is on fire' project was using 'random()' creates unpredictable (or almost) results. It makes the fire in my project look more real, because fire is unpredictable. In contrast, in my 'nightmare' project, 'mouseX' and 'colorMode(RGB, 1000)' are controlled and give the expected result.

The coolest discovery was seeing how canvas works. Leaving background("black") in setup() allowed the flame and smoke shapes to accumulate over time, building up a dense texture on top of the character's head. In contrast, for the 'celebration' project, the 'background()' needed to be inside 'draw()' to avoid streaks. The hardest part for me was to figure that out!

I hope anyone viewing my work experience both humor and suspense throughout my different pieces. Moving forward, I would love to find a way to, for example, make the faces in 'nightmare' appear with a click of the mouse instead of its movement, and make the confetti fall more naturally.

![Website Preview](images/Celebration.png)

## 2026-10-04
I made three interactive prototypes for this assignment using conditional logic. Across all three, my goal was to bring static images 'to life'. In 'Shy Ghost', I used 'mouseIsPressed' for direct state changes. In 'Disgusted Plant', I added dynamic offsets (offsetX) so the plant could turn away in disgust. Finally, in 'The Eclipse', I used the distance between the moving sun and fixed moon to trigger a full day-to-night environment shift. 
What surprised me the most is how many changes and personality could appear from simple conditional statements. 

The trickiest part of the process for me was the logic of the background in 'the eclipse'. I was trying to make it change when the two circles overlapped by treating 'background' as a variable. It would not work, so I had to create the variable 'skyFill'. 

I hope viewers feel a sense of discovery when interacting with these pieces. If I were to develop this work further, I would love to merge some of the mechanics into one scene where the disgusted plant could live through an eclipse.

![Website Preview](images/eclipse.png)

## 2026-10-18
My three prototypes are all on a Harry Potter theme. Each one reacts to something different, a click, a key or a pause.

The biggest surprise was in 'Lumos!'. My light kept blinking and I could not figure out why. The problem was that I had written 'mousePressed' inside 'draw()'. I learned that event functions are never called by me but by P5, so I do not need to called them in 'draw()'. The 'Sorting Hat' pushed this idea further. It only reacts when the user does nothing, so waiting becomes the interaction.

My favorite part was how much mood a few lines can create. In 'Casting Spells', a wrong letter gives a red screen and an explosion, while a finished spell gives purple and sparkles. It creates two very different outcomes. In 'Lumos!', the flapping snitch wings are a close second, since sin() and 'frameCount' make them move all by themselves.

What I found the hardest was knowing where each piece of code belongs. 'random()' crashed my sketch outside of 'setup()' in 'Lumos!'. The Enter key only worked with 'key === "Enter"', not with 'keyCode' in 'Casting Spells'. 

I hope people feel a little bit of magic when they play, and maybe a bit of stress in the spell game. Next, I would like to resize the light with the mouse wheel, add a timer to 'Casting Spells' and give each house its own color.

![Website Preview](images/spells.png)

## 2026-10-25
For this week's prototype I decided to make all three prototypes on a Halloween theme. Each one uses functions in a different way: one creates data, one draws many copies of the same thing, and one picks a random message.

The biggest surprise was in 'Ghosts'. I had never thought that a function could return a whole object. 'createGhost' returns a position, a brightness and a fade speed, so I can keep ten ghosts in an array and loop through them. At first my ghosts did not fade at all. The problem was that I had put the line that changes the brightness inside the 'if', so it only ran when the ghost was already out of range. I learned that the change must always happen, and only the reversal belongs in the condition.

My favorite part was how much one function can do. In 'The Pumpkin', I wrote 'drawPumpkin(x, y)' once and made a whole wallpaper. Then I replaced 22 lines with five loops, and the picture stayed exactly the same. That was very satisfying and it showed me what refactoring is. In 'Ghosts', 'random()' gives every ghost its own rhythm, even if they use the same code.

What I found the hardest was understanding parameters. In 'Spooky Messages', I wrote 'drawMessage(words, x, y, size)' but I kept a fixed number for the text size and used 'message' inside, so my texts all landed in the same place. I also mixed up 'messages' (the list) and 'message' (the sentence shown), and all the sentences appeared at once. I learned to check that every parameter really replaces a number or a variable inside the function.

I decided not to make anything move, to keep the prototypes simple. I hope people enjoy the spooky mood, and maybe notice how a small function can fill a whole screen. Next, I would like to make one ghost move across the screen in 'Ghosts!!!' and build the messages from separate lists of words in 'Spooky Messages!".

![Website Preview](images/pumpkin.png)