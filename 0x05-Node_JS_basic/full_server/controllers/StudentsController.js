import readDatabase from "../utils.js";


class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const data = await readDatabase(databasePath);
      const message = []
      message.push("This is the list of our students");
      for (const field in data) {
        if (Object.prototype.hasOwnProperty.call(data, field)) {
          let names = data[field];
          const numOfNames = names.length;
          names = names.join(', ');
          message.push(`Number of students in ${field}: ${numOfNames}. List: ${names}`);
        }      
      }
      response.status(200).send(message.join("\n"));
    } catch (error) {
      response.status(500).send(error.message);
    }    
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== "CS" && major !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
    }
    try {
      const databasePath = process.argv[2];
      const data = await readDatabase(databasePath);
      if (Object.prototype.hasOwnProperty.call(data, major)) {
        let names = data[major];
	names = names.join(', ');
	response.status(200).send(`List: ${names}`);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
}


export default StudentsController;
