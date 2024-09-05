const questions = [
    {
        question: "You prefer to:",
        answers: [
            { text: "Keep things in their original state", types: ["S"] },
            { text: "Make changes, even if it is merely for the sake of change", types: ["N"] }
        ]
    },
    {
        question: "If you could live in a fictional universe, which would you choose?",
        answers: [
            { text: "A world where magic is real, and you are a skilled sorcerer", types: ["N", "F"] },
            { text: "A futuristic society with advanced technology and space travel", types: ["N", "T"] },
            { text: "A peaceful utopia where everyone lives in harmony with nature", types: ["S", "F"] }
        ]
    },
    {
        question: "How do you feel when you meet new people?",
        answers: [
            { text: "I love meeting new people; I can talk to nearly anyone about nearly any topic", types: ["E"] },
            { text: "When I am surrounded by unfamiliar faces, I tend to feel somewhat uncomfortable. Some people consider me to be restrained and reserved", types: ["I"] }
        ]
    },
    {
        question: "When making a big life decision, you are more likely to:",
        answers: [
            { text: "Consult your closest friends and family for advice", types: ["E", "F"] },
            { text: "Rely on your intuition and gut feelings", types: ["N", "F"] },
            { text: "Research extensively and weigh all possible outcomes", types: ["S", "T"] }
        ]
    },
    {
        question: "Do you enjoy making lists?",
        answers: [
            { text: "I love making lists. Once I have finished something I enjoy the satisfaction of accomplishment. I would then start with the next item on the list immediately", types: ["J"] },
            { text: "I do not enjoy making lists. Even if I was to make a list, I would never implement the items accordingly. The list is merely a reminder", types: ["P"] }
        ]
    },
    {
        question: "If you could have dinner with any historical figure, who would it be?",
        answers: [
            { text: "Albert Einstein, to discuss the mysteries of the universe", types: ["N", "T"] },
            { text: "Leonardo da Vinci, to explore his diverse genius", types: ["N", "P"] },
            { text: "Mahatma Gandhi, to learn about his philosophy of nonviolence and peace", types: ["F", "J"] }
        ]
    },
    {
        question: "Do you think others easily become acquainted with you and understand you well?",
        answers: [
            { text: "It is easy for others to get to know me. Most people think I am a friendly and vibrant person", types: ["E"] },
            { text: "It is not easy for others to get to know me. I would much rather wait until someone initiates a conversation or suggests an idea", types: ["I"] }
        ]
    },
    {
        question: "Which best describes your ideal work environment?",
        answers: [
            { text: "A high-energy startup with constant change and innovation", types: ["E", "N", "P"] },
            { text: "A stable, established company with clear routines and policies", types: ["S", "J"] },
            { text: "A creative studio with flexible hours and a focus on artistic projects", types: ["N", "P"] }
        ]
    },
    {
        question: "How do you feel when you are noticed by other people?",
        answers: [
            { text: "I love being the centre of attention. I enjoy feeling like I am in the spotlight", types: ["E"] },
            { text: "Most of the time I try to avoid being the centre of attention", types: ["I"] }
        ]
    },
    {
        question: "If you were to write a book, it would be:",
        answers: [
            { text: "A thrilling mystery novel with unexpected twists", types: ["N", "T"] },
            { text: "A self-help guide offering practical advice for personal growth", types: ["S", "F", "J"] },
            { text: "A science fiction or fantasy epic exploring new possibilities", types: ["N", "P"] }
        ]
    },
    {
        question: "Do you prefer to speak while you are thinking, or to think first and then speak?",
        answers: [
            { text: "I prefer to speak while I am thinking", types: ["E"] },
            { text: "I prefer to think first and then speak", types: ["I"] }
        ]
    },
    {
        question: "What do you value more in a partner?",
        answers: [
            { text: "Intellectual compatibility and stimulating conversations", types: ["N", "T"] },
            { text: "Emotional support and a deep, affectionate bond", types: ["F"] },
            { text: "Shared adventures and a love for spontaneity", types: ["E", "P"] }
        ]
    },
    {
        question: "Are you talkative?",
        answers: [
            { text: "I love talking. Sometimes I will not stop until someone interrupts me", types: ["E"] },
            { text: "I do not like to talk to someone for a long period of time. I would much rather text someone instead of calling them", types: ["I"] }
        ]
    },
    {
        question: "If you had to choose a superpower, which would it be?",
        answers: [
            { text: "The ability to read minds and understand everyone's thoughts", types: ["N", "F"] },
            { text: "The power to manipulate time and relive moments", types: ["N", "P"] },
            { text: "The ability to heal any injury or disease", types: ["S", "F"] }
        ]
    },
    {
        question: "Is it easy for you to speak to people?",
        answers: [
            { text: "I can have a lively conversation with anyone at anytime and anywhere", types: ["E"] },
            { text: "I prefer to have one-on-one conversations, or discussions in an intimate group", types: ["I"] }
        ]
    },
    {
        question: "In a group project, you are most likely to:",
        answers: [
            { text: "Take charge and organize everyone's tasks", types: ["E", "J"] },
            { text: "Support others and contribute where you see a need", types: ["F"] },
            { text: "Challenge ideas and push for creative solutions", types: ["N", "T"] }
        ]
    },
    {
        question: "Do you have a wide social circle?",
        answers: [
            { text: "My social circle is extremely wide. I have many friends and acquaintances", types: ["E"] },
            { text: "I have very close relationships with a small amount of people. I am very cautious and serious when choosing my friends", types: ["I"] }
        ]
    },
    {
        question: "How do you prefer to approach your personal goals?",
        answers: [
            { text: "Setting ambitious, long-term goals with detailed plans", types: ["J"] },
            { text: "Focusing on small, immediate actions that add up over time", types: ["S"] },
            { text: "Staying flexible and adapting your goals as you go", types: ["P"] }
        ]
    },
    {
        question: "What do you focus most of your attention on?",
        answers: [
            { text: "I focus on the outer world", types: ["E"] },
            { text: "I focus my attention internally. I dedicate a lot of my time to introspection", types: ["I"] }
        ]
    },
    {
        question: "If you could only listen to one genre of music for the rest of your life, what would it be?",
        answers: [
            { text: "Classical music, for its complexity and emotional depth", types: ["I", "N"] },
            { text: "Rock music, for its energy and rebellious spirit", types: ["E", "P"] },
            { text: "Jazz, for its improvisational style and variety", types: ["N", "P"] }
        ]
    },
    {
        question: "Whether at work or in your daily life, you prefer:",
        answers: [
            { text: "Team work. it is more efficient to discuss ideas and execute with a team", types: ["E"] },
            { text: "Isolation. I would try to finish work on my own. I enjoy the space and freedom of solitude", types: ["I"] }
        ]
    },
    {
        question: "If you had to be stranded on a deserted island, who would you take with you?",
        answers: [
            { text: "A survival expert to help you navigate the challenges", types: ["S", "T"] },
            { text: "A close friend for emotional support and companionship", types: ["F"] },
            { text: "A skilled engineer to help build necessary tools and shelters", types: ["N", "T"] }
        ]
    },
    {
        question: "Your interests are:",
        answers: [
            { text: "Vast: I am interested in a little bit of everything", types: ["E"] },
            { text: "Narrow: I like to choose particular interests and research them thoroughly", types: ["I"] }
        ]
    },
    {
        question: "Which artistic endeavor appeals to you more?",
        answers: [
            { text: "Painting or sculpting, to express visual creativity", types: ["S", "F"] },
            { text: "Writing, to explore complex ideas and emotions", types: ["N", "I"] },
            { text: "Acting, to embody different characters and tell stories through performance", types: ["E", "F"] }
        ]
    },
    {
        question: "What are you concerned with and choose to believe in more?",
        answers: [
            { text: "Facts and real information.", types: ["S"] },
            { text: "Instinct, inspiration, imagination and insight.", types: ["N"] }
        ]
    },
    {
        question: "If you could instantly learn a new skill, it would be:",
        answers: [
            { text: "Mastering a musical instrument", types: ["S", "F"] },
            { text: "Speaking a new language fluently", types: ["N", "T"] },
            { text: "Becoming a top-level athlete in a sport of your choice", types: ["S", "J"] }
        ]
    },
    {
        question: "What kind of person are you?",
        answers: [
            { text: "I have a vivid imagination. I immerse myself in all kinds of thoughts, and I am not interested in details and facts", types: ["N"] },
            { text: "I am very practical. I do not spend much time fantasizing", types: ["S"] }
        ]
    },
    {
        question: "What kind of leadership style do you resonate with?",
        answers: [
            { text: "Authoritative, providing clear direction and expectations", types: ["E", "T", "J"] },
            { text: "Democratic, encouraging team input and collaboration", types: ["F", "P"] },
            { text: "Servant leadership, focusing on the needs of the team members", types: ["I", "F"] }
        ]
    },
    {
        question: "If there was no limit to reality, what kind of work would you prefer?",
        answers: [
            { text: "I prefer to accomplish a specific task rather than research abstract and complicated theories", types: ["S"] },
            { text: "I prefer to seek and analyze the possibility, accessibility and trends of things rather than duplicate the work of others", types: ["N"] }
        ]
    },
    {
        question: "If you were to join a reality TV show, you would prefer:",
        answers: [
            { text: "A survival challenge in the wilderness", types: ["S", "T"] },
            { text: "A cooking competition showcasing your culinary skills", types: ["S", "F"] },
            { text: "A talent show highlighting your unique abilities", types: ["E", "N"] }
        ]
    },
    {
        question: "How do you understand and describe a concept?",
        answers: [
            { text: "I prefer to understand and describe a concept in accordance with proven facts. I am more concerned with \"how it is\".", types: ["S"] },
            { text: "I prefer to use metaphors and analogies to describe concepts. I emphasize \"how it may be\".", types: ["N"] }
        ]
    },
    {
        question: "When thinking about success, do you focus more on:",
        answers: [
            { text: "Financial stability and career achievements", types: ["T", "J"] },
            { text: "Personal fulfillment and happiness", types: ["F", "P"] },
            { text: "Making a positive impact on others and society", types: ["F", "J"] }
        ]
    },
    {
        question: "What kind of person are you?",
        answers: [
            { text: "I am an excellent observer who pays attention to detail. I can observe and remember any aspect of my surrounding environment", types: ["S"] },
            { text: "I prefer to think about the future. I try to find the patterns and rules behind things and despise nitty-gritty details.", types: ["N"] }
        ]
    },
    {
        question: "If you could transform into any animal at will, which would you choose?",
        answers: [
            { text: "An eagle, to soar above the world and see everything from a new perspective", types: ["N", "T"] },
            { text: "A dolphin, to explore the depths of the ocean and communicate with marine life", types: ["N", "F"] },
            { text: "A wolf, to experience life as a part of a pack in the wilderness", types: ["S", "F"] }
        ]
    },
    {
        question: "What do you enjoy more?",
        answers: [
            { text: "I like enjoy utilizing and developing my skills which I am aware of. I am fond of practical work, such as furniture installation, machine manufacturing and crafts making", types: ["S"] },
            { text: "I prefer to try fresh methods and make use of innovative thinking. The methods or skills which have already been proven successfully cannot satisfy me anymore", types: ["N"] }
        ]
    },
    {
        question: "How do you handle failure?",
        answers: [
            { text: "Reflect on what went wrong and try to learn from it", types: ["I", "T"] },
            { text: "Move on quickly and focus on the next opportunity", types: ["E", "P"] },
            { text: "Seek feedback from others to improve for the future", types: ["E", "F"] }
        ]
    },
    {
        question: "You tend to pay attention to:",
        answers: [
            { text: "Experience, and I take it as my reference", types: ["S"] },
            { text: "Reasoning, and I excavate the deeper implications of things", types: ["N"] }
        ]
    },
    {
        question: "If you had to choose between fame and anonymity, you would prefer:",
        answers: [
            { text: "Fame, to have a platform to influence and inspire others", types: ["E", "F"] },
            { text: "Anonymity, to live a peaceful life without public scrutiny", types: ["I", "T"] },
            { text: "Selective recognition, known only within a specific community or field", types: ["I", "J"] }
        ]
    },
    {
        question: "When you listen to other people:",
        answers: [
            { text: "It is often difficult for me to understand the implication, reasoning or metaphors used by other people", types: ["S"] },
            { text: "I can understand the subtext", types: ["N"] }
        ]
    },
    {
        question: "Which type of vacation appeals to you more?",
        answers: [
            { text: "A backpacking adventure through a foreign country", types: ["E", "N", "P"] },
            { text: "A relaxing stay at a luxury resort", types: ["S", "J"] },
            { text: "A cultural tour visiting historic sites and landmarks", types: ["N", "J"] }
        ]
    },
    {
        question: "What is your attitude towards life?",
        answers: [
            { text: "Enjoy the moment", types: ["S"] },
            { text: "Think about your future", types: ["N"] }
        ]
    },
    {
        question: "In a heated debate, you are more likely to:",
        answers: [
            { text: "Stand your ground and argue passionately for your viewpoint", types: ["E", "T"] },
            { text: "Seek common ground and try to mediate between differing opinions", types: ["F"] },
            { text: "Listen carefully and ask questions to understand the other side", types: ["I", "N"] }
        ]
    },
    {
        question: "When you learn an idea or theory:",
        answers: [
            { text: "I prefer to be given a specific example, as well as a practical application", types: ["S"] },
            { text: "I tend to understand an abstract theory quickly. It is boring for me to listen to excessive details and facts", types: ["N"] }
        ]
    },
    {
        question: "If you could relive a period of history, which would you choose?",
        answers: [
            { text: "The Renaissance, to witness the birth of art and science", types: ["N", "T"] },
            { text: "The 1960s, to experience cultural revolutions and social change", types: ["E", "F"] },
            { text: "The Industrial Revolution, to see the rise of modern technology", types: ["S", "T"] }
        ]
    },
    {
        question: "You are more likely to",
        answers: [
            { text: "Only see the details without seeing the overall situation", types: ["S"] },
            { text: "Only see the overall situation without seeing the details", types: ["N"] }
        ]
    },
    {
        question: "What type of stories do you prefer to watch or read?",
        answers: [
            { text: "Complex narratives that challenge your thinking and emotions", types: ["N", "T"] },
            { text: "Light-hearted tales that provide comfort and amusement", types: ["S", "F"] },
            { text: "True stories based on real-life events and experiences", types: ["S", "J"] }
        ]
    },
    {
        question: "You usually:",
        answers: [
            { text: "Enjoy thinking and making decisions objectively and logically", types: ["T"] },
            { text: "Think about the effect every sentence you say and every action you take may have on those around you", types: ["F"] }
        ]
    },
    {
        question: "If you had to choose an unusual profession, it would be:",
        answers: [
            { text: "A treasure hunter, seeking lost artifacts and exploring mysteries", types: ["S", "P"] },
            { text: "A food critic, traveling the world and tasting different cuisines", types: ["S", "F"] },
            { text: "A storm chaser or paranormal investigator, studying unusual phenomena", types: ["N", "T"] }
        ]
    },
    {
        question: "Do you like to argue?",
        answers: [
            { text: "No, I do not. I am worried that the argument might hurt other people", types: ["F"] },
            { text: "I like to argue and defend my viewpoints", types: ["T"] }
        ]
    },
    {
        question: "What drives you more in life?",
        answers: [
            { text: "The pursuit of knowledge and understanding", types: ["N", "T"] },
            { text: "The desire for connection and relationships", types: ["F"] },
            { text: "The quest for adventure and new experiences", types: ["E", "P"] }
        ]
    }
];