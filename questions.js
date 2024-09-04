const questions = [
    {
        question: "If you could live in a fictional universe, which would you choose?",
        answers: [
            { text: "A world where magic is real, and you are a skilled sorcerer", types: ["P6", "P13", "P5", "P15", "P4"] },
            { text: "A futuristic society with advanced technology and space travel", types: ["P7", "P8", "P16", "P2", "P10", "P9"] },
            { text: "A peaceful utopia where everyone lives in harmony with nature", types: ["P3", "P12", "P1", "P14", "P11"] }
        ]
    },
    {
        question: "When making a big life decision, you are more likely to:",
        answers: [
            { text: "Consult your closest friends and family for advice", types: ["P12", "P3", "P14", "P11", "P4"] },
            { text: "Rely on your intuition and gut feelings", types: ["P5", "P7", "P13", "P6", "P15"] },
            { text: "Research extensively and weigh all possible outcomes", types: ["P1", "P10", "P8", "P16", "P2", "P9"] }
        ]
    },
    {
        question: "If you could have dinner with any historical figure, who would it be?",
        answers: [
            { text: "Albert Einstein, to discuss the mysteries of the universe", types: ["P8", "P7", "P15", "P2", "P16"] },
            { text: "Leonardo da Vinci, to explore his diverse genius", types: ["P13", "P6", "P4", "P14", "P5"] },
            { text: "Mahatma Gandhi, to learn about his philosophy of nonviolence and peace", types: ["P3", "P12", "P1", "P10", "P9", "P11"] }
        ]
    },
    {
        question: "Which best describes your ideal work environment?",
        answers: [
            { text: "A high-energy startup with constant change and innovation", types: ["P15", "P13", "P9", "P16", "P7"] },
            { text: "A stable, established company with clear routines and policies", types: ["P1", "P10", "P3", "P12", "P2"] },
            { text: "A creative studio with flexible hours and a focus on artistic projects", types: ["P6", "P5", "P4", "P8", "P14", "P11"] }
        ]
    },
    {
        question: "If you were to write a book, it would be:",
        answers: [
            { text: "A thrilling mystery novel with unexpected twists", types: ["P2", "P7", "P15", "P9", "P5"] },
            { text: "A self-help guide offering practical advice for personal growth", types: ["P14", "P12", "P10", "P3", "P1"] },
            { text: "A science fiction or fantasy epic exploring new possibilities", types: ["P13", "P16", "P4", "P6", "P8", "P11"] }
        ]
    },
    {
        question: "What do you value more in a partner?",
        answers: [
            { text: "Intellectual compatibility and stimulating conversations", types: ["P7", "P8", "P15", "P16", "P5"] },
            { text: "Emotional support and a deep, affectionate bond", types: ["P6", "P3", "P12", "P14", "P4"] },
            { text: "Shared adventures and a love for spontaneity", types: ["P9", "P11", "P13", "P2", "P10", "P1"] }
        ]
    },
    {
        question: "If you had to choose a superpower, which would it be?",
        answers: [
            { text: "The ability to read minds and understand everyone's thoughts", types: ["P5", "P14", "P7", "P15", "P8"] },
            { text: "The power to manipulate time and relive moments", types: ["P6", "P4", "P11", "P2", "P9"] },
            { text: "The ability to heal any injury or disease", types: ["P3", "P12", "P13", "P10", "P16", "P1"] }
        ]
    },
    {
        question: "In a group project, you are most likely to:",
        answers: [
            { text: "Take charge and organize everyone's tasks", types: ["P16", "P10", "P14", "P9", "P1"] },
            { text: "Support others and contribute where you see a need", types: ["P3", "P12", "P13", "P4", "P11"] },
            { text: "Challenge ideas and push for creative solutions", types: ["P15", "P8", "P7", "P5", "P2", "P6"] }
        ]
    },
    {
        question: "How do you prefer to approach your personal goals?",
        answers: [
            { text: "Setting ambitious, long-term goals with detailed plans", types: ["P7", "P16", "P10", "P1", "P14"] },
            { text: "Focusing on small, immediate actions that add up over time", types: ["P12", "P2", "P4", "P3", "P5"] },
            { text: "Staying flexible and adapting your goals as you go", types: ["P15", "P13", "P6", "P9", "P11", "P8"] }
        ]
    },
    {
        question: "If you could only listen to one genre of music for the rest of your life, what would it be?",
        answers: [
            { text: "Classical music, for its complexity and emotional depth", types: ["P7", "P5", "P1", "P3", "P8"] },
            { text: "Rock music, for its energy and rebellious spirit", types: ["P9", "P2", "P15", "P11", "P16"] },
            { text: "Jazz, for its improvisational style and variety", types: ["P13", "P6", "P4", "P14", "P12", "P10"] }
        ]
    },
    {
        question: "If you had to be stranded on a deserted island, who would you take with you?",
        answers: [
            { text: "A survival expert to help you navigate the challenges", types: ["P2", "P9", "P10", "P1", "P16"] },
            { text: "A close friend for emotional support and companionship", types: ["P12", "P3", "P14", "P6", "P4", "P11"] },
            { text: "A skilled engineer to help build necessary tools and shelters", types: ["P7", "P8", "P15", "P13", "P5"] }
        ]
    },
    {
        question: "Which artistic endeavor appeals to you more?",
        answers: [
            { text: "Painting or sculpting, to express visual creativity", types: ["P4", "P6", "P11", "P13", "P5"] },
            { text: "Writing, to explore complex ideas and emotions", types: ["P7", "P8", "P15", "P14", "P1"] },
            { text: "Acting, to embody different characters and tell stories through performance", types: ["P9", "P12", "P3", "P16", "P10", "P2"] }
        ]
    },
    {
        question: "If you could instantly learn a new skill, it would be:",
        answers: [
            { text: "Mastering a musical instrument", types: ["P4", "P6", "P13", "P11", "P2"] },
            { text: "Speaking a new language fluently", types: ["P14", "P5", "P15", "P7", "P8"] },
            { text: "Becoming a top-level athlete in a sport of your choice", types: ["P9", "P10", "P16", "P1", "P12", "P3"] }
        ]
    },
    {
        question: "What kind of leadership style do you resonate with?",
        answers: [
            { text: "Authoritative, providing clear direction and expectations", types: ["P16", "P10", "P7", "P9", "P1"] },
            { text: "Democratic, encouraging team input and collaboration", types: ["P14", "P12", "P15", "P3", "P13"] },
            { text: "Servant leadership, focusing on the needs of the team members", types: ["P5", "P4", "P6", "P8", "P2", "P11"] }
        ]
    },
    {
        question: "If you were to join a reality TV show, you would prefer:",
        answers: [
            { text: "A survival challenge in the wilderness", types: ["P9", "P2", "P16", "P1", "P10"] },
            { text: "A cooking competition showcasing your culinary skills", types: ["P12", "P3", "P4", "P14", "P11"] },
            { text: "A talent show highlighting your unique abilities", types: ["P13", "P15", "P6", "P7", "P8", "P5"] }
        ]
    },
    {
        question: "When thinking about success, do you focus more on:",
        answers: [
            { text: "Financial stability and career achievements", types: ["P10", "P16", "P1", "P7", "P2"] },
            { text: "Personal fulfillment and happiness", types: ["P6", "P4", "P13", "P11", "P8"] },
            { text: "Making a positive impact on others and society", types: ["P14", "P5", "P12", "P3", "P15", "P9"] }
        ]
    },
    {
        question: "If you could transform into any animal at will, which would you choose?",
        answers: [
            { text: "An eagle, to soar above the world and see everything from a new perspective", types: ["P7", "P16", "P15", "P5", "P8"] },
            { text: "A dolphin, to explore the depths of the ocean and communicate with marine life", types: ["P13", "P11", "P4", "P6", "P14"] },
            { text: "A wolf, to experience life as a part of a pack in the wilderness", types: ["P9", "P2", "P10", "P1", "P12", "P3"] }
        ]
    },
    {
        question: "How do you handle failure?",
        answers: [
            { text: "Reflect on what went wrong and try to learn from it", types: ["P7", "P5", "P8", "P1", "P2"] },
            { text: "Move on quickly and focus on the next opportunity", types: ["P9", "P11", "P15", "P13", "P16"] },
            { text: "Seek feedback from others to improve for the future", types: ["P14", "P12", "P3", "P10", "P4", "P6"] }
        ]
    },
    {
        question: "If you had to choose between fame and anonymity, you would prefer:",
        answers: [
            { text: "Fame, to have a platform to influence and inspire others", types: ["P14", "P13", "P16", "P11", "P9", "P15"] },
            { text: "Anonymity, to live a peaceful life without public scrutiny", types: ["P4", "P6", "P3", "P1", "P2", "P8"] },
            { text: "Selective recognition, known only within a specific community or field", types: ["P7", "P10", "P12", "P5"] }
        ]
    },
    {
        question: "Which type of vacation appeals to you more?",
        answers: [
            { text: "A backpacking adventure through a foreign country", types: ["P9", "P2", "P13", "P15", "P11"] },
            { text: "A relaxing stay at a luxury resort", types: ["P12", "P3", "P10", "P4", "P1"] },
            { text: "A cultural tour visiting historic sites and landmarks", types: ["P5", "P7", "P16", "P14", "P6", "P8"] }
        ]
    },
    {
        question: "In a heated debate, you are more likely to:",
        answers: [
            { text: "Stand your ground and argue passionately for your viewpoint", types: ["P16", "P10", "P15", "P9", "P14"] },
            { text: "Seek common ground and try to mediate between differing opinions", types: ["P12", "P5", "P3", "P13", "P6"] },
            { text: "Listen carefully and ask questions to understand the other side", types: ["P8", "P7", "P2", "P4", "P1", "P11"] }
        ]
    },
    {
        question: "If you could relive a period of history, which would you choose?",
        answers: [
            { text: "The Renaissance, to witness the birth of art and science", types: ["P6", "P8", "P15", "P13", "P7"] },
            { text: "The 1960s, to experience cultural revolutions and social change", types: ["P14", "P11", "P4", "P9", "P5"] },
            { text: "The Industrial Revolution, to see the rise of modern technology", types: ["P16", "P2", "P10", "P1", "P3", "P12"] }
        ]
    },
    {
        question: "What type of stories do you prefer to watch or read?",
        answers: [
            { text: "Complex narratives that challenge your thinking and emotions", types: ["P7", "P5", "P8", "P15", "P6"] },
            { text: "Light-hearted tales that provide comfort and amusement", types: ["P11", "P4", "P12", "P3", "P13"] },
            { text: "True stories based on real-life events and experiences", types: ["P1", "P10", "P9", "P2", "P16", "P14"] }
        ]
    },
    {
        question: "If you had to choose an unusual profession, it would be:",
        answers: [
            { text: "A treasure hunter, seeking lost artifacts and exploring mysteries", types: ["P9", "P2", "P15", "P13", "P11"] },
            { text: "A food critic, traveling the world and tasting different cuisines", types: ["P4", "P12", "P14", "P6", "P3"] },
            { text: "A storm chaser or paranormal investigator, studying unusual phenomena", types: ["P7", "P8", "P1", "P10", "P5", "P16"] }
        ]
    },
    {
        question: "What drives you more in life?",
        answers: [
            { text: "The pursuit of knowledge and understanding", types: ["P8", "P7", "P5", "P15", "P1"] },
            { text: "The desire for connection and relationships", types: ["P14", "P12", "P3", "P13", "P11"] },
            { text: "The quest for adventure and new experiences", types: ["P9", "P2", "P4", "P16", "P10", "P6"] }
        ]
    }
];