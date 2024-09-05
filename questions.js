const questions = [
    {
        question: "If you could live in a fictional universe, which would you choose?",
        answers: [
            { text: "A world where magic is real, and you are a skilled sorcerer", types: ["P06", "P13", "P05", "P15", "P04"] },
            { text: "A futuristic society with advanced technology and space travel", types: ["P07", "P08", "P16", "P02", "P10", "P09"] },
            { text: "A peaceful utopia where everyone lives in harmony with nature", types: ["P03", "P12", "P01", "P14", "P11"] }
        ]
    },
    {
        question: "When making a big life decision, you are more likely to:",
        answers: [
            { text: "Consult your closest friends and family for advice", types: ["P12", "P03", "P14", "P11", "P04"] },
            { text: "Rely on your intuition and gut feelings", types: ["P05", "P07", "P13", "P06", "P15"] },
            { text: "Research extensively and weigh all possible outcomes", types: ["P1", "P10", "P08", "P16", "P02", "P09"] }
        ]
    },
    {
        question: "If you could have dinner with any historical figure, who would it be?",
        answers: [
            { text: "Albert Einstein, to discuss the mysteries of the universe", types: ["P08", "P07", "P15", "P02", "P16"] },
            { text: "Leonardo da Vinci, to explore his diverse genius", types: ["P13", "P06", "P04", "P14", "P05"] },
            { text: "Mahatma Gandhi, to learn about his philosophy of nonviolence and peace", types: ["P03", "P12", "P1", "P10", "P09", "P11"] }
        ]
    },
    {
        question: "Which best describes your ideal work environment?",
        answers: [
            { text: "A high-energy startup with constant change and innovation", types: ["P15", "P13", "P09", "P16", "P07"] },
            { text: "A stable, established company with clear routines and policies", types: ["P1", "P10", "P03", "P12", "P02"] },
            { text: "A creative studio with flexible hours and a focus on artistic projects", types: ["P06", "P05", "P04", "P08", "P14", "P11"] }
        ]
    },
    {
        question: "If you were to write a book, it would be:",
        answers: [
            { text: "A thrilling mystery novel with unexpected twists", types: ["P02", "P07", "P15", "P09", "P05"] },
            { text: "A self-help guide offering practical advice for personal growth", types: ["P14", "P12", "P10", "P03", "P1"] },
            { text: "A science fiction or fantasy epic exploring new possibilities", types: ["P13", "P16", "P04", "P06", "P08", "P11"] }
        ]
    },
    {
        question: "What do you value more in a partner?",
        answers: [
            { text: "Intellectual compatibility and stimulating conversations", types: ["P07", "P08", "P15", "P16", "P05"] },
            { text: "Emotional support and a deep, affectionate bond", types: ["P06", "P03", "P12", "P14", "P04"] },
            { text: "Shared adventures and a love for spontaneity", types: ["P09", "P11", "P13", "P02", "P10", "P1"] }
        ]
    },
    {
        question: "If you had to choose a superpower, which would it be?",
        answers: [
            { text: "The ability to read minds and understand everyone's thoughts", types: ["P05", "P14", "P07", "P15", "P08"] },
            { text: "The power to manipulate time and relive moments", types: ["P06", "P04", "P11", "P02", "P09"] },
            { text: "The ability to heal any injury or disease", types: ["P03", "P12", "P13", "P10", "P16", "P1"] }
        ]
    },
    {
        question: "In a group project, you are most likely to:",
        answers: [
            { text: "Take charge and organize everyone's tasks", types: ["P16", "P10", "P14", "P09", "P1"] },
            { text: "Support others and contribute where you see a need", types: ["P03", "P12", "P13", "P04", "P11"] },
            { text: "Challenge ideas and push for creative solutions", types: ["P15", "P08", "P07", "P05", "P02", "P06"] }
        ]
    },
    {
        question: "How do you prefer to approach your personal goals?",
        answers: [
            { text: "Setting ambitious, long-term goals with detailed plans", types: ["P07", "P16", "P10", "P1", "P14"] },
            { text: "Focusing on small, immediate actions that add up over time", types: ["P12", "P02", "P04", "P03", "P05"] },
            { text: "Staying flexible and adapting your goals as you go", types: ["P15", "P13", "P06", "P09", "P11", "P08"] }
        ]
    },
    {
        question: "If you could only listen to one genre of music for the rest of your life, what would it be?",
        answers: [
            { text: "Classical music, for its complexity and emotional depth", types: ["P07", "P05", "P1", "P03", "P08"] },
            { text: "Rock music, for its energy and rebellious spirit", types: ["P09", "P02", "P15", "P11", "P16"] },
            { text: "Jazz, for its improvisational style and variety", types: ["P13", "P06", "P04", "P14", "P12", "P10"] }
        ]
    },
    {
        question: "If you had to be stranded on a deserted island, who would you take with you?",
        answers: [
            { text: "A survival expert to help you navigate the challenges", types: ["P02", "P09", "P10", "P1", "P16"] },
            { text: "A close friend for emotional support and companionship", types: ["P12", "P03", "P14", "P06", "P04", "P11"] },
            { text: "A skilled engineer to help build necessary tools and shelters", types: ["P07", "P08", "P15", "P13", "P05"] }
        ]
    },
    {
        question: "Which artistic endeavor appeals to you more?",
        answers: [
            { text: "Painting or sculpting, to express visual creativity", types: ["P04", "P06", "P11", "P13", "P05"] },
            { text: "Writing, to explore complex ideas and emotions", types: ["P07", "P08", "P15", "P14", "P1"] },
            { text: "Acting, to embody different characters and tell stories through performance", types: ["P09", "P12", "P03", "P16", "P10", "P02"] }
        ]
    },
    {
        question: "If you could instantly learn a new skill, it would be:",
        answers: [
            { text: "Mastering a musical instrument", types: ["P04", "P06", "P13", "P11", "P02"] },
            { text: "Speaking a new language fluently", types: ["P14", "P05", "P15", "P07", "P08"] },
            { text: "Becoming a top-level athlete in a sport of your choice", types: ["P09", "P10", "P16", "P1", "P12", "P03"] }
        ]
    },
    {
        question: "What kind of leadership style do you resonate with?",
        answers: [
            { text: "Authoritative, providing clear direction and expectations", types: ["P16", "P10", "P07", "P09", "P1"] },
            { text: "Democratic, encouraging team input and collaboration", types: ["P14", "P12", "P15", "P03", "P13"] },
            { text: "Servant leadership, focusing on the needs of the team members", types: ["P05", "P04", "P06", "P08", "P02", "P11"] }
        ]
    },
    {
        question: "If you were to join a reality TV show, you would prefer:",
        answers: [
            { text: "A survival challenge in the wilderness", types: ["P09", "P02", "P16", "P1", "P10"] },
            { text: "A cooking competition showcasing your culinary skills", types: ["P12", "P03", "P04", "P14", "P11"] },
            { text: "A talent show highlighting your unique abilities", types: ["P13", "P15", "P06", "P07", "P08", "P05"] }
        ]
    },
    {
        question: "When thinking about success, do you focus more on:",
        answers: [
            { text: "Financial stability and career achievements", types: ["P10", "P16", "P1", "P07", "P02"] },
            { text: "Personal fulfillment and happiness", types: ["P06", "P04", "P13", "P11", "P08"] },
            { text: "Making a positive impact on others and society", types: ["P14", "P05", "P12", "P03", "P15", "P09"] }
        ]
    },
    {
        question: "If you could transform into any animal at will, which would you choose?",
        answers: [
            { text: "An eagle, to soar above the world and see everything from a new perspective", types: ["P07", "P16", "P15", "P05", "P08"] },
            { text: "A dolphin, to explore the depths of the ocean and communicate with marine life", types: ["P13", "P11", "P04", "P06", "P14"] },
            { text: "A wolf, to experience life as a part of a pack in the wilderness", types: ["P09", "P02", "P10", "P1", "P12", "P03"] }
        ]
    },
    {
        question: "How do you handle failure?",
        answers: [
            { text: "Reflect on what went wrong and try to learn from it", types: ["P07", "P05", "P08", "P1", "P02"] },
            { text: "Move on quickly and focus on the next opportunity", types: ["P09", "P11", "P15", "P13", "P16"] },
            { text: "Seek feedback from others to improve for the future", types: ["P14", "P12", "P03", "P10", "P04", "P06"] }
        ]
    },
    {
        question: "If you had to choose between fame and anonymity, you would prefer:",
        answers: [
            { text: "Fame, to have a platform to influence and inspire others", types: ["P14", "P13", "P16", "P11", "P09", "P15"] },
            { text: "Anonymity, to live a peaceful life without public scrutiny", types: ["P04", "P06", "P03", "P1", "P02", "P08"] },
            { text: "Selective recognition, known only within a specific community or field", types: ["P07", "P10", "P12", "P05"] }
        ]
    },
    {
        question: "Which type of vacation appeals to you more?",
        answers: [
            { text: "A backpacking adventure through a foreign country", types: ["P09", "P02", "P13", "P15", "P11"] },
            { text: "A relaxing stay at a luxury resort", types: ["P12", "P03", "P10", "P04", "P1"] },
            { text: "A cultural tour visiting historic sites and landmarks", types: ["P05", "P07", "P16", "P14", "P06", "P08"] }
        ]
    },
    {
        question: "In a heated debate, you are more likely to:",
        answers: [
            { text: "Stand your ground and argue passionately for your viewpoint", types: ["P16", "P10", "P15", "P09", "P14"] },
            { text: "Seek common ground and try to mediate between differing opinions", types: ["P12", "P05", "P03", "P13", "P06"] },
            { text: "Listen carefully and ask questions to understand the other side", types: ["P08", "P07", "P02", "P04", "P1", "P11"] }
        ]
    },
    {
        question: "If you could relive a period of history, which would you choose?",
        answers: [
            { text: "The Renaissance, to witness the birth of art and science", types: ["P06", "P08", "P15", "P13", "P07"] },
            { text: "The 1960s, to experience cultural revolutions and social change", types: ["P14", "P11", "P04", "P09", "P05"] },
            { text: "The Industrial Revolution, to see the rise of modern technology", types: ["P16", "P02", "P10", "P1", "P03", "P12"] }
        ]
    },
    {
        question: "What type of stories do you prefer to watch or read?",
        answers: [
            { text: "Complex narratives that challenge your thinking and emotions", types: ["P07", "P05", "P08", "P15", "P06"] },
            { text: "Light-hearted tales that provide comfort and amusement", types: ["P11", "P04", "P12", "P03", "P13"] },
            { text: "True stories based on real-life events and experiences", types: ["P1", "P10", "P09", "P02", "P16", "P14"] }
        ]
    },
    {
        question: "If you had to choose an unusual profession, it would be:",
        answers: [
            { text: "A treasure hunter, seeking lost artifacts and exploring mysteries", types: ["P09", "P02", "P15", "P13", "P11"] },
            { text: "A food critic, traveling the world and tasting different cuisines", types: ["P04", "P12", "P14", "P06", "P03"] },
            { text: "A storm chaser or paranormal investigator, studying unusual phenomena", types: ["P07", "P08", "P1", "P10", "P05", "P16"] }
        ]
    },
    {
        question: "What drives you more in life?",
        answers: [
            { text: "The pursuit of knowledge and understanding", types: ["P08", "P07", "P05", "P15", "P1"] },
            { text: "The desire for connection and relationships", types: ["P14", "P12", "P03", "P13", "P11"] },
            { text: "The quest for adventure and new experiences", types: ["P09", "P02", "P04", "P16", "P10", "P06"] }
        ]
    }
];