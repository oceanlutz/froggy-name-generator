<div align="center">
  
  <h1>Froggy Name Generator 🐸</h1>
  
  <p>
    A generator for creating a custom name based on your name and birthday!
  </p>

<!--badges and links-->
  <p>
    <a href="https://github.com/oceanlutz/froggy-name-generator/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/oceanlutz/froggy-name-generator" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/oceanlutz/froggy-name-generator" alt="last update" />
    </a>
    <a href="https://github.com/oceanlutz/froggy-name-generator/network/members">
      <img src="https://img.shields.io/github/forks/oceanlutz/froggy-name-generator" alt="forks" />
    </a>
    <a href="https://github.com/oceanlutz/froggy-name-generator/stargazers">
      <img src="https://img.shields.io/github/stars/oceanlutz/froggy-name-generator" alt="stars" />
    </a>
    <a href="https://github.com/oceanlutz/froggy-name-generator/issues/">
      <img src="https://img.shields.io/github/issues/oceanlutz/froggy-name-generator" alt="open issues" />
    </a>
    <a href="https://github.com/oceanlutz/froggy-name-generator/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/oceanlutz/froggy-name-generator" alt="license" />
    </a>
  </p>

  <h4>
    <a href="https://github.com/oceanlutz/tic-tac-toe/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/oceanlutz/tic-tac-toe/issues/">Request Feature</a>
  </h4>
</div>
<br />
<br />

## About
  This is another very early project in which I wanted to assign random names to someone based on their own current name and date of birth. The name given to them is arbitrarily considered by me to be ✨ Froggy Aesthetic ✨ and the method of deciding the name for someone is actually way more complex than I initially planned for it to be. I did in fact literally sit in my room and think of 48 different jobs that could be assigned based on someone's zodiac sign and blood type. Okay so before you think the blood type thing is weird, its a pretty common method of deriving personality traits from others in several countries in East Asia at the very least. I also used formulas derived directly from numerology in order to determine the first and last froggy name. I never bothered calculating the probablility of two people recieving the exact result based on the value of their names, matching blood types, and dates of birth, but if I had to guess I would say that it would be quite low. 

### Packages and Cloning

This project uses Bootstrap 4.4.1, which itself is using Popper JS 1.16.1 and Jquery 3.7.1. Run the commands below to clone and also install dependencies.

Clone (in current directory)
```bash
git clone https://github.com/oceanlutz/froggy-name-generator.git
```
Go to the project directory
```bash
cd froggy-name-generator
```

Install Dependencies
```bash
npm install
```
To run afterwards, just open the HTML in an internet browser. 

### Usage 
For anyone curious, here's the current list of names and jobs, as variables I've created:
```javascript
const froggyFirst = ['Dart', 'Jules', 'Strawberry', 'Gill', 'Portobello', 'Parasol', 'Forest', 'Hops', 'Dew', 'Stars', 'Hyacinth', 'Lotus'];
const froggyLast = ['Bullhorn', 'Fernsby', 'Quimbly', 'Dryland', 'Leafbury', 'McTadpole', 'Woodsworth', 'Mossington', 'Glasswood', 'Paddington', 'Morchella', 'Chanterelle'];
const froggyJobAries = ['Teacher', 'Lilypad Inspector', 'Forest Guide', 'Actor'];
const froggyJobTaurus = ['Doctor', 'Perfumer', 'Chef', 'Writer'];
const froggyJobGemini = ['Lawyer', 'Journalist', 'Chemist', 'Fashionista'];
const froggyJobCancer = ['Mushroom Collector', 'Therapist', 'Free Food Organizer', 'Social Worker'];
const froggyJobLeo = ['Movie Director', 'Lifeguard', 'Soothsayer', 'Hip-Hop Artist'];
const froggyJobVirgo = ['Nuclear Physicist', 'Biologist', 'Engineer', 'Black Market Dealer'];
const froggyJobLibra = ['Beautician', 'Painter', 'Community Leader', 'Potioncrafter'];
const froggyJobScorpio = ['Sculptor', 'Adventurer', 'Witch', 'Librarian'];
const froggyJobSagittarius = ['Botanist', 'Ship Captain', 'Philosopher', 'Actor'];
const froggyJobCapricorn = ['Gardener', 'Architect', 'Potter', 'Surgeon'];
const froggyJobAquarius = ['Mycologist', 'Photographer', 'Inventor', 'Professor'];
const froggyJobPisces = ['Archaeologist', 'Poet', 'Marine Biologist', 'Cat Foster-Parent'];
```

### Possible future plans
- Possibly change the names if I think of better ones
- Make it look much more colorful (direly needed)
- Add more random features I think of
- Put on an actual site for someone to navigate to
- Use more recent Bootstrap version and get rid of Jquery
- Add actual uses for the other categories 

### Contact Me
Ocean Lutz - oceanlutz@pm.me
