const questions = [
    {
        question: "When attending a conference, you prefer:",
        answers: [
            { text: "Networking events and group discussions", types: ["E"] },
            { text: "Focused presentations with minimal interaction", types: ["I"] }
        ]
    },
    {
        question: "You're exploring an ancient ruins. You discover a sealed chamber. What's your next move?",
        answers: [
            { text: "Carefully document everything before proceeding", types: ["S", "J"] },
            { text: "Imagine the historical secrets it might contain", types: ["N", "F"] },
            { text: "Immediately try to find a way to open it", types: ["E", "P"] },
            { text: "Analyze the potential risks of disturbing the site", types: ["I", "T"] }
        ]
    },
    {
        question: "When solving problems, you rely more on:",
        answers: [
            { text: "Past experiences and proven methods", types: ["S"] },
            { text: "Intuition and novel approaches", types: ["N"] }
        ]
    },
    {
        question: "You're invited to participate in a futuristic virtual reality experiment. Your approach is:",
        answers: [
            { text: "Research all available information about the technology", types: ["I", "S", "J"] },
            { text: "Eagerly jump in, excited to experience something new", types: ["E", "N", "P"] },
            { text: "Evaluate the potential benefits and drawbacks", types: ["T"] },
            { text: "Consider how it might change human interactions", types: ["F"] }
        ]
    },
    {
        question: "When making a tough decision, you prioritize:",
        answers: [
            { text: "Analyzing pros and cons objectively", types: ["T"] },
            { text: "Considering the impact on people involved", types: ["F"] }
        ]
    },
    {
        question: "You're tasked with redesigning an educational system. Your primary focus is:",
        answers: [
            { text: "Implementing proven teaching methods efficiently", types: ["S", "T", "J"] },
            { text: "Fostering creativity and personal growth", types: ["N", "F", "P"] },
            { text: "Balancing traditional and innovative approaches", types: ["S", "N"] },
            { text: "Ensuring equal opportunities for all students", types: ["F"] }
        ]
    },
    {
        question: "In your daily life, you prefer:",
        answers: [
            { text: "Having a set routine and schedule", types: ["J"] },
            { text: "Being flexible and spontaneous", types: ["P"] }
        ]
    },
    {
        question: "An AI assistant becomes sentient. Your first reaction is to:",
        answers: [
            { text: "Verify its sentience through rigorous testing", types: ["T", "J"] },
            { text: "Engage in philosophical discussions about consciousness", types: ["N", "P"] },
            { text: "Consider the ethical implications for society", types: ["F"] },
            { text: "Examine how it might be practically useful", types: ["S"] }
        ]
    },
    {
        question: "You feel more comfortable:",
        answers: [
            { text: "Leading a team project", types: ["E"] },
            { text: "Working independently on tasks", types: ["I"] }
        ]
    },
    {
        question: "You're organizing a multicultural festival. Your main priority is:",
        answers: [
            { text: "Ensuring accurate representation of each culture", types: ["S", "T"] },
            { text: "Creating opportunities for meaningful cultural exchange", types: ["N", "F"] },
            { text: "Managing logistics to make the event run smoothly", types: ["J"] },
            { text: "Allowing for spontaneous interactions and performances", types: ["P"] }
        ]
    },
    {
        question: "You're more interested in:",
        answers: [
            { text: "Practical applications of ideas", types: ["S"] },
            { text: "Exploring theoretical concepts", types: ["N"] }
        ]
    },
    {
        question: "You're part of a team designing a new eco-friendly city. Your role focuses on:",
        answers: [
            { text: "Implementing cutting-edge sustainable technologies", types: ["N", "T"] },
            { text: "Creating community spaces that promote well-being", types: ["S", "F"] },
            { text: "Developing efficient systems for resource management", types: ["T", "J"] },
            { text: "Ensuring the city can adapt to future needs", types: ["N", "P"] }
        ]
    },
    {
        question: "In a team setting, you're more inclined to:",
        answers: [
            { text: "Focus on achieving the goal efficiently", types: ["T"] },
            { text: "Ensure everyone feels valued and heard", types: ["F"] }
        ]
    },
    {
        question: "You're given the opportunity to travel through time. You choose to:",
        answers: [
            { text: "Observe a significant historical event firsthand", types: ["S", "T"] },
            { text: "Explore a futuristic society centuries from now", types: ["N", "P"] },
            { text: "Meet your ancestors and learn about your roots", types: ["S", "F"] },
            { text: "Attempt to prevent a past global catastrophe", types: ["N", "J"] }
        ]
    },
    {
        question: "When working on a project, you:",
        answers: [
            { text: "Follow a step-by-step plan to completion", types: ["J"] },
            { text: "Adapt your approach as you go along", types: ["P"] }
        ]
    },
    {
        question: "You're in charge of a space mission to make first contact with aliens. Your approach is:",
        answers: [
            { text: "Develop a detailed protocol for safe interaction", types: ["S", "T", "J"] },
            { text: "Focus on creating a welcoming, peaceful atmosphere", types: ["N", "F"] },
            { text: "Prepare a diverse team to handle any situation", types: ["E", "P"] },
            { text: "Analyze their technology and scientific knowledge", types: ["I", "T"] }
        ]
    },
    {
        question: "When reading the news, you focus on:",
        answers: [
            { text: "Specific events and factual details", types: ["S"] },
            { text: "Broader implications and future trends", types: ["N"] }
        ]
    },
    {
        question: "You're curating a time capsule to be opened in 500 years. You prioritize including:",
        answers: [
            { text: "Detailed records of current events and daily life", types: ["S", "J"] },
            { text: "Art and media that capture the essence of our time", types: ["N", "F"] },
            { text: "Samples of current technology and scientific data", types: ["T"] },
            { text: "Personal letters and stories from diverse individuals", types: ["F", "P"] }
        ]
    },
    {
        question: "When giving feedback, you tend to be:",
        answers: [
            { text: "Direct and straightforward", types: ["T"] },
            { text: "Gentle and encouraging", types: ["F"] }
        ]
    },
    {
        question: "You're developing a revolutionary fitness program. Your main focus is:",
        answers: [
            { text: "Incorporating scientifically proven exercise methods", types: ["S", "T"] },
            { text: "Creating a holistic approach to mind-body wellness", types: ["N", "F"] },
            { text: "Designing a structured, goal-oriented program", types: ["J"] },
            { text: "Making workouts fun and adaptable to individual needs", types: ["P"] }
        ]
    },
    {
        question: "You're much more likely to:",
        answers: [
            { text: "Complete tasks well ahead of deadlines", types: ["J"] },
            { text: "Finish things at the last minute", types: ["P"] }
        ]
    },
    {
        question: "You're writing a speech for a global peace summit. You emphasize:",
        answers: [
            { text: "Concrete steps and actionable plans for cooperation", types: ["S", "T", "J"] },
            { text: "Inspiring vision of a harmonious future", types: ["N", "F"] },
            { text: "Analysis of current conflicts and their root causes", types: ["T"] },
            { text: "Personal stories that highlight our shared humanity", types: ["F", "P"] }
        ]
    },
    {
        question: "Your ideal vacation is:",
        answers: [
            { text: "An action-packed tour with a group", types: ["E"] },
            { text: "A peaceful retreat in a secluded location", types: ["I"] }
        ]
    },
    {
        question: "You're creating a new social media platform. Your key feature is:",
        answers: [
            { text: "Advanced privacy controls and data protection", types: ["T", "J"] },
            { text: "AI-driven content curation for personalized experiences", types: ["N", "P"] },
            { text: "Tools for organizing community events and volunteering", types: ["E", "F"] },
            { text: "A minimalist interface focusing on genuine connections", types: ["I", "S"] }
        ]
    },
    {
        question: "In a debate, you find yourself more convinced by:",
        answers: [
            { text: "Concrete evidence and real-world examples", types: ["S"] },
            { text: "Logical arguments and potential scenarios", types: ["N"] }
        ]
    },
    {
        question: "You're designing a universal language. You prioritize:",
        answers: [
            { text: "Logical structure and clear grammatical rules", types: ["T", "J"] },
            { text: "Rich vocabulary for expressing complex emotions", types: ["F"] },
            { text: "Adaptability to incorporate new concepts easily", types: ["N", "P"] },
            { text: "Simplicity and ease of learning for all cultures", types: ["S"] }
        ]
    },
    {
        question: "You're more motivated by:",
        answers: [
            { text: "Recognition of your competence", types: ["T"] },
            { text: "Appreciation of your personal contributions", types: ["F"] }
        ]
    },
    {
        question: "You're establishing a new form of government. Your focus is on:",
        answers: [
            { text: "Creating a robust system of checks and balances", types: ["T", "J"] },
            { text: "Ensuring representation for all societal groups", types: ["F"] },
            { text: "Implementing innovative decision-making processes", types: ["N", "P"] },
            { text: "Streamlining bureaucracy for efficient operation", types: ["S", "T"] }
        ]
    },
    {
        question: "When learning something new, you prefer:",
        answers: [
            { text: "Interactive workshops and group activities", types: ["E"] },
            { text: "Self-paced online courses or books", types: ["I"] }
        ]
    },
    {
        question: "Your ideal work environment is:",
        answers: [
            { text: "Structured with clear expectations", types: ["J"] },
            { text: "Flexible with room for improvisation", types: ["P"] }
        ]
    }
]