// utils/dataGenerator.js - Data generation utility
export const generateStudents = () => {
    const subjects = ['Web2 Basic', 'Web2 Advance', 'Web3 Basic', 'Web3 Advance'];
    const names = [
      'Otene Victor', 'Arroh Steven', 'Olivia Johnson', 'George James', 'Sarah Edoho',
      'Deborah peter', 'Flourish Amadi', 'Esther Malley', "Chukwuemeka Okafor", "Aisha Abubakar",
      "Olufemi Adebayo", "Ngozi Ibeabuchi", "Ibrahim Mohammed","Fatima Usman","Emeka Nwosu",
       "Hadiza Bello", "Adeola Oladipo","Chioma Okonkwo", "Sani Musa", "Aminat Yusuf","Oluwatobi Adeyemi",
        "Zara Danladi", "Kingsley Iheanacho", 'Daniel Lee', 'Elizabeth Walker',
      'Matthew Hall', 'Sofia Allen', 'David Young', 'Victoria Hernandez', 'Joseph King'
    ];
    
    // Assign multiple subjects to each student
    return names.map((name, index) => {
      // Randomly select 1-3 subjects
      const numSubjects = Math.floor(Math.random() * 3) + 1;
      const studentSubjects = [];
      
      while (studentSubjects.length < numSubjects) {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        if (!studentSubjects.includes(randomSubject)) {
          studentSubjects.push(randomSubject);
        }
      }
      
      return {
        id: index + 1,
        name,
        grade: Math.floor(Math.random() * 5) + 8, // Grades 8-12
        subjects: studentSubjects,
        attendance: Math.floor(Math.random() * 40) + 60 // 60-100%
      };
    });
  };
