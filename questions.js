const questions = [
    {
        // N/S
        question: "You're exploring a new city. What excites you most?",
        answers: [
            { text: "Finding unique, off-the-beaten-path spots with a story", types: ["N"] },
            { text: "Seeing the famous landmarks and learning their history", types: ["S"] }
        ]
    },
    {
        // F/T
        question: "How do you define fairness?",
        answers: [
            { text: "Equality: to treat everyone equally", types: ["T"] },
            { text: "Equity: to treat different people in different ways according to their unique situations", types: ["F"] }
        ]
    },
    {
        // E/I
        question: "How do you like to spend a free evening?",
        answers: [
            { text: "Join friends for a night out or attend a social event", types: ["E"] },
            { text: "Relax at home, maybe catching up on hobbies or a good book", types: ["I"] }
        ]
    },
    {
        // J/P
        question: "You’re working on a big project. How do you tackle it?",
        answers: [
            { text: "Create a step-by-step plan to stay on track and meet deadlines", types: ["J"] },
            { text: "Focus on analyzing each part to improve its efficiency", types: ["P"] }
        ]
    },
    {
        // E/I
        question: "Your interests are:",
        answers: [
            { text: "Vast: I am interested in a little bit of everything", types: ["E"] },
            { text: "Narrow: I like to choose particular interests and research them thoroughly", types: ["I"] }
        ]
    },
    {
        // N/S
        question: "When you’re planning a vacation, what’s most important?",
        answers: [
            { text: "The possibility of adventure and exploring something new", types: ["N"] },
            { text: "The detailed itinerary to make sure you see everything", types: ["S"] }
        ]
    },
    {
        // J/P
        question: "Does punctuality matter?",
        answers: [
            { text: "No, there is not a massive difference between 1:30 and 1:45; it is just a rough range.", types: ["P"] },
            { text: "Yes, 1:30 means 1:30, not 1:45. I get annoyed when other people regard punctuality as unimportant", types: ["J"] }
        ]
    },
    {
        // N/S
        question: "When you recall your student life, what do you care about the most?",
        answers: [
            { text: "Grades (admissions to schools, grades achieved, etc.)", types: ["S"] },
            { text: "Life experiences", types: ["N"] }
        ]
    },
    {
        // F/T
        question: "You’re trying out a new hobby. What’s your approach?",
        answers: [
            { text: "Exploring what feels rewarding or personally enriching as you learn", types: ["F"] },
            { text: "Researching the most effective methods and testing different strategies", types: ["T"] }
        ]
    },
    {
        // N/S
        question: "You’ve been given the task to brainstorm ideas for a new product. What do you focus on?",
        answers: [
            { text: "Unconventional ideas that could push boundaries", types: ["N"] },
            { text: "How it can be practical and useful right now", types: ["S"] }
        ]
    },
    {
        // F/T
        question: "You’re tasked with decorating a shared space. What’s your main priority?",
        answers: [
            { text: "Making it cozy and inviting for everyone to enjoy", types: ["F"] },
            { text: "Keeping it adaptable for different needs or occasions", types: ["T"] }
        ]
    },
    {
        // E/I
        question: "You’re at a party, how do you prefer to engage?",
        answers: [
            { text: "Mingling and chatting with everyone you can", types: ["E"] },
            { text: "Having deep conversations with a few close people", types: ["I"] }
        ]
    },
    {
        // J/P
        question: "You’re starting a new fitness routine. What motivates you?",
        answers: [
            { text: "Setting measurable goals and tracking your progress", types: ["J"] },
            { text: "Understanding the mechanics and how to improve your performance", types: ["P"] }
        ]
    },
    {
        // N/S
        question: "When you listen to other people:",
        answers: [
            { text: "It is often difficult for me to understand the implication, reasoning or metaphors used by other people", types: ["S"] },
            { text: "I can understand the subtext", types: ["N"] }
        ]
    },
    {
        // E/I
        question: "How do you feel when you are noticed by other people?",
        answers: [
            { text: "I love being the centre of attention. I enjoy feeling like I am in the spotlight", types: ["E"] },
            { text: "Most of the time I try to avoid being the centre of attention", types: ["I"] }
        ]
    },
    {
        // F/T
        question: "Which of these ideas of law are you more inclined to?",
        answers: [
            { text: "The law should be strictly enforced, impartial, and treat everyone equally", types: ["T"] },
            { text: "The law should be humane and allow for special cases", types: ["F"] }
        ]
    },
    {
        // J/P
        question: "You have to finish a task to hand in tomorrow that takes 5 hours. At that moment, a friend invites you to play your favorite game. What do you do?",
        answers: [
            { text: "I turn them down and finish the task first", types: ["J"] },
            { text: "I play first and then finish the task", types: ["P"] }
        ]
    },
    {
        // E/I
        question: "Regarding your daily life and social events, you tend to:",
        answers: [
            { text: "Post on social media", types: ["E"] },
            { text: "Only share with a few friends or family", types: ["I"] }
        ]
    },
    {
        // J/P
        question: "Which of these tasks would you choose from your boss?",
        answers: [
            { text: "Task 1: The process is clear, but the difficulty is beyond your abilities", types: ["J"] },
            { text: "Task 2: The difficulty is just right for you, but process of the task is unknown and you need to figure it out while doing it", types: ["P"] }
        ]
    },
    {
        // F/T
        question: "What are you normally like in relationships?",
        answers: [
            { text: "Frank, sincere, and I express my thoughts directly", types: ["T"] },
            { text: "Evasive, thoughtful, and I express my thoughts after deliberation", types: ["F"] }
        ]
    },
    {
        // N/S
        question: "What is the most exciting and satisfying moment when implementing a plan of yours?",
        answers: [
            { text: "The first day of the plan", types: ["N"] },
            { text: "The last day of the plan", types: ["S"] }
        ]
    },
    {
        // E/I
        question: "What do you focus most of your attention on?",
        answers: [
            { text: "I focus on the outer world", types: ["E"] },
            { text: "I focus my attention internally. I dedicate a lot of my time to introspection", types: ["I"] }
        ]
    },
    {
        // J/P
        question: "When you have to do a task, you often:",
        answers: [
            { text: "Complete it as soon as possible", types: ["J"] },
            { text: "Complete it at the last moment before the deadline", types: ["P"] }
        ]
    },
    {
        // F/T
        question: "When a friend talks to you about a problem and wants advice, you tend to:",
        answers: [
            { text: "Think from your friend's point of view", types: ["F"] },
            { text: "Think from an objective point of view", types: ["T"] }
        ]
    },
    {
        // F/T
        question: "What is more difficult for you?",
        answers: [
            { text: "Conscientiously pander to others", types: ["T"] },
            { text: "Having to say things that you know will hurt the other person", types: ["F"] }
        ]
    },
    {
        // J/P
        question: "Which of these attitudes toward goals describes you best?",
        answers: [
            { text: "Once I set a goal, I will do my best to accomplish it", types: ["J"] },
            { text: "I normally can't achieve my goals and keep changing them", types: ["P"] }
        ]
    },
    {
        // E/I
        question: "When watching a movie, how do you engage with it?",
        answers: [
            { text: "React out loud, commenting on scenes as they happen or laughing along", types: ["E"] },
            { text: "Absorb the experience quietly, focusing deeply on the story", types: ["I"] }
        ]
    },    
    {
        // N/S
        question: "Which company would you prefer to work for?",
        answers: [
            { text: "A company with structured rules and a clear process", types: ["S"] },
            { text: "A company that encourages creativity and innovation", types: ["N"] }
        ]
    },
    {
        question: "You find a strange door in the forest. What do you do?",
        answers: [
            { text: "I open it right away, excited to see what adventure or mystery lies behind!", types: ["E", "F"] }, // EF
            { text: "I open the door after carefully scanning the surroundings and deciding it's safe enough to explore.", types: ["E", "J"] }, // EJ
            { text: "I don’t open it, but I cautiously examine the door and its surroundings, trying to understand what it’s about without going inside.", types: ["I", "J"] }, // IJ
            { text: "I walk away immediately, feeling uneasy and thinking it's best not to mess with something that gives off bad vibes.", types: ["I", "F"] } // IF
        ]
    },
    {
        question: "You’ve inherited an old mansion from a distant relative. What do you do first?",
        answers: [
            { text: "Immediately start brainstorming ways to turn the mansion into a creative space, like an art gallery or co-working hub.", types: ["E", "N"] }, // EN
            { text: "Host a spontaneous open house event, inviting people over to explore and share the excitement.", types: ["E", "P"] }, // EP
            { text: "I investigate the mansion’s history to learn about its past owners and uncover any hidden secrets.", types: ["I", "N"] }, // IN
            { text: "Take a private tour of the mansion by myself, reflecting on how this new inheritance might change things for me.", types: ["I", "P"] } // IP
        ]
    },
    {
        question: "You’re at an amusement park with friends, and they want to go on a ride you're not sure about. What do you do?",
        answers: [
            { text: "I stick to the rides I know and feel comfortable with, even if others want to try something new.", types: ["I", "S"] }, // IS
            { text: "I analyze the safety of the ride, checking the mechanics and making sure it's trustworthy before joining.", types: ["I", "T"] }, // IT
            { text: "I jump right into the thrill, joining my friends on the ride for the fun of it.", types: ["E", "S"] }, // ES
            { text: "I organize the group and suggest a ride that balances everyone's comfort level while keeping things exciting.", types: ["E", "T"] } // ET
        ]
    },
    {
        question: "You’re visiting an unfamiliar city and have an entire day to yourself. What do you do?",
        answers: [
            { text: "Wander the streets looking for artistic and creative spots, like galleries or live performances.", types: ["N", "F"] }, // NF
            { text: "Visit historical landmarks and museums, learning about the city’s past and its cultural significance.", types: ["N", "J"] }, // NJ
            { text: "Find a cozy café or park to people-watch and enjoy a relaxed atmosphere.", types: ["S", "F"] }, // SF
            { text: "Plan out the day with a list of must-see tourist attractions to make the most of your time.", types: ["S", "J"] } // SJ
        ]
    },
    {
        question: "You’re participating in a team-building treasure hunt. How do you contribute?",
        answers: [
            { text: "I think outside the box, offering creative suggestions for how we might solve the clues.", types: ["N", "P"] }, // NP
            { text: "I work to decipher each clue logically, ensuring we stay on the right path and don’t waste time.", types: ["N", "T"] }, // NT
            { text: "I’m the first to jump into action, finding physical clues and encouraging the team to keep moving.", types: ["S", "P"] }, // SP
            { text: "I focus on organizing the team’s efforts, making sure we follow a clear plan to win.", types: ["S", "T"] } // ST
        ]
    },
    {
        question: "You’ve been asked to create a new board game. What’s your approach?",
        answers: [
            { text: "A strategic war game where players have to outsmart each other to win territories.", types: ["T", "J"] }, // TJ
            { text: "A flexible card game where the rules change throughout, keeping players on their toes.", types: ["T", "P"] }, // TP
            { text: "A cooperative game where players have to work together to solve a mystery or complete a quest.", types: ["F", "J"] }, // FJ
            { text: "A storytelling game where players create their own characters and explore imaginative scenarios.", types: ["F", "P"] } // FP
        ]
    },
    {
        question: "Schrödinger's Cat is in a box. Do you open the box to check if the cat is alive, or leave it closed?",
        answers: [
            { 
                text: "<strong>Open the box</strong><br><small><em>(Collapse the wave function! Your particle persona will be determined by your answers)</em></small>", 
                types: ["collapse"] 
            },
            { 
                text: "<strong>Leave it closed</strong><br><small><em>(Embrace uncertainty! See which two personas exist in superposition as your quantum alter-egos)</em></small>", 
                types: ["superposition"] 
            }
        ]
    }
]