var questions = [
        new question(
        "Looking back to your college years, you interacted", [
            new questionOption("with many diverse colleagues", optionTypes.E),
            new questionOption("with a few close colleagues", optionTypes.I)
        ]),
        new question(
        "In your work routine you usually are more", [
            new questionOption("realistic than speculative", optionTypes.S),
            new questionOption("speculative than realistic", optionTypes.N)
        ]),
        new question(
        "What would bother you the most at the end of the day", [
            new questionOption("have your 'head in the clouds' and getting nowhere", optionTypes.S),
            new questionOption("having done nothing else besides the expected stuff ", optionTypes.N)
        ]),
        new question(
        " Your preference for making work related decisions is", [
            new questionOption("Ideally based on the pros and cons", optionTypes.T),
            new questionOption("Ideally by trusting your own emotional responses", optionTypes.F)
        ]),
        new question(
        "At work, you are more drawn toward the", [
            new questionOption("convincing", optionTypes.T),
            new questionOption("touching", optionTypes.F)
        ]),
        new question(
        "Do you usually prefer to work", [
            new questionOption("to deadlines", optionTypes.J),
            new questionOption("Just “whenever”", optionTypes.P)
        ]),
        new question(
        "You would rather", [
            new questionOption("know what you’re getting into", optionTypes.J),
            new questionOption("adapt to new situations ", optionTypes.P)
        ]),
        new question(
        "In family, you usually", [
            new questionOption("enjoy the sharing of thoughts and emotions with others freely – talk a lot in an upbeat, optimistic style", optionTypes.E),
            new questionOption("keep feelings and interests to yourself, solve issues on your own", optionTypes.I)
        ]),
        new question(
        "At work, you usually get along better with a", [
            new questionOption("sensible colleague", optionTypes.S),
            new questionOption("imaginative colleague", optionTypes.N)
        ]),
        //10
        new question(
        "At work, you feel more comfortable", [
            new questionOption("using common sense and focusing on cost-effectiveness", optionTypes.S),
            new questionOption("reading between lines and coming up with possible meanings", optionTypes.N)
        ]),
        new question(
        "In discussing a project with your work team, the statement you generally agree with is", [
            new questionOption("I believe feelings are valid only if they can be put into the context of the project’s purpose” ", optionTypes.T),
            new questionOption("I believe any feeling is valid", optionTypes.F)
        ]),
        new question(
        "At work, in approaching others, your inclination is to be somewhat", [
            new questionOption("objective", optionTypes.T),
            new questionOption("personal", optionTypes.F)
        ]),
        new question(
        "Are you more", [
            new questionOption("punctual", optionTypes.J),
            new questionOption("leisurely", optionTypes.P)
        ]),
        new question(
        "When you make a “To do” list, you ", [
            new questionOption("feel satisfied when you check off a completed task", optionTypes.J),
            new questionOption("rarely use it", optionTypes.P)
        ]),
        new question(
        "In terms of social aspect of your professional life, you", [
            new questionOption("try to keep abreast of colleagues’ happenings", optionTypes.E),
            new questionOption(" usually get behind on the news", optionTypes.I)
        ]),
        new question(
        "At work, if your boss asks for a routine, inevitable task, you’re more likely to", [
            new questionOption("Just do it the usual way, efficiently", optionTypes.S),
            new questionOption("Think about changing the usual way", optionTypes.N)
        ]),
        new question(
        "When your boss is in command and uses metaphors to approach your team, you often", [
            new questionOption("would rather he spoke concretely and objectively", optionTypes.S),
            new questionOption("feel inspired if the metaphor is efficient ", optionTypes.N)
        ]),
        new question(
        "When you cannot avoid entering a discussion, your main concern is", [
            new questionOption("to keep coherence in the way you think and act", optionTypes.T),
            new questionOption("to keep harmonious human relationships after the event", optionTypes.F)
        ]),
        new question(
        "You feel more comfortable in making", [
            new questionOption("logical judgments", optionTypes.T),
            new questionOption("value judgments", optionTypes.F)
        ]),
        //20
        new question(
        "In your work routine, you feel more comfortable with things", [
            new questionOption("settled ", optionTypes.J),
            new questionOption("unsettled ", optionTypes.P)
        ]),
        new question(
        "At work you would say you are more:", [
            new questionOption("determined", optionTypes.J),
            new questionOption("easy-going", optionTypes.P)
        ]),
        new question(
        "At work, after a long group discussion, usually do you feel", [
            new questionOption("full of energy", optionTypes.E),
            new questionOption("out of energy", optionTypes.I)
        ]),
        new question(
        "During work, when you gather facts, you expect them to", [
            new questionOption("speak for themselves", optionTypes.S),
            new questionOption("provide foundation for more generic principles", optionTypes.N)
        ]),
        new question(
        "Do you have more ‘creative’ than ‘pragmatic’ friends?", [
            new questionOption("no", optionTypes.S),
            new questionOption("yes", optionTypes.N)
        ]),
        new question(
        "At work, you", [
            new questionOption("rarely take things personally", optionTypes.T),
            new questionOption("usually take things personally", optionTypes.F)
        ]),
        new question(
        "At work it is worse to be", [
            new questionOption("unjust", optionTypes.T),
            new questionOption("merciless", optionTypes.F)
        ]),
        new question(
        "Should one usually let events occur", [
            new questionOption("by careful selection and choice", optionTypes.J),
            new questionOption("randomly and by chance", optionTypes.P)
        ]),
        new question(
        "Do you prefer", [
            new questionOption("planning thoroughly for whatever might arise, having contingency plans in place", optionTypes.J),
            new questionOption("enjoying surprises and going with the flow", optionTypes.P)
        ]),
        new question(
        "When you meet people in the elevator of your building, you", [
            new questionOption("initiate conversation with strangers", optionTypes.E),
            new questionOption("wait to be approached", optionTypes.I)
        ]),
        //30
        new question(
        "At work, what people call ‘usual procedures’ is", [
            new questionOption("exceptionally questionable", optionTypes.S),
            new questionOption("preferably questionable", optionTypes.N)
        ]),
        new question(
        "You feel more engaged to discuss", [
            new questionOption("your friend’s problems", optionTypes.S),
            new questionOption("mankind’s problems", optionTypes.N)
        ]),
        new question(
        "When you think of the consequences of a business decision, you feel more concerned", [
            new questionOption("with being correct", optionTypes.T),
            new questionOption("with not hurting people’s feelings", optionTypes.F)
        ]),
        new question(
        "In professional settings, you’re more", [
            new questionOption("just than gentle", optionTypes.T),
            new questionOption("gentle than just", optionTypes.F)
        ]),
        new question(
        "Managing your career, you prefer", [
            new questionOption("long-range plans", optionTypes.J),
            new questionOption("moving-target plans", optionTypes.P)
        ]),
        new question(
        "At work, as a rule,", [
            new questionOption("current issues worry you more than your future plans", optionTypes.J),
            new questionOption("future plans worry you more than your current issues", optionTypes.P)
        ]),
        new question(
        "At work, how do you prefer to give feedback?", [
            new questionOption("frequent, face-to-face, spontaneous feedback, which includes opportunity for discussion on different areas", optionTypes.E),
            new questionOption("careful written feedback or one-to-one structured conversations", optionTypes.I)
        ]),
        new question(
        "In the work environment, people often associate your image to", [
            new questionOption("a practical sort of person", optionTypes.S),
            new questionOption("a fanciful sort of person", optionTypes.N)
        ]),
        new question(
        "You consider most admirable in business people", [
            new questionOption("their efficiency ", optionTypes.S),
            new questionOption("their reasoning ", optionTypes.N)
        ]),
        new question(
        "In professional settings, whenever you find yourself in a discussion, you usually believe", [
            new questionOption("it is irrelevant whether the parties will reach mutual agreement", optionTypes.T),
            new questionOption("it is relevant whether the parties will reach consensus / mutual agreement", optionTypes.F)
        ]),
        //40
        new question(
        "At work, in general, you", [
            new questionOption("believe in being skeptical. It’s important to point out what’s wrong", optionTypes.T),
            new questionOption("take the position that “If it’s important to you, I will go along with it.”", optionTypes.F)
        ]),
        new question(
        "You’re more comfortable with work that is", [
            new questionOption("contracted", optionTypes.J),
            new questionOption("done on a casual basis", optionTypes.P)
        ]),
        new question(
        "At work, you prefer", [
            new questionOption("relying on routines as the most effective and comfortable ways to get thing done", optionTypes.J),
            new questionOption("finding different ways to do things to maintain your interest", optionTypes.P)
        ]),
        new question(
        "In general terms, do you prefer", [
            new questionOption("dinner with large groups of friends", optionTypes.E),
            new questionOption("dinner with small groups of friends", optionTypes.I)
        ]),
        new question(
        "At work, your preference is", [
            new questionOption("learn about what works from experience, relying on knowledge gained from “doing”", optionTypes.S),
            new questionOption("trusting theories and discovering patterns", optionTypes.N)
        ]),
        new question(
        "In academic group assignments, you were often the one in charge of", [
            new questionOption("production and distribution", optionTypes.S),
            new questionOption("design and research", optionTypes.N)
        ]),
        new question(
        "Which is more of a compliment", [
            new questionOption("“there is a very logical person”", optionTypes.T),
            new questionOption("“there is a very sentimental person”", optionTypes.F)
        ]),
        new question(
        "At work, you usually prefer", [
            new questionOption("the conflict to be depersonalized and solutions to be focused on what needs to happen for the work to get done", optionTypes.T),
            new questionOption("the conflict to be solved in a way that everybody feels satisfied", optionTypes.F)
        ]),
        new question(
        "Do you more often prefer the", [
            new questionOption("final and unalterable statement", optionTypes.J),
            new questionOption("tentative and preliminary statement", optionTypes.P)
        ]),
        new question(
        "You are more comfortable", [
            new questionOption("after a decision", optionTypes.J),
            new questionOption("before a decision", optionTypes.P)
        ]),
        //50
        new question(
        "When you talk to strangers, you usually", [
            new questionOption("speak easily and at length ", optionTypes.E),
            new questionOption("find yourself thinking before speaking ", optionTypes.I)
        ]),
        new question(
        "At work, your preference is usually", [
            new questionOption("seeking applications and making ideas real and concrete", optionTypes.S),
            new questionOption("inventing clever new ways to see and do things", optionTypes.N)
        ]),
        new question(
        "The kind of complaint you are more likely to make is", [
            new questionOption("“whatever idea I have, my boss always shoots it down”", optionTypes.S),
            new questionOption("“my boss is so impractical. We are trying to decide on concrete stuff and he’s telling us Greek myths”", optionTypes.N)
        ]),
        new question(
        "At work, the boss more likely to be complimented is", [
            new questionOption("one of clear reason", optionTypes.T),
            new questionOption("one of strong feelings", optionTypes.F)
        ]),
        new question(
        "You most likely prefer", [
            new questionOption("feedback to focus on their work, their competence, and the task", optionTypes.T),
            new questionOption("feedback to focus on them as an individual – their contribution to the group, their commitment and efforts", optionTypes.F)
        ]),
        new question(
        "At work, you prefer", [
            new questionOption("Developing precise, step-by-step ways to complete immediate tasks", optionTypes.J),
            new questionOption("Trusting that what to do next will appear when it’s needed", optionTypes.P)
        ]),
        new question(
        "At work, you prefer", [
            new questionOption("beginning early to avoid the stress of last-minute rush", optionTypes.J),
            new questionOption("waiting until the last minute in order to take advantage of the rush of energy that comes then", optionTypes.P)
        ]),
        new question(
        "When the phone rings, you usually", [
            new questionOption("hasten to get to it first", optionTypes.E),
            new questionOption("hope someone else will answer", optionTypes.I)
        ]),
        new question(
        "As you exercise your profession, what you prize more in yourself is", [
            new questionOption("a. your strong sense of reality", optionTypes.S),
            new questionOption("b. your vivid imagination", optionTypes.N)
        ]),
        new question(
        "When you work in a group, after the first team meeting, you prefer to", [
            new questionOption("act as soon as possible ", optionTypes.S),
            new questionOption("speculate about various options", optionTypes.N)
        ]),
        //60
        new question(
        "In the work routine, a great error seems", [
            new questionOption("to be too passionate", optionTypes.T),
            new questionOption("to be too objective", optionTypes.F)
        ]),
        new question(
        "At work", [
            new questionOption("your actions are seldom influenced by emotions", optionTypes.T),
            new questionOption("you frequently and easily express your feelings and emotions", optionTypes.F)
        ]),
        new question(
        "At work, the situation that appeals to you more is", [
            new questionOption("the structured and scheduled", optionTypes.J),
            new questionOption("the unstructured and unscheduled", optionTypes.P)
        ]),
        new question(
        "You are a more", [
            new questionOption("routinized than whimsical person", optionTypes.J),
            new questionOption("whimsical than routinized person", optionTypes.P)
        ]),
        new question(
        "What do you think of eating alone?", [
            new questionOption("it’s ok, but I do not like it", optionTypes.E),
            new questionOption("it’s ok. I do not care", optionTypes.I)
        ]),
        new question(
        "At work, your preference is", [
            new questionOption("respecting and relying on time-honored ways of doing things", optionTypes.S),
            new questionOption("inventing a new way of doing things", optionTypes.N)
        ]),
        new question(
        "While brainstorming something in the company, the kind of question you tend to ask is", [
            new questionOption("WHO? WHAT? WHERE? WHEN? A lot of specific questions to learn details and relevant information and examples", optionTypes.S),
            new questionOption("WHY? Leap to other topics they see as connected, and offer different perspectives", optionTypes.N)
        ]),
        new question(
        "At work, you usually prefer to", [
            new questionOption("be convinced of the rightness of a decision, pushing it through", optionTypes.T),
            new questionOption("see both sides of an issue; seek consensus", optionTypes.F)
        ]),
        new question(
        "At work, you are most likely to be associated to", [
            new questionOption("an insensitive guy", optionTypes.T),
            new questionOption("an overemotional guy", optionTypes.F)
        ]),
        new question(
        "At work, which is more likely to come out of your mouth?", [
            new questionOption("“okay, we are done with that, what is next?”", optionTypes.J),
            new questionOption("“that is interesting, but have you thought about…?”", optionTypes.P)
        ]),
        //70
        new question(
        "When I schedule an appointment ", [
            new questionOption("I’m likely to arrive earlier", optionTypes.J),
            new questionOption("I’m likely to be late", optionTypes.P)
        ])
];