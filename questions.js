// ============================================================
// PRELIM EXAM QUESTION BANK - 300 QUESTIONS
// Weeks 1-3: Computer Waste, Privacy, Cybersecurity
// Based exclusively on provided lecture materials
// ============================================================

const QUESTION_BANK = [
    // ============================================================
    // WEEK 1: COMPUTER WASTE AND MISTAKES (100 questions)
    // ============================================================

    // --- Definitions (IDs 1-10) ---
    {
        id: 1,
        week: 1,
        category: "Definitions",
        question: "What is the formal definition of computer waste?",
        options: [
            "The unauthorized access to computer systems for personal gain",
            "The inappropriate, inefficient, or unnecessary use of computer technology and resources that does not contribute to organizational objectives",
            "The deliberate destruction of computer hardware",
            "The process of recycling outdated computer equipment"
        ],
        correct: 1,
        explanation: "Computer waste involves the inappropriate use of computer technology and resources that does not contribute to organizational objectives."
    },
    {
        id: 2,
        week: 1,
        category: "Definitions",
        question: "What is the GIGO principle in computing?",
        options: [
            "Garbage In, Gospel Out — flawed data produces reliable results",
            "Garbage In, Garbage Out — flawed input data will invariably produce flawed output",
            "Good Input, Great Output — high-quality data always produces perfect results",
            "Graphical Interface, Graphical Output — visual systems are always accurate"
        ],
        correct: 1,
        explanation: "GIGO (Garbage In, Garbage Out) is the principle that flawed input data will invariably produce flawed output."
    },
    {
        id: 3,
        week: 1,
        category: "Definitions",
        question: "What distinguishes computer-related mistakes from computer crimes?",
        options: [
            "Mistakes are deliberate, crimes are accidental",
            "Mistakes are accidental or negligent with no malicious intent; crimes are deliberate and malicious",
            "Mistakes only involve hardware, crimes only involve software",
            "There is no distinction—they are the same"
        ],
        correct: 1,
        explanation: "Computer-related mistakes are accidental or negligent, while computer crimes involve deliberate and malicious intent."
    },
    {
        id: 4,
        week: 1,
        category: "Definitions",
        question: "What is a computer-related mistake?",
        options: [
            "An error, failure, or computer problem that renders computer output incorrect, unreliable, or unusable for its intended purpose",
            "A deliberate attempt to compromise computer security",
            "A hardware failure that requires physical replacement",
            "A software feature that fails to meet user expectations"
        ],
        correct: 0,
        explanation: "A computer-related mistake is an error that renders computer output incorrect, unreliable, or unusable."
    },
    {
        id: 5,
        week: 1,
        category: "Definitions",
        question: "According to the module, computer waste is compared to which analogy?",
        options: [
            "A broken window",
            "A leaky faucet in a massive building",
            "A flat tire",
            "A power outage"
        ],
        correct: 1,
        explanation: "Computer waste is compared to a leaky faucet—a single drip isn't a crisis, but thousands over time become enormous."
    },
    {
        id: 6,
        week: 1,
        category: "Definitions",
        question: "Which statement best describes the critical distinction between waste and mistakes?",
        options: [
            "Waste is intentional; mistakes are accidental",
            "Waste = 'We used resources poorly.' Mistake = 'The answer the computer gave us was wrong.'",
            "Waste affects hardware; mistakes affect software",
            "Waste is caused by hackers; mistakes are caused by employees"
        ],
        correct: 1,
        explanation: "Waste is about resource misallocation; mistakes are about output integrity."
    },
    {
        id: 7,
        week: 1,
        category: "Definitions",
        question: "What does 'Redundancy' mean in the context of computer systems?",
        options: [
            "Having too many copies of the same file",
            "The duplication of critical components to increase reliability",
            "Deleting unnecessary data to save space",
            "Using older hardware instead of newer models"
        ],
        correct: 1,
        explanation: "Redundancy is the duplication of critical components to increase reliability, usually as a backup or fail-safe."
    },
    {
        id: 8,
        week: 1,
        category: "Definitions",
        question: "What is 'Environmental Control' in IT?",
        options: [
            "Controlling the number of computers in a room",
            "The systems and procedures to maintain optimal physical conditions (temperature, humidity, power) for computer equipment",
            "Setting up firewalls to control network traffic",
            "Managing software licenses"
        ],
        correct: 1,
        explanation: "Environmental control maintains optimal physical conditions like temperature, humidity, and power quality for computer equipment."
    },
    {
        id: 9,
        week: 1,
        category: "Definitions",
        question: "What is 'Shadow IT' as a form of computer waste?",
        options: [
            "IT systems used only at night",
            "Multiple departments purchasing overlapping tools independently without central review",
            "IT systems that are hidden from hackers",
            "Software that is never used"
        ],
        correct: 1,
        explanation: "Shadow IT refers to departments purchasing overlapping tools independently, leading to duplication and waste."
    },
    {
        id: 10,
        week: 1,
        category: "Definitions",
        question: "What is 'shelfware' in the context of software waste?",
        options: [
            "Software that is used daily",
            "Maintaining licenses for software no longer in use",
            "Software that is open-source",
            "Software that is installed on all company computers"
        ],
        correct: 1,
        explanation: "Shelfware refers to software licenses that are maintained but no longer in use, a form of software bloat."
    },

    // --- Computer Waste Categories (IDs 11-30) ---
    {
        id: 11,
        week: 1,
        category: "Computer Waste",
        question: "Which of the following is an example of personal use of organizational IT resources?",
        options: [
            "Using company email to respond to client inquiries",
            "Streaming video services during work hours for personal entertainment",
            "Running system diagnostics on company servers",
            "Updating security patches on workstations"
        ],
        correct: 1,
        explanation: "Personal use includes streaming video, online shopping, gaming, or social media during work hours using company technology."
    },
    {
        id: 12,
        week: 1,
        category: "Computer Waste",
        question: "What is 'software bloat'?",
        options: [
            "Software that requires too much memory to run",
            "Purchasing, licensing, or maintaining software that is underutilized, redundant, or unnecessary",
            "Software that contains too many features for end users",
            "The process of software becoming slower with each update"
        ],
        correct: 1,
        explanation: "Software bloat is purchasing or maintaining software that is underutilized, redundant, or unnecessary."
    },
    {
        id: 13,
        week: 1,
        category: "Computer Waste",
        question: "According to Gartner, what percentage of enterprise software licenses go completely unused?",
        options: ["Up to 10%", "Up to 30%", "Up to 50%", "Up to 70%"],
        correct: 1,
        explanation: "Gartner found up to 30% of enterprise software licenses go completely unused."
    },
    {
        id: 14,
        week: 1,
        category: "Computer Waste",
        question: "What is 'digital hoarding'?",
        options: [
            "Collecting vintage computer equipment",
            "Retaining all data indefinitely without regard to value, relevance, or storage cost",
            "Storing data in multiple cloud services",
            "Creating digital copies of physical documents"
        ],
        correct: 1,
        explanation: "Digital hoarding is retaining all data indefinitely 'just in case we need it someday.'"
    },
    {
        id: 15,
        week: 1,
        category: "Computer Waste",
        question: "What does the phrase 'paving the cow path' refer to?",
        options: [
            "Building roads on farmland",
            "Using technology to do the wrong thing faster rather than redesigning the process fundamentally",
            "Creating computer systems for agricultural management",
            "Following established industry practices"
        ],
        correct: 1,
        explanation: "'Paving the cow path' refers to automating inefficient processes rather than redesigning them fundamentally."
    },
    {
        id: 16,
        week: 1,
        category: "Computer Waste",
        question: "Which is NOT a major category of computer waste?",
        options: [
            "Personal use of IT resources",
            "Software and application bloat",
            "Cyberattacks on company systems",
            "Inefficient data management"
        ],
        correct: 2,
        explanation: "Cyberattacks are a security threat, not a category of waste."
    },
    {
        id: 17,
        week: 1,
        category: "Computer Waste",
        question: "What is the impact of employees using company email for personal mass communications?",
        options: [
            "Increased productivity",
            "Legal liability and bandwidth consumption",
            "Improved company culture",
            "No impact at all"
        ],
        correct: 1,
        explanation: "Personal mass communications can lead to legal liability and consume bandwidth."
    },
    {
        id: 18,
        week: 1,
        category: "Computer Waste",
        question: "What is a compounding factor of digital hoarding?",
        options: [
            "Increased backup time and storage costs",
            "Faster system performance",
            "Reduced energy consumption",
            "Lower legal discovery costs"
        ],
        correct: 0,
        explanation: "Digital hoarding increases backup time, storage costs, and slows system performance."
    },
    {
        id: 19,
        week: 1,
        category: "Computer Waste",
        question: "What does 'GIGO at Scale' refer to?",
        options: [
            "Processing massive amounts of garbage data",
            "Investing resources into processing data that is fundamentally flawed, outdated, or irrelevant",
            "Using scale to improve data quality",
            "Automatically correcting input errors"
        ],
        correct: 1,
        explanation: "GIGO at Scale means investing resources into processing flawed data, wasting computing and human effort."
    },
    {
        id: 20,
        week: 1,
        category: "Computer Waste",
        question: "Which is an example of process inefficiency waste?",
        options: [
            "Manually re-entering data from one system into another",
            "Encrypting all company data",
            "Installing the latest software updates",
            "Upgrading network infrastructure"
        ],
        correct: 0,
        explanation: "Manually re-entering data when integration is possible is a form of process inefficiency."
    },
    {
        id: 21,
        week: 1,
        category: "Computer Waste",
        question: "What is 'shelfware'?",
        options: [
            "Software that is used occasionally",
            "Maintaining licenses for software no longer in use",
            "Software that is free",
            "Software that is installed on servers"
        ],
        correct: 1,
        explanation: "Shelfware is software licenses maintained but no longer used."
    },
    {
        id: 22,
        week: 1,
        category: "Computer Waste",
        question: "What is the cost multiplier effect of GIGO at scale?",
        options: [
            "It only wastes computing resources",
            "It wastes computing resources, human effort, and strategic decisions",
            "It saves money in the long run",
            "It has no effect on costs"
        ],
        correct: 1,
        explanation: "GIGO at scale wastes not just computing resources but human effort and opportunity costs."
    },
    {
        id: 23,
        week: 1,
        category: "Computer Waste",
        question: "What is a common example of digital hoarding?",
        options: [
            "Deleting emails with large attachments",
            "Never deleting emails with large attachments",
            "Archiving data to low-cost storage",
            "Using cloud storage for backup"
        ],
        correct: 1,
        explanation: "Never deleting emails with large attachments is a classic example of digital hoarding."
    },
    {
        id: 24,
        week: 1,
        category: "Computer Waste",
        question: "What is 'shadow IT'?",
        options: [
            "IT systems used only at night",
            "Multiple departments purchasing overlapping tools independently",
            "IT systems that are hidden from hackers",
            "Software that is never used"
        ],
        correct: 1,
        explanation: "Shadow IT refers to departments purchasing overlapping tools without central coordination."
    },
    {
        id: 25,
        week: 1,
        category: "Computer Waste",
        question: "Which is a consequence of software bloat?",
        options: [
            "Increased productivity",
            "Wasted licensing costs and underutilized features",
            "Faster system performance",
            "Better employee satisfaction"
        ],
        correct: 1,
        explanation: "Software bloat leads to wasted licensing costs and underutilized features."
    },
    {
        id: 26,
        week: 1,
        category: "Computer Waste",
        question: "What is the 'Ferrari to go grocery shopping' analogy referring to?",
        options: [
            "Using luxury cars for business",
            "Deploying overpowered hardware for basic tasks",
            "Buying expensive software for simple needs",
            "Hiring overqualified staff"
        ],
        correct: 1,
        explanation: "It refers to deploying overpowered hardware for basic tasks—a form of waste."
    },
    {
        id: 27,
        week: 1,
        category: "Computer Waste",
        question: "What is the impact of maintaining parallel paper and digital systems?",
        options: [
            "Increased efficiency",
            "Redundant effort and waste",
            "Better data security",
            "Reduced costs"
        ],
        correct: 1,
        explanation: "Maintaining parallel systems creates redundant effort and waste."
    },
    {
        id: 28,
        week: 1,
        category: "Computer Waste",
        question: "What is the primary driver of digital hoarding?",
        options: [
            "Lack of storage space",
            "The 'just in case we need it someday' mentality",
            "Government regulations",
            "High cost of deletion"
        ],
        correct: 1,
        explanation: "Digital hoarding is driven by the 'just in case we need it someday' mentality."
    },
    {
        id: 29,
        week: 1,
        category: "Computer Waste",
        question: "What is the environmental impact of digital hoarding?",
        options: [
            "Reduced carbon footprint",
            "Higher energy consumption for storage arrays",
            "Less cooling required",
            "No environmental impact"
        ],
        correct: 1,
        explanation: "Digital hoarding increases energy consumption for storage and cooling."
    },
    {
        id: 30,
        week: 1,
        category: "Computer Waste",
        question: "Which is an example of process inefficiency?",
        options: [
            "Using digital signatures",
            "Printing, signing, scanning, and emailing documents instead of using digital signatures",
            "Automating data entry",
            "Integrating systems"
        ],
        correct: 1,
        explanation: "Printing, signing, scanning, and emailing instead of using digital signatures is inefficient."
    },

    // --- Types of Computer Mistakes (IDs 31-60) ---
    {
        id: 31,
        week: 1,
        category: "Computer Mistakes",
        question: "What is a data-entry error?",
        options: [
            "A hardware failure causing data loss",
            "A software bug that corrupts data",
            "Incorrect data fed into the system due to human input error",
            "A network issue preventing data transmission"
        ],
        correct: 2,
        explanation: "Data-entry errors occur when the system works but the input data is wrong."
    },
    {
        id: 32,
        week: 1,
        category: "Computer Mistakes",
        question: "What is a 'fat finger' trade?",
        options: [
            "A trade executed using a touchscreen",
            "A large financial transaction caused by a data-entry error",
            "A trade by a physically disabled trader",
            "A transaction requiring multiple approvals"
        ],
        correct: 1,
        explanation: "A 'fat finger' trade is a large financial loss from a data-entry error."
    },
    {
        id: 33,
        week: 1,
        category: "Computer Mistakes",
        question: "What distinguishes a software bug from a data-entry error?",
        options: [
            "Bugs are one-time; data-entry errors are repeatable",
            "Bugs are systematic and reproducible; data-entry errors are random human errors",
            "Bugs only affect display; data-entry errors affect calculations",
            "Bugs are harmless; data-entry errors are catastrophic"
        ],
        correct: 1,
        explanation: "Bugs are systematic and reproducible, while data-entry errors are random."
    },
    {
        id: 34,
        week: 1,
        category: "Computer Mistakes",
        question: "The Intel Pentium FDIV bug of 1994 is an example of:",
        options: [
            "Data-entry error",
            "Error in computer program (software bug)",
            "Mishandling of computer output",
            "Inadequate planning for equipment malfunction"
        ],
        correct: 1,
        explanation: "The FDIV bug was a hardware-level bug that caused calculation errors."
    },
    {
        id: 35,
        week: 1,
        category: "Computer Mistakes",
        question: "What caused the destruction of the NASA Mars Climate Orbiter in 1999?",
        options: [
            "A hardware failure",
            "Incompatible measurement units (English vs. metric) in navigation software",
            "A malicious cyberattack",
            "An environmental failure in mission control"
        ],
        correct: 1,
        explanation: "One team used English units while NASA used metric—a unit mismatch error."
    },
    {
        id: 36,
        week: 1,
        category: "Computer Mistakes",
        question: "What is 'mishandling of computer output'?",
        options: [
            "The computer producing incorrect output due to a bug",
            "Humans failing in the interpretation, distribution, action upon, or security of accurate output",
            "The computer failing to display output on the screen",
            "Printing documents on the wrong paper size"
        ],
        correct: 1,
        explanation: "Mishandling occurs when accurate output is misinterpreted, misdistributed, or not acted upon."
    },
    {
        id: 37,
        week: 1,
        category: "Computer Mistakes",
        question: "What does MTBF stand for?",
        options: [
            "Mean Time Between Failures",
            "Maximum Time Before Failure",
            "Minimum Time Before Failure",
            "Mean Total Business Failure"
        ],
        correct: 0,
        explanation: "MTBF is the statistically predictable lifespan of hardware components."
    },
    {
        id: 38,
        week: 1,
        category: "Computer Mistakes",
        question: "What is RAID?",
        options: [
            "A type of computer virus",
            "A configuration of multiple hard drives for redundancy",
            "A software program for data recovery",
            "A network protocol"
        ],
        correct: 1,
        explanation: "RAID (Redundant Array of Independent Disks) provides data redundancy."
    },
    {
        id: 39,
        week: 1,
        category: "Computer Mistakes",
        question: "What was the Knight Capital Group loss in 2012 caused by?",
        options: [
            "A cyberattack on their trading systems",
            "A deployment mistake combined with retaining obsolete code",
            "A data-entry error by a trader",
            "A failure of their backup generator"
        ],
        correct: 1,
        explanation: "A well-meaning IT technician skipped one server, reactivating old code that executed losing trades."
    },
    {
        id: 40,
        week: 1,
        category: "Computer Mistakes",
        question: "What environmental threat causes electrostatic discharge?",
        options: [
            "High humidity",
            "Low humidity",
            "Extreme heat",
            "Water damage"
        ],
        correct: 1,
        explanation: "Low humidity causes electrostatic discharge that can damage components."
    },
    {
        id: 41,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the Y2K problem an example of?",
        options: [
            "Data-entry error",
            "Software bug (design decision to represent years with two digits)",
            "Mishandling of output",
            "Environmental difficulty"
        ],
        correct: 1,
        explanation: "The Y2K problem was a widespread design flaw in software."
    },
    {
        id: 42,
        week: 1,
        category: "Computer Mistakes",
        question: "What caused the Ariane 5 Flight 501 disaster?",
        options: [
            "Data-entry error",
            "Reusing software from Ariane 4 without proper testing, causing an overflow",
            "Environmental failure",
            "Cyberattack"
        ],
        correct: 1,
        explanation: "An overflow error occurred when a 64-bit number was converted to 16-bit."
    },
    {
        id: 43,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the key lesson from the Intel Pentium FDIV bug?",
        options: [
            "Hardware never fails",
            "Trust and transparency matter as much as technical accuracy",
            "Software bugs are always harmless",
            "Intel products are always reliable"
        ],
        correct: 1,
        explanation: "Intel's initial downplaying of the bug compounded the damage."
    },
    {
        id: 44,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the 'Unread Alert' scenario an example of?",
        options: [
            "Data-entry error",
            "Mishandling of computer output (failure to act on an alert)",
            "Software bug",
            "Inadequate environmental planning"
        ],
        correct: 1,
        explanation: "The alert was accurate, but human process failed to act on it."
    },
    {
        id: 45,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the 'Public Printer' scenario an example of?",
        options: [
            "Data-entry error",
            "Mishandling of computer output (physical mishandling of printed documents)",
            "Software bug",
            "Inadequate equipment planning"
        ],
        correct: 1,
        explanation: "Accurate documents were left in a public area—a security failure."
    },
    {
        id: 46,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the 'Misinterpreted Dashboard' scenario an example of?",
        options: [
            "Data-entry error",
            "Mishandling of computer output (misinterpretation of accurate data)",
            "Software bug",
            "Environmental difficulty"
        ],
        correct: 1,
        explanation: "The dashboard was accurate, but the executive misinterpreted its meaning."
    },
    {
        id: 47,
        week: 1,
        category: "Computer Mistakes",
        question: "What does 'inadequate planning for equipment malfunction' mean?",
        options: [
            "Assuming hardware will never fail",
            "Failing to anticipate and design resilience against inevitable hardware failure",
            "Using only one brand of hardware",
            "Not having enough software licenses"
        ],
        correct: 1,
        explanation: "It means failing to plan for the inevitable failure of hardware components."
    },
    {
        id: 48,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the core principle regarding hardware failure?",
        options: [
            "Hardware never fails",
            "Hardware will fail; the question is when",
            "Hardware fails only due to cyberattacks",
            "Hardware fails only after 10 years"
        ],
        correct: 1,
        explanation: "Hardware will inevitably fail; organizations must be prepared."
    },
    {
        id: 49,
        week: 1,
        category: "Computer Mistakes",
        question: "What was the mistake in the 'Single Database Server' case study?",
        options: [
            "Using a database at all",
            "Having no redundancy for the RAID controller",
            "Not having enough storage",
            "Using the wrong software"
        ],
        correct: 1,
        explanation: "The RAID controller failed and had no redundancy, causing data loss."
    },
    {
        id: 50,
        week: 1,
        category: "Computer Mistakes",
        question: "What is a common failure in environmental planning?",
        options: [
            "Using surge suppressors",
            "Locating a data center in a flood plain without waterproofing",
            "Having redundant cooling",
            "Using UPS systems"
        ],
        correct: 1,
        explanation: "Locating in a flood plain without waterproofing is inadequate environmental planning."
    },
    {
        id: 51,
        week: 1,
        category: "Computer Mistakes",
        question: "What caused the generator failure in the hospital case study?",
        options: [
            "Lack of fuel",
            "A defective transfer switch that was never tested",
            "A cyberattack on the generator",
            "Human error in starting it"
        ],
        correct: 1,
        explanation: "The transfer switch had a defect that was never detected because full-load testing was never performed."
    },
    {
        id: 52,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the key lesson from the generator failure case?",
        options: [
            "Generators are unreliable",
            "Testing is not optional; verify that systems work under real conditions",
            "Hospitals don't need generators",
            "Batteries last forever"
        ],
        correct: 1,
        explanation: "The system had never been tested under full load, so the defect was never discovered."
    },
    {
        id: 53,
        week: 1,
        category: "Computer Mistakes",
        question: "Which environmental threat requires humidifiers?",
        options: [
            "High humidity",
            "Low humidity",
            "Heat",
            "Fire"
        ],
        correct: 1,
        explanation: "Low humidity requires humidifiers to prevent electrostatic discharge."
    },
    {
        id: 54,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the recommended relative humidity for data centers?",
        options: [
            "10-20%",
            "40-60%",
            "70-90%",
            "100%"
        ],
        correct: 1,
        explanation: "Humidity controls should maintain approximately 40–60% relative humidity."
    },
    {
        id: 55,
        week: 1,
        category: "Computer Mistakes",
        question: "What type of fire suppression is appropriate for IT environments?",
        options: [
            "Water sprinklers",
            "Clean-agent or inert-gas fire suppression",
            "Foam extinguishers",
            "Dry chemical extinguishers"
        ],
        correct: 1,
        explanation: "Water sprinklers can damage equipment; clean-agent or inert-gas systems are preferred."
    },
    {
        id: 56,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the purpose of water-detection sensors in a data center?",
        options: [
            "To detect fire",
            "To detect leaks and floods",
            "To detect low humidity",
            "To detect high temperature"
        ],
        correct: 1,
        explanation: "Water-detection sensors help identify leaks before they cause damage."
    },
    {
        id: 57,
        week: 1,
        category: "Computer Mistakes",
        question: "What is the '3-2-1' backup rule?",
        options: [
            "3 copies, 2 different media, 1 copy off-site",
            "3 backups per day, 2 locations, 1 week retention",
            "2 copies on-site, 1 copy in the cloud",
            "3 years of data, 2 backup systems, 1 recovery plan"
        ],
        correct: 0,
        explanation: "The 3-2-1 rule: 3 copies, 2 media types, 1 off-site."
    },
    {
        id: 58,
        week: 1,
        category: "Computer Mistakes",
        question: "What is RTO (Recovery Time Objective)?",
        options: [
            "Amount of data that can be lost",
            "How quickly a system must be recovered after failure",
            "Total cost of recovery",
            "Maximum age of backups"
        ],
        correct: 1,
        explanation: "RTO is the target time for recovering a system."
    },
    {
        id: 59,
        week: 1,
        category: "Computer Mistakes",
        question: "What is RPO (Recovery Point Objective)?",
        options: [
            "How quickly a system must be recovered",
            "Amount of data loss that can be tolerated",
            "Priority order of systems for recovery",
            "Maximum cost of recovery"
        ],
        correct: 1,
        explanation: "RPO is the amount of data loss that can be tolerated."
    },
    {
        id: 60,
        week: 1,
        category: "Computer Mistakes",
        question: "What is 'separation of duties'?",
        options: [
            "Assigning employees to different departments",
            "Ensuring the person entering data is not the same person approving it",
            "Separating IT from other business functions",
            "Dividing responsibilities between managers"
        ],
        correct: 1,
        explanation: "Separation of duties prevents fraud and undetected errors."
    },

    // --- Root Causes and Prevention (IDs 61-100) ---
    {
        id: 61,
        week: 1,
        category: "Prevention",
        question: "What is a root cause of computer waste?",
        options: [
            "Lack of training and awareness",
            "Having too many IT staff",
            "Using the latest technology",
            "Regular system audits"
        ],
        correct: 0,
        explanation: "Lack of training and awareness is a root cause of both waste and mistakes."
    },
    {
        id: 62,
        week: 1,
        category: "Prevention",
        question: "What is an Acceptable Use Policy (AUP)?",
        options: [
            "A policy that defines permitted and prohibited uses of organizational IT resources",
            "A policy that allows unlimited personal use",
            "A policy that bans all internet use",
            "A policy that only applies to managers"
        ],
        correct: 0,
        explanation: "An AUP clearly defines permitted and prohibited uses of IT resources."
    },
    {
        id: 63,
        week: 1,
        category: "Prevention",
        question: "Why is regular training important for preventing computer mistakes?",
        options: [
            "It ensures employees know how to use all software features",
            "It reinforces data entry accuracy, security awareness, and proper handling of output",
            "It eliminates the need for policies",
            "It is only needed for new employees"
        ],
        correct: 1,
        explanation: "Training reinforces key skills and awareness, and is not a one-time event."
    },
    {
        id: 64,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a formal change management process?",
        options: [
            "To prevent all changes",
            "To ensure all changes are documented, reviewed, and tested before deployment",
            "To make changes faster",
            "To reduce costs"
        ],
        correct: 1,
        explanation: "Change management requires documentation, review, testing, and rollback plans."
    },
    {
        id: 65,
        week: 1,
        category: "Prevention",
        question: "What is input validation?",
        options: [
            "Checking if a value is within expected bounds",
            "Encrypting data before storage",
            "Creating backups of the database",
            "Installing a firewall"
        ],
        correct: 0,
        explanation: "Input validation includes range checks, format checks, and reasonableness checks."
    },
    {
        id: 66,
        week: 1,
        category: "Prevention",
        question: "What is an audit trail?",
        options: [
            "A record of who accessed what data and when",
            "A financial report",
            "A list of software licenses",
            "A network diagram"
        ],
        correct: 0,
        explanation: "Audit trails enable after-the-fact investigation and correction."
    },
    {
        id: 67,
        week: 1,
        category: "Prevention",
        question: "Why should backup restoration drills be conducted regularly?",
        options: [
            "To ensure backups are restorable and data can be recovered",
            "To test employee patience",
            "To consume storage space",
            "To increase system load"
        ],
        correct: 0,
        explanation: "Regular drills verify that backups can actually be restored."
    },
    {
        id: 68,
        week: 1,
        category: "Prevention",
        question: "What is the 'culture trumps technology' principle?",
        options: [
            "Technology is more important than culture",
            "The best technology is worthless without a culture of training and accountability",
            "Culture has no impact on security",
            "Technology always fixes cultural problems"
        ],
        correct: 1,
        explanation: "Organizational culture—training and accountability—is the ultimate control."
    },
    {
        id: 69,
        week: 1,
        category: "Prevention",
        question: "What is a key takeaway about computer waste?",
        options: [
            "Waste is always obvious and easy to spot",
            "Waste accumulates through thousands of small actions; look for patterns",
            "Waste is only caused by hackers",
            "Waste has no financial impact"
        ],
        correct: 1,
        explanation: "Waste is rarely a single catastrophic event; it's a death by a thousand cuts."
    },
    {
        id: 70,
        week: 1,
        category: "Prevention",
        question: "What is the key message about testing?",
        options: [
            "Testing is optional for small changes",
            "The assumption that 'it should work' is the root of many disasters; verify",
            "Only test after a disaster occurs",
            "Testing is too expensive"
        ],
        correct: 1,
        explanation: "Whether it's software, a backup, or a generator, verify it works."
    },
    {
        id: 71,
        week: 1,
        category: "Prevention",
        question: "What is the key insight about redundancy?",
        options: [
            "Redundancy is waste",
            "Redundancy is insurance, not waste; true business continuity requires investment",
            "Redundancy is only for hardware",
            "Redundancy is unnecessary for small businesses"
        ],
        correct: 1,
        explanation: "The cost of redundancy is trivial compared to the cost of an outage."
    },
    {
        id: 72,
        week: 1,
        category: "Prevention",
        question: "What does 'clear ownership and accountability' mean?",
        options: [
            "Every dataset has a named Data Owner",
            "No one is responsible for data",
            "Only IT owns data",
            "Data ownership changes daily"
        ],
        correct: 0,
        explanation: "Every dataset, system, and process should have a named owner."
    },
    {
        id: 73,
        week: 1,
        category: "Prevention",
        question: "What is the impact of short-term cost focus on IT?",
        options: [
            "It improves long-term reliability",
            "It leads to deferred maintenance and reduced redundancy",
            "It increases training budgets",
            "It has no impact"
        ],
        correct: 1,
        explanation: "Short-term cost focus often results in deferred maintenance and lack of redundancy."
    },
    {
        id: 74,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a Data Owner?",
        options: [
            "To delete all data",
            "To be responsible for the quality and protection of a specific dataset",
            "To manage IT infrastructure",
            "To approve all software purchases"
        ],
        correct: 1,
        explanation: "A Data Owner is accountable for data quality and protection."
    },
    {
        id: 75,
        week: 1,
        category: "Prevention",
        question: "What is the first line of defense against computer mistakes?",
        options: [
            "Technical controls like encryption",
            "Preventive controls like policies, training, and separation of duties",
            "Detection controls like auditing",
            "Incident response plans"
        ],
        correct: 1,
        explanation: "Preventive controls (policies, training) are the first line of defense."
    },
    {
        id: 76,
        week: 1,
        category: "Prevention",
        question: "What is the second line of defense against mistakes?",
        options: [
            "Preventive controls",
            "Process and procedure (detection) like change management and input validation",
            "Technical controls",
            "Insurance"
        ],
        correct: 1,
        explanation: "Detection controls (change management, validation) catch mistakes that slip through."
    },
    {
        id: 77,
        week: 1,
        category: "Prevention",
        question: "What is the third line of defense against mistakes?",
        options: [
            "Preventive controls",
            "Detection controls",
            "Technical controls (mitigation) like redundancy and monitoring",
            "Hiring more staff"
        ],
        correct: 2,
        explanation: "Technical controls (redundancy, monitoring, backup) minimize damage when prevention fails."
    },
    {
        id: 78,
        week: 1,
        category: "Prevention",
        question: "What is the benefit of automated monitoring and alerting?",
        options: [
            "It eliminates the need for staff",
            "It provides real-time detection of issues with clear escalation paths",
            "It reduces system performance",
            "It only works during business hours"
        ],
        correct: 1,
        explanation: "Monitoring provides real-time detection and alerts with escalation paths."
    },
    {
        id: 79,
        week: 1,
        category: "Prevention",
        question: "What is geographic diversity in IT systems?",
        options: [
            "Using servers from different manufacturers",
            "Placing critical systems in multiple physical locations to survive regional disasters",
            "Using different software versions",
            "Having multiple internet providers"
        ],
        correct: 1,
        explanation: "Geographic diversity ensures a single location failure doesn't take down all systems."
    },
    {
        id: 80,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a rollback plan in change management?",
        options: [
            "To proceed with changes regardless of issues",
            "To undo a change if it causes problems",
            "To prevent any changes",
            "To speed up the change process"
        ],
        correct: 1,
        explanation: "A rollback plan allows reverting a change if it causes issues."
    },
    {
        id: 81,
        week: 1,
        category: "Prevention",
        question: "What is the 'need-to-know' principle?",
        options: [
            "Everyone should know everything",
            "Access to information should be limited to those who need it for their work",
            "Only executives need information",
            "No one should have access to any information"
        ],
        correct: 1,
        explanation: "The need-to-know principle restricts access to only those who require it."
    },
    {
        id: 82,
        week: 1,
        category: "Prevention",
        question: "What is a range check in input validation?",
        options: [
            "Checking if a value is within expected numeric bounds",
            "Checking if a value is a valid email",
            "Checking if a value is unique",
            "Checking if a value is encrypted"
        ],
        correct: 0,
        explanation: "Range checks verify that a value falls within expected bounds."
    },
    {
        id: 83,
        week: 1,
        category: "Prevention",
        question: "What is a reasonableness check?",
        options: [
            "Checking if a value is within expected bounds",
            "Checking if an order quantity makes sense for a particular customer",
            "Checking if a value is encrypted",
            "Checking if a value is unique"
        ],
        correct: 1,
        explanation: "A reasonableness check evaluates whether a value makes sense in context."
    },
    {
        id: 84,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of regular vulnerability scanning?",
        options: [
            "To identify security weaknesses before attackers exploit them",
            "To delete all data",
            "To install new software",
            "To monitor employee productivity"
        ],
        correct: 0,
        explanation: "Vulnerability scanning proactively identifies weaknesses."
    },
    {
        id: 85,
        week: 1,
        category: "Prevention",
        question: "What is the key message about redundancy?",
        options: [
            "Redundancy is always a waste",
            "True redundancy requires thinking through every single point of failure",
            "Redundancy is only for power supplies",
            "Redundancy is optional"
        ],
        correct: 1,
        explanation: "You must consider all potential failure points, not just the obvious ones."
    },
    {
        id: 86,
        week: 1,
        category: "Prevention",
        question: "What is a common mistake in backup strategies?",
        options: [
            "Backing up too frequently",
            "Having backups but never testing restore ability",
            "Using cloud backup",
            "Using multiple backup types"
        ],
        correct: 1,
        explanation: "Many organizations have backups but have never verified they can restore them."
    },
    {
        id: 87,
        week: 1,
        category: "Prevention",
        question: "What is the impact of not having a documented disaster recovery procedure?",
        options: [
            "Recovery is faster because no one needs to read procedures",
            "Recovery is chaotic and often fails because no one knows what to do",
            "There is no impact",
            "Disasters never happen"
        ],
        correct: 1,
        explanation: "Without a documented plan, recovery is chaotic and often unsuccessful."
    },
    {
        id: 88,
        week: 1,
        category: "Prevention",
        question: "Why should critical spare parts be maintained on-site?",
        options: [
            "To reduce storage costs",
            "To allow immediate replacement without waiting for shipping",
            "To show off to visitors",
            "To use as decoration"
        ],
        correct: 1,
        explanation: "Spare parts on-site enable quick recovery from hardware failures."
    },
    {
        id: 89,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a Service Level Agreement (SLA) with hardware vendors?",
        options: [
            "To reduce costs",
            "To ensure guaranteed replacement times and support",
            "To eliminate the need for internal IT",
            "To promote the vendor"
        ],
        correct: 1,
        explanation: "SLAs define expected response times and support levels."
    },
    {
        id: 90,
        week: 1,
        category: "Prevention",
        question: "Why is it risky to have a single internet service provider?",
        options: [
            "It is cheaper",
            "If the ISP fails, the organization loses all connectivity",
            "It is faster",
            "It simplifies management"
        ],
        correct: 1,
        explanation: "A single ISP is a single point of failure for connectivity."
    },
    {
        id: 91,
        week: 1,
        category: "Prevention",
        question: "What is the key lesson from the 'Fat Finger' trade?",
        options: [
            "Traders should not use computers",
            "Input validation rules could have prevented the error",
            "Stock markets are unreliable",
            "Human error cannot be prevented"
        ],
        correct: 1,
        explanation: "Input validation (e.g., 'Are you sure?') could have caught the massive order."
    },
    {
        id: 92,
        week: 1,
        category: "Prevention",
        question: "What is the key lesson from the NASA Mars Climate Orbiter?",
        options: [
            "Space travel is too risky",
            "Interface specification errors can cause catastrophic failure; only integrated testing with diverse teams could reveal it",
            "Software testing is unnecessary",
            "Metric units should not be used"
        ],
        correct: 1,
        explanation: "The error was not a calculation bug but a communication and standards failure."
    },
    {
        id: 93,
        week: 1,
        category: "Prevention",
        question: "What is the key lesson from the Ariane 5 failure?",
        options: [
            "Rockets are unreliable",
            "Reusing software without proper re-testing can be catastrophic",
            "Software updates are always safe",
            "Floating-point numbers should never be used"
        ],
        correct: 1,
        explanation: "Reusing Ariane 4 software without proper testing caused an overflow."
    },
    {
        id: 94,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a hot/cold aisle containment in data centers?",
        options: [
            "To organize server racks",
            "To improve cooling efficiency by separating hot and cold air",
            "To create a decorative layout",
            "To reduce noise"
        ],
        correct: 1,
        explanation: "Hot/cold aisle containment improves cooling efficiency and reduces energy costs."
    },
    {
        id: 95,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of a UPS (Uninterruptible Power Supply)?",
        options: [
            "To provide power during short outages and allow graceful shutdown",
            "To generate electricity",
            "To replace generators",
            "To reduce electricity bills"
        ],
        correct: 0,
        explanation: "UPS provides battery backup for short outages and enables graceful shutdowns."
    },
    {
        id: 96,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of backup generators?",
        options: [
            "To provide power during extended outages",
            "To replace UPS systems",
            "To reduce electricity costs",
            "To provide backup internet"
        ],
        correct: 0,
        explanation: "Generators supply power during extended utility outages."
    },
    {
        id: 97,
        week: 1,
        category: "Prevention",
        question: "What is the purpose of redundant HVAC systems?",
        options: [
            "To provide heating and cooling if the primary system fails",
            "To increase energy consumption",
            "To reduce cooling efficiency",
            "To replace fans"
        ],
        correct: 0,
        explanation: "Redundant HVAC ensures temperature control if one system fails."
    },
    {
        id: 98,
        week: 1,
        category: "Prevention",
        question: "What is the key takeaway about environmental threats?",
        options: [
            "They are rare and can be ignored",
            "Prevention is almost always cheaper than recovery",
            "They only affect old equipment",
            "They are the responsibility of the IT manager only"
        ],
        correct: 1,
        explanation: "Preventing environmental damage is much cheaper than recovering from it."
    },
    {
        id: 99,
        week: 1,
        category: "Prevention",
        question: "What is the most common cause of computer-related mistakes?",
        options: [
            "Hardware failure",
            "Human error (in programming, data entry, interpretation, or planning)",
            "Cyberattacks",
            "Natural disasters"
        ],
        correct: 1,
        explanation: "The computer is almost never 'wrong'; the mistake is almost always human."
    },
    {
        id: 100,
        week: 1,
        category: "Prevention",
        question: "What is the ultimate control against computer waste and mistakes?",
        options: [
            "Firewalls",
            "Encryption",
            "Organizational culture (training, accountability, quality focus)",
            "Anti-virus software"
        ],
        correct: 2,
        explanation: "Culture—training and accountability—is the ultimate control."
    },

    // ============================================================
    // WEEK 2: PRIVACY IN THE DIGITAL AGE (100 questions)
    // ============================================================

    // --- Privacy Concepts (IDs 101-125) ---
    {
        id: 101,
        week: 2,
        category: "Privacy Concepts",
        question: "What is informational privacy?",
        options: [
            "The right to be free from physical intrusion",
            "The right to control how personal information is collected, used, stored, and shared",
            "The right to make personal choices without interference",
            "The right to communicate without unauthorized interception"
        ],
        correct: 1,
        explanation: "Informational privacy is the right to control personal information."
    },
    {
        id: 102,
        week: 2,
        category: "Privacy Concepts",
        question: "What is decisional privacy?",
        options: [
            "The right to control personal information",
            "The right to make personal choices without interference from government, corporations, or other entities",
            "The right to be free from physical surveillance",
            "The right to communicate without monitoring"
        ],
        correct: 1,
        explanation: "Decisional privacy is the right to make personal choices without interference."
    },
    {
        id: 103,
        week: 2,
        category: "Privacy Concepts",
        question: "What is physical privacy (spatial privacy)?",
        options: [
            "The right to control personal information",
            "The right to be free from intrusion into physical space, body, or personal environment",
            "The right to make decisions about one's body",
            "The right to privacy in communications"
        ],
        correct: 1,
        explanation: "Physical privacy protects against intrusion into physical space."
    },
    {
        id: 104,
        week: 2,
        category: "Privacy Concepts",
        question: "What is communications privacy?",
        options: [
            "The right to control personal information",
            "The right to communicate without unauthorized interception, monitoring, or surveillance",
            "The right to make decisions about communication methods",
            "The right to privacy in physical spaces"
        ],
        correct: 1,
        explanation: "Communications privacy protects against unauthorized interception."
    },
    {
        id: 105,
        week: 2,
        category: "Privacy Concepts",
        question: "Which Philippine law protects communications privacy?",
        options: [
            "Data Privacy Act of 2012",
            "Anti-Wiretapping Law (RA 4200)",
            "Cybercrime Prevention Act of 2012",
            "SIM Card Registration Act"
        ],
        correct: 1,
        explanation: "RA 4200 protects communications privacy."
    },
    {
        id: 106,
        week: 2,
        category: "Privacy Concepts",
        question: "Which privacy dimension is most relevant to IT professionals?",
        options: [
            "Decisional privacy",
            "Informational privacy",
            "Physical privacy",
            "Communications privacy"
        ],
        correct: 1,
        explanation: "Informational privacy (data privacy) is most relevant to IT professionals."
    },
    {
        id: 107,
        week: 2,
        category: "Privacy Concepts",
        question: "What is algorithmic manipulation?",
        options: [
            "A technique to improve search results",
            "Using data to predict and influence user decisions without their awareness",
            "A method to encrypt data",
            "A way to speed up algorithms"
        ],
        correct: 1,
        explanation: "Algorithmic manipulation erodes decisional privacy by shaping decisions."
    },
    {
        id: 108,
        week: 2,
        category: "Privacy Concepts",
        question: "What was the Cambridge Analytica scandal about?",
        options: [
            "Hacking government databases",
            "Harvesting Facebook user data for political profiling",
            "Stealing credit card information",
            "Distributing malware"
        ],
        correct: 1,
        explanation: "Data of millions of users, including Filipinos, was harvested for political profiling."
    },
    {
        id: 109,
        week: 2,
        category: "Privacy Concepts",
        question: "What is a 'shadow profile' on social media?",
        options: [
            "A fake account created by the user",
            "Data collected about a user who doesn't have an account, through their contacts",
            "A private messaging feature",
            "A profile with no photos"
        ],
        correct: 1,
        explanation: "Platforms may collect data about non-users through contacts' address books."
    },
    {
        id: 110,
        week: 2,
        category: "Privacy Concepts",
        question: "How have privacy expectations evolved in the Platform Economy Era (2015–present)?",
        options: [
            "Privacy is at an all-time high",
            "Data is the product; surveillance is the business model; privacy requires active effort",
            "Privacy is the default setting",
            "People have stopped caring about privacy"
        ],
        correct: 1,
        explanation: "In the platform economy, privacy requires active effort to protect."
    },
    {
        id: 111,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the key insight about privacy today?",
        options: [
            "Privacy is the default",
            "Privacy must be actively designed into systems and actively claimed by individuals",
            "Privacy is no longer important",
            "Privacy is only a legal issue"
        ],
        correct: 1,
        explanation: "Privacy is not the default; it must be designed in and actively protected."
    },
    {
        id: 112,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the difference between privacy and security?",
        options: [
            "They are the same",
            "Privacy is about who should know; security is about how to protect it from threats",
            "Privacy is technical; security is legal",
            "Privacy is less important than security"
        ],
        correct: 1,
        explanation: "Privacy answers 'Who should know?' Security answers 'How do we keep it safe?'"
    },
    {
        id: 113,
        week: 2,
        category: "Privacy Concepts",
        question: "What is an example of a privacy violation that is not a security failure?",
        options: [
            "A data breach where hackers steal data",
            "A company collects data it does not need and sells it, despite having strong encryption",
            "A ransomware attack",
            "A phishing email"
        ],
        correct: 1,
        explanation: "A company may have excellent security but terrible privacy practices."
    },
    {
        id: 114,
        week: 2,
        category: "Privacy Concepts",
        question: "What is 'function creep' in the context of surveillance?",
        options: [
            "Systems performing their intended function correctly",
            "Systems installed for one purpose being used for another without consent",
            "Systems becoming faster over time",
            "Systems failing to function"
        ],
        correct: 1,
        explanation: "Function creep occurs when a system's use expands beyond its original purpose."
    },
    {
        id: 115,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the right of individuals to make personal choices without interference called?",
        options: [
            "Informational privacy",
            "Decisional privacy",
            "Physical privacy",
            "Communications privacy"
        ],
        correct: 1,
        explanation: "Decisional privacy protects personal choices."
    },
    {
        id: 116,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the right to be free from intrusion into personal environment called?",
        options: [
            "Informational privacy",
            "Decisional privacy",
            "Physical privacy",
            "Communications privacy"
        ],
        correct: 2,
        explanation: "Physical privacy protects against intrusion into personal space."
    },
    {
        id: 117,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the right to communicate without unauthorized interception called?",
        options: [
            "Informational privacy",
            "Decisional privacy",
            "Physical privacy",
            "Communications privacy"
        ],
        correct: 3,
        explanation: "Communications privacy protects against interception."
    },
    {
        id: 118,
        week: 2,
        category: "Privacy Concepts",
        question: "What is an example of decisional privacy in the digital age?",
        options: [
            "Encrypting emails",
            "Being targeted with personalized political ads based on social media activity",
            "Using CCTV cameras",
            "Protecting passwords"
        ],
        correct: 1,
        explanation: "Personalized political ads manipulate decisional privacy."
    },
    {
        id: 119,
        week: 2,
        category: "Privacy Concepts",
        question: "What is an example of physical privacy in the digital age?",
        options: [
            "Encrypting emails",
            "Workplace webcam monitoring of remote employees",
            "Protecting passwords",
            "Using encryption"
        ],
        correct: 1,
        explanation: "Webcam monitoring intrudes into physical space."
    },
    {
        id: 120,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the main privacy concern with smart home devices?",
        options: [
            "They are expensive",
            "They collect data continuously and often invisibly",
            "They are difficult to install",
            "They require frequent updates"
        ],
        correct: 1,
        explanation: "Smart devices collect data continuously, often without user awareness."
    },
    {
        id: 121,
        week: 2,
        category: "Privacy Concepts",
        question: "What is data aggregation in social media?",
        options: [
            "Combining data from multiple sources to create a comprehensive profile",
            "Deleting data from a platform",
            "Encrypting user data",
            "Anonymizing data"
        ],
        correct: 0,
        explanation: "Data aggregation builds a complete profile of a user."
    },
    {
        id: 122,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the 'Platform Economy Era' characterized by?",
        options: [
            "High privacy protection",
            "Data as the product and surveillance as the business model",
            "Anonymous internet browsing",
            "Strict data regulation globally"
        ],
        correct: 1,
        explanation: "Data is the product; surveillance is the business model."
    },
    {
        id: 123,
        week: 2,
        category: "Privacy Concepts",
        question: "What is a key cultural factor that increases vulnerability to privacy violations in the Philippines?",
        options: [
            "Individualism",
            "Pakikisama (getting along) and trust in authority figures",
            "Skepticism of authority",
            "Technical expertise"
        ],
        correct: 1,
        explanation: "Pakikisama and trust in authority make Filipinos more susceptible."
    },
    {
        id: 124,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the main privacy concern with facial recognition technology?",
        options: [
            "It is too slow",
            "Facial data is biometric (sensitive personal information) and cannot be changed",
            "It is not accurate",
            "It is expensive"
        ],
        correct: 1,
        explanation: "Facial data is sensitive biometric information that cannot be changed like a password."
    },
    {
        id: 125,
        week: 2,
        category: "Privacy Concepts",
        question: "What is the main privacy challenge with AI systems?",
        options: [
            "They are too expensive",
            "They can infer sensitive information even if you never provide it directly",
            "They are too slow",
            "They always make mistakes"
        ],
        correct: 1,
        explanation: "AI can infer pregnancy, medical conditions, or religion from seemingly unrelated data."
    },

    // --- Data Privacy Act (IDs 126-160) ---
    {
        id: 126,
        week: 2,
        category: "Data Privacy Act",
        question: "When was the Data Privacy Act of 2012 (RA 10173) enacted?",
        options: ["August 15, 2012", "September 12, 2012", "August 24, 2016", "February 8, 2024"],
        correct: 0,
        explanation: "RA 10173 was enacted on August 15, 2012."
    },
    {
        id: 127,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the National Privacy Commission (NPC)?",
        options: [
            "A private auditing firm",
            "The independent regulatory body created by the DPA",
            "A branch of the DICT",
            "A law enforcement agency"
        ],
        correct: 1,
        explanation: "The NPC administers and implements the DPA."
    },
    {
        id: 128,
        week: 2,
        category: "Data Privacy Act",
        question: "Under the DPA, what is a Data Subject?",
        options: [
            "A person who controls data collection",
            "An individual whose personal information is processed",
            "A person who processes data for a PIC",
            "A government official"
        ],
        correct: 1,
        explanation: "A Data Subject is the individual whose data is processed."
    },
    {
        id: 129,
        week: 2,
        category: "Data Privacy Act",
        question: "What is a Personal Information Controller (PIC)?",
        options: [
            "A person who processes data for another",
            "A person or organization that controls the collection, holding, processing, or use of personal information",
            "An individual whose data is processed",
            "A government agency"
        ],
        correct: 1,
        explanation: "A PIC controls the processing of personal information."
    },
    {
        id: 130,
        week: 2,
        category: "Data Privacy Act",
        question: "What is a Personal Information Processor (PIP)?",
        options: [
            "A person who controls data",
            "A person who processes personal data on behalf of a PIC",
            "A data subject",
            "A government agency"
        ],
        correct: 1,
        explanation: "A PIP processes data on behalf of a PIC."
    },
    {
        id: 131,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Be Informed under the DPA?",
        options: [
            "The right to access personal data",
            "The right to be told when personal data is collected, for what purpose, and how it will be used",
            "The right to object to processing",
            "The right to claim damages"
        ],
        correct: 1,
        explanation: "Data subjects must be informed about collection and usage."
    },
    {
        id: 132,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Access under the DPA?",
        options: [
            "The right to be informed",
            "The right to request and obtain a copy of personal data",
            "The right to object to processing",
            "The right to claim damages"
        ],
        correct: 1,
        explanation: "Data subjects can request a copy of their personal data."
    },
    {
        id: 133,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Erasure or Blocking (Right to be Forgotten)?",
        options: [
            "The right to access data",
            "The right to request removal or blocking of personal data when no longer necessary",
            "The right to object to processing",
            "The right to data portability"
        ],
        correct: 1,
        explanation: "Data can be removed when no longer necessary or when consent is withdrawn."
    },
    {
        id: 134,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the breach notification requirement under the DPA?",
        options: [
            "Notify within 24 hours",
            "Notify the NPC and affected data subjects within 72 hours",
            "Notify within 7 days",
            "No notification required"
        ],
        correct: 1,
        explanation: "PICs must notify the NPC and data subjects within 72 hours."
    },
    {
        id: 135,
        week: 2,
        category: "Data Privacy Act",
        question: "What is sensitive personal information under the DPA?",
        options: [
            "Any information that identifies an individual",
            "Information about race, health, education, religion, political affiliations, and other sensitive categories",
            "Publicly available information",
            "Encrypted information"
        ],
        correct: 1,
        explanation: "Sensitive personal information includes race, health, religion, etc."
    },
    {
        id: 136,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the penalty for unauthorized processing of personal information under the DPA?",
        options: [
            "A fine of ₱100,000",
            "1-3 years imprisonment and/or ₱500,000-₱2,000,000 fine",
            "A warning",
            "5-10 years imprisonment"
        ],
        correct: 1,
        explanation: "Unauthorized processing carries 1-3 years imprisonment and/or a substantial fine."
    },
    {
        id: 137,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the penalty for unauthorized disclosure of personal information under the DPA?",
        options: [
            "1-3 years imprisonment",
            "1.5-5 years imprisonment and/or ₱500,000-₱1,000,000 fine",
            "A warning",
            "Community service"
        ],
        correct: 1,
        explanation: "Unauthorized disclosure carries 1.5-5 years imprisonment and/or a fine."
    },
    {
        id: 138,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the penalty for concealment of security breaches under the DPA?",
        options: [
            "A warning",
            "1.5-5 years imprisonment and/or ₱500,000-₱1,000,000 fine",
            "10 years imprisonment",
            "A fine of ₱50,000"
        ],
        correct: 1,
        explanation: "Concealing breaches carries 1.5-5 years imprisonment and/or a fine."
    },
    {
        id: 139,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Data Portability?",
        options: [
            "The right to be informed",
            "The right to request data in a commonly used electronic format and transmit it to another PIC",
            "The right to object to processing",
            "The right to claim damages"
        ],
        correct: 1,
        explanation: "Data portability allows transferring data to another PIC."
    },
    {
        id: 140,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Rectify under the DPA?",
        options: [
            "The right to be informed",
            "The right to dispute inaccuracies and request correction of personal data",
            "The right to object to processing",
            "The right to claim damages"
        ],
        correct: 1,
        explanation: "Data subjects can request correction of inaccurate data."
    },
    {
        id: 141,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Damages under the DPA?",
        options: [
            "The right to be informed",
            "The right to claim compensation for damages due to inaccurate or unauthorized use of personal data",
            "The right to object to processing",
            "The right to data portability"
        ],
        correct: 1,
        explanation: "Data subjects can claim compensation for damages."
    },
    {
        id: 142,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the Right to Object under the DPA?",
        options: [
            "The right to be informed",
            "The right to refuse or withdraw consent for processing, especially for direct marketing, automated processing, or profiling",
            "The right to access data",
            "The right to claim damages"
        ],
        correct: 1,
        explanation: "Data subjects can object to processing, particularly for marketing or profiling."
    },
    {
        id: 143,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the data minimization principle?",
        options: [
            "Collect as much data as possible",
            "Only collect data that is actually needed for a specific, stated purpose",
            "Collect data only from government sources",
            "Collect data only with encryption"
        ],
        correct: 1,
        explanation: "Data minimization means only collecting necessary data."
    },
    {
        id: 144,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the transparency obligation of a PIC?",
        options: [
            "To hide data processing activities",
            "To inform data subjects about the purpose, extent, and recipients of data processing",
            "To collect as much data as possible",
            "To delete data immediately"
        ],
        correct: 1,
        explanation: "PICs must be transparent about data processing."
    },
    {
        id: 145,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the legitimate purpose obligation?",
        options: [
            "Processing data for any reason",
            "Processing data only for a specified, explicit, and legitimate purpose determined before processing",
            "Processing data without informing the subject",
            "Processing data indefinitely"
        ],
        correct: 1,
        explanation: "Data must be processed for a legitimate, specified purpose."
    },
    {
        id: 146,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the proportionality obligation?",
        options: [
            "Processing must be excessive",
            "Processing must be adequate, relevant, and not excessive",
            "Processing must be minimal",
            "Processing must be maximal"
        ],
        correct: 1,
        explanation: "Proportionality requires adequate, relevant, and not excessive processing."
    },
    {
        id: 147,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the deadline for submitting Annual Security Incident Reports (ASIR) to the NPC?",
        options: ["January 31", "March 31", "June 30", "December 31"],
        correct: 1,
        explanation: "ASIRs are due every March 31."
    },
    {
        id: 148,
        week: 2,
        category: "Data Privacy Act",
        question: "The Comeleak data breach in 2016 affected how many registered Filipino voters?",
        options: ["15 million", "35 million", "55 million", "75 million"],
        correct: 2,
        explanation: "Approximately 55 million voters were affected."
    },
    {
        id: 149,
        week: 2,
        category: "Data Privacy Act",
        question: "What type of data was compromised in the Comeleak?",
        options: ["Only names", "Full names, addresses, birth dates, passport numbers, and some fingerprint data", "Only email addresses", "Only phone numbers"],
        correct: 1,
        explanation: "The breach included full names, addresses, birth dates, passport numbers, and fingerprint data."
    },
    {
        id: 150,
        week: 2,
        category: "Data Privacy Act",
        question: "The Cebuana Lhuillier data breach in 2019 affected approximately how many clients?",
        options: ["100,000", "500,000", "900,000", "1.5 million"],
        correct: 2,
        explanation: "Approximately 900,000 clients were affected."
    },
    {
        id: 151,
        week: 2,
        category: "Data Privacy Act",
        question: "In 2021, the NPC summoned executives from which type of apps for accessing contacts without consent?",
        options: ["Social media apps", "Online lending applications", "E-commerce platforms", "Gaming apps"],
        correct: 1,
        explanation: "Online lending apps were summoned for accessing contacts for harassment."
    },
    {
        id: 152,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the SIM Card Registration Act (RA 11934)?",
        options: [
            "A law requiring SIM card registration with personal information",
            "A law banning SIM cards",
            "A law allowing anonymous SIM use",
            "A law requiring mobile phones to be registered"
        ],
        correct: 0,
        explanation: "RA 11934 requires SIM card registration with personal information."
    },
    {
        id: 153,
        week: 2,
        category: "Data Privacy Act",
        question: "What are the privacy concerns with the SIM Card Registration Act?",
        options: [
            "It is too expensive",
            "It creates a centralized database linking identity to mobile numbers, with surveillance and breach risks",
            "It is not effective",
            "It is unconstitutional"
        ],
        correct: 1,
        explanation: "The centralized database creates surveillance and breach risks."
    },
    {
        id: 154,
        week: 2,
        category: "Data Privacy Act",
        question: "In 2025, the NPC issued a Cease and Desist Order against which company over biometric data?",
        options: ["Google", "Facebook", "Tools for Humanity (Worldcoin)", "GCash"],
        correct: 2,
        explanation: "Tools for Humanity (Worldcoin) was ordered to halt processing biometric data."
    },
    {
        id: 155,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the main privacy risk of Worldcoin's iris scanning?",
        options: [
            "It is not accurate",
            "Biometric data is immutable and cannot be changed like a password",
            "It is too expensive",
            "It does not work"
        ],
        correct: 1,
        explanation: "Biometric data is immutable, making identity fraud a serious risk."
    },
    {
        id: 156,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the purpose of a Data Protection Officer (DPO)?",
        options: [
            "To manage IT infrastructure",
            "To ensure compliance with data privacy laws and protect personal data",
            "To develop software",
            "To handle network security"
        ],
        correct: 1,
        explanation: "The DPO is responsible for data privacy compliance."
    },
    {
        id: 157,
        week: 2,
        category: "Data Privacy Act",
        question: "Which organizations are required to appoint a Data Protection Officer?",
        options: [
            "All organizations",
            "Organizations that process sensitive personal data or large volumes of personal data",
            "Only government agencies",
            "Only BPO companies"
        ],
        correct: 1,
        explanation: "DPOs are required for PICs processing sensitive data or large volumes."
    },
    {
        id: 158,
        week: 2,
        category: "Data Privacy Act",
        question: "What is a Privacy Impact Assessment (PIA)?",
        options: [
            "An assessment of software performance",
            "An evaluation of new projects or systems for privacy risks before implementation",
            "An assessment of financial impacts",
            "An assessment of network security"
        ],
        correct: 1,
        explanation: "PIA evaluates privacy risks of new systems or processes."
    },
    {
        id: 159,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the key lesson for IT professionals regarding the DPA?",
        options: [
            "The DPA does not apply to IT professionals",
            "Mishandling personal data can result in criminal liability",
            "The DPA only applies to government agencies",
            "The DPA has no penalties"
        ],
        correct: 1,
        explanation: "IT professionals can face criminal liability for mishandling data."
    },
    {
        id: 160,
        week: 2,
        category: "Data Privacy Act",
        question: "What is the 'consent fatigue' vulnerability factor in the Philippines?",
        options: [
            "People are tired of giving consent",
            "Long, complex privacy policies that nobody reads create meaningless consent",
            "People consent too easily",
            "Consent is not required"
        ],
        correct: 1,
        explanation: "Complex policies lead to meaningless consent."
    },

    // --- Privacy Threats and Emerging Tech (IDs 161-200) ---
    {
        id: 161,
        week: 2,
        category: "Privacy Threats",
        question: "What is a common privacy threat in the Philippines from lending apps?",
        options: [
            "They charge high interest",
            "They access contacts and photos without meaningful consent for harassment",
            "They are too slow",
            "They have no customer service"
        ],
        correct: 1,
        explanation: "Lending apps access contacts for harassment and shaming."
    },
    {
        id: 162,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'smishing'?",
        options: [
            "A type of fishing",
            "Phishing via SMS or text messages",
            "A type of email scam",
            "A security software"
        ],
        correct: 1,
        explanation: "Smishing is phishing via SMS."
    },
    {
        id: 163,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with widespread CCTV deployment?",
        options: [
            "CCTV is expensive",
            "CCTV often lacks proper privacy notices and may track individuals without consent",
            "CCTV is not effective",
            "CCTV is only in public spaces"
        ],
        correct: 1,
        explanation: "CCTV often lacks privacy notices and can be intrusive."
    },
    {
        id: 164,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with workplace monitoring tools?",
        options: [
            "They are expensive",
            "They can capture keystrokes, screenshots, and application usage, intruding on privacy",
            "They are not effective",
            "They are easy to bypass"
        ],
        correct: 1,
        explanation: "Monitoring tools can intrude on employee privacy."
    },
    {
        id: 165,
        week: 2,
        category: "Privacy Threats",
        question: "How does the Filipino cultural value of 'pakikisama' affect privacy vulnerability?",
        options: [
            "It protects privacy",
            "It makes people more trusting and susceptible to social engineering",
            "It has no effect",
            "It makes people suspicious"
        ],
        correct: 1,
        explanation: "Pakikisama and trust in authority increase susceptibility."
    },
    {
        id: 166,
        week: 2,
        category: "Privacy Threats",
        question: "What is a privacy risk of AI-powered automated decision-making?",
        options: [
            "AI is always correct",
            "AI can make decisions without human oversight, potentially violating rights",
            "AI is too slow",
            "AI is not used in the Philippines"
        ],
        correct: 1,
        explanation: "Automated decisions without human oversight can be problematic."
    },
    {
        id: 167,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'inferential privacy' in AI?",
        options: [
            "AI cannot infer anything",
            "Even if you don't provide sensitive data, AI can infer it from other patterns",
            "AI can only infer public information",
            "AI does not infer"
        ],
        correct: 1,
        explanation: "AI can infer sensitive information from seemingly unrelated data."
    },
    {
        id: 168,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy challenge with training data for AI?",
        options: [
            "Training data is too small",
            "Training data may contain personal information, and removing it from a trained model is difficult",
            "Training data is public",
            "Training data is encrypted"
        ],
        correct: 1,
        explanation: "Removing personal data from a trained AI model is extremely difficult."
    },
    {
        id: 169,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'function creep' in facial recognition deployment?",
        options: [
            "The system becomes faster",
            "Systems installed for one purpose (e.g., security) are used for another (e.g., tracking citizens)",
            "The system fails",
            "The system is decommissioned"
        ],
        correct: 1,
        explanation: "Function creep expands the use beyond the original purpose."
    },
    {
        id: 170,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with IoT devices?",
        options: [
            "They are too expensive",
            "They collect data continuously and often invisibly, often by companies not subject to Philippine jurisdiction",
            "They are not useful",
            "They are not connected"
        ],
        correct: 1,
        explanation: "IoT devices collect data continuously, often by foreign companies."
    },
    {
        id: 171,
        week: 2,
        category: "Privacy Threats",
        question: "What is a 'shadow profile' on social media?",
        options: [
            "A fake account created by the user",
            "Data collected about a person who doesn't have an account, through contacts who upload their address books",
            "A private messaging feature",
            "A profile with no photos"
        ],
        correct: 1,
        explanation: "Platforms may collect data about non-users from their contacts."
    },
    {
        id: 172,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy issue with data aggregation on social media?",
        options: [
            "Data is always anonymous",
            "A single platform may know your relationships, interests, location, purchasing behavior, political views, and emotional state",
            "Data is not collected",
            "Data is always deleted"
        ],
        correct: 1,
        explanation: "Data aggregation creates a comprehensive and intimate profile."
    },
    {
        id: 173,
        week: 2,
        category: "Privacy Threats",
        question: "What is the Cambridge Analytica scandal an example of?",
        options: [
            "A data breach",
            "Harvesting Facebook user data for political profiling without meaningful consent",
            "A ransomware attack",
            "A phishing scam"
        ],
        correct: 1,
        explanation: "Data was harvested for political profiling."
    },
    {
        id: 174,
        week: 2,
        category: "Privacy Threats",
        question: "What is the privacy risk of third-party data sharing on social media?",
        options: [
            "Data is never shared",
            "Your data may be shared with advertisers, researchers, and other third parties in ways you never expected",
            "Sharing is always consensual",
            "Sharing is illegal"
        ],
        correct: 1,
        explanation: "Data may be shared with third parties without clear consent."
    },
    {
        id: 175,
        week: 2,
        category: "Privacy Threats",
        question: "What is a vulnerability factor for privacy in the Philippines?",
        options: [
            "High digital literacy",
            "Limited awareness of privacy rights",
            "Strong enforcement",
            "No digital payments"
        ],
        correct: 1,
        explanation: "Limited awareness of privacy rights is a major vulnerability."
    },
    {
        id: 176,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'economic pressure' as a vulnerability factor?",
        options: [
            "People have too much money",
            "When you need a loan, a job, or a service, you may feel you have no choice but to give up your data",
            "People can afford privacy",
            "Data is free"
        ],
        correct: 1,
        explanation: "Necessity may force people to give up data unwillingly."
    },
    {
        id: 177,
        week: 2,
        category: "Privacy Threats",
        question: "What is a legacy system vulnerability in the Philippines?",
        options: [
            "Legacy systems are always secure",
            "Many government and private sector systems were built before the DPA and were never redesigned for compliance",
            "Legacy systems are modern",
            "Legacy systems have no vulnerabilities"
        ],
        correct: 1,
        explanation: "Many systems predate the DPA and lack privacy protections."
    },
    {
        id: 178,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with SIM card registration?",
        options: [
            "It is too expensive",
            "It creates a massive database linking identity to mobile numbers, with surveillance and breach risks",
            "It is not effective",
            "It is not enforced"
        ],
        correct: 1,
        explanation: "The centralized database creates surveillance and breach risks."
    },
    {
        id: 179,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy threat from social engineering in the Philippines?",
        options: [
            "Social engineering is rare",
            "Scammers use personal information (e.g., from breaches) to appear legitimate and trick victims",
            "Social engineering only affects businesses",
            "Social engineering is not a threat"
        ],
        correct: 1,
        explanation: "Social engineering uses personal data to deceive victims."
    },
    {
        id: 180,
        week: 2,
        category: "Privacy Threats",
        question: "What is a common example of social engineering in the Philippines?",
        options: [
            "Fake job offers requesting copies of IDs",
            "Legitimate job offers",
            "Genuine loan applications",
            "Official government communications"
        ],
        correct: 0,
        explanation: "Fake job offers requesting personal documents are common."
    },
    {
        id: 181,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with automated decision-making in banking?",
        options: [
            "AI always approves loans",
            "Loan applications may be denied based on algorithmic assessment without human review",
            "AI is not used in banking",
            "AI has no impact"
        ],
        correct: 1,
        explanation: "Automated decisions without human oversight can be unfair."
    },
    {
        id: 182,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with targeted political messaging?",
        options: [
            "Political messaging is always honest",
            "Messages are based on psychological profiles built from data, manipulating decisional privacy",
            "Political messaging is only on TV",
            "There is no concern"
        ],
        correct: 1,
        explanation: "Targeted messaging manipulates decisional privacy."
    },
    {
        id: 183,
        week: 2,
        category: "Privacy Threats",
        question: "What is the impact of low digital literacy on privacy?",
        options: [
            "It improves privacy",
            "Users are unfamiliar with privacy settings, terms of service, and data rights",
            "It has no impact",
            "Users are always aware"
        ],
        correct: 1,
        explanation: "Low digital literacy means users don't know how to protect themselves."
    },
    {
        id: 184,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy issue with facial recognition accuracy?",
        options: [
            "It is always accurate",
            "Studies show higher error rates for darker skin tones, which affects Filipinos",
            "It is not used in the Philippines",
            "It is 100% accurate"
        ],
        correct: 1,
        explanation: "Facial recognition has bias and higher error rates for darker skin."
    },
    {
        id: 185,
        week: 2,
        category: "Privacy Threats",
        question: "What is the privacy risk of 'function creep' in facial recognition?",
        options: [
            "Systems are decommissioned",
            "Systems installed for one purpose (e.g., security) are used for another (e.g., tracking)",
            "Systems are always used for the original purpose",
            "Systems have no use"
        ],
        correct: 1,
        explanation: "Function creep expands the system's use beyond its original intent."
    },
    {
        id: 186,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy challenge with IoT devices manufactured by foreign companies?",
        options: [
            "They are cheap",
            "They are not subject to Philippine jurisdiction, creating enforcement challenges",
            "They are not used in the Philippines",
            "They are always secure"
        ],
        correct: 1,
        explanation: "Foreign companies may not comply with Philippine privacy laws."
    },
    {
        id: 187,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'algorithmic amplification' on social media?",
        options: [
            "Algorithms make content less engaging",
            "Your data is used to keep you engaged, sometimes amplifying harmful or polarizing content",
            "Algorithms have no effect",
            "Algorithms always show balanced content"
        ],
        correct: 1,
        explanation: "Algorithms amplify engagement, which can promote harmful content."
    },
    {
        id: 188,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy issue with workplace monitoring of remote workers?",
        options: [
            "It is always legal",
            "It raises questions about the employer's right to see inside an employee's home and observe family members",
            "It is not monitored",
            "It is always consensual"
        ],
        correct: 1,
        explanation: "Workplace monitoring intrudes into physical privacy."
    },
    {
        id: 189,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy risk of using social media quizzes?",
        options: [
            "They are boring",
            "They are designed to harvest personal data",
            "They are always harmless",
            "They are not popular"
        ],
        correct: 1,
        explanation: "Quizzes can harvest personal data for malicious purposes."
    },
    {
        id: 190,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with e-commerce platforms?",
        options: [
            "They are too slow",
            "They collect purchase history, location, and payment data, and may share it without clear disclosure",
            "They don't collect data",
            "They are secure"
        ],
        correct: 1,
        explanation: "E-commerce platforms collect extensive data and may share it."
    },
    {
        id: 191,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy issue with government digital services (e.g., PhilSys)?",
        options: [
            "They are too expensive",
            "They are collecting unprecedented amounts of citizen data",
            "They are not used",
            "They are private"
        ],
        correct: 1,
        explanation: "Digital government services collect large amounts of citizen data."
    },
    {
        id: 192,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy risk of GCash and Maya?",
        options: [
            "They are too slow",
            "They have tens of millions of users, creating massive repositories of financial and personal data",
            "They are not secure",
            "They are not regulated"
        ],
        correct: 1,
        explanation: "Digital payment platforms hold massive amounts of sensitive financial data."
    },
    {
        id: 193,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy issue with condominium visitor logs?",
        options: [
            "They are not used",
            "They collect excessive visitor information without privacy notices",
            "They are secure",
            "They are optional"
        ],
        correct: 1,
        explanation: "Condominiums may collect excessive information without proper notices."
    },
    {
        id: 194,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy risk of loyalty cards?",
        options: [
            "They are free",
            "Retail stores require unnecessary personal information without clear disclosure",
            "They are not used",
            "They are always optional"
        ],
        correct: 1,
        explanation: "Loyalty cards often collect unnecessary personal information."
    },
    {
        id: 195,
        week: 2,
        category: "Privacy Threats",
        question: "What is the ethical question for IT professionals regarding algorithmic decision-making?",
        options: [
            "AI always makes correct decisions",
            "If an algorithm makes a mistake and denies a loan, who is responsible? The company? The developer? The algorithm?",
            "AI has no responsibility",
            "AI is not used in the Philippines"
        ],
        correct: 1,
        explanation: "Accountability for algorithmic decisions is a key ethical question."
    },
    {
        id: 196,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy concern with automated screening of online profiles for employment?",
        options: [
            "It is always fair",
            "Employment decisions may be influenced by automated screening without human review",
            "Screening is not used",
            "Screening is always transparent"
        ],
        correct: 1,
        explanation: "Automated screening can be biased and opaque."
    },
    {
        id: 197,
        week: 2,
        category: "Privacy Threats",
        question: "What is the main privacy risk of insurance premiums adjusted based on social media activity?",
        options: [
            "It is always fair",
            "It uses personal data without transparency to determine pricing",
            "It is not used",
            "It is always transparent"
        ],
        correct: 1,
        explanation: "Using social media data for pricing is opaque and intrusive."
    },
    {
        id: 198,
        week: 2,
        category: "Privacy Threats",
        question: "What is 'weak enforcement' as a vulnerability factor?",
        options: [
            "The NPC has unlimited resources",
            "While the NPC is active, resources for investigation are limited relative to the scale of violations",
            "The NPC has no power",
            "Violations are never prosecuted"
        ],
        correct: 1,
        explanation: "Enforcement resources are limited compared to the scale of violations."
    },
    {
        id: 199,
        week: 2,
        category: "Privacy Threats",
        question: "What is the key message about privacy by design?",
        options: [
            "Privacy is an afterthought",
            "Privacy should be embedded into the design and architecture of IT systems from the outset, not added as an afterthought",
            "Privacy is not important",
            "Privacy is only for lawyers"
        ],
        correct: 1,
        explanation: "Privacy by Design advocates embedding privacy from the start."
    },
    {
        id: 200,
        week: 2,
        category: "Privacy Threats",
        question: "What is the first principle of Privacy by Design?",
        options: [
            "Reactive and remedial",
            "Proactive not Reactive; Preventative not Remedial",
            "Zero-sum",
            "User-hostile"
        ],
        correct: 1,
        explanation: "The first principle is proactive and preventative."
    },

    // ============================================================
    // WEEK 3: INFORMATION SECURITY AND CYBERSECURITY (100 questions)
    // ============================================================

    // --- CIA Triad (IDs 201-230) ---
    {
        id: 201,
        week: 3,
        category: "CIA Triad",
        question: "What is the CIA Triad in information security?",
        options: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, Availability",
            "Control, Identity, Access",
            "Computer, Internet, Application"
        ],
        correct: 1,
        explanation: "Confidentiality, Integrity, and Availability form the foundation of information security."
    },
    {
        id: 202,
        week: 3,
        category: "CIA Triad",
        question: "What is confidentiality in the CIA Triad?",
        options: [
            "The property that data has not been altered",
            "The property that information is not made available to unauthorized individuals",
            "The property that systems are accessible when needed",
            "The ability to prove an action was performed"
        ],
        correct: 1,
        explanation: "Confidentiality ensures information is not disclosed to unauthorized individuals."
    },
    {
        id: 203,
        week: 3,
        category: "CIA Triad",
        question: "What is integrity in the CIA Triad?",
        options: [
            "The property that information is confidential",
            "The property that data has not been altered or destroyed in an unauthorized manner",
            "The property that systems are available when needed",
            "The ability to verify identity"
        ],
        correct: 1,
        explanation: "Integrity ensures data is not altered or destroyed without authorization."
    },
    {
        id: 204,
        week: 3,
        category: "CIA Triad",
        question: "What is availability in the CIA Triad?",
        options: [
            "The property that information is confidential",
            "The property that data has not been altered",
            "The property that information and systems are accessible and usable upon demand",
            "The ability to trace actions to individuals"
        ],
        correct: 2,
        explanation: "Availability ensures systems are accessible when needed."
    },
    {
        id: 205,
        week: 3,
        category: "CIA Triad",
        question: "When the GCash app is down during payday, which CIA principle is violated?",
        options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
        correct: 2,
        explanation: "Downtime violates availability."
    },
    {
        id: 206,
        week: 3,
        category: "CIA Triad",
        question: "When a hospital employee looks up a celebrity's medical records without authorization, which CIA principle is violated?",
        options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
        correct: 0,
        explanation: "Unauthorized access violates confidentiality."
    },
    {
        id: 207,
        week: 3,
        category: "CIA Triad",
        question: "What is an example of a technical control for confidentiality?",
        options: ["Redundancy", "Encryption", "Backups", "DDoS protection"],
        correct: 1,
        explanation: "Encryption is a technical control for confidentiality."
    },
    {
        id: 208,
        week: 3,
        category: "CIA Triad",
        question: "What is an example of a technical control for integrity?",
        options: ["Encryption", "Hashing and digital signatures", "Redundancy", "DDoS protection"],
        correct: 1,
        explanation: "Hashing and digital signatures ensure integrity."
    },
    {
        id: 209,
        week: 3,
        category: "CIA Triad",
        question: "What is an example of a technical control for availability?",
        options: ["Encryption", "Access controls", "Redundancy and failover systems", "Digital signatures"],
        correct: 2,
        explanation: "Redundancy ensures availability."
    },
    {
        id: 210,
        week: 3,
        category: "CIA Triad",
        question: "What is non-repudiation?",
        options: [
            "The ability to deny an action",
            "The ability to prove that a specific action was performed by a specific individual and cannot be denied",
            "The ability to be anonymous",
            "The ability to hide actions"
        ],
        correct: 1,
        explanation: "Non-repudiation proves actions and prevents denial."
    },
    {
        id: 211,
        week: 3,
        category: "CIA Triad",
        question: "What is authentication?",
        options: [
            "The process of determining what a user is allowed to do",
            "The process of verifying the identity of a user, system, or entity",
            "The process of tracing actions to individuals",
            "The process of encrypting data"
        ],
        correct: 1,
        explanation: "Authentication verifies identity."
    },
    {
        id: 212,
        week: 3,
        category: "CIA Triad",
        question: "What is authorization?",
        options: [
            "The process of verifying identity",
            "The process of determining what an authenticated user is allowed to do",
            "The process of tracing actions",
            "The process of encrypting data"
        ],
        correct: 1,
        explanation: "Authorization defines what actions a user can perform."
    },
    {
        id: 213,
        week: 3,
        category: "CIA Triad",
        question: "What is accountability in information security?",
        options: [
            "The ability to verify identity",
            "The ability to trace actions back to specific individuals",
            "The ability to encrypt data",
            "The ability to make systems available"
        ],
        correct: 1,
        explanation: "Accountability uses audit logs and monitoring to trace actions."
    },
    {
        id: 214,
        week: 3,
        category: "CIA Triad",
        question: "What is the balance between confidentiality and availability?",
        options: [
            "Strong encryption slows performance (availability)",
            "Encryption has no effect",
            "Availability always wins",
            "Confidentiality always wins"
        ],
        correct: 0,
        explanation: "Strong encryption can slow systems, affecting availability."
    },
    {
        id: 215,
        week: 3,
        category: "CIA Triad",
        question: "What is the balance between integrity and availability?",
        options: [
            "Integrity has no effect",
            "Extensive integrity checks can slow data processing (availability)",
            "Availability always wins",
            "Integrity always wins"
        ],
        correct: 1,
        explanation: "Integrity checks can slow processing."
    },
    {
        id: 216,
        week: 3,
        category: "CIA Triad",
        question: "Which CIA principle would a government emergency response system prioritize?",
        options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
        correct: 2,
        explanation: "Emergency systems prioritize availability over confidentiality."
    },
    {
        id: 217,
        week: 3,
        category: "CIA Triad",
        question: "Which CIA principle would a banking system prioritize?",
        options: ["Confidentiality and Integrity", "Availability only", "Non-repudiation only", "Nothing"],
        correct: 0,
        explanation: "Banking systems prioritize confidentiality and integrity."
    },
    {
        id: 218,
        week: 3,
        category: "CIA Triad",
        question: "What is data classification?",
        options: [
            "Encrypting data",
            "Labeling data according to its sensitivity and required protections",
            "Deleting data",
            "Backing up data"
        ],
        correct: 1,
        explanation: "Data classification labels data by sensitivity."
    },
    {
        id: 219,
        week: 3,
        category: "CIA Triad",
        question: "What is the need-to-know principle?",
        options: [
            "Everyone should know everything",
            "Access is limited to those who need it for their work",
            "No one should have access",
            "Only executives have access"
        ],
        correct: 1,
        explanation: "Need-to-know restricts access to only those who require it."
    },
    {
        id: 220,
        week: 3,
        category: "CIA Triad",
        question: "What is a checksum used for?",
        options: [
            "Encryption",
            "Integrity verification",
            "Access control",
            "DDoS protection"
        ],
        correct: 1,
        explanation: "Checksums verify data integrity."
    },
    {
        id: 221,
        week: 3,
        category: "CIA Triad",
        question: "What is a digital signature used for?",
        options: [
            "Confidentiality",
            "Integrity and non-repudiation",
            "Availability",
            "Encryption"
        ],
        correct: 1,
        explanation: "Digital signatures provide integrity and non-repudiation."
    },
    {
        id: 222,
        week: 3,
        category: "CIA Triad",
        question: "What is a DDoS attack?",
        options: [
            "A confidentiality attack",
            "An integrity attack",
            "An availability attack",
            "A non-repudiation attack"
        ],
        correct: 2,
        explanation: "DDoS attacks overwhelm systems, violating availability."
    },
    {
        id: 223,
        week: 3,
        category: "CIA Triad",
        question: "What is the difference between information security and cybersecurity?",
        options: [
            "They are the same",
            "Information security is broader (all data forms); cybersecurity focuses on digital systems",
            "Cybersecurity is broader",
            "There is no difference"
        ],
        correct: 1,
        explanation: "Information security covers all data; cybersecurity focuses on digital systems."
    },
    {
        id: 224,
        week: 3,
        category: "CIA Triad",
        question: "What is an example of a physical information security control?",
        options: [
            "Encryption",
            "Locking a filing cabinet containing sensitive documents",
            "Hashing",
            "Firewall"
        ],
        correct: 1,
        explanation: "Locking a filing cabinet is a physical security control."
    },
    {
        id: 225,
        week: 3,
        category: "CIA Triad",
        question: "What is an example of a cybersecurity control?",
        options: [
            "Locking a filing cabinet",
            "Encrypting a database",
            "Shredding documents",
            "Using a paper shredder"
        ],
        correct: 1,
        explanation: "Encrypting a database is a cybersecurity control."
    },
    {
        id: 226,
        week: 3,
        category: "CIA Triad",
        question: "What is the CIA Triad's role in information security?",
        options: [
            "It is a framework for balancing security priorities",
            "It is a law",
            "It is a software tool",
            "It is a company policy"
        ],
        correct: 0,
        explanation: "The CIA Triad is a framework for balancing security priorities."
    },
    {
        id: 227,
        week: 3,
        category: "CIA Triad",
        question: "What is an audit log used for?",
        options: [
            "Encryption",
            "Accountability and investigation",
            "Availability",
            "Confidentiality"
        ],
        correct: 1,
        explanation: "Audit logs enable accountability and investigation."
    },
    {
        id: 228,
        week: 3,
        category: "CIA Triad",
        question: "What is the purpose of access controls?",
        options: [
            "To encrypt data",
            "To ensure only authorized users can access resources",
            "To make systems available",
            "To provide non-repudiation"
        ],
        correct: 1,
        explanation: "Access controls restrict access to authorized users."
    },
    {
        id: 229,
        week: 3,
        category: "CIA Triad",
        question: "What is the purpose of multi-factor authentication?",
        options: [
            "To make systems slower",
            "To provide stronger identity verification",
            "To eliminate passwords",
            "To reduce costs"
        ],
        correct: 1,
        explanation: "Multi-factor authentication provides stronger identity verification."
    },
    {
        id: 230,
        week: 3,
        category: "CIA Triad",
        question: "What is the purpose of regular backups?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Non-repudiation"
        ],
        correct: 2,
        explanation: "Backups ensure data can be restored, supporting availability."
    },

    // --- RA 10175 Cybercrime Prevention Act (IDs 231-260) ---
    {
        id: 231,
        week: 3,
        category: "RA 10175",
        question: "What is the Cybercrime Prevention Act of 2012?",
        options: ["RA 10173", "RA 10175", "RA 10844", "RA 11934"],
        correct: 1,
        explanation: "RA 10175 is the Cybercrime Prevention Act of 2012."
    },
    {
        id: 232,
        week: 3,
        category: "RA 10175",
        question: "When was RA 10175 enacted?",
        options: ["August 15, 2012", "September 12, 2012", "August 24, 2016", "February 8, 2024"],
        correct: 1,
        explanation: "RA 10175 was enacted on September 12, 2012."
    },
    {
        id: 233,
        week: 3,
        category: "RA 10175",
        question: "Which of the following is an offense against the CIA of computer data under RA 10175?",
        options: ["Computer-related identity theft", "Illegal access", "Cybersex", "Unsolicited commercial communications"],
        correct: 1,
        explanation: "Illegal access is an offense against CIA."
    },
    {
        id: 234,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for illegal access under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱200,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Illegal access carries prision mayor or a fine of at least ₱200,000."
    },
    {
        id: 235,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for data interference under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱500,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Data interference carries prision mayor or fine of at least ₱500,000."
    },
    {
        id: 236,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for computer-related identity theft under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱200,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Identity theft carries prision mayor or fine of at least ₱200,000."
    },
    {
        id: 237,
        week: 3,
        category: "RA 10175",
        question: "What is cyber-squatting under RA 10175?",
        options: [
            "Hacking a website",
            "Acquiring domain names in bad faith to profit from another's trademark",
            "Sending spam emails",
            "Creating malware"
        ],
        correct: 1,
        explanation: "Cyber-squatting involves bad-faith domain name registration."
    },
    {
        id: 238,
        week: 3,
        category: "RA 10175",
        question: "What is computer-related forgery under RA 10175?",
        options: [
            "Hacking a system",
            "Unauthorized input, alteration, or deletion of computer data resulting in inauthentic data",
            "Sending spam",
            "Creating viruses"
        ],
        correct: 1,
        explanation: "Forgery involves creating inauthentic data."
    },
    {
        id: 239,
        week: 3,
        category: "RA 10175",
        question: "What is computer-related fraud under RA 10175?",
        options: [
            "Hacking a system",
            "Unauthorized input, alteration, or deletion causing damage or loss",
            "Sending spam",
            "Creating viruses"
        ],
        correct: 1,
        explanation: "Fraud involves causing damage or loss through unauthorized actions."
    },
    {
        id: 240,
        week: 3,
        category: "RA 10175",
        question: "What is the Cybercrime Investigation and Coordinating Center (CICC)?",
        options: [
            "A law enforcement agency",
            "The primary body for policy coordination, investigation support, and inter-agency collaboration in addressing cybercrime",
            "A private cybersecurity firm",
            "An international organization"
        ],
        correct: 1,
        explanation: "The CICC coordinates cybercrime policy and investigations."
    },
    {
        id: 241,
        week: 3,
        category: "RA 10175",
        question: "What is a key function of the CICC?",
        options: [
            "Arresting criminals",
            "Facilitating international cooperation",
            "Developing software",
            "Managing networks"
        ],
        correct: 1,
        explanation: "The CICC facilitates international cooperation."
    },
    {
        id: 242,
        week: 3,
        category: "RA 10175",
        question: "What is a proposed amendment to RA 10175?",
        options: [
            "Abolishing the CICC",
            "Replacing 'computer system' with 'ICT system' and adopting new terminologies",
            "Reducing penalties",
            "Removing cybercrime offenses"
        ],
        correct: 1,
        explanation: "Amendments propose updating terminology and definitions."
    },
    {
        id: 243,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for unsolicited commercial communications under RA 10175?",
        options: ["A fine of ₱100,000", "Fine of at least ₱200,000 or imprisonment of arresto mayor", "No penalty", "10 years imprisonment"],
        correct: 1,
        explanation: "Unsolicited communications carry a fine or arresto mayor."
    },
    {
        id: 244,
        week: 3,
        category: "RA 10175",
        question: "What is the key message for IT students regarding RA 10175?",
        options: [
            "IT professionals cannot be held liable",
            "You can face criminal liability for cybercrimes committed using your skills",
            "RA 10175 does not apply to IT students",
            "RA 10175 has no penalties"
        ],
        correct: 1,
        explanation: "IT professionals can face criminal liability under RA 10175."
    },
    {
        id: 245,
        week: 3,
        category: "RA 10175",
        question: "What is system interference under RA 10175?",
        options: [
            "Unauthorized access",
            "Unauthorized hindering or interruption of the functioning of a computer system",
            "Unauthorized data alteration",
            "Unauthorized distribution of devices"
        ],
        correct: 1,
        explanation: "System interference involves disrupting system functioning."
    },
    {
        id: 246,
        week: 3,
        category: "RA 10175",
        question: "What is misuse of devices under RA 10175?",
        options: [
            "Hacking a system",
            "Production, sale, or distribution of devices designed to commit cybercrimes",
            "Sending spam",
            "Creating viruses"
        ],
        correct: 1,
        explanation: "Misuse of devices involves distributing tools for cybercrime."
    },
    {
        id: 247,
        week: 3,
        category: "RA 10175",
        question: "What is cybersex under RA 10175?",
        options: [
            "Consensual sexual activity online",
            "Willful engagement, maintenance, control, or operation of any lascivious exhibition or sexual act through a computer system",
            "Sexual education online",
            "Online dating"
        ],
        correct: 1,
        explanation: "Cybersex involves lascivious acts through computer systems."
    },
    {
        id: 248,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for cyber-squatting under RA 10175?",
        options: [
            "A fine of ₱100,000",
            "Imprisonment of prision correccional or fine of at least ₱200,000",
            "No penalty",
            "10 years imprisonment"
        ],
        correct: 1,
        explanation: "Cyber-squatting carries prision correccional or fine."
    },
    {
        id: 249,
        week: 3,
        category: "RA 10175",
        question: "What is the purpose of the CICC being proposed as an Interpol-endorsed Anti-Scam Hub?",
        options: [
            "To reduce international cooperation",
            "To strengthen its capacity for international coordination against scams",
            "To abolish the CICC",
            "To create a new law"
        ],
        correct: 1,
        explanation: "The Anti-Scam Hub enhances international coordination."
    },
    {
        id: 250,
        week: 3,
        category: "RA 10175",
        question: "What is the declaration of policy under RA 10175?",
        options: [
            "To reduce internet access",
            "To protect and safeguard the integrity of computer systems and the CIA of data",
            "To abolish cybersecurity",
            "To ban computers"
        ],
        correct: 1,
        explanation: "The policy protects computer systems and data CIA."
    },
    {
        id: 251,
        week: 3,
        category: "RA 10175",
        question: "What is the key insight about RA 10175's declaration of policy?",
        options: [
            "It ignores the CIA Triad",
            "It explicitly references the CIA Triad as the foundation of cybersecurity protection",
            "It is outdated",
            "It is not enforced"
        ],
        correct: 1,
        explanation: "The law explicitly references confidentiality, integrity, and availability."
    },
    {
        id: 252,
        week: 3,
        category: "RA 10175",
        question: "What is computer-related identity theft under RA 10175?",
        options: [
            "Unauthorized access",
            "Unauthorized acquisition, use, or misuse of identifying information of another person",
            "System interference",
            "Data interference"
        ],
        correct: 1,
        explanation: "Identity theft involves misusing another's identifying information."
    },
    {
        id: 253,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for system interference under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱500,000", "A warning", "Community service"],
        correct: 1,
        explanation: "System interference carries prision mayor or fine."
    },
    {
        id: 254,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for misuse of devices under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱500,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Misuse of devices carries prision mayor or fine."
    },
    {
        id: 255,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for computer-related fraud under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱200,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Fraud carries prision mayor or fine."
    },
    {
        id: 256,
        week: 3,
        category: "RA 10175",
        question: "What is the penalty for computer-related forgery under RA 10175?",
        options: ["A fine of ₱100,000", "Imprisonment of prision mayor or fine of at least ₱200,000", "A warning", "Community service"],
        correct: 1,
        explanation: "Forgery carries prision mayor or fine."
    },
    {
        id: 257,
        week: 3,
        category: "RA 10175",
        question: "What is the key takeaway for IT students about RA 10175?",
        options: [
            "Cybercrime is not a crime",
            "Hacking, identity theft, and data interference are crimes punishable by imprisonment",
            "RA 10175 does not apply to students",
            "There are no penalties"
        ],
        correct: 1,
        explanation: "Cybercrimes are punishable by imprisonment."
    },
    {
        id: 258,
        week: 3,
        category: "RA 10175",
        question: "What is the role of the CICC in the Philippines?",
        options: [
            "To develop software",
            "To coordinate policy, support investigations, and facilitate international cooperation on cybercrime",
            "To manage networks",
            "To arrest criminals directly"
        ],
        correct: 1,
        explanation: "The CICC coordinates cybercrime efforts."
    },
    {
        id: 259,
        week: 3,
        category: "RA 10175",
        question: "What is a proposed amendment to RA 10175 regarding service providers?",
        options: [
            "To remove their authority",
            "To grant service providers categorical authority to file complaints",
            "To ban service providers",
            "To reduce their role"
        ],
        correct: 1,
        explanation: "Amendments propose granting service providers authority to file complaints."
    },
    {
        id: 260,
        week: 3,
        category: "RA 10175",
        question: "What is the main purpose of RA 10175?",
        options: [
            "To promote internet use",
            "To establish a comprehensive legal framework for the protection of national cybersecurity",
            "To ban computers",
            "To reduce telecommunications"
        ],
        correct: 1,
        explanation: "RA 10175 provides a legal framework for cybersecurity."
    },

    // --- RA 10173 Data Privacy Act (overlap but included for Week 3) (IDs 261-270) ---
    {
        id: 261,
        week: 3,
        category: "RA 10173",
        question: "What is the Data Privacy Act of 2012?",
        options: ["RA 10173", "RA 10175", "RA 10844", "RA 11934"],
        correct: 0,
        explanation: "RA 10173 is the Data Privacy Act of 2012."
    },
    {
        id: 262,
        week: 3,
        category: "RA 10173",
        question: "When was RA 10173 enacted?",
        options: ["August 15, 2012", "September 12, 2012", "August 24, 2016", "February 8, 2024"],
        correct: 0,
        explanation: "RA 10173 was enacted on August 15, 2012."
    },
    {
        id: 263,
        week: 3,
        category: "RA 10173",
        question: "What is the National Privacy Commission (NPC)?",
        options: [
            "A private auditing firm",
            "The independent regulatory body created by RA 10173",
            "A branch of the DICT",
            "A law enforcement agency"
        ],
        correct: 1,
        explanation: "The NPC administers and implements the DPA."
    },
    {
        id: 264,
        week: 3,
        category: "RA 10173",
        question: "What is a right of data subjects under the DPA?",
        options: ["Right to hack", "Right to be informed", "Right to ignore data privacy", "Right to sell data"],
        correct: 1,
        explanation: "The Right to Be Informed is a key right."
    },
    {
        id: 265,
        week: 3,
        category: "RA 10173",
        question: "What is the data minimization principle?",
        options: [
            "Collect as much data as possible",
            "Only collect data that is actually needed for a specific, stated purpose",
            "Collect data only from government sources",
            "Collect data only with encryption"
        ],
        correct: 1,
        explanation: "Data minimization means collecting only necessary data."
    },
    {
        id: 266,
        week: 3,
        category: "RA 10173",
        question: "What is the breach notification requirement under the DPA?",
        options: ["24 hours", "72 hours", "7 days", "No notification"],
        correct: 1,
        explanation: "PICs must notify within 72 hours."
    },
    {
        id: 267,
        week: 3,
        category: "RA 10173",
        question: "What is sensitive personal information?",
        options: [
            "Any information that identifies an individual",
            "Information about race, health, education, religion, political affiliations",
            "Publicly available information",
            "Encrypted information"
        ],
        correct: 1,
        explanation: "Sensitive PI includes race, health, religion, etc."
    },
    {
        id: 268,
        week: 3,
        category: "RA 10173",
        question: "What is the penalty for unauthorized processing under the DPA?",
        options: ["A fine of ₱100,000", "1-3 years imprisonment and/or ₱500,000-₱2,000,000 fine", "A warning", "10 years imprisonment"],
        correct: 1,
        explanation: "Unauthorized processing carries 1-3 years imprisonment and/or a fine."
    },
    {
        id: 269,
        week: 3,
        category: "RA 10173",
        question: "What is the key message for IT students about the DPA?",
        options: [
            "The DPA does not apply to IT professionals",
            "Mishandling personal data can result in criminal liability",
            "The DPA has no penalties",
            "The DPA only applies to government agencies"
        ],
        correct: 1,
        explanation: "IT professionals can face criminal liability for mishandling data."
    },
    {
        id: 270,
        week: 3,
        category: "RA 10173",
        question: "What is the purpose of the NPC's enforcement actions?",
        options: [
            "To promote data collection",
            "To ensure compliance with the DPA and protect data subjects",
            "To reduce privacy",
            "To create more violations"
        ],
        correct: 1,
        explanation: "The NPC enforces compliance and protects data subjects."
    },

    // --- NCSP and Threat Landscape (IDs 271-300) ---
    {
        id: 271,
        week: 3,
        category: "NCSP",
        question: "What is the National Cybersecurity Plan 2023-2028?",
        options: [
            "A private sector initiative",
            "The whole-of-nation roadmap for Philippine cybersecurity, adopted through EO 58 s. 2024",
            "An international treaty",
            "A training program"
        ],
        correct: 1,
        explanation: "The NCSP is the whole-of-nation roadmap for cybersecurity."
    },
    {
        id: 272,
        week: 3,
        category: "NCSP",
        question: "What is the mission of the NCSP?",
        options: [
            "Becoming a global leader",
            "Ensuring a Trusted, Secure, and Reliable Cyberspace for every Filipino",
            "Eliminating all cybercrime",
            "Creating a cybersecurity hub"
        ],
        correct: 1,
        explanation: "The mission is to ensure a trusted, secure, and reliable cyberspace for every Filipino."
    },
    {
        id: 273,
        week: 3,
        category: "NCSP",
        question: "What is a Critical Information Infrastructure (CII)?",
        options: [
            "Any government computer system",
            "Computer systems and networks vital to national security, economy, and public health",
            "All internet-connected devices",
            "Private sector IT systems"
        ],
        correct: 1,
        explanation: "CII are systems vital to national security, economy, and public health."
    },
    {
        id: 274,
        week: 3,
        category: "NCSP",
        question: "What is the whole-of-nation approach?",
        options: [
            "Only government agencies are involved",
            "The NCSP is a roadmap for integrated development involving government, private sector, and academia",
            "Only the private sector is involved",
            "Only international organizations are involved"
        ],
        correct: 1,
        explanation: "The NCSP involves the entire nation."
    },
    {
        id: 275,
        week: 3,
        category: "NCSP",
        question: "What is Oplan CyberDome?",
        options: [
            "A cybersecurity training program",
            "A whole-of-government anti-scam program with law enforcement and telcos",
            "A bug bounty program",
            "A cyber range exercise"
        ],
        correct: 1,
        explanation: "Oplan CyberDome is an anti-scam program."
    },
    {
        id: 276,
        week: 3,
        category: "NCSP",
        question: "What is the Cyber Safe Ambassadors Program?",
        options: [
            "A program for hackers",
            "A program empowering students, teachers, LGU employees, and community leaders to become cybersecurity advocates",
            "A law enforcement program",
            "A private sector program"
        ],
        correct: 1,
        explanation: "The program creates cybersecurity advocates."
    },
    {
        id: 277,
        week: 3,
        category: "NCSP",
        question: "What is a bug bounty program?",
        options: [
            "A program to create bugs",
            "A program that recognizes and awards ethical hackers for contributing to cyber defense",
            "A program to distribute malware",
            "A law enforcement program"
        ],
        correct: 1,
        explanation: "Bug bounty programs reward ethical hackers."
    },
    {
        id: 278,
        week: 3,
        category: "NCSP",
        question: "What is the Philippine Cyber Security Private Sector Advisory Council (PCSPSC)?",
        options: [
            "A government agency",
            "A council that institutionalizes private sector participation in cybersecurity",
            "A law enforcement body",
            "An international organization"
        ],
        correct: 1,
        explanation: "PCSPSC enables private sector participation."
    },
    {
        id: 279,
        week: 3,
        category: "Threats",
        question: "How many phishing websites targeted the Philippines in 2025?",
        options: ["731", "3,824", "34,839", "49,431"],
        correct: 1,
        explanation: "3,824 phishing websites targeted the Philippines in 2025."
    },
    {
        id: 280,
        week: 3,
        category: "Threats",
        question: "How many phishing incidents were reported in 2025?",
        options: ["3,824", "13,602", "34,839", "49,431"],
        correct: 2,
        explanation: "34,839 phishing incidents were reported."
    },
    {
        id: 281,
        week: 3,
        category: "Threats",
        question: "How many ransomware attacks were recorded in 2025?",
        options: ["9", "17", "22", "38"],
        correct: 2,
        explanation: "22 ransomware attacks were recorded."
    },
    {
        id: 282,
        week: 3,
        category: "Threats",
        question: "Which sector is most targeted by phishing in the Philippines?",
        options: ["Education", "Government and Public Sector", "Retail", "Healthcare"],
        correct: 1,
        explanation: "Government and Public Sector is most targeted."
    },
    {
        id: 283,
        week: 3,
        category: "Threats",
        question: "What percentage of organizations experienced supply chain-related incidents?",
        options: ["50%", "75%", "100%", "25%"],
        correct: 2,
        explanation: "100% of organizations experienced supply chain vulnerabilities."
    },
    {
        id: 284,
        week: 3,
        category: "Threats",
        question: "What is smishing?",
        options: ["Email phishing", "SMS-based phishing", "Voice phishing", "Website phishing"],
        correct: 1,
        explanation: "Smishing is SMS-based phishing."
    },
    {
        id: 285,
        week: 3,
        category: "Threats",
        question: "What is the Qilin ransomware group known for?",
        options: ["Targeting education", "Being one of the most aggressive ransomware actors in the Philippines", "Targeting healthcare only", "Not active in the Philippines"],
        correct: 1,
        explanation: "Qilin is one of the most aggressive ransomware groups."
    },
    {
        id: 286,
        week: 3,
        category: "Threats",
        question: "What is the trend in phishing websites in the Philippines?",
        options: ["Decreasing", "Increased 423% from 2024 to 2025", "Stable", "No data"],
        correct: 1,
        explanation: "Phishing websites increased 423%."
    },
    {
        id: 287,
        week: 3,
        category: "Threats",
        question: "What is the main driver of cyberattacks in the Philippines according to Check Point?",
        options: ["Technical sophistication", "Scale, automation, and deception", "Lack of laws", "Too much security"],
        correct: 1,
        explanation: "Attacks are defined by scale, automation, and deception."
    },
    {
        id: 288,
        week: 3,
        category: "Threats",
        question: "What is a vulnerability factor for cybersecurity in the Philippines?",
        options: ["High cybersecurity talent", "Rapid digitalization outpacing security investments", "Strong public awareness", "No digital payments"],
        correct: 1,
        explanation: "Rapid digitalization outpaces security investments."
    },
    {
        id: 289,
        week: 3,
        category: "Threats",
        question: "What is the shortage of cybersecurity talent in the Philippines?",
        options: ["Too many cybersecurity professionals", "Many SMEs have no dedicated IT or security teams", "No shortage", "Excess of talent"],
        correct: 1,
        explanation: "Many SMEs lack dedicated IT or security teams."
    },
    {
        id: 290,
        week: 3,
        category: "Government Agencies",
        question: "Which agency implements the National Cybersecurity Plan?",
        options: ["NPC", "DICT", "PNP-ACG", "BSP"],
        correct: 1,
        explanation: "The DICT implements the NCSP."
    },
    {
        id: 291,
        week: 3,
        category: "Government Agencies",
        question: "Which agency enforces the Data Privacy Act?",
        options: ["DICT", "NPC", "PNP-ACG", "BSP"],
        correct: 1,
        explanation: "The NPC enforces the DPA."
    },
    {
        id: 292,
        week: 3,
        category: "Government Agencies",
        question: "Which agency investigates and prosecutes cybercrimes?",
        options: ["DICT", "NPC", "PNP-ACG", "BSP"],
        correct: 2,
        explanation: "The PNP-ACG investigates and prosecutes cybercrimes."
    },
    {
        id: 293,
        week: 3,
        category: "Government Agencies",
        question: "What is the mandate of the DICT?",
        options: ["To enforce privacy", "To plan, develop, and promote the national ICT development agenda", "To prosecute crimes", "To regulate banks"],
        correct: 1,
        explanation: "The DICT is the primary ICT planning and development agency."
    },
    {
        id: 294,
        week: 3,
        category: "Government Agencies",
        question: "What is the mandate of the BSP regarding cybersecurity?",
        options: ["To investigate crimes", "To regulate and supervise financial institutions for cybersecurity", "To enforce privacy", "To implement NCSP"],
        correct: 1,
        explanation: "The BSP regulates financial institutions for cybersecurity."
    },
    {
        id: 295,
        week: 3,
        category: "Best Practices",
        question: "What is Security by Design?",
        options: [
            "Adding security after the system is built",
            "Embedding security into the design and architecture of IT systems from the outset",
            "Using only open-source tools",
            "Relying on firewalls"
        ],
        correct: 1,
        explanation: "Security by Design embeds security from the outset."
    },
    {
        id: 296,
        week: 3,
        category: "Best Practices",
        question: "What is multi-factor authentication?",
        options: [
            "Using multiple usernames",
            "Requiring multiple forms of verification for access",
            "Changing passwords frequently",
            "Using biometrics only"
        ],
        correct: 1,
        explanation: "MFA requires multiple forms of verification."
    },
    {
        id: 297,
        week: 3,
        category: "Best Practices",
        question: "How many cybersecurity vacancies are there worldwide?",
        options: ["1 million", "2 million", "4 million", "10 million"],
        correct: 2,
        explanation: "There are about 4 million vacancies worldwide."
    },
    {
        id: 298,
        week: 3,
        category: "Case Studies",
        question: "How many registered voters were affected by the Comeleak?",
        options: ["15 million", "35 million", "55 million", "75 million"],
        correct: 2,
        explanation: "55 million voters were affected."
    },
    {
        id: 299,
        week: 3,
        category: "Case Studies",
        question: "Which ransomware group attacked PhilHealth in September 2023?",
        options: ["LockBit", "Medusa", "Qilin", "Cl0p"],
        correct: 1,
        explanation: "Medusa attacked PhilHealth."
    },
    {
        id: 300,
        week: 3,
        category: "Case Studies",
        question: "How many workstations were affected by the PhilHealth ransomware attack?",
        options: ["20", "50", "72", "100"],
        correct: 2,
        explanation: "72 workstations were affected."
    }
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Get 100 random questions for a student
function getStudentQuestions() {
    const shuffled = shuffleArray([...QUESTION_BANK]);
    return shuffled.slice(0, 100);
}

// Get total number of questions in the bank
function getTotalQuestions() {
    return QUESTION_BANK.length;
}