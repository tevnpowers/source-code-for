<!-- src/routes/the-perfect-sandwich/+page.svelte -->
<script lang="ts">
	import hero  from '$lib/assets/images/peanut-butter-grape-jelly.png';
	import sandwich_snippet_dark from '$lib/assets/images/the-perfect-sandwich/sandwich-snippet-light.png';
	import bread_ingredient_snippet_dark from '$lib/assets/images/the-perfect-sandwich/bread-ingredient-snippet-light.png';
	import type { PageProps } from './$types';
	import { transport } from '../../hooks';
	import CreateSandwich from '$lib/components/sketches/CreateSandwich.svelte';

	let { data }: PageProps = $props();

	/*
	// Peanut Butter and Jelly (grape)
	let pbj = new Sandwich('peanut butter and jelly', 'room temp');

	// Ingredients
	let white_bread = new Bread('white', 'sliced', false, "#eec07b");

	let peanut_butter = new Ingredient('peanut butter', 'spread', 2, '#b86b1f');
	let jelly = new Ingredient('jelly (grape)', 'spread', 3, '#7b039c');

	// Build sandwich
	pbj.addBread(white_bread);
	pbj.addIngredient(jelly);
	pbj.addIngredient(peanut_butter);
	pbj.addBread(white_bread);


	// Chicken club sandwich
	let chicken_club = new Sandwich('chicken club', 'toasted');

	let pretzel_bun = new Bread('pretzel bun', 'bun', true, "#b86b1f");

	let ketchup = new Ingredient('ketchup', 'condiment', 2, '#ff2600');
	let mayo = new Ingredient('mayo', 'condiment', 2, '#feffff');
	let mustard = new Ingredient('mustard', 'condiment', 2, '#fefb00');
	let chicken_breast = new Ingredient('chicken breast', 'meat', 2, '#fff3cf');
	let bacon = new Ingredient('bacon', 'meat', 2, '#ca4e3d');
	let cheddar = new Ingredient('cheese (cheddar)', 'cheese', 2, '#ffbe1f');
	let lettuce = new Ingredient('lettuce', 'produce', 2, '#009d20');
	let tomato = new Ingredient('tomato', 'produce', 2, '#ff1e00');
	let onion = new Ingredient('onions (grilled)', 'produce', 2, '#e8c9be');

	// Build sandwich
	chicken_club.addBread(pretzel_bun);
	chicken_club.addIngredient(ketchup);
	chicken_club.addIngredient(mayo);
	chicken_club.addIngredient(mustard);
	chicken_club.addIngredient(lettuce);
	chicken_club.addIngredient(tomato);
	chicken_club.addIngredient(onion);
	chicken_club.addIngredient(chicken_breast);
	chicken_club.addIngredient(cheddar);
	chicken_club.addIngredient(bacon);
	chicken_club.addBread(pretzel_bun);
	*/
</script>

<article>
	<hgroup>
		<h1>source code for<br><span class="subtitle">the perfect sandwich</span></h1>
		<p>by Tev'n Powers</p>
	</hgroup>
	<figure class="hero-img">
		<img src={hero} alt="hero">
		<!-- <P5Sketch /> -->
		<figcaption>Peanut Butter & Jelly (v0) by Tev'n Powers</figcaption>
	</figure>
	<p>If you can make a sandwich, you can write software. Many people assume that a strong math or quantitative skillset is required to write code or be a computer programmer. But I really do believe if you can instruct someone in making a sandwich you can write a computer program.</p>
	<p>You may be familiar with the classroom exercise where a teacher asks one or more students to provide instructions to make a peanut butter and jelly sandwich. Naturally the instructions will be somewhat vague, with the student assuming the teacher’s common sense will fill in the gaps. However, the goal of this exercise is to teach the importance of precision and specificity.</p>
	<p>Let’s say we have all of the necessary ingredients to make the sandwich on a table in front of us: a loaf of bread, a jar of jelly, a jar of peanut butter and two butter knives. An instruction to “put the jelly on the bread” may seem like a logical first step in making our sandwich. But, taking the instruction literally, a teacher during this exercise might take the jar of jelly and set it on top of the loaf of bread. To accomplish what the student actually intended, the instruction to “put the jelly on the bread” should be broken down into a few more specific instructions:</p>
	<ol>
		<li>Open the loaf of bread</li>
		<li>Remove one slice of bread from the loaf</li>
		<li>Place the slice of bread on the table</li>
		<li>Open the jar of jelly</li>
		<li>Dip one knife into the jelly</li>
		<li>Scoop jelly out of the jar with the knife</li>
		<li>Spread the jelly with the knife on the side of the bread slice facing up</li>
	</ol>
	<p>The real work of a software engineer, computer programming aside, is to break  down a complex problem into a series of smaller problems that can be solved with very simple and precise actions. Spreading jelly on a slice of bread, an instruction that we might think of as a single step in our process, can be broken down into the above seven more granular and specific instructions that leave less room for (mis)interpretation. If we chain together more of these precise instructions, we can eventually instruct a computer/robot to make the entire sandwich. We’ll do that (virtually) in this blog post.</p>
	<p>Whenever new programmers ask me for advice to improve their coding skills, I usually tell them “solve your problem in English first, then solve it in the programming language of your choice”. What I mean by this is that your first task when attempting to solve a problem via a computer program is to understand how you would manually instruct yourself or someone else in English (or your native language) to solve the same problem. In the case of the peanut butter and jelly sandwich, the instructions we listed above satisfy this step. We call this version of the program, written in plain English (or your native language), pseudocode: “Pseudocode is a step-by-step description of an algorithm written in simple English using a code-like structure.”</p>
	<p>The second step is to then translate these instructions from pseudocode into actual code. In this blog series, our programs will be written in a language called <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">Javascript</a> with the help of a library called <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">p5.js</a>.</p>
	<p>A few weeks ago I was setting up a database to support this website. Half jokingly a friend asked “what part of the sandwich is that?” Not one to turn down an opportunity to drag out an analogy, I remarked that the database could be considered your kitchen cabinets, pantry, and refrigerator. It’s where you go to retrieve the items you need to solve your problem. For this exercise, you can assume you are working in a world-class kitchen that contains a robust variety of breads, meats, vegetables, condiments, spreads,  toppings, and other ingredients to build your perfect sandwich. In reality, these items are being retrieved from a SQLite database when you load this webpage.</p>
	<p>Our sandwich consists of a combination of these ingredients, added in layers. To organize the bundle of ingredients that make up our sandwiches, we will define a Processing class. Think of a class as a blueprint or template that can be customized or configured. From the sandwich class, we can create any number of objects that represent specific sandwiches. An object is a specific instance of a class with specific data properties and functionality.</p>
	<figure class="snippet-img">
		<img src={sandwich_snippet_dark} alt="code snippet of a Sandwich class in the Processing programming language">
		<figcaption>code snippet of a sandwich class in Javascript</figcaption>
	</figure>
	<p>For instance, let’s say our class defines a sandwich as having at least one piece of bread and one or more additional ingredients (e.g. meats, vegetables, spreads, and condiments). From this class, we could create one object that represents a peanut butter and jelly sandwich and another object that represents a cheeseburger with lettuce, tomato, and onions.</p>
	<figure class="snippet-img">
		<img src={bread_ingredient_snippet_dark} alt="code snippet of Bread and Ingredient classes in the Processing programming language">
		<figcaption>code snippet of Bread and Ingredient classes in Javascript</figcaption>
	</figure>
	<p>To learn more about object-oriented programming, I recommend Daniel Shiffman’s <a href="https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/6-objects/1-intro" target="_blank" rel="noopener noreferrer">Object-Oriented Programming with ES6</a> tutorial and his series <a href="https://thecodingtrain.com/" target="_blank" rel="noopener noreferrer">The Coding Train</a> for coding with Processing in general.</p>
	<p>Check out the p5.js <a href="https://editor.p5js.org/tevn/sketches/AEBj9aBa3" target="_blank" rel="noopener noreferrer">web editor</a> for the full source code for this blog entry.</p>
	<!--
	<figure class="sketch-container">
		<div class="sandwich-container">
			<SandwichSketch sandwich={pbj} width={600} height={600}/>
		</div>
		<figcaption>Peanut Butter and Jelly (2026) by Tev'n Powers</figcaption>
	</figure>

	<figure class="sketch-container">
		<div class="sandwich-container">
			<SandwichSketch sandwich={chicken_club} width={600} height={600}/>
		</div>
		<figcaption>Chicken Club (2026) by Tev'n Powers</figcaption>
	</figure>
	-->
	<CreateSandwich
		breads={data.breads.map(b => transport.Bread.decode(b))}
		meats={data.meats.map(m => transport.Ingredient.decode(m))}
		seafood={data.seafood.map(s => transport.Ingredient.decode(s))}
		produce={data.produce.map(p => transport.Ingredient.decode(p))}
		cheeses={data.cheeses.map(c => transport.Ingredient.decode(c))}
		condiments={data.condiments.map(c => transport.Ingredient.decode(c))}
		spreads={data.spreads.map(s => transport.Ingredient.decode(s))}
	/>

	<!--
	<div class="sketch-gallery">
		<div class="placeholder"></div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
	</div>
	-->
</article>

<style>
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	hgroup {
		text-align: center;
	}

	h1 {
		font-family: 'JetBrains Mono ExtraBold';
		font-weight: normal;
		color: var(--text-primary);
		line-height: 115%;
	}

	.subtitle {
		color: var(--text-secondary);
	}

	p, figcaption {
		font-family: 'JetBrains Mono Regular';
		color: var(--text-primary);
	}

	p, ol {
		font-size: 20px;
	}
	
	figcaption {
		font-size: small;
	}

	ol {
		font-family: 'JetBrains Mono Italic';
		color: var(--text-primary);
	}

	.hero-img {
		width: 75%;
	}

	.snippet-img {
		width: 100%;
	}

	.snippet-img img {
		border: 1px solid rgba(37, 39, 40, 0.25);
		border-radius: 8px;
		box-shadow: 4px 4px 4px rgba(37, 39, 40, 0.1);
	}

	img {
		max-width: 100%;
	}
	
	.sketch-container {
		width: 75%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.sandwich-container {
		max-width: 100%;
	}

	.sketch-gallery {
		width: 100%;
		display: grid;
		gap: 12px;
		grid-template-columns: repeat(3, 1fr);
	}

	.placeholder {
		height: 250px;
		border: 2px solid var(--text-secondary);
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {

	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.snippet-img {
			width: 85%;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {

	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		article {
			width: 60%;
		}

		.snippet-img {
			width: 75%;
		}
	}
</style>