const questions = [
    {
        question: "After a long week, you prefer to:",
        answers: [
            { text: "Attend a lively social gathering", types: ["E"] },
            { text: "Spend a quiet evening at home", types: ["I"] }
        ]
    },
    {
        question: "When learning something new, you focus more on:",
        answers: [
            { text: "Concrete facts and practical applications", types: ["S"] },
            { text: "Abstract concepts and theoretical possibilities", types: ["N"] }
        ]
    },
    {
        question: "You've been gifted a mysterious box. What do you do?",
        answers: [
            { text: "Carefully examine it from all angles before opening", types: ["S", "J"] },
            { text: "Shake it and guess what's inside", types: ["N", "P"] },
            { text: "Open it immediately to satisfy your curiosity", types: ["E", "P"] },
            { text: "Ask the gift-giver about its contents first", types: ["I", "F"] }
        ]
    },
    {
        question: "When making decisions, you prioritize:",
        answers: [
            { text: "Logic and objective analysis", types: ["T"] },
            { text: "Personal values and how it affects people", types: ["F"] }
        ]
    },
    {
        question: "You prefer to:",
        answers: [
            { text: "Have a structured schedule and stick to it", types: ["J"] },
            { text: "Keep your options open and go with the flow", types: ["P"] }
        ]
    },
    {
        question: "If you could have dinner with any fictional character, who would it be?",
        answers: [
            { text: "Sherlock Holmes, to analyze his deductive reasoning", types: ["I", "N", "T"] },
            { text: "Hermione Granger, to discuss magical theory and ethics", types: ["E", "S", "F"] },
            { text: "Gandalf, to hear tales of Middle-earth and wisdom", types: ["I", "N", "F"] },
            { text: "Tony Stark, to brainstorm futuristic inventions", types: ["E", "N", "T"] }
        ]
    },
    {
        question: "In group discussions, you usually:",
        answers: [
            { text: "Speak up readily and share your thoughts", types: ["E"] },
            { text: "Listen carefully and speak when you have something significant to add", types: ["I"] }
        ]
    },
    {
        question: "You're more likely to trust:",
        answers: [
            { text: "Your direct experiences and observations", types: ["S"] },
            { text: "Your hunches and intuitive insights", types: ["N"] }
        ]
    },
    {
        question: "You're in charge of planning a friend's surprise party. Your approach is:",
        answers: [
            { text: "Create a detailed spreadsheet with tasks and timelines", types: ["I", "S", "J"] },
            { text: "Brainstorm unique ideas to make it unforgettable", types: ["E", "N", "P"] },
            { text: "Delegate tasks to a small group of close friends", types: ["E", "T", "J"] },
            { text: "Keep it simple with cake and presents, focusing on the sentiment", types: ["I", "F", "P"] }
        ]
    },
    {
        question: "In conflicts, you tend to:",
        answers: [
            { text: "Focus on finding a fair and logical resolution", types: ["T"] },
            { text: "Consider everyone's feelings and seek harmony", types: ["F"] }
        ]
    },
    {
        question: "When it comes to deadlines, you usually:",
        answers: [
            { text: "Complete tasks well ahead of time", types: ["J"] },
            { text: "Finish just in time or ask for extensions", types: ["P"] }
        ]
    },
    {
        question: "If you could instantly master any skill, what would it be?",
        answers: [
            { text: "Mind reading, to understand people better", types: ["I", "N", "F"] },
            { text: "Time manipulation, to make the most of every moment", types: ["E", "S", "J"] },
            { text: "Shapeshifting, to experience life from different perspectives", types: ["E", "N", "P"] },
            { text: "Teleportation, to explore the world effortlessly", types: ["I", "S", "T"] }
        ]
    },
    {
        question: "You feel most energized when:",
        answers: [
            { text: "Interacting with many people throughout the day", types: ["E"] },
            { text: "Having meaningful one-on-one conversations", types: ["I"] }
        ]
    },
    {
        question: "When solving problems, you prefer to:",
        answers: [
            { text: "Use tried-and-true methods", types: ["S"] },
            { text: "Come up with innovative, untested approaches", types: ["N"] }
        ]
    },
    {
        question: "You're stranded on a deserted island. The first thing you do is:",
        answers: [
            { text: "Build a shelter to ensure immediate safety", types: ["I", "S", "J"] },
            { text: "Explore the island to map out resources", types: ["E", "N", "P"] },
            { text: "Start a signal fire to attract rescue", types: ["E", "S", "T"] },
            { text: "Find edible plants and fresh water", types: ["I", "N", "F"] }
        ]
    },
    {
        question: "You're more comfortable with:",
        answers: [
            { text: "Critiquing and finding flaws in arguments", types: ["T"] },
            { text: "Offering support and validation to others", types: ["F"] }
        ]
    },
    {
        question: "Your workspace is typically:",
        answers: [
            { text: "Well-organized with everything in its place", types: ["J"] },
            { text: "Cluttered but with a system that makes sense to you", types: ["P"] }
        ]
    },
    {
        question: "If you were a superhero, your base of operations would be:",
        answers: [
            { text: "A high-tech skyscraper in the heart of the city", types: ["E", "S", "T"] },
            { text: "A hidden cave with advanced computer systems", types: ["I", "N", "T"] },
            { text: "A mobile command center, always on the move", types: ["E", "N", "P"] },
            { text: "A treehouse sanctuary in an enchanted forest", types: ["I", "S", "F"] }
        ]
    },
    {
        question: "At a party, you're more likely to:",
        answers: [
            { text: "Mingle with various groups and meet new people", types: ["E"] },
            { text: "Stick with a small group of familiar friends", types: ["I"] }
        ]
    },
    {
        question: "You're more interested in:",
        answers: [
            { text: "What is actual and present", types: ["S"] },
            { text: "What is possible and future-oriented", types: ["N"] }
        ]
    },
    {
        question: "You've discovered a new species of plant. You name it based on:",
        answers: [
            { text: "Its unique physical characteristics", types: ["I", "S", "T"] },
            { text: "The emotion it evokes when you look at it", types: ["E", "N", "F"] },
            { text: "The location where you found it", types: ["I", "S", "J"] },
            { text: "A creative wordplay that sounds scientific", types: ["E", "N", "P"] }
        ]
    },
    {
        question: "When giving feedback, you're more likely to be:",
        answers: [
            { text: "Frank and straightforward", types: ["T"] },
            { text: "Tactful and encouraging", types: ["F"] }
        ]
    },
    {
        question: "You feel more comfortable when:",
        answers: [
            { text: "Plans are settled and decisions are made", types: ["J"] },
            { text: "Things are open-ended with room for changes", types: ["P"] }
        ]
    },
    {
        question: "In a parallel universe, your alternate self is:",
        answers: [
            { text: "A nomadic adventurer exploring uncharted territories", types: ["E", "S", "P"] },
            { text: "A renowned scientist making groundbreaking discoveries", types: ["I", "N", "T"] },
            { text: "A charismatic leader inspiring social change", types: ["E", "N", "F"] },
            { text: "A skilled craftsperson preserving traditional arts", types: ["I", "S", "J"] }
        ]
    },
    {
        question: "When tackling a new project, you prefer to:",
        answers: [
            { text: "Brainstorm ideas with a group", types: ["E"] },
            { text: "Reflect on it independently before sharing your thoughts", types: ["I"] }
        ]
    },
    {
        question: "In conversations, you tend to focus on:",
        answers: [
            { text: "Specific details and facts", types: ["S"] },
            { text: "Overall patterns and connections", types: ["N"] }
        ]
    },
    {
        question: "You're given a magic wand that can solve one global issue. You choose to:",
        answers: [
            { text: "End world hunger by creating self-replicating food", types: ["S", "T", "J"] },
            { text: "Eliminate all forms of pollution instantly", types: ["N", "F", "P"] },
            { text: "Establish universal education and access to information", types: ["N", "T", "J"] },
            { text: "Create a universal language to unite all cultures", types: ["S", "F", "P"] }
        ]
    },
    {
        question: "You find it easier to:",
        answers: [
            { text: "Make decisions based on efficiency and logic", types: ["T"] },
            { text: "Consider how decisions will impact people's emotions", types: ["F"] }
        ]
    },
    {
        question: "In your daily life, you prefer to:",
        answers: [
            { text: "Follow a routine and have things planned out", types: ["J"] },
            { text: "Be spontaneous and adapt to situations as they arise", types: ["P"] }
        ]
    },
    {
        question: "If you could turn any everyday object into a time machine, it would be:",
        answers: [
            { text: "A mirror, to reflect on different eras", types: ["I", "N", "F"] },
            { text: "A book, to read between the lines of history", types: ["E", "S", "T"] },
            { text: "A bicycle, to pedal through the ages", types: ["E", "N", "P"] },
            { text: "A teacup, to sip the essence of various time periods", types: ["I", "S", "J"] }
        ]
    },
    {
        question: "Your ideal vacation is:",
        answers: [
            { text: "An action-packed trip with lots of social activities", types: ["E"] },
            { text: "A peaceful retreat with plenty of alone time", types: ["I"] }
        ]
    },
    {
        question: "You're more drawn to:",
        answers: [
            { text: "Pragmatic solutions to immediate problems", types: ["S"] },
            { text: "Exploring hypothetical scenarios and ideas", types: ["N"] }
        ]
    },
    {
        question: "You've been chosen to establish the first colony on Mars. Your primary focus is:",
        answers: [
            { text: "Designing efficient living quarters and life support systems", types: ["I", "S", "T"] },
            { text: "Creating a governance structure for the new society", types: ["E", "N", "J"] },
            { text: "Establishing communication protocols with Earth", types: ["E", "S", "F"] },
            { text: "Developing methods for psychological well-being in isolation", types: ["I", "N", "P"] }
        ]
    },
    {
        question: "In a team project, you're more focused on:",
        answers: [
            { text: "Achieving goals and maintaining high standards", types: ["T"] },
            { text: "Ensuring everyone feels heard and appreciated", types: ["F"] }
        ]
    },
    {
        question: "When starting a project, you tend to:",
        answers: [
            { text: "Create a detailed plan before beginning", types: ["J"] },
            { text: "Jump in and figure things out as you go", types: ["P"] }
        ]
    },
]