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
            { text: "A peaceful utopia where everyone lives in harmony with nature", types: ["S", "F"] },
            { text: "A post-apocalyptic world where survival skills are crucial", types: ["S", "T"] }
        ]
    },
    {
        question: "When meeting new people, you typically:",
        answers: [
            { text: "Engage in lively conversation about various topics", types: ["E"] },
            { text: "Listen more than you speak, observing group dynamics", types: ["I"] }
        ]
    },
    {
        question: "When making a big life decision, you are more likely to:",
        answers: [
            { text: "Consult your closest friends and family for advice", types: ["E", "F"] },
            { text: "Rely on your intuition and gut feelings", types: ["N", "F"] },
            { text: "Research extensively and weigh all possible outcomes", types: ["S", "T"] },
            { text: "Reflect deeply on your personal values and goals", types: ["I", "J"] }
        ]
    },
    {
        question: "Regarding planning and organization, you:",
        answers: [
            { text: "Enjoy creating detailed lists and schedules", types: ["J"] },
            { text: "Prefer to keep your options open and adapt as you go", types: ["P"] }
        ]
    },
    {
        question: "If you could have dinner with any historical figure, who would it be?",
        answers: [
            { text: "Albert Einstein, to discuss the mysteries of the universe", types: ["N", "T"] },
            { text: "Leonardo da Vinci, to explore his diverse genius", types: ["N", "P"] },
            { text: "Mahatma Gandhi, to learn about his philosophy of nonviolence", types: ["F", "J"] },
            { text: "Jane Austen, to analyze societal norms and human nature", types: ["I", "N"] }
        ]
    },
    {
        question: "In social situations, you usually find yourself:",
        answers: [
            { text: "Energized by interacting with many people", types: ["E"] },
            { text: "Drained after extended periods of socializing", types: ["I"] }
        ]
    },
    {
        question: "Which best describes your ideal work environment?",
        answers: [
            { text: "A high-energy startup with constant change and innovation", types: ["E", "N", "P"] },
            { text: "A stable, established company with clear routines", types: ["S", "J"] },
            { text: "A creative studio with flexible hours and artistic focus", types: ["N", "P"] },
            { text: "A quiet research institution focused on in-depth studies", types: ["I", "S", "J"] }
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
        question: "If you were to write a book, it would be:",
        answers: [
            { text: "A thrilling mystery novel with unexpected twists", types: ["N", "T"] },
            { text: "A self-help guide offering practical advice", types: ["S", "F", "J"] },
            { text: "A science fiction epic exploring new possibilities", types: ["N", "P"] },
            { text: "A detailed analysis of a niche historical event", types: ["I", "S"] }
        ]
    },
    {
        question: "In conversations, you tend to:",
        answers: [
            { text: "Speak as you think, processing ideas out loud", types: ["E"] },
            { text: "Think before you speak, formulating ideas internally", types: ["I"] }
        ]
    },
    {
        question: "What do you value more in a partner?",
        answers: [
            { text: "Intellectual compatibility and stimulating conversations", types: ["N", "T"] },
            { text: "Emotional support and a deep, affectionate bond", types: ["F"] },
            { text: "Shared adventures and a love for spontaneity", types: ["E", "P"] },
            { text: "Mutual respect for personal space and independence", types: ["I", "J"] }
        ]
    },
    {
        question: "In group projects, you are most likely to:",
        answers: [
            { text: "Take charge and organize everyone's tasks", types: ["E", "J"] },
            { text: "Contribute quietly, focusing on your assigned part", types: ["I", "P"] }
        ]
    },
    {
        question: "How do you prefer to approach your personal goals?",
        answers: [
            { text: "Setting ambitious, long-term goals with detailed plans", types: ["J", "N"] },
            { text: "Focusing on small, immediate actions that add up over time", types: ["S", "P"] },
            { text: "Staying flexible and adapting your goals as you go", types: ["P", "N"] },
            { text: "Setting practical, achievable goals with clear metrics", types: ["S", "T"] }
        ]
    },
    {
        question: "You are more comfortable working with:",
        answers: [
            { text: "Concrete facts and observable data", types: ["S"] },
            { text: "Abstract theories and potential possibilities", types: ["N"] }
        ]
    },
    {
        question: "If you had to choose a superpower, which would it be?",
        answers: [
            { text: "The ability to read minds and understand thoughts", types: ["N", "F"] },
            { text: "The power to manipulate time and relive moments", types: ["N", "P"] },
            { text: "The ability to heal any injury or disease", types: ["S", "F"] },
            { text: "The power to become invisible at will", types: ["I", "T"] }
        ]
    },
    {
        question: "When making decisions, you tend to prioritize:",
        answers: [
            { text: "Logic and objective analysis", types: ["T"] },
            { text: "Personal values and how it affects people", types: ["F"] }
        ]
    },
    {
        question: "If you had to be stranded on a deserted island, who would you take with you?",
        answers: [
            { text: "A survival expert to help navigate challenges", types: ["S", "T"] },
            { text: "A close friend for emotional support and companionship", types: ["F"] },
            { text: "A skilled engineer to build necessary tools", types: ["N", "T"] },
            { text: "No one, preferring to face the challenge alone", types: ["I", "P"] }
        ]
    },
    {
        question: "Your approach to a new project is usually to:",
        answers: [
            { text: "Plan every step before starting", types: ["J"] },
            { text: "Jump in and figure it out as you go", types: ["P"] }
        ]
    },
    {
        question: "Which artistic endeavor appeals to you more?",
        answers: [
            { text: "Painting or sculpting, to express visual creativity", types: ["S", "F"] },
            { text: "Writing, to explore complex ideas and emotions", types: ["N", "I"] },
            { text: "Acting, to embody different characters and stories", types: ["E", "F"] },
            { text: "Music composition, to create structured yet emotive pieces", types: ["N", "T"] }
        ]
    },
    {
        question: "When faced with a problem, you first:",
        answers: [
            { text: "Analyze the facts and details available", types: ["S"] },
            { text: "Consider the big picture and potential implications", types: ["N"] }
        ]
    },
    {
        question: "If you could instantly learn a new skill, it would be:",
        answers: [
            { text: "Mastering a musical instrument", types: ["S", "F"] },
            { text: "Speaking multiple languages fluently", types: ["N", "T"] },
            { text: "Becoming a top-level athlete in a sport", types: ["S", "J"] },
            { text: "Mastering meditation and mindfulness techniques", types: ["I", "N"] }
        ]
    },
    {
        question: "In your free time, you prefer activities that are:",
        answers: [
            { text: "Planned and organized in advance", types: ["J"] },
            { text: "Spontaneous and flexible", types: ["P"] }
        ]
    },
    {
        question: "What kind of leadership style do you resonate with?",
        answers: [
            { text: "Authoritative, providing clear direction", types: ["E", "T", "J"] },
            { text: "Democratic, encouraging team input and collaboration", types: ["F", "P"] },
            { text: "Visionary, inspiring others with big ideas", types: ["N", "F"] },
            { text: "Leading by example, focusing on personal excellence", types: ["I", "J"] }
        ]
    },
    {
        question: "When understanding a concept, you prefer:",
        answers: [
            { text: "Concrete examples and practical applications", types: ["S"] },
            { text: "Abstract explanations and theoretical frameworks", types: ["N"] }
        ]
    },
    {
        question: "If you were to join a reality TV show, you would prefer:",
        answers: [
            { text: "A survival challenge in the wilderness", types: ["S", "T"] },
            { text: "A cooking competition showcasing culinary skills", types: ["S", "F"] },
            { text: "A talent show highlighting unique abilities", types: ["E", "N"] },
            { text: "A documentary-style show exploring personal growth", types: ["I", "N"] }
        ]
    },
    {
        question: "In conflicts, you are more inclined to:",
        answers: [
            { text: "Focus on the facts and seek a fair resolution", types: ["T"] },
            { text: "Consider feelings and seek harmony", types: ["F"] }
        ]
    },
    {
        question: "When thinking about success, do you focus more on:",
        answers: [
            { text: "Financial stability and career achievements", types: ["T", "J"] },
            { text: "Personal fulfillment and happiness", types: ["F", "P"] },
            { text: "Making a positive impact on others and society", types: ["F", "J"] },
            { text: "Continuous learning and self-improvement", types: ["I", "N"] }
        ]
    },
    {
        question: "You feel most energized when:",
        answers: [
            { text: "Interacting with many people", types: ["E"] },
            { text: "Spending time in solitude or small groups", types: ["I"] }
        ]
    },
    {
        question: "If you could transform into any animal at will, which would you choose?",
        answers: [
            { text: "An eagle, to soar and see from new perspectives", types: ["N", "T"] },
            { text: "A dolphin, to explore oceans and communicate", types: ["N", "F"] },
            { text: "A wolf, to experience pack life in the wilderness", types: ["S", "F"] },
            { text: "A cat, for its independence and observant nature", types: ["I", "P"] }
        ]
    },
    {
        question: "When tackling a new task, you prefer to:",
        answers: [
            { text: "Follow established methods and procedures", types: ["S", "J"] },
            { text: "Experiment with new approaches and techniques", types: ["N", "P"] }
        ]
    },
    {
        question: "How do you handle failure?",
        answers: [
            { text: "Reflect on what went wrong and learn from it", types: ["I", "T"] },
            { text: "Move on quickly and focus on the next opportunity", types: ["E", "P"] },
            { text: "Seek feedback from others to improve", types: ["E", "F"] },
            { text: "Analyze the situation to prevent future mistakes", types: ["S", "J"] }
        ]
    },
    {
        question: "In decision-making, you trust more in:",
        answers: [
            { text: "Past experiences and proven methods", types: ["S"] },
            { text: "Future possibilities and potential innovations", types: ["N"] }
        ]
    },
    {
        question: "If you had to choose between fame and anonymity, you would prefer:",
        answers: [
            { text: "Fame, to influence and inspire others", types: ["E", "F"] },
            { text: "Anonymity, to live peacefully without public scrutiny", types: ["I", "T"] },
            { text: "Selective recognition within a specific field", types: ["I", "J"] },
            { text: "Temporary fame for a significant achievement", types: ["E", "T"] }
        ]
    },
    {
        question: "When working on a project, you focus more on:",
        answers: [
            { text: "The practical details and immediate results", types: ["S"] },
            { text: "The overall concept and long-term implications", types: ["N"] }
        ]
    },
    {
        question: "Which type of vacation appeals to you more?",
        answers: [
            { text: "A backpacking adventure through foreign countries", types: ["E", "N", "P"] },
            { text: "A relaxing stay at a luxury resort", types: ["S", "J"] },
            { text: "A cultural tour visiting historic sites and landmarks", types: ["N", "J"] },
            { text: "A solo retreat focused on personal reflection and growth", types: ["I", "F"] }
        ]
    },
    {
        question: "When giving feedback, you tend to be:",
        answers: [
            { text: "Direct and straightforward", types: ["T"] },
            { text: "Tactful and encouraging", types: ["F"] }
        ]
    },
    {
        question: "In a heated debate, you are more likely to:",
        answers: [
            { text: "Stand your ground and argue passionately for your viewpoint", types: ["E", "T"] },
            { text: "Seek common ground and try to mediate between differing opinions", types: ["F"] },
            { text: "Listen carefully and ask questions to understand the other side", types: ["I", "N"] },
            { text: "Analyze the logical consistency of each argument", types: ["T", "J"] }
        ]
    },
    {
        question: "When learning a new skill, you prefer:",
        answers: [
            { text: "Step-by-step instructions and practical examples", types: ["S"] },
            { text: "Understanding the underlying principles and theories", types: ["N"] }
        ]
    },
    {
        question: "If you could relive a period of history, which would you choose?",
        answers: [
            { text: "The Renaissance, to witness the birth of art and science", types: ["N", "T"] },
            { text: "The 1960s, to experience cultural revolutions and social change", types: ["E", "F"] },
            { text: "The Industrial Revolution, to see the rise of modern technology", types: ["S", "T"] },
            { text: "Ancient Greece, to engage in philosophical discussions", types: ["I", "N"] }
        ]
    },
    {
        question: "When analyzing information, you tend to focus on:",
        answers: [
            { text: "Specific details and facts", types: ["S"] },
            { text: "Patterns and overall implications", types: ["N"] }
        ]
    },
    {
        question: "What type of stories do you prefer to watch or read?",
        answers: [
            { text: "Complex narratives that challenge your thinking", types: ["N", "T"] },
            { text: "Light-hearted tales that provide comfort and amusement", types: ["S", "F"] },
            { text: "True stories based on real-life events and experiences", types: ["S", "J"] },
            { text: "Introspective works exploring the human psyche", types: ["I", "N"] }
        ]
    },
    {
        question: "In team discussions, you usually:",
        answers: [
            { text: "Contribute actively and share your thoughts readily", types: ["E"] },
            { text: "Listen attentively and speak when you have something significant to add", types: ["I"] }
        ]
    },
    {
        question: "If you had to choose an unusual profession, it would be:",
        answers: [
            { text: "A treasure hunter, seeking lost artifacts", types: ["S", "P"] },
            { text: "A diplomat, negotiating complex international relations", types: ["E", "F"] },
            { text: "A futurist, predicting and shaping emerging trends", types: ["N", "T"] },
            { text: "A hermit philosopher, contemplating life's big questions", types: ["I", "N"] }
        ]
    },
    {
        question: "When faced with a difficult situation, you tend to:",
        answers: [
            { text: "Analyze it logically to find the best solution", types: ["T"] },
            { text: "Consider how it affects people and their feelings", types: ["F"] }
        ]
    },
    {
        question: "What drives you more in life?",
        answers: [
            { text: "The pursuit of knowledge and understanding", types: ["N", "T"] },
            { text: "The desire for connection and relationships", types: ["F"] },
            { text: "The quest for new experiences and adventures", types: ["E", "P"] },
            { text: "The achievement of personal growth and self-mastery", types: ["I", "J"] }
        ]
    },
    {
        question: "In your work or studies, you prefer tasks that:",
        answers: [
            { text: "Have clear guidelines and expected outcomes", types: ["S", "J"] },
            { text: "Allow for creativity and multiple approaches", types: ["N", "P"] }
        ]
    },
    {
        question: "If you were designing a garden, you would focus on:",
        answers: [
            { text: "Practical aspects like ease of maintenance and crop yield", types: ["S", "T"] },
            { text: "Creating a visually pleasing and harmonious space", types: ["N", "F"] },
            { text: "Incorporating interactive elements for social gatherings", types: ["E", "F"] },
            { text: "Designing a secluded, meditative retreat", types: ["I", "N"] }
        ]
    },
    {
        question: "When making plans with friends, you prefer to:",
        answers: [
            { text: "Have everything decided and scheduled in advance", types: ["J"] },
            { text: "Keep things open-ended and decide spontaneously", types: ["P"] }
        ]
    },
    {
        question: "In a crisis situation, you are more likely to:",
        answers: [
            { text: "Take charge and give clear directions to others", types: ["E", "J"] },
            { text: "Adapt quickly to changing circumstances", types: ["P", "N"] },
            { text: "Focus on comforting and supporting those affected", types: ["F"] },
            { text: "Calmly assess the situation and plan the next steps", types: ["I", "T"] }
        ]
    }
];