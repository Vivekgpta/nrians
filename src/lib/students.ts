export type Student = {
  id: number;
  name: string;
  nickname: string;
  branch: "Team07" | "IT" | "Civil" | "Mechanical" | "Electrical";
  hometown: string;
  memory: string;
  dream: string;
  instagram: string;
  photo: string;
};

const branches: Student["branch"][] = ["Team07", "IT", "Civil", "Mechanical", "Electrical"];

const towns = ["Mumbai", "Delhi", "Maharashtra", "Pune", "Chennai", "Hyderabad", "Kolkata", "Jaipur", "Ahmedabad", "Maharashtra", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh", "Madhya Pradesh"];

const dreams = ["Software Engineer at Google", "Startup Founder", "Civil Servant", "Data Scientist", "Product Manager", "Civil Engineer", "Mechanical Designer", "Power Systems Engineer", "Researcher", "Entrepreneur"];

const memories = [
  "That all-nighter before DBMS exam",
  "Canteen samosa and chai sessions",
  "Last bench laughter in C-programming class",
  "Hostel cricket matches at midnight",
  "Fest performances on the main stage",
  "Library window seat with sunset views",
  "Rainy day in the open auditorium",
  "First industrial visit by bus",
  "Skipping lectures for movie night",
  "Group project chaos turned glory",
];


const firstNames = [
  "Prateek",
  "Aman",
  "Aman",
  "Abhishek Kumar",
  "Abhishek",
  "Aditya",
  "Abhishek",
  "Abhishek",
  "Abhay",
  "Muskan",
  "Kanak",
  "Palak",
  "Muskan",
  "Jeevesh",
  "Ashutosh",
  "Neha",
  "Tanishk",
  "Sanjana",
  "Yuganth",
  "Rahul",
  "Tushar",
  "Vinay",
  "Shail",
  "Nikhil",
  "Sheetal",
  "Shivani",
  "Suyash",
  "Devendra",
  "Nikhil",
  "Aastha",
  "Mayuri",
  "Dipti",
  "Bharti",
  "Priyanka",
  "Muskan",
  "Khushi",
  "Mansi",
  "Priya",
  "Pooja",
  "Pragya",
  "Abhishek Pratap",
  "Dheeraj",
  "Dev",
  "Mohit",
  "Vivek",
  "Udit",
  "Injamamul",
  "Ravikant",
  "Sohini",
  "Piyush",
  "Triveni",
  "Vaishnavi",
  "Vijeta"
];

const lastNames = [
  "Singh",
  "Verma",
  "Mishra",
  "Sahu",
  "Patel",
  "Dwivedi",
  "Pandey",
  "Pandey",
  "Mishra",
  "Dwivedi",
  "Gupta",
  "Chauhan",
  "Kaithlee",
  "Shukla",
  "Singh",
  "Prasad",
  "Sarahe",
  "Vishwakarma",
  "Nath",
  "Patle",
  "Lilhare",
  "Bisen",
  "Chandravanshi",
  "Gupta",
  "Bhagat",
  "",
  "Patel",
  "Mewada",
  "Mewada",
  "Mehendale",
  "Damahe",
  "Rana",
  "Bopche",
  "Sonwane",
  "Jha",
  "Pawar",
  "Sahu",
  "Patel",
  "Sahu",
  "Rahandale",
  "Singh",
  "Singh",
  "Kapoor",
  "Sanodiya",
  "Gupta",
  "Sharma",
  "Ansari",
  "Sen",
  "Jana",
  "Bahel",
  "Uikey",
  "Singh Rajpoot",
  "Pawar"
];

const nicknames = [
  "Captain", "Bro", "Ace", "Champ", "Tiger",
  "Spark", "Hero", "Maverick", "Bolt", "Queen",
  "Star", "Echo", "Pixel", "Ninja", "Boss"
];

export const students: Student[] = Array.from({ length: 32 }, (_, i) => {
  const gender = i % 2 === 0 ? "men" : "women";
  const photoId = (i * 7 + 3) % 99;
  return {
    id: i + 1,
    name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
    nickname: nicknames[i % nicknames.length],
    branch: branches[i % branches.length],
    hometown: towns[i % towns.length],
    memory: memories[i % memories.length],
    dream: dreams[i % dreams.length],
    instagram: `https://instagram.com/${firstNames[i % firstNames.length].toLowerCase()}_${i + 1}`,
    photo: `https://randomuser.me/api/portraits/${gender}/${photoId}.jpg`,
  };
});
